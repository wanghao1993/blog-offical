import { useState, useEffect } from "react";
import LoginModal from "../login/page";

export default function useLoginModal() {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    console.log(visible, "visbile");
    visible && (
      <LoginModal open={visible} onClose={() => setVisible(false)}></LoginModal>
    );
  }, [visible]);

  return [setVisible];
}
