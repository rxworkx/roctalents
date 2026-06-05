import { ReactNode } from "react";
import Header from "./Header"
import Footer from "./Footer";

interface LayoutProps{
    children:ReactNode;
}

const BasicLayout =({ children }: LayoutProps): JSX.Element => {
    return(
        <div>
            <Header fixedbar="yes"/>
             {/* Main content section */}
            <div>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default BasicLayout