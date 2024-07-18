import { get } from "@/lib/fetch";
import { useSession } from "next-auth/react";

export function Profile() {
  const { data: session, status } = useSession();
  if (!session) {
    return <div>请先登录</div>;
  }

  const getUserProfile = () => {
    const email = session.user?.email;
  };
  return (
    <div>
      <h1>Profile</h1>
    </div>
  );
}
