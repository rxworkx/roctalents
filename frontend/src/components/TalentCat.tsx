"use client";
import Link from "next/link";
import { useState,useEffect } from "react";
import axios from "axios"
interface iprops{
    isDark?:boolean
}
export interface Item {
    id: number;
    name: string;
    slug: string;
    image:string;
    // Add other properties as needed
  }

function TalentCat(props:iprops){
    const svUrl=process.env.NEXT_PUBLIC_SV_URL;
    //const svUrl='http://127.0.0.1:8000';
    const bg=props.isDark ? 'bg-black':'';
    const op=props.isDark ? 'opacity-60':'';
    const [items, setItems]=useState<Item[]>([]);
  useEffect(()=>{
    async function fetchData(){
      try{
        
        const response=await axios.get<Item[]>(`${svUrl}/api/talentcat`);
        setItems(response.data);
      }catch(error){
        console.error("Error fetching data",error);
      }
    }
    fetchData();
  },[]);
    return(
        <div>
             <section className={`py-20 ${bg}`}>
            <div className='container mx-auto max-lg:px-[2.5%]'>
                <div className="grid grid-cols-12 gap-5 font-semibold">
                {items.map((item,index)=>(
                    <div key={index} className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 text-center">
                       <div className="relative ">
                            <div><Link href={`${svUrl}/talents/${item.slug}`}><img className={`rounded border border-r border-2 ${op} w-full h-[250px]`} src={`${svUrl}/storage/${item.image}`} alt="image1"/></Link></div>
                            <div className="absolute bottom-5"><text className="px-5 py-5 text-md md:text-xl font-semibold text-white uppercase">{item.name}</text></div>
                       </div>
                    </div>
                ))}
                </div>
            </div>
        </section>
        </div>
    )
}

export default TalentCat