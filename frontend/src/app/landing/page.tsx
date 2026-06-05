import Preloader from "./Preloader"
import Banner from "./Banner"
import Services from "./Services"
import WhoWeAre from "./WhoWeAre"
import Credits from "./Credits"
import TalentCat from "@/components/TalentCat"
import ProjectCard from "@/components/ProjectCard"
import Clients from "./Clients"
import BookNow from "@/components/BookNow"
import Footer from "@/components/Footer"

function page() {
  return (
    <div>
      <Preloader />
      <Banner />
      <Services />
      <WhoWeAre />
      <Credits />
      <TalentCat isDark={true} />
      <ProjectCard />
      <Clients />
      <BookNow />
      <div className="mt-20"></div>
      <Footer />
    </div>
    
  )
}

export default page