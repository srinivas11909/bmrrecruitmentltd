import "./header.css" 
export default function Headers(props){
    return <>
        <div className="container px-4">
          <header className="main-header absolute inset-x-0 top-0 z-50">
              <nav className="flex item-center justify-between p-6 lg:px-8">
                 <a href="/">
                    <span>Spark beauty</span>
                 </a>
                 <div className="flex lg:hidden">
                    <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                        <span className="sr-only">Open main menu</span>
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    <a href="/about" className="text-sm font-semibold leading-6">About us</a>
                    <a href="#" className="text-sm font-semibold leading-6">Services</a>
                    <a href="#" className="text-sm font-semibold leading-6">Contact Us</a>
                </div>
              </nav>
          </header>
        </div>
    </>
}