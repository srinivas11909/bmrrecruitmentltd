"use client"
import Link from "next/link";
import { usePathname } from 'next/navigation'

export default function Navigation() {
    const pathname = usePathname()

    return<>
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-[60px] items-center border-b px-5">
            <Link href={"/admin"} className="flex items-center gap-2 font-semibold">
               <span>BMR Recruitment Ltd.</span>
            </Link>
        </div>
        <div className="flex-1 overflow-auto py-2">
            <nav className="grid items-start px-4 text-sm font-medium">
                <Link href={"/admin"} className={`flex items-center gap-3 rounded-lg  px-3 py-2 text-gray-900  transition-all hover:text-gray-900  dark:text-gray-50 dark:hover:text-gray-50 ${pathname === "/admin" ? "bg-gray-100 dark:bg-gray-800" : ''}`}>Add jobs</Link>
                <Link href={"/admin/view-all-jobs"} className={`flex items-center gap-3 rounded-lg  px-3 py-2 text-gray-900  transition-all hover:text-gray-900  dark:text-gray-50 dark:hover:text-gray-50 ${pathname === "/admin/view-all-jobs" ? "bg-gray-100 dark:bg-gray-800" : ''}`}>View All jobs</Link>
            </nav>
        </div>
      </div>
    </>
}