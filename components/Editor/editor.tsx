import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
import hljs from "highlight.js";
import emoji from "markdown-it-emoji";

import "highlight.js/styles/atom-one-light.css";
import { useImperativeHandle, useRef, useState } from "react";

const mdParser = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value;
      } catch (__) {}
    }
    return ""; // use external default escaping
  },
});

export default (props: MdEditor) => {
  const [htmlText, setHtmlText] = useState<string>("");
  const [mdText, setMdText] = useState<string>("");
  const ref = useRef();

  function handleEditorChange({ html, text }: { html: string; text: string }) {
    setHtmlText(html);
    setMdText(text);
  }
  const EditorRef = useRef(null);

  useImperativeHandle(
    ref,
    () => {
      return {
        getHtml() {
          return htmlText;
        },
        getMd() {
          return mdText;
        },
      };
    },
    [EditorRef]
  );

  return (
    <MdEditor
      ref={EditorRef}
      style={{ height: "500px" }}
      value={props.value}
      config={{
        view: {
          menu: true,
          md: true,
          html: true,
          fullScreen: true,
          hideMenu: true,
        },
        table: {
          maxRow: 5,
          maxCol: 6,
        },
        imageUrl: "https://octodex.github.com/images/minion.png",
        syncScrollMode: ["leftFollowRight", "rightFollowLeft"],
      }}
      renderHTML={(text) => mdParser.render(text)}
      onChange={handleEditorChange}
    />
  );
};
