import LoginBox from "./component/LoginBox";
import { Modal } from "antd";

export default function LoginModal(data: {
  open: boolean;
  className?: string;
  onClose?: () => void;
}) {
  return (
    <>
      <Modal
        open={data.open}
        destroyOnClose
        footer={null}
        onClose={data.onClose}
        onCancel={data.onClose}
      >
        <section>
          <h1 className="text-2xl font-bold pb-4">Login With</h1>
          <LoginBox />
        </section>
      </Modal>
    </>
  );
}
