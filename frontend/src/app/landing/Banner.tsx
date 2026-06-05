import Header from '@/components/Header'
import Button from '@/components/Button'
function Banner() {
  return (
    <div className="banner-cover">
        <Header />
        
        <div className="pt-[85px]">
    
        </div>
        <div className='banner-inner h-[78vh] lg:h-[87vh] container py-20 px-[5%] lg:px-[7.5%]'>
          <div className="grid grid-cols-11 px-0 mx-0">
            <div className="col-span-11 lg:col-span-7">
              <div className="mt-8">
                <div className="my-3">
                  <span className="md:text-lg font-extralight tracking-wider">THE TALENT AGENCY MADE FOR YOU</span>
                </div>
                <div className="my-5 leading-[3]">
                  <span className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black">Uniting ideas, opportunities, and talent</span>
                </div>
               
                <div className="flex mt-10 mb-5">
                  
                  <div className=''>
                    <Button url='/talents' theme='alpha'>BROWSE TALENTS</Button>
                  </div>
                  
                </div>
              </div>
            </div>
            <div className="col-span-11 lg:col-span-4">
              
            </div>
          </div>
        
        </div>
        
        
        
      </div>
  )
}

export default Banner