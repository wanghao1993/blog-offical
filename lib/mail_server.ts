import nodemailer from "nodemailer";

const config = {
  host: "smtp.qq.com",
  port: 465,
  auth: {
    // 发件人邮箱账号
    user: "2682265436@qq.com",
    //发件人邮箱的授权码 这里可以通过qq邮箱获取 并且不唯一
    pass: process.env.MAIL_KEY,
  },
};

export const transporter = nodemailer.createTransport(config);
