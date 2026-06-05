"use client";
import React, {useState,useEffect} from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Button from '@/components/Button'
interface iprops {
    fixedbar?:string
}

function Topbar(props:iprops) {
    const [navBackground,setNavBackground] = useState('');
	const pathname = usePathname();
	useEffect(()=>{
		if(!props.fixedbar){
			setNavBackground('bg-transparent deskNav-dark')
			setClassMenu('hidden');
			setClassBurger('block');
			setClassCancelBurger('hidden');
		}else{
			setNavBackground('bg-black deskNav-dark')
		}
	},[pathname]);
	const [classMenu,setClassMenu]=useState('hidden');
	const [classBurger,setClassBurger]=useState('block');
	const [classCancelBurger,setClassCancelBurger]=useState('hidden');
	const openMenu=()=>{
		setClassMenu('block');setClassBurger('hidden');setClassCancelBurger('block')
	}
	const closeMenu=()=>{
		setClassMenu('hidden');setClassBurger('block');setClassCancelBurger('hidden')
	}
	useEffect(()=>{if(!props.fixedbar){
		const handleScroll = () => {
			const show = window.scrollY > 20
			if(show){
				setNavBackground('bg-black deskNav-dark')
			} else {
				setNavBackground('bg-transparent deskNav-dark')
			}
		}
		document.addEventListener('scroll', handleScroll)
		return () => {
			document.removeEventListener('scroll', handleScroll)
		}
}},[]);
    const menuOptions = [
		{
			text:'Talents',
			url:'/talents',
			
		},
		{
			text:'Partnership',
			url:'/brand-partnership',
			
		},
		{
			text:'Bookings',
			url:'/bookings',
			class:'lg:hidden xl:block'
			
		},
        {
			text:'About',
			url:'/about',
		},
		{
			text:'Contact',
			url:'/contact',
		},
        
	]
  return (
    <div>
        <header className={`fixed z-10 w-full ${navBackground}`}>
            <nav className="deskNav flex px-[5%] py-3">
                <div className="flex grow">
                    <div className="pr-3 mt-2">
                        <Link href="/"><img className="w-[50px] h-[50px]"src="/images/roctalent-logo.jpg" alt="EP"/></Link>
                    </div>
                    <div className="max-sm:hidden flex items-center pr-3">
						<Link href="/"><span className="max-sm:hidden text-2xl lg:text-3xl font-extrabold">Roctalents</span></Link>
                    </div>
                </div>
                <ul className="hidden lg:flex py-4 gap-[40px] place-content-center items-center text-lg font-light text-slate-50 pr-5">
                    {menuOptions.map((item,index)=>(
                        <li key={index} className={`${item.class} hover:scale-105 transition-all hover:text-primary`}><Link href={item.url}>{item.text}</Link></li>
                    ))}

                </ul>
                <div className="flex max-lg:hidden items-center px-5 ">
                    <Button url='/bookings' theme='alpha'>BOOK NOW</Button>
                </div>
				<div className='lg:hidden pt-3'>
					<i onClick={()=>openMenu()} className={`${classBurger} fal fa-bars text-2xl cursor-pointer`}></i><i onClick={()=>closeMenu()} className={`${classCancelBurger} fal fa-xmark text-2xl cursor-pointer`}></i>
				</div>
            </nav>
			<nav id="mnav" className={`${classMenu} lg:hidden fixed z-10 w-full theme-light`}>
				<div className="px-5 bg-white text-black rounded h-[100vh] w-full theme-light">
					<ul className="border-b">
						<li className="py-5 border-b"><Link className="text-black"href="/">Home </Link></li>
					{menuOptions.map((item,index)=>(
						<li key={index} className="py-5 border-b"><Link className="text-black"href={item.url}>{item.text}</Link></li>
					))}
						<li className="py-5 border-b"><Button url='/bookings'className='bg-black text-white rounded' theme='alpha' >BOOK NOW</Button></li>
					</ul>
				</div>
			</nav>
        </header>
    </div>
  )
}

export default Topbar