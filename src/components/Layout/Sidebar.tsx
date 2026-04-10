import React from "react";


export default function Sidebar({children}: {children: React.ReactNode}) {
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

    return (
        <nav>
            <button 
                onClick={() => setIsSidebarOpen(!isSidebarOpen)} 
                className={`fixed top-[3%] left-[3%] z-50 bg-white/20 backdrop-blur-md border border-white/30 text-gray-900 px-8 py-2 rounded-xl font-semibold shadow-lg hover:bg-white/30 transition-all cursor-pointer`}
            >
                {isSidebarOpen ? "Close" : "More"}
            </button>
            <div className={`fixed top-0 left-0 w-1/6 h-screen shadow-xl z-40 flex flex-col gap-2.5 items-center justify-between text-[#1A1A2E] border-r border-purple-500/30 bg-slate-900 transition-transform duration-300 ease-in-out 
                ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
                {children}
            </div>
        </nav>
    );
}