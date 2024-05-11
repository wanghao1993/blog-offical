import Link from "next/link";

export default function SizeNav() {
  const pageList = [
    {
      title: "页面A",
      url: "form",
    },
    {
      title: "页面C",
      url: "form2",
    },
    {
      title: "页面C",
      url: "dashboarad",
    },
  ];
  return (
    <div>
      {pageList.map((item) => (
        <Link href={item.url}>{item.title}</Link>
      ))}
    </div>
  );
}
