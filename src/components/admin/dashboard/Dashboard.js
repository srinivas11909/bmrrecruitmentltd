export default function Dashboard(props){
    return <>
       <div className="flex flex-col">
          <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40 justify-between lg:justify-end">
            {props.title}
          </header>
          <section className="flex flex-1 flex-col p-4 md:p-6">
             {props.children}
          </section>
       </div>
    </>
}