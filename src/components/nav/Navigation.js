import Link from 'next/link';
import { usePathname } from 'next/navigation';
import "./Navigation.css"
export default function Navigation({sticky, screenSize,isOpen, onClick}){
    const navItems = [
        {
            linkName: "About Us",
            path: "/about-us"
        },
        {
            linkName: "Jobs",
            path: "/jobs"
        },
        {
            linkName: "News",
            path: "/news"
        },
        {
            linkName: "Contact Us",
            path: "/contact-us"
        }
    ] 
    const router = usePathname();
    console.log(router)

    return <>
       {/* <div className="top-header flex justify-end p-2 lg:px-12">
            <div className="social-media-contianer">
                <a>facebook</a>
            </div>
          </div>  */}
       <div className="hidden lg:flex lg:gap-x-12">
         {navItems.map((item, index) => <Link href={item.path} className={`text-base uppercase  ${router === item.path ? " text-blue-500" : "text-gray-700"}  font-normal leading-6`} key={index}>{item.linkName}</Link> )}
       </div>
       {isOpen && (screenSize == "mobile" || screenSize == "tablet" ) ? <div className="menu z-10">
          {navItems.map((item, index) => <Link href={item.path} className={`text-base uppercase  ${router === item.path ? " text-blue-500" : "text-gray-700"}  font-normal leading-6`} key={index} onClick={onClick}>{item.linkName}</Link> )}
        </div> : null}

     </>
}