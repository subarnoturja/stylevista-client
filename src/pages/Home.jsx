import { useEffect } from "react";
import AOS from "aos";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import Testimonials from "../components/Testimonials";

const Home = () => {

    useEffect(() => {
        AOS.init({
          offset: 200,
          duration: 800,
          easing: "ease-in-sine",
          delay: 100,
        });
      }, []);

    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;