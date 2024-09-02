/* eslint-disable react/display-name */
import { coreContent } from "@/lib/contentlayer";
import type { Post } from "contentlayer/generated";
import type { MDXComponents } from "mdx/types";
import { useMDXComponent } from "next-contentlayer/hooks";
import TOCInline from "@/components/TOCInline";

interface MDXLayout {
  content: Post;
  [key: string]: unknown;
}

export const components: MDXComponents = {
  TOCInline,
};

export const MDXLayoutRenderer = ({ content, ...rest }: MDXLayout) => {
  const MDXLayout = useMDXComponent(content.body.code);
  const mainContent = coreContent(content);

  return (
    <MDXLayout
      content={mainContent}
      TOCInline={<TOCInline toc={content.toc as any} />}
      {...rest}
    />
  );
};
