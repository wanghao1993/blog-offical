import dayjs from "dayjs";

export default function formatterDate(date: string) {
  return dayjs(date).format("YYYY-MM-DD HH:mm:ss");
}
