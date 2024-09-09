"use client";
import {
  ChangeEvent,
  FocusEvent,
  FormEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import loginStyle from "./login.module.scss";
import classnames from "classnames";
import { motion } from "framer-motion";
import LoginBox from "./component/LoginBox";
import { Modal, Divider, Button, Input } from "antd";
import { post } from "lib/fetch";
import { signIn } from "next-auth/react";
import { SwapOutlined } from "@ant-design/icons";

interface FormState {
  password: string;
  email: string;
}

export default function LoginModal(data: {
  open: boolean;
  className?: string;
  onClose?: () => void;
}) {
  const [formState, setFormState] = useState<FormState>({
    email: "",
    password: "",
  });
  //

  // 登录
  const login = () => {
    signIn("credentials", { ...formState });
  };

  const confirm = () => {
    if (isLogin) {
      login();
    }
  };
  const [isLogin, setIsLogin] = useState(true);

  const ref = useRef();
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
          <div className="flex flex-col items-center justify-center gap-6 pt-8">
            <div className="flex items-center  w-full">
              <h2 className="text-2xl font-bold text-black">
                {isLogin ? "登录" : "注册"}
                <Button
                  type={"text"}
                  onClick={() => setIsLogin(!isLogin)}
                  icon={<SwapOutlined />}
                >
                  <span className="sr-only">
                    {isLogin ? "Switch to Register" : "Switch to Login"}
                  </span>
                </Button>
              </h2>
            </div>
            <div className="w-full space-y-4">
              <div className="space-y-2">
                <label htmlFor="email">邮箱</label>
                <Input
                  id="email"
                  placeholder="请输入邮箱"
                  onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    setFormState({
                      email: event.target.value,
                      password: formState.password,
                    });
                  }}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="password">密码</label>
                <Input
                  id="password"
                  type="password"
                  placeholder="请输入密码"
                  onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    setFormState({
                      password: event.target.value,
                      email: formState.email,
                    });
                  }}
                />
              </div>
              {!isLogin && (
                <div className="space-y-2">
                  <label htmlFor="password">验证码</label>
                  <div>
                    <Input
                      id="password"
                      type="password"
                      placeholder="请输入验证码"
                      style={{ width: "250px" }}
                    />
                    <Button>发送验证码</Button>
                  </div>
                </div>
              )}
            </div>
            <Button className="w-full" type="primary" onClick={() => confirm()}>
              <div className=" tracking-[] ">{isLogin ? "登 录" : "注 册"}</div>
            </Button>
          </div>
          <Divider>或</Divider>
          <LoginBox />
        </section>
      </Modal>
    </>
  );
}
