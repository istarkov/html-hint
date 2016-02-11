import hljs from 'highlight.js';
import markdownIt from 'markdown-it';

const markdown = (() => {
  const md = markdownIt({
    highlight(str, lang) {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return hljs.highlight(lang, str, true).value;
        } catch (__) {/* */}
      }
      return (
`<div class="highlight">
  <pre>
    ${md.utils.escapeHtml(str)}
  </pre>
</div>`
      );
    },
  });

  return (src) => md.render(src);
})();

export default markdown;
