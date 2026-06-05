function WhoWeAre() {
    const options=[
        'fa-meta','fa-x-twitter','fa-youtube','fa-behance','fa-pinterest','fa-dribbble'
    ]
  return (
    <div>
        <section className=''>
            <div className='container mx-auto'>
                <div className="grid lg:grid-cols-12 gap-2 ">
                    <div className="col-span-12 lg:col-span-7 justify-center max-lg:px-5">
                        <div className="relative w-full" style={{ paddingBottom: '56.25%', height: 0 }}>
                            <iframe
                                src="https://player.vimeo.com/video/819984881?h=e2c4592bb1&title=0&byline=0&portrait=0&muted=1&autoplay=1&autopause=0&controls=0&app_id=122963"
                                width="100%"
                                height="100%"
                                style={{ position: 'absolute', top: 0, left: 0 }}
                                frameBorder="0"
                                allow="autoplay; fullscreen"
                                allowFullScreen
                                title="Vimeo Video"
                            />
                            
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-5 py-5 px-5 lg:px-10">
                        <div>
                            <h3>Roctalents is a leading global talent and entertainment company</h3>
                        </div>
                        <div className="pt-7 md:text-lg">
                            <p>We represent artists, athletes, storytellers, and brands whose voices and vision define culture and shape our world. 
                                As a full-service global agency, we connect clients to opportunities across entertainment, media, and business
                            </p>
                        </div>
                        <div className="flex gap-3 my-3">
                            {options.map((item,index)=>(
                                <div key={index} className="bg-black text-white px-4 py-2"><span className={`fab ${item}`}></span></div>
                            ))}
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    </div>
  )
}

export default WhoWeAre