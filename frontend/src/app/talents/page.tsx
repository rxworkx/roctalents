"use client";
import CoreLayout from "@/components/CoreLayout"
import Link from "next/link"
import { useState,useEffect } from "react"
import axios from "axios"
import Preloader from "../landing/Preloader";

export interface Item {
  id: number;
  name: string;
  slug: string;
  // Add other properties as needed
}

function Page() {
  const [items, setItems]=useState<Item[]>([]);
  const svUrl=process.env.NEXT_PUBLIC_SV_URL;
  const [loading, setLoading]=useState(true);
  useEffect(()=>{
    async function fetchData(){
      try{
        setLoading(true);
        const response=await axios.get<Item[]>(`${svUrl}/api/talentcat`);
        setItems(response.data);
      }catch(error){
        console.error("Error fetching data",error);
      }finally{
        setLoading(false);
      }
    }
    fetchData();
  },[]);
  return (
    <CoreLayout bannerImage="/images/talents-banner.jpg" bannerText="The Talents" bannerBrief="Empowering voices across media, entertainment, and sports">
      <section className=''>
          <div className='container mx-auto py-20 px-5 lg:px-10'>
              <div className=" grid lg:grid-cols-2 gap-5 lg:gap-20">
                  <div>
                    <h2>Elevating the professional journeys of international icons</h2>
                  </div>
                  <div>
                    <p>
                    Collaborating with actors, writers, directors, musicians, authors, athletes, digital creators, and more, Roctalents leads the way in culture and entertainment. <br />With our extensive expertise, relationships, insights, and capabilities, we empower each client to fulfill their distinctive creative and business ambitions.
                    </p>
                  </div>
              </div>
          </div>
      </section>
      <section>
        <div className='container mx-auto px-5 pb-10 lg:pb-20 lg:px-10'>
          <div className="lg:pt-10">
            <div className="pb-7">
              <h4 className="uppercase">Explore our Icons</h4>
              <hr></hr>
            </div>
            {loading ? (
              <Preloader />
            ):(
            <div className="grid lg:grid-cols-3 lg:place-content-around gap-10">
              
              {items.map((item,index)=>(
                <div key={index} className="py-4 border-b rounded">
                <Link href={`${svUrl}/talents/${item.slug}`}><h6 className="m-0 uppercase font-regular tracking-widest">{item.name}</h6></Link>
              </div>
              ))}
            </div>
            )}
          </div>
        </div>
      </section>
    </CoreLayout>
  )
}

export default Page