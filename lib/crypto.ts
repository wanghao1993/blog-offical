import CryptoJS from "crypto-js";

export function encrypt(password: string) {
  return CryptoJS.AES.encrypt(
    password,
    process.env.SECRET_KEY as string
  ).toString();
}

export function decrypt(password: string) {
  return CryptoJS.AES.decrypt(
    password,
    process.env.SECRET_KEY as string
  ).toString(CryptoJS.enc.Utf8);
}
