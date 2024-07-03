"use client";
import { FocusEvent, FormEvent, useEffect, useState } from "react";
import loginStyle from "./login.module.scss";
import classnames from "classnames";
import { motion } from "framer-motion";
import LoginBox from "./component/LoginBox";
import { Modal } from "antd";
import { post } from "lib/fetch";
import { signIn } from "next-auth/react";

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

  useEffect(() => {
    // async function fetchData() {
    //   const response = await fetch("/api/username");
    //   const result = await response.json();
    //   console.log(result);
    //   //   setData(result);
    // }
    // fetchData();
  }, []);

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
  return (
    <>
      <Modal
        open={data.open}
        destroyOnClose
        onClose={data.onClose}
        onCancel={data.onClose}
      >
        <section>
          <form action="" className="form" autoComplete="off">
            <div className={loginStyle.formItem}>
              <label
                htmlFor="username"
                className={classnames({
                  [loginStyle.formLabel]: true,
                  [loginStyle.formActive]:
                    activeElId === "username" || !!formState.username,
                })}
              >
                用户名
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formState.username}
                autoComplete="username"
                onFocus={(event) => focusHandler(event)}
                onInput={(event) => inputHandler(event)}
                onBlur={() => setId("")}
              />
            </div>

            <div className={loginStyle.formItem}>
              <label
                htmlFor="password"
                className={classnames({
                  [loginStyle.formLabel]: true,
                  [loginStyle.formActive]:
                    activeElId === "password" || !!formState.password,
                })}
              >
                密码
              </label>
              <input
                type="password"
                name="password"
                value={formState.password}
                id="password"
                autoComplete="current-password"
                onBlur={() => setId("")}
                onFocus={(event) => focusHandler(event)}
                onInput={(event) => inputHandler(event)}
              />
            </div>

            <div className={(loginStyle.formItem, "text-right")}>
              <span>注册账号</span>
              <span>忘记密码</span>
            </div>

            <div className={loginStyle.formItem}>
              <button className="w-full bg-cyan-800" onClick={(e) => login(e)}>
                登录
              </button>
            </div>
            <div className="border-t border-cyan-600 mb-3"></div>

            <LoginBox />
          </form>
        </section>
      </Modal>
    </>
  );
}
