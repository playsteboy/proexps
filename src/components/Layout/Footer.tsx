export default function Footer({children}: {children: React.ReactNode}) {
    return <footer className='fixed bottom-0 left-0 w-full bg-white border-t p-4 shadow-lg z-50 flex items-center justify-center'>
        {children}
    </footer>
}