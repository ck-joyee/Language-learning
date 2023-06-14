import About from "./About";
import Banner from "./Banner";
import Instructor from "./Instructor";
import PopularClass from "./PopularClass";

const Home = () => {
    return (
        <div>
         <Banner></Banner>
         <PopularClass></PopularClass>
         <Instructor></Instructor>
         <About></About>
        </div>
    );
};

export default Home;