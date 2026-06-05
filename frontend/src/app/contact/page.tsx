import CoreLayout from "@/components/CoreLayout"
import ContactForm from "@/components/ContactForm"
const options=[
  {
    'country':'New York',
    'address':<span>405 Lexington Avenue, 22nd Floor<br />New York, NY 10174 </span>,
    'phone':'t: +1 212 277 9000  f: +1 212 277 9099',
    'address2':'65 E. 55th St.',
    'address2phone':'New York, NY 10022',
  },
  {
    'country':'London',
    'address':<span>12 Hammersmith Grove<br />London W6 7AP<br />United Kingdom </span>,
    'phone':'t: +44 20 8846 3000 f: +44 20 8846 3090',
    'address2':<span>CAA Base - For soccer inquiries only<br />1st Floor<br />167-169 Wardour Street<br />London W1F 8WP<br />United Kingdom</span>,
    'address2phone':'t: +44 (0) 20 8396 4700',
  }
]
function page() {
  return (
    <CoreLayout bannerImage="/images/contact-banner.jpg" bannerText="Contact Us" bannerBrief="We are available for inquiries">
      <ContactForm noheading="1" />
        <section className=''>
          <div className='container mx-auto py-20 px-5 lg:px-10'>
            <div className="grid lg:grid-cols-1">
              <div>
            {options.map((item,index)=>(
                <div key={index} className="flex sm:items-center flex-wrap lg:gap-10 mb-4">
                  <div className="flex md:items-center w-1/2 flex-col">
                    <h3>{item.country}</h3>
                  </div>
                  <div className="font-light">
                    <p>
                      {item.address}<br/>
                      {item.phone}
                    </p>
                    <p>
                      {item.address2}<br />
                      {item.address2phone}
                    </p>
                  </div>
                </div>
            ))}    
              </div>
            </div>
          </div>
        </section>
    </CoreLayout>
  )
}

export default page