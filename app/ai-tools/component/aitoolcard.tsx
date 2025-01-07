import Image from "next/image";
import { AiTypes } from "@/types/ai";

export function AIToolCard({ title, description, url }: AiTypes.AiTool) {
  return (
    <div
      title={title}
      className="flex w-full p-6 gap-2 rounded-md border dark:hover:bg-gray-800 light:bg-white dark:bg-gray-900 dark:border-gray-800 hover:shadow-lg transition-all relative light:hover:-translate-y-[2px] cursor-pointer"
    >
      <div className="relative h-10 w-10 shrink-0 flex items-start gap-4">
        <Image
          src={"/favicon.ico"}
          alt={title}
          fill
          className="rounded-lg object-cover"
        />
      </div>
      <div className="space-y-1">
        <h3 className="font-medium leading-none line-clamp-1">{title}</h3>
        <p className="text-sm text-muted-foreground line-clamp-1">
          {description}
        </p>
      </div>
    </div>
  );
}
