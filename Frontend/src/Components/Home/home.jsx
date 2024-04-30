import {About} from './Sections/About';
import {Events} from './Sections/Events';
import {RegisterSection} from './Sections/RegisterSection';
import {Testimonials} from './Sections/Testimonials';

export const Home = () => {
    return (
        <div className="Home">
            <About />
            <Events />
            <RegisterSection />
            <Testimonials />
        </div>
    );
}

export default Home;