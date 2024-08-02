import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  [key: string]: any;
}

export default function SectionContainer({ children, ...props }: Props) {
  return (
    <div
      className={`mx-auto max-w-screen-xl px-4 sm:px-9 xl:max-w-5xl xl:px-0 ${props.className} h-full`}
    >
      {children}
    </div>
  );
}
