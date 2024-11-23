import { useEffect } from "react";
import AOS from "aos";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import ContactUS from "../components/ContactUS";

const Home = () => {

  // AOS Animation
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
            <FAQ></FAQ>
            <ContactUS></ContactUS>
        </div>
    );
};

export default Home;