const Banner = () => {
  return (
    <section data-aos="zoom-in" className="dark:text-black">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-20 lg:flex-row lg:justify-between">
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src="/public/banner.jpg"
            alt=""
            className="object-contain rounded-2xl h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>
        <div className="flex flex-col justify-center p-4 text-center rounded-sm lg:max-w-full xl:max-w-lg lg:text-left">
          <h1 className="text-6xl font-bold leading-none sm:text-6xl">
            Discover Your Unique Style With <span className="text-violet-800">Style Vista</span>
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12">
          Explore the latest trends, timeless classics, and fashion tips all in one place.{" "}
            <br className="hidden md:inline lg:hidden" />
             At Style Vista, we bring your unique style to life with elegance and flair.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
