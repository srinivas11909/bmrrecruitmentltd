import Image from "next/image";

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-center p-24">
    //   <p className="text-white text-lg mb-8">Something great is on the way</p>
    //   <h1 className="text-5xl text-white font-bold mb-8 animate-pulse"> Coming Soon</h1>
    // </main>
    <div className="relative min-h-screen flex flex-col justify-center items-center bg-hero bg-cover">
      {/* <img src="/images/xera.svg" alt="Themeptation" className="absolute h-96 -top-20 -right-16 lg:right-5 lg:top-10 animate-blob" />
      <img src="/images/shapes.svg" alt="hero" className="absolute w-full left-24 bottom-24 animate-blob2" /> */}
      <div className="relative z-10 py-6 space-y-16 lg:space-y-32 text-gray-900">
       <div className="text-center space-y-10">
         <h3 className="font-light text-xl uppercase tracking-wider">Coming soon</h3>
         <h1 className="text-7xl lg:text-9xl font-extrabold">We’r blowing up</h1>
         <p className="text-xl lg:text-2xl tracking-wide mx-10 lg:max-w-xl lg:mx-auto">We`re under construction. Check back for an update soon. Stay in touch!</p></div>
       </div>
    </div>
  );
}
