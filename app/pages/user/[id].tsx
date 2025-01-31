import { useRouter } from "next/router"
import { useEffect, useState } from "react";
export function UserProfile(){
    const router = useRouter();
    const [userid, setUserID] = useState<string | undefined>();
  
    useEffect(() => {
      if (router.isReady) {
        setUserID(router.query.id as string);
      }
    }, [router.isReady, router.query.id]);
    return (
        <div>
        <h1>博客文章 ID: {userid || "加载中..."}</h1>
      </div>   
    )
}