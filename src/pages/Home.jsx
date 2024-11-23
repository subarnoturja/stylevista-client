import { useEffect } from "react";
import AOS from "aos";
import Banner from "../components/Banner";
import Categories from "../components/Categories";

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
        </div>
    );
};

export default Home;