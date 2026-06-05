//import BookForm from "@/components/BookForm"
import CoreLayout from "@/components/CoreLayout"
import TalentCat from "@/components/TalentCat"
function page() {
  return (
    <CoreLayout bannerImage="/images/booking-banner.jpg" bannerText="Bookings" bannerBrief="Reserve your favorite talent right away">
      <section className=''>
          <div className='container mx-auto py-20 px-5 lg:px-10'>
              <div className=" grid lg:grid-cols-2 gap-10">
                  <div>
                    <h2>Bringing talent to audiences around the world</h2>
                  </div>
                  <div>
                    <p>
                      Roctalents provides booking support for thousands of musicians, speakers, comedians, and other touring acts. Our team can help you identify the right booking for your event based on budget, location, and other details.
                    </p>
                    <p>
                      We also help secure new projects for cinematographers, producers, choreographers, and other Production Arts clients. Explore our rosters and submit a request below. Due to high volume, Roctalents may not be able to respond to every request.
                    </p>
                  </div>
              </div>
          </div>
      </section>
      
      <TalentCat isDark={false}  />
      <section className=''>
          <div className='container mx-auto py-20 px-5 lg:px-10'>
              <div className=" grid lg:grid-cols-2 gap-10">
                  <div>
                    <img src={`/images/clients/distrib-logos.webp`} className="w-full lg:h-[250px]"/>
                  </div>
                  <div>
                    <h3>
                      FANDOM EVENTS AND APPEARANCES
                    </h3>
                    <p>
                      Through Roctalents speakers, you can book talent for fan experiences and events. From expos to conventions to Comic-Cons, our speakers provide an exclusive, robust roster of talent for your upcoming event.
                    </p>
                    <div className="grid lg:grid-cols-12 mx-0 px-0">
                      <div className="lg:col-span-8"><p><b>Make fandom a reality by emailing speakers@roctalents.com</b></p></div>
                      <div className="ml-auto w-full mt-3"><p><span className="fas fa-arrow-right"></span></p></div>
                    </div>
                  </div>
              </div>
          </div>
      </section>

    </CoreLayout>
  )
}

export default page