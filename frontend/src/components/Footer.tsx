import Link from 'next/link';
const menuOptions = [
    {
        text:'Talents',
        url:'/talents',
    },
    {
        text:'Bookings',
        url:'/bookings',
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
function Footer() {
  return (
    <div>
        <section className="bg-slate-50 text-black py-20">
            <div className="container mx-auto px-5 lg:px-[5%]">
                <div className="grid lg:grid-cols-12">
                    <div className="md:col-span-6">
                        <div>
                            <div className="flex">
                                <div className="pr-3 mt-2">
                                    <img className="w-[50px] h-[50px]"src="/images/roctalent-logo.jpg" alt="EP"/>
                                </div>
                                <div className="flex items-center pr-3">
                                    <span className="text-2xl lg:text-3xl font-bold">Roctalents</span>
                                </div>
                            </div>
                            <div className='lg:text-xl py-3 font-light'>
                                <span>Discover and collobarate with talents that inspire. <br />Join us in shaping the future of entertainment.</span>
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-6">
                        <ul className="max-lg:-mx-5 flex lg:text-xl font-light">
                        {menuOptions.map((item,index)=>(
                            <li key={index} className="py-1 px-5 border-r"> 
                                <Link href={item.url}>{item.text}</Link>
                            </li>
                        ))}
                        </ul>
                        <div className='pt-5 lg:px-5 font-light'>
                            <div>
                                Beverly Hills, CA
                            </div>
                            <div className='py-2 lg:text-2xl'>
                                <span className='fab fa-meta pr-5'></span>
                                <span className='fab fa-instagram pr-5'></span>
                                <span className='fab fa-x-twitter pr-5'></span>
                                <span className='fab fa-telegram pr-5'></span>
                            </div>
                            <div className='text-sm'>
                                © 2024 Roctalents, LLC, All Rights Reserved
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
            </div>

        </section>
    </div>
  )
}

export default Footer