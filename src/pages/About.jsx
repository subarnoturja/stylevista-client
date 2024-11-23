const About = () => {
  return (
    <div data-aos="zoom-out-down" className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
            About Us
          </h1>
          <p className="font-normal text-base leading-6 text-gray-600 ">
          At Style Vista, we’re passionate about empowering individuality through fashion. Our platform curates the latest trends, timeless styles, and personalized insights to help you express your unique personality. Whether you’re exploring bold looks or classic elegance, Style Vista is your ultimate destination for inspiration and style.
          </p>
        </div>
        <div className="w-full lg:w-8/12 ">
          <img
            className="w-full h-full"
            src="https://i.ibb.co/FhgPJt8/Rectangle-116.png"
            alt="A group of People"
          />
        </div>
      </div>

      <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
            Our Story
          </h1>
          <p className="font-normal text-base leading-6 text-gray-600 ">
          Style Vista was born from a simple idea: to create a space where fashion meets individuality. What started as a passion project has grown into a vibrant platform that celebrates personal style and self-expression. Inspired by the ever-changing world of fashion, we strive to bridge the gap between trends and timelessness. Every piece, tip, and feature on Style Vista reflects our journey of bringing creativity, quality, and authenticity to the forefront. From our humble beginnings to becoming your trusted style companion, our story is about you – our community. Together, let’s continue redefining fashion, one unique style at a time.
          </p>
        </div>
        <div className="w-full lg:w-8/12 lg:pt-8">
          <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <img
                className="md:block hidden"
                src="https://i.ibb.co/FYTKDG6/Rectangle-118-2.png"
                alt="Alexa featured Img"
              />
              <img
                className="md:hidden block"
                src="https://i.ibb.co/zHjXqg4/Rectangle-118.png"
                alt="Alexa featured Img"
              />
              <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                Alexa
              </p>
            </div>
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <img
                className="md:block hidden"
                src="https://i.ibb.co/fGmxhVy/Rectangle-119.png"
                alt="Olivia featured Img"
              />
              <img
                className="md:hidden block"
                src="https://i.ibb.co/NrWKJ1M/Rectangle-119.png"
                alt="Olivia featured Img"
              />
              <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                Olivia
              </p>
            </div>
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <img
                className="md:block hidden"
                src="https://i.ibb.co/Pc6XVVC/Rectangle-120.png"
                alt="Liam featued Img"
              />
              <img
                className="md:hidden block"
                src="https://i.ibb.co/C5MMBcs/Rectangle-120.png"
                alt="Liam featued Img"
              />
              <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                Liam
              </p>
            </div>
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <img
                className="md:block hidden"
                src="https://i.ibb.co/7nSJPXQ/Rectangle-121.png"
                alt="Elijah featured img"
              />
              <img
                className="md:hidden block"
                src="https://i.ibb.co/ThZBWxH/Rectangle-121.png"
                alt="Elijah featured img"
              />
              <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                Elijah
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
