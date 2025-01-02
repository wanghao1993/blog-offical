import LayoutCss from "./layout.module.css";
export default function Loading() {
  return (
    <div className="fixed left-1/2 top-1/2 -translate-x-1/2">
      <div className={LayoutCss.loader}></div>
    </div>
  );
}
