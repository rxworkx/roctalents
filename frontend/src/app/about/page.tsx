import CoreLayout from "@/components/CoreLayout"
//import Link from 'next/link';
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
    <CoreLayout bannerImage="/images/about-banner.jpg" bannerText="About" bannerBrief="The future of united entertainment talents">
        <section className='bg-gray-900 text-white'>
          <div className='container mx-auto py-20 px-5 lg:px-10'>
              <div className="">
                <h6>A FEW WORDS ABOUT US</h6>
                <h3>We have become one of the best talent agencies for collaboration with industry talents</h3>
              </div>
              <div className=" grid lg:grid-cols-2 gap-10 lg:gap-20 py-20 ">
                <div className="lg:col-span-1"style={{
                  backgroundImage: `url('images/about-02-free-img.png')`,
                  backgroundSize: 'cover',
                  backgroundPosition: '',
                  height: '500px',
                  width: '100%',
                }}>
                
                </div>
                <div className="lg:col-span-1 lg:py-20">
                <h5>Vision Beyond the Ordinary</h5>
                <p>At Roctalents, we bring a fresh perspective to talent representation. We understand that every individual is unique, and we are dedicated to helping each client reveal their best self. Our mission is to support talent in finding not just roles but career-defining moments.</p>

<p>Driven by a commitment to authenticity and excellence, we cultivate meaningful relationships in entertainment, fashion, and media. With us, each client receives a thoughtful approach to representation that celebrates who they are and where they are headed.</p>
              </div>
            </div>
          </div>
        </section>
          
          <section className='text-white' style={{
        backgroundImage: `url('images/bg-15-free-img.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100%',
        width: '100%',
      }}>
          <div className='container mx-auto py-20 px-5 lg:px-10'>
            <div className="grid md:grid-cols-12 gap-10">
              <div className="md:col-span-8 md:pl-[25%]">
                <h6 className="font-light text-sm">FOLLOW US</h6>
                <ul>
                  <li className="text-xl lg:text-3xl font-semibold mb-5">Facebook</li>
                  <li className="text-xl lg:text-3xl font-semibold mb-5">Instagram</li>
                  <li className="text-xl lg:text-3xl font-semibold mb-5">Twitter</li>
                  <li className="text-xl lg:text-3xl font-semibold mb-5">Telegram</li>
                </ul>
              </div>
              <div className="md:col-span-4">
              <h6 className="font-light text-sm">CONTACT</h6>
            {options.map((item,index)=>(
                <div key={index} className="flex sm:items-center flex-wrap lg:gap-10 mb-4">
                  
                  <div className="font-light">
                    
                    
                    <h5>{item.country}</h5>
                    <p>{item.address}<br/>
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