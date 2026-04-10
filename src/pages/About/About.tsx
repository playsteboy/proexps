export default function About() {
    return (
        <div className='flex flex-col items-center justify-center h-screen bg-linear-to-r from-purple-400 to-pink-400 text-white'>
            <section className="max-w-2xl text-center">
                <h1 className='text-4xl font-bold mb-4'>About PROEXPS</h1>
                <p className='text-lg'>PROEXPS is a personal expense management application designed to help you track and manage your finances efficiently. With PROEXPS, you can easily record your income and expenses, and gain insights into your spending habits.</p>
                <p className='text-lg mt-4'>Our goal is to provide you with a simple and intuitive platform to take control of your financial well-being. Whether you're looking to budget, save, or simply keep track of your expenses, PROEXPS has got you covered.</p>
            </section>
            <section className="max-w-2xl mt-10">
                <h1 className='text-xl font-bold mb-4'>Feat by Ranaivoson Miharintsoa Mikaiah</h1>
                <ul className='list-disc list-inside '>
                    <li className='text-lg'><a href="https://github.com/playsteboy">GitHub: playsteboy</a></li>
                    <li className='text-lg'><a href="https://www.linkedin.com/in/miharintsoa-mikaiah-ranaivoson-bbb2a7367">LinkedIn: miharintsoa-mikaiah-ranaivoson</a></li>
                </ul>
            </section>
        </div>
    );
}