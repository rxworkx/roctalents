import CoreLayout from "@/components/CoreLayout"
import Button from "@/components/Button"
import ContactForm from "@/components/ContactForm"
const options=[
  {
    title:'Tour Partnerships',
    text:'Connect with fans through experiential activation and rights surrounding concert tours. ',
  },
  {
    title:'Exclusive Content',
    text:'Differentiate your content through talent collaboration and integration.',
  },
  {
    title:'Unique Promotions',
    text:'Leverage talent rights for retail, digital, and B2B promotions.',
  },
  {
    title:'Live Event Activation & Engagement',
    text:'Bring in-demand talent to a brand event to perform.',
  },
  {
    title:'VIP Experiences',
    text:'Provide hospitality experiences for consumers and clients.',
  },
  {
    title:'Social Media Campaigns',
    text:'Leverage the dominance of music talent on social media.',
  },
  {
    title:'Brand Ambassador Programs',
    text:'Create 360-degree campaigns to endorse and support your brand.',
  },
  {
    title:'Public Relations Campaigns',
    text:'Generate media stories through collaboration with top-tier talent.',
  },
  {
    title:'Corporate Performances',
    text:'Bring today’s best talent to perform at your company event.',
  },
  {
    title:'Licensing Partnerships',
    text:'Differentiate consumer products with exclusive talent licenses.',
  }
]
function page() {
  return (
    <CoreLayout bannerImage="/images/partnership-banner.jpg" bannerText="Brand Partnership" bannerBrief="Work directly with the world's best artists">
      <section className='bg-gray-900 text-white'>
          <div className='container mx-auto py-20 px-5 lg:px-10'>
              <div className="">
                  <h5>About Roctalents Patnership</h5>
                  <hr className="py-4"/>
                  <p>
                    Roctalents Brand Partnerships is a dedicated team of branding and marketing experts that works across all genres. Our mission is to service the agency’s clients by developing strategic campaigns and successful partnerships with brands from across the globe.
                  </p>
                  <p>
                    Go straight to the source and work directly with the world’s best artists. We represent more than 1,400 clients across all entertainment varieties, music, acting, production, etc. Our understanding of our clients and their audience is unparalleled, and provides partners the best experience and measurable results.
                  </p>
              </div>
              <div className='py-10'>
                <Button url='/talents' theme='alpha'>BROWSE TALENTS</Button>
              </div>
          </div>
      </section>
      <section className=''>
          <div className='container mx-auto py-20 px-5 lg:px-10'>
              <div className="flex flex-wrap bg-black w-3/4">
                <div className="w-1/3">
                  <img className=" w-full h-[22vw]" src="images/brandpartnership-1.webp" alt="image"/>
                </div>
                <div className="w-1/3">
                  <img className=" w-full h-[22vw]" src="images/brandpartnership-2.webp" alt="image"/>
                </div>
                <div className="w-1/3">
                  <img className=" w-full h-[22vw]" src="images/brandpartnership-3.webp" alt="image"/>
                </div>
                <div className="w-2/3">
                  <img className=" w-full h-[22vw]" src="images/brandpartnership-4.webp" alt="image"/>
                </div>
                <div className="w-1/3">
                  <img className=" w-full h-[22vw]" src="images/brandpartnership-5.webp" alt="image"/>
                </div>
              </div>
          </div>
      </section>
      <section className='bg-gray-900 text-white'>
          <div className='container mx-auto py-20 px-5 lg:px-10'>
              <div>
                <h5>What We Do</h5>
                <hr className="py-4"/>
              </div>
              <div className=" grid lg:grid-cols-2 gap-10">
                  <div>
                    <h2>Our artist partnership services include:</h2>
                  </div>
                  <div>
                {options.map((item,index)=>(
                    <div key={index} className="mb-4">
                      <h4>{item.title}</h4>
                      <p className="font-light">
                        {item.text}
                      </p>
                    </div>
                ))}
                    
                  </div>
              </div>
          </div>
      </section>
       
    <ContactForm />
  
      
    </CoreLayout>
  )
}

export default page