import Countup from "@/components/CountUp"
const options=[
    {
        "no":1200,
        "text":"PROJECTS",
        "plus":'+'
    },
    {
        "no":2500,
        "text":"HAPPY CLIENTS",
        "plus":''
    },
    {
        "no":25,
        "text":"AWARDS RECEIVED",
        "plus":'+'
    },
    {
        "no":55,
        "text":"TEAM MEMBERS",
        "plus":''
    },
]
function Credits() {
  return (
    <div>
        <section className=''>
            <div className='container mx-auto py-20'>
                <div className="grid grid-cols-12 place-content-center font-semibold">
                {options.map((item,index)=>(
                    <div key={index} className="col-span-6 lg:col-span-3 mb-10 border-r border-l md:px-10 text-center">
                        <span className="text-lg md:text-5xl font-semibold"><Countup start={0} end={item.no} duration={2000} plus={item.plus} /></span><span className="max-sm:text-sm font-light">{item.text}</span>
                    </div>
                ))}
                    
                    

                </div>
            </div>
        </section>
    </div>
  )
}

export default Credits