import Button from "./Button"
function BookNow() {
  return (
    <div>
       <section className='bg-black text-white'>
            <div className='container px-[5%] mx-auto py-10 lg:py-20'>
                <div className="flex flex-wrap gap-5 justify-around text-xl sm:text-2xl md:text-4xl lg:text-5xl font-semibold">
              
                    <div className="">
                        <span className="">Collaborate with our talents today</span>
                    </div>
                    <div className=''>
                      <Button url='/talents' theme='alpha'>BROWSE TALENTS</Button>
                    </div>                  
                  </div>
            </div>
        </section>
    </div>
  )
}

export default BookNow