"use client";
import { FocusEvent, FormEvent, useState } from "react";
import loginStyle from "./login.module.scss";
import classnames from "classnames";

interface FormState {
  password: string;
  username: string;
}

export default function Login() {
  const [activeElId, setId] = useState<string>();
  const [formState, setFormState] = useState<FormState>({
    username: "",
    password: "",
  });
  const focusHandler = (el: FocusEvent<HTMLInputElement, Element>) => {
    const id = el.target.id as "username" | "password";
    setId(id);
  };

  const inputHandler = (el: FormEvent<HTMLInputElement>) => {
    console.log(el);
    setFormState({
      username: id === "username" ? el.target.value : formState[id],
      password: id === "password" ? el.target.value : formState[id],
    });
    console.log(formState);
  };
  return (
    <>
      <section className="login w-full h-[100vh] flex justify-center items-center">
        <div className="w-1/2">
          <form action="" className="form">
            <div className={loginStyle.formItem}>
              <label
                htmlFor="username"
                className={classnames({
                  [loginStyle.formLabel]: true,
                  [loginStyle.formActive]: activeElId === "username",
                })}
              >
                用户名
              </label>
              <input
                type="text"
                autoComplete="username"
                id="username"
                value={formState.username}
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
                  [loginStyle.formActive]: activeElId === "password",
                })}
              >
                密码
              </label>
              <input
                type="password"
                value={formState.password}
                autoComplete="current-password"
                id="password"
                onBlur={() => setId("")}
                onFocus={(event) => focusHandler(event)}
              />
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
