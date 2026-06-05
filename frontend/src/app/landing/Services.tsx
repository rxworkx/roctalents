const options=[
    {
        'image':'fal fa-rss',
        'title':'Connecting Talents',
         'no':'01',
        'text':'Building networks by connecting and communicating with exceptional talents and celebrities', 
     },
    {
       'image':'fal fa-bullhorn',
       'title':'Brand Marketing',
        'no':'02',
       'text':'Amplifying personal brands through innovative marketing techniques and creative campaigns', 
    },
     {
        'image':'fal fa-project-diagram',
        'title':'Project Collaboration',
         'no':'03',
        'text':'Facilitating successful collaborations between fans, talents and industry projects', 
     }
]
function Services() {
  return (
    <div>
        <section className=''>
            <div className='container mx-auto py-20 px-5 lg:px-10'>
                <div className=" grid lg:grid-cols-3 gap-10 ">
                {options.map((item,index)=>(
                    <div key={index} className="px-10 mb-3 md:text-lg box-shadow-1 rounded-lg py-10">
                        <div className="mb-3"><span className={`text-3xl ${item.image}`}></span></div>
                        <div className="mb-2"><span className="font-semibold lg:text-[1.3em]">{item.title}</span></div>
                        <div className="mb-2"><span className="text-[0.95em]">{item.no}</span></div>
                        <div className=""><hr className="my-7 bg-black" /></div>
                        <div className="my-5"><span className="">{item.text}</span></div>
                    </div>
                ))}
                </div>
            </div>
        </section>
    </div>
  )
}

export default Services