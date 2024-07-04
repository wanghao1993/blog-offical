"use client";
import { FocusEvent, FormEvent, useEffect, useState } from "react";
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
  username: string;
}

export default function LoginModal(data: {
  open: boolean;
  className?: string;
  onClose?: () => void;
}) {
  const [activeElId, setId] = useState<string>();
  const [formState, setFormState] = useState<FormState>({
    username: "",
    password: "",
  });
  //

  // 聚焦
  const focusHandler = (el: FocusEvent<HTMLInputElement, Element>) => {
    const id = el.target.id as "username" | "password";
    setId(id);
  };

  // 输入事件处理
  const inputHandler = (el: FormEvent<HTMLInputElement>) => {
    // if (activeElId) {
    //   if (activeElId === "username") {
    //     setFormState({
    //       username: el.target.,
    //       password: formState.password,
    //     });
    //   } else if (activeElId === "password") {
    //     setFormState({
    //       username: formState.username,
    //       password: el.target.value,
    //     });
    //   }
    // }
  };

  // 选中checked
  const checkedChange = (e: { target: { checked: boolean } }) => {
    setFormState({
      username: formState.username,
      password: formState.password,
    });
  };

  // 登录
  const login = (e: { preventDefault: () => void }) => {
    signIn("credentials");
  };
  const [isLogin, setIsLogin] = useState(true);
  return (
    <>
      <Modal
        open={data.open}
        destroyOnClose
        width={500}
        footer={null}
        onClose={data.onClose}
        onCancel={data.onClose}
      >
        <section>
          <div className="flex flex-col items-center justify-center gap-6 pt-8">
            <div className="flex items-center justify-between w-full">
              <h2 className="text-2xl font-bold text-black">
                {isLogin ? "登录" : "注册"}
              </h2>
              <Button
                type={"text"}
                onClick={() => setIsLogin(!isLogin)}
                icon={<SwapOutlined />}
              >
                <span className="sr-only">
                  {isLogin ? "Switch to Register" : "Switch to Login"}
                </span>
              </Button>
            </div>
            <div className="w-full space-y-4">
              <div className="space-y-2">
                <label htmlFor="username">邮箱</label>
                <Input id="username" placeholder="请输入邮箱" />
              </div>
              <div className="space-y-2">
                <label htmlFor="password">密码</label>
                <Input id="password" type="password" placeholder="请输入密码" />
              </div>
            </div>
            <Button
              className="w-full"
              type="primary"
              onClick={(e) => e.preventDefault()}
            >
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
