import GithubSlugger from "github-slugger";
import { toString } from "mdast-util-to-string";
import { remark } from "remark";
import { visit } from "unist-util-visit";
import { VFile } from "vfile";
export type Toc = {
  value: string;
  depth: number;
  url: string;
}[];
const slugger = new GithubSlugger();
export function remarkTocHeadings() {
  return (tree: any, file: VFile) => {
    const toc: Toc = [];
    visit(tree, "heading", (node) => {
      const textContent = toString(node);
      toc.push({
        value: textContent,
        url: "#" + slugger.slug(textContent),
        depth: node.depth,
      });
    });
    file.data.toc = toc;
  };
}

export async function extractTocHeadings(markdown: string) {
  const vfile = await remark().use(remarkTocHeadings).process(markdown);
  console.log(vfile.data.toc);
  return vfile.data.toc;
}
