import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>

        <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(){
                  var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
                  var scriptLoaded = false;
                  function loadTawkScript() {
                    if (scriptLoaded) return;
                    scriptLoaded = true;
                    var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                    s1.defer=true;
                    s1.src='https://embed.tawk.to/66557418981b6c5647756ba9/1huusr06m';
                    s1.charset='UTF-8';
                    s1.setAttribute('crossorigin','*');
                    s0.parentNode.insertBefore(s1,s0);
                  }
                  if (document.readyState === 'complete') {
                    loadTawkScript();
                  } else {
                    window.addEventListener('load', loadTawkScript);
                  }
                })();
              `,
            }}
          />
        
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
