import MainLayout from "@/Layouts/MainLayout";

export default function AiToolsDetail({ params }: { params: { id: string } }) {
  return <MainLayout>{params.id}</MainLayout>;
}
