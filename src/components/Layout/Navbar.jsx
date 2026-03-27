import { Link } from "react-router-dom"
import Button from "../UI/Button"
export default function Navbar(){
    const links = ["/","/expenses","/projects","/about"]
    const names = ["Home","Expenses","Projects","About"]
    return (
        <section className="flex justify-between items-center w-full text-[#1A1A2E] shadow-lg">
            <nav className="flex flex-row w-full">
                <ul className="flex flex-row gap-10 p-5 font-semibold justify-evenly w-full">
                    {links.map((link , index) => (
                        <li key={index}>
                            <Link to={link}>
                            <Button text={names[index]} bgColor={"bg-[#F53B70]"} textColor={'bg-[#F0F0F0]'} fontWeight={'font-semibold'} width={'w-32'} height={'h-12'} textSize={'text-2xl'}/>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </section>
    )
}