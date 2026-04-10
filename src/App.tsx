import './App.css'
import './index.css'
import Home from './pages/Home/Home'
import { Routes , Route, Link } from 'react-router-dom'
import Expenses from './pages/Expenses/Expenses'
import About from './pages/About/About'
import Sidebar from './components/Layout/Sidebar'
import Button from './components/UI/Button'
const links = ["/","/expenses","/about"]
const names = ["Home","Expenses","About"]
function App() {
  return (
    <main className='min-h-screen flex flex-col'>
      <Sidebar>
            <nav className="flex flex-col w-full h-full">
                <ul className="flex flex-col gap-10 p-5 font-semibold justify-evenly w-full h-full">
                    {links.map((link , index) => (
                        <li key={index} className="w-full h-full flex items-center justify-center">
                            <Link to={link} className="w-full h-full flex items-center justify-center">
                            <Button text={names[index]} bgColor={"bg-slate-800"} textColor={'bg-white'} fontWeight={'font-semibold'} width={'w-full'} height={'h-1/3'} textSize={'text-2xl'}/>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
      </Sidebar>
              <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/expenses' element={<Expenses/>}></Route>
        <Route path='/about' element={<About/>}></Route>
      </Routes>
    </main>
  )
}

export default App
