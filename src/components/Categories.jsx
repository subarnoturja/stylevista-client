const Categories = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex space-x-40">
        <div className="flex flex-col space-y-4">
            <div>
                <img
              alt=""
              className="w-20 h-20 rounded-full ring-2 ring-offset-4 dark:bg-gray-500 dark:ring-violet-600 dark:ring-offset-gray-100"
              src="/public/category-1.jpg"
                />
            </div>
            <div>
                <p className="text-md font-semibold">Accessories</p>
            </div>
        </div>
        <div className="flex flex-col space-y-4">
            <div>
                <img
              alt=""
              className="w-20 h-20 rounded-full ring-2 ring-offset-4 dark:bg-gray-500 dark:ring-violet-600 dark:ring-offset-gray-100"
              src="/public/category-1.jpg"
                />
            </div>
            <div className="ml-3">
                <p className="text-md font-semibold">Dresses</p>
            </div>
        </div>
        <div className="flex flex-col space-y-4">
            <div>
                <img
              alt=""
              className="w-20 h-20 rounded-full ring-2 ring-offset-4 dark:bg-gray-500 dark:ring-violet-600 dark:ring-offset-gray-100"
              src="/public/category-1.jpg"
                />
            </div>
            <div className="ml-3">
                <p className="text-md font-semibold">Jewellery</p>
            </div>
        </div>
        <div className="flex flex-col space-y-4">
            <div>
                <img
              alt=""
              className="w-20 h-20 rounded-full ring-2 ring-offset-4 dark:bg-gray-500 dark:ring-violet-600 dark:ring-offset-gray-100"
              src="/public/category-1.jpg"
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
