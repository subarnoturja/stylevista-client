import { useEffect } from "react";
import AOS from "aos";

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
            
        </div>
    );
};

export default Home;