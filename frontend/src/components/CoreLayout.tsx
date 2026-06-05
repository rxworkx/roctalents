import { ReactNode } from "react";
import Header from "./Header"
import Footer from "./Footer";


interface LayoutProps{
    children?:ReactNode;
    bannerImage:string;
    bannerText:string;
    bannerBrief:string;
}

const CoreLayout =({ children, bannerImage, bannerText, bannerBrief }: LayoutProps): JSX.Element => {
    return(
        <div>
            <Header />
            <div className='min-h-[10em] md:min-h-[27em] bg-cover bg-center bg-no-repeat text-white' style={{
                backgroundImage: `url(${bannerImage})`,
                }}
            >
                <div className="bg-black bg-opacity-35 min-h-[10em] md:min-h-[27em] w-full  py-[100px] px-[5%] lg:px-[7.5%]">
                    <div className="py-10"><span className="@apply text-6xl max-sm:font-black md:text-7xl xl:text-8xl font-black tracking-wide md:tracking-wider">{bannerText}</span></div>
                    <div className=""><h3> {bannerBrief} </h3></div>
                </div>
                
                
            </div>
             {/* Main content section */}
            <div>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default CoreLayout