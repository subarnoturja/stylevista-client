const Categories = () => {
  return (
    <div className="flex flex-col items-center justify-center mb-24" data-aos="zoom-out-up">
      <div className="flex flex-col lg:flex-row space-y-10 lg:space-x-40">
        <div className="flex lg:flex-col items-center space-x-4 ml-10 lg:space-y-4">
            <div>
                <img
              alt=""
              className="w-20 h-20 rounded-full lg:mt-10 lg:w-20 lg:h-20 lg:rounded-full ring-2 ring-offset-4 dark:bg-gray-500 dark:ring-violet-600 dark:ring-offset-gray-100"
              src="/public/category-1.jpg"
                />
            </div>
            <div>
                <p className="text-md font-semibold">Accessories</p>
            </div>
        </div>
        <div className="flex lg:flex-col items-center space-x-4 ml-10 lg:space-y-4">
            <div>
                <img
              alt=""
              className="w-20 h-20 rounded-full lg:w-20 lg:h-20 lg:rounded-full ring-2 ring-offset-4 dark:bg-gray-500 dark:ring-violet-600 dark:ring-offset-gray-100"
              src="/public/category-2.jpg"
                />
            </div>
            <div className="">
                <p className="text-md font-semibold">Dresses</p>
            </div>
        </div>
        <div className="flex lg:flex-col items-center space-x-4 ml-10 lg:space-y-4">
            <div>
                <img
              alt=""
              className="w-20 h-20 rounded-full lg:w-20 lg:h-20 lg:rounded-full ring-2 ring-offset-4 dark:bg-gray-500 dark:ring-violet-600 dark:ring-offset-gray-100"
              src="/public/category-3.jpg"
                />
            </div>
            <div className="ml-3">
                <p className="text-md font-semibold">Jewellery</p>
            </div>
        </div>
        <div className="flex lg:flex-col items-center space-x-4 ml-10 lg:space-y-4">
            <div>
                <img
              alt=""
              className="w-20 h-20 rounded-full lg:w-20 lg:h-20 lg:rounded-full ring-2 ring-offset-4 dark:bg-gray-500 dark:ring-violet-600 dark:ring-offset-gray-100"
              src="/public/category-4.jpg"
                />
            </div>
            <div className="ml-2">
                <p className="text-md font-semibold">Cosmetics</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
