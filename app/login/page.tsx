"use client";
import { FocusEvent, FormEvent, useEffect, useState } from "react";
import loginStyle from "./login.module.scss";
import classnames from "classnames";
import { motion } from "framer-motion";
import LoginBox from "./component/LoginBox";
import { post } from "lib/fetch";

interface FormState {
  password: string;
  username: string;
  rememberme: boolean;
}

export default function Login() {
  const [activeElId, setId] = useState<string>();
  const [formState, setFormState] = useState<FormState>({
    username: "",
    password: "",
    rememberme: true,
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
    if (activeElId) {
      if (activeElId === "username") {
        setFormState({
          username: el.target.value,
          password: formState.password,
          rememberme: formState.rememberme,
        });
      } else if (activeElId === "password") {
        setFormState({
          username: formState.username,
          password: el.target.value,
          rememberme: formState.rememberme,
        });
      }
    }
  };

  // 选中checked
  const checkedChange = (e: { target: { checked: boolean } }) => {
    setFormState({
      username: formState.username,
      password: formState.password,
      rememberme: e.target.checked,
    });
    localStorage.setItem("rememberme", e.target.checked.toString());
  };

  // 登录
  const login = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    post("/user", {
      ...formState,
    });
  };
  return (
    <>
      <section
        className={`login  w-full h-[100vh] flex justify-center items-center`}
      >
        <div className="w-3/4 md:w-1/3 lg:w-72 ">
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
                autoComplete="current-password webauthn"
                onBlur={() => setId("")}
                onFocus={(event) => focusHandler(event)}
                onInput={(event) => inputHandler(event)}
              />
            </div>

            <div className={loginStyle.formItem}>
              <div className="flex justify-between w-full">
                <div className="rememberme">
                  <input
                    type="checkbox"
                    name="rememberme"
                    id="rememberme"
                    checked={formState.rememberme}
                    onChange={checkedChange}
                  />
                  <label
                    htmlFor="rememberme"
                    className={classnames({
                      [loginStyle.formLabel]: true,
                      "ml-1": true,
                    })}
                  >
                    记住我
                  </label>
                </div>
                <div className={loginStyle.forgotpassword}>
                  <motion.span
                    className="cursor-pointer"
                    whileHover={{
                      color: "rgb(208 182 64)",
                    }}
                  >
                    忘记密码
                  </motion.span>
                </div>
              </div>
            </div>
            <div className={loginStyle.formItem}>
              <button className="w-full bg-cyan-800" onClick={(e) => login(e)}>
                登录
              </button>
            </div>
            <div className="border-t border-cyan-600 mb-3"></div>

            <LoginBox />
          </form>
        </div>
      </section>
    </>
  );
}
