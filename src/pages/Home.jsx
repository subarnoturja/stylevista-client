import { useEffect } from "react";
import AOS from "aos";
import Banner from "../components/Banner";

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
        </div>
    );
};

export default Home;