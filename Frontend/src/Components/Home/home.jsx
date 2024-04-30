import {About} from './Sections/About';
import {Events} from './Sections/Events';
import {RegisterSection} from './Sections/RegisterSection';
import {Testimonials} from './Sections/Testimonials';

export const Home = () => {
    return (
        <main className="mainHome">
            <About />
            <Events />
            <RegisterSection />
            <Testimonials />
        </main>
    );
}

export default Home;