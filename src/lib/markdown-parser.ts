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
        html += `<pre class="bg-accent/30 border border-border/40 p-4 rounded-lg my-6 font-mono text-xs sm:text-sm overflow-x-auto text-foreground whitespace-pre"><code class="language-${codeLanguage}">${escapeHtml(codeBlockContent.trim())}</code></pre>\n`;
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
      html += `<h4 class="text-lg font-bold text-foreground mt-8 mb-3">${parseInlineMarkdown(line.trim().substring(4))}</h4>\n`;
    } else if (line.trim().startsWith("## ")) {
      html += `<h3 class="text-xl font-bold text-foreground mt-10 mb-4 pb-2 border-b border-border/20">${parseInlineMarkdown(line.trim().substring(3))}</h3>\n`;
    } else if (line.trim().startsWith("# ")) {
      html += `<h2 class="text-2xl font-bold text-foreground mt-12 mb-6">${parseInlineMarkdown(line.trim().substring(2))}</h2>\n`;
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
  
  // Inline code `code`
  parsed = parsed.replace(/`(.*?)`/g, '<code class="bg-accent/40 border border-border/40 px-1.5 py-0.5 rounded text-cyan-400 font-mono text-xs font-medium">$1</code>');
  
  // Links [text](url)
  parsed = parsed.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-cyan-400 hover:underline hover:text-cyan-300 font-medium">$1</a>');

  return parsed;
}
