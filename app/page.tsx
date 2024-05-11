import HomeStyle from "./ui/home.module.css";
import { Button } from "antd";
export default function Home() {
  return (
    <main>
      <div className={HomeStyle.shape}>
        <Button>按钮</Button>
      </div>
    </main>
  );
}
