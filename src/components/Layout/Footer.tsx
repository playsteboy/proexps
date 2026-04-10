export default function Footer({children, width , height}: {children: React.ReactNode, width: string, height: string}) {
    return <footer 
    className={`fixed bottom-0 left-0 w-full shadow-[0_-10px_15px_-3px_rgba(0,0,0,0.1)] z-25 flex flex-col justify-between ${width} ${height} text-[#1A1A2E]`}
    >
        {children}
    </footer>
}