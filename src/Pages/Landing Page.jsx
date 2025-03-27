import Intro from "./Intro"
import About from "./About"
import Skills from "./Skills"
import Projects from "./Projects"
import Experiences from "./Experience"
import Footer from "./Footer"

const LandingPage = () => 
{
    return ( 
        <div id='intro' >
            <div className='lg:flex lg:justify-between lg:gap-4'>
                <header className="p-4 md:p-8 lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-16 space-y-4">
                <Intro/>
                </header>
                <div className='lg:w-[52%] p-4 md:p-8 lg:py-16'>
                <div id='about'>
                    <About/>
                </div>
                <div id='skills'>
                    <Skills/>
                </div>
                <div id="projects">
                    <Projects/>
                </div>
                <div id="experience">
                    <Experiences/>
                </div>
                <Footer/>
                </div>
            </div>
        </div>
    );
}
 
export default LandingPage;