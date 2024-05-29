"use client"
import { useRouter , usePathname} from "next/navigation";
import Headers from "./Header";
import AdminHeader from "./AdminHeader";

export default function CommonHeader() {
    const pathname = usePathname()
    const isAdminRoute = pathname.startsWith("/admin")
    return <>
       {isAdminRoute ? null : <Headers />}
    </>
}