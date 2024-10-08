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
import { Modal, Divider, Button, Input, message } from "antd";
import { post } from "lib/fetch";
import { signIn } from "next-auth/react";
import { SwapOutlined } from "@ant-design/icons";
import { get } from "http";

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
    if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(formState.email)) {
      signIn("credentials", { ...formState });
    } else {
      message.error("请输入正确的邮箱地址");
    }
  };

  // 注册
  const [code, setCode] = useState("");

  const register = () => {
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(formState.email)) {
      message.error("请输入正确的邮箱地址");
    } else if (!code) {
      message.error("请输入验证码");
    } else {
      post("/user/register", {
        ...formState,
        code: code,
      }).then(() => {
        message.success("注册成功，请登录");
      });
    }
  };

  //
  const [loading, setLoading] = useState(false);
  const sendCode = async () => {
    if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(formState.email)) {
      setLoading(true);
      await post("/mail/send", {
        email: formState.email,
      });

      setLoading(false);
      message.success("验证码发送成功，请查收，有效期有60秒");

      let timerId = setInterval(() => {
        if (countDown === 0) {
          clearInterval(timerId);
          setCount(60);
        }
        setCount(countDown--);
      }, 1000);
    } else {
      message.error("请输入正确的邮箱地址");
    }
  };

  const confirm = () => {
    if (isLogin) {
      login();
    } else {
      register();
    }
  };
  const [isLogin, setIsLogin] = useState(true);

  let [countDown, setCount] = useState(60);
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
                  <label htmlFor="verify_code">验证码</label>
                  <div>
                    <Input
                      id="verify_code"
                      placeholder="请输入验证码"
                      style={{ width: "250px" }}
                      onChange={(e) => setCode(e.target.value)}
                    />
                    <Button
                      type="primary"
                      loading={loading}
                      disabled={countDown < 60 && countDown > 0}
                      onClick={() => sendCode()}
                    >
                      {countDown < 60 && countDown > 0
                        ? `${countDown}秒后重新发送`
                        : "发送验证码"}
                    </Button>
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
