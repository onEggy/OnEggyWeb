export function parseMarkdown(markdown: string): string {
  // Strip frontmatter first
  const cleanMd = markdown.replace(/^---\r?\n[\s\S]*?\r?\n---/, "");

  const lines = cleanMd.split("\n");
  let html = "";
  let inCodeBlock = false;
  let codeBlockContent = "";
  let codeLanguage = "";
  let inList = false;
  let inOrderedList = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Handle code blocks
    if (line.trim().startsWith("```")) {
      if (inCodeBlock) {
        // End code block
        html += `<div class="relative group my-6">
  <button 
    class="absolute right-3 top-3 opacity-0 group-hover:opacity-100 transition-opacity bg-surface-subtle border border-border text-xs px-2.5 py-1 rounded font-semibold text-muted-foreground hover:text-foreground hover:bg-card cursor-pointer select-none"
    onclick="navigator.clipboard.writeText(this.nextElementSibling.querySelector('code').innerText).then(() => { this.innerText = 'Copied!'; setTimeout(() => this.innerText = 'Copy', 2000) })"
  >
    Copy
  </button>
  <pre class="bg-accent/30 border border-border/40 p-4 rounded-lg font-mono text-xs sm:text-sm overflow-x-auto text-foreground whitespace-pre"><code class="language-${codeLanguage}">${escapeHtml(codeBlockContent.trim())}</code></pre>
</div>\n`;
        inCodeBlock = false;
        codeBlockContent = "";
        codeLanguage = "";
      } else {
        // Start code block
        inCodeBlock = true;
        codeLanguage = line.trim().replace("```", "").trim();
      }
      continue;
    }

    if (inCodeBlock) {
      codeBlockContent += line + "\n";
      continue;
    }

    // Handle tables (GitHub-style pipe tables)
    // A table starts with a header row "| a | b |" followed by a separator
    // row "| --- | --- |". We look ahead to confirm before consuming.
    if (isTableRow(line) && i + 1 < lines.length && isTableSeparator(lines[i + 1])) {
      // Close any open list before emitting a block-level element.
      if (inList) {
        html += "</ul>\n";
        inList = false;
      }
      if (inOrderedList) {
        html += "</ol>\n";
        inOrderedList = false;
      }

      const headerCells = parseTableRow(line);
      i += 2; // skip header + separator
      const bodyRows: string[][] = [];
      while (i < lines.length && isTableRow(lines[i])) {
        bodyRows.push(parseTableRow(lines[i]));
        i++;
      }
      i--; // step back so the for-loop's i++ lands on the next unconsumed line

      html += '<div class="overflow-x-auto my-6">\n';
      html += '<table class="w-full border-collapse border border-border text-sm">\n';
      html += "<thead>\n<tr>\n";
      for (const cell of headerCells) {
        html += `<th class="border border-border bg-muted text-foreground font-semibold text-left px-4 py-2">${parseInlineMarkdown(cell)}</th>\n`;
      }
      html += "</tr>\n</thead>\n";
      html += '<tbody class="divide-y divide-border">\n';
      for (const row of bodyRows) {
        html += "<tr>\n";
        for (let c = 0; c < headerCells.length; c++) {
          const cell = row[c] ?? "";
          html += `<td class="border border-border text-muted-foreground px-4 py-2">${parseInlineMarkdown(cell)}</td>\n`;
        }
        html += "</tr>\n";
      }
      html += "</tbody>\n</table>\n</div>\n";
      continue;
    }

    // Handle blockquotes (group consecutive "> " lines)
    if (line.trim().startsWith(">")) {
      if (inList) {
        html += "</ul>\n";
        inList = false;
      }
      if (inOrderedList) {
        html += "</ol>\n";
        inOrderedList = false;
      }

      const quoteLines: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith(">")) {
        // Strip leading ">" and an optional single following space.
        quoteLines.push(lines[i].trim().replace(/^>\s?/, ""));
        i++;
      }
      i--; // step back for the for-loop's i++

      // Check for Github Alert syntax
      let alertType = "";
      if (quoteLines.length > 0) {
        const firstLine = quoteLines[0].trim();
        if (firstLine.startsWith("[!NOTE]")) {
          alertType = "NOTE";
          quoteLines[0] = firstLine.replace("[!NOTE]", "").trim();
        } else if (firstLine.startsWith("[!WARNING]")) {
          alertType = "WARNING";
          quoteLines[0] = firstLine.replace("[!WARNING]", "").trim();
        } else if (firstLine.startsWith("[!TIP]")) {
          alertType = "TIP";
          quoteLines[0] = firstLine.replace("[!TIP]", "").trim();
        } else if (firstLine.startsWith("[!IMPORTANT]")) {
          alertType = "IMPORTANT";
          quoteLines[0] = firstLine.replace("[!IMPORTANT]", "").trim();
        } else if (firstLine.startsWith("[!CAUTION]")) {
          alertType = "CAUTION";
          quoteLines[0] = firstLine.replace("[!CAUTION]", "").trim();
        }
      }

      const quoteHtml = quoteLines
        .filter((q, idx) => idx > 0 || q.trim() !== "") // remove empty first line if it just had the alert tag
        .map((q) => parseInlineMarkdown(q))
        .join("<br />");

      if (alertType === "NOTE") {
        html += `<div class="bg-primary/5 border-l-4 border-primary px-4 py-3.5 rounded-r-lg my-6 text-sm">
  <p class="font-mono text-xs uppercase tracking-wider text-primary-strong font-semibold mb-1">Note</p>
  <div class="text-muted-foreground leading-relaxed">${quoteHtml}</div>
</div>\n`;
      } else if (alertType === "WARNING") {
        html += `<div class="bg-accent/5 border-l-4 border-accent px-4 py-3.5 rounded-r-lg my-6 text-sm">
  <p class="font-mono text-xs uppercase tracking-wider text-accent-strong font-semibold mb-1">Warning</p>
  <div class="text-muted-foreground leading-relaxed">${quoteHtml}</div>
</div>\n`;
      } else if (alertType === "TIP") {
        html += `<div class="bg-success/5 border-l-4 border-success px-4 py-3.5 rounded-r-lg my-6 text-sm">
  <p class="font-mono text-xs uppercase tracking-wider text-success font-semibold mb-1">Tip</p>
  <div class="text-muted-foreground leading-relaxed">${quoteHtml}</div>
</div>\n`;
      } else if (alertType === "IMPORTANT") {
        html += `<div class="bg-primary/5 border-l-4 border-primary-strong px-4 py-3.5 rounded-r-lg my-6 text-sm">
  <p class="font-mono text-xs uppercase tracking-wider text-primary-strong font-semibold mb-1">Important</p>
  <div class="text-muted-foreground leading-relaxed">${quoteHtml}</div>
</div>\n`;
      } else if (alertType === "CAUTION") {
        html += `<div class="bg-destructive/5 border-l-4 border-destructive px-4 py-3.5 rounded-r-lg my-6 text-sm">
  <p class="font-mono text-xs uppercase tracking-wider text-destructive font-semibold mb-1">Caution</p>
  <div class="text-muted-foreground leading-relaxed">${quoteHtml}</div>
</div>\n`;
      } else {
        html += `<blockquote class="border-l-4 border-primary/40 pl-4 italic text-muted-foreground my-6">${quoteHtml}</blockquote>\n`;
      }
      continue;
    }

    // Handle lists
    const isUnorderedItem = line.trim().startsWith("- ") || line.trim().startsWith("* ");
    const isOrderedItem = /^\d+\.\s+/.test(line.trim());

    if (isUnorderedItem) {
      if (!inList) {
        if (inOrderedList) {
          html += "</ol>\n";
          inOrderedList = false;
        }
        html += '<ul class="list-disc list-inside pl-4 space-y-2 text-muted-foreground my-4">\n';
        inList = true;
      }
      const itemText = line.trim().substring(2);
      html += `  <li>${parseInlineMarkdown(itemText)}</li>\n`;
      continue;
    } else if (isOrderedItem) {
      if (!inOrderedList) {
        if (inList) {
          html += "</ul>\n";
          inList = false;
        }
        html += '<ol class="list-decimal list-inside pl-4 space-y-2 text-muted-foreground my-4">\n';
        inOrderedList = true;
      }
      const match = line.trim().match(/^\d+\.\s+(.*)/);
      const itemText = match ? match[1] : line.trim();
      html += `  <li>${parseInlineMarkdown(itemText)}</li>\n`;
      continue;
    } else {
      if (inList) {
        html += "</ul>\n";
        inList = false;
      }
      if (inOrderedList) {
        html += "</ol>\n";
        inOrderedList = false;
      }
    }

    // Handle empty lines
    if (line.trim() === "") {
      continue;
    }

    // Handle Headings
    if (line.trim().startsWith("### ")) {
      const headingText = line.trim().substring(4);
      const cleanText = headingText.replace(/\*\*|\*|`/g, "");
      const id = cleanText.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
      html += `<h4 id="${id}" class="text-lg font-bold text-foreground mt-8 mb-3 scroll-mt-24">${parseInlineMarkdown(headingText)}</h4>\n`;
    } else if (line.trim().startsWith("## ")) {
      const headingText = line.trim().substring(3);
      const cleanText = headingText.replace(/\*\*|\*|`/g, "");
      const id = cleanText.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
      html += `<h3 id="${id}" class="text-xl font-bold text-foreground mt-10 mb-4 pb-2 border-b border-border/20 scroll-mt-24">${parseInlineMarkdown(headingText)}</h3>\n`;
    } else if (line.trim().startsWith("# ")) {
      const headingText = line.trim().substring(2);
      const cleanText = headingText.replace(/\*\*|\*|`/g, "");
      const id = cleanText.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
      html += `<h2 id="${id}" class="text-2xl font-bold text-foreground mt-12 mb-6 scroll-mt-24">${parseInlineMarkdown(headingText)}</h2>\n`;
    } else {
      // Default to paragraph
      html += `<p class="leading-relaxed text-muted-foreground my-4">${parseInlineMarkdown(line.trim())}</p>\n`;
    }
  }

  // Close open lists
  if (inList) {
    html += "</ul>\n";
  }
  if (inOrderedList) {
    html += "</ol>\n";
  }

  return html;
}

// A table row is a non-empty line that contains at least one pipe.
function isTableRow(line: string): boolean {
  const t = line.trim();
  return t.includes("|") && t.length > 0;
}

// A separator row looks like "| --- | :--: | ---: |" — only pipes, dashes,
// colons and whitespace, with at least one dash.
function isTableSeparator(line: string): boolean {
  const t = line.trim();
  if (!t.includes("|") || !t.includes("-")) return false;
  return /^\|?[\s:|-]+\|?$/.test(t) && /-/.test(t);
}

// Split a "| a | b |" row into trimmed cell strings, dropping the empty
// segments produced by leading/trailing pipes.
function parseTableRow(line: string): string[] {
  let t = line.trim();
  if (t.startsWith("|")) t = t.slice(1);
  if (t.endsWith("|")) t = t.slice(0, -1);
  return t.split("|").map((c) => c.trim());
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function parseInlineMarkdown(text: string): string {
  let parsed = text;
  
  // Bold **text**
  parsed = parsed.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground font-semibold">$1</strong>');
  
  // Italic *text*
  parsed = parsed.replace(/\*(.*?)\*/g, '<em class="italic">$1</em>');
  
  // Inline code `code` (text-primary-strong for AA contrast)
  parsed = parsed.replace(/`(.*?)`/g, '<code class="bg-accent/40 border border-border/40 px-1.5 py-0.5 rounded text-primary-strong font-mono text-sm font-medium">$1</code>');

  // Images ![alt](src) — MUST run before the link regex so the leading "!"
  // isn't left behind as literal text.
  parsed = parsed.replace(/!\[(.*?)\]\((.*?)\)/g, '<img src="$2" loading="lazy" alt="$1" class="rounded-lg border border-border my-6 w-full h-auto" />');

  // Links [text](url) (text-primary-strong for AA contrast)
  parsed = parsed.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-primary-strong hover:underline hover:text-primary-strong/80 font-medium">$1</a>');

  return parsed;
}
