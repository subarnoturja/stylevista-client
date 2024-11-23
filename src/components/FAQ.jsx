
const FAQ = () => {
  return (
    <section data-aos="zoom-out-up" className="dark:text-gray-800 mb-20">
      <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
        <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">
          How it works
        </p>
        <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 dark:divide-gray-300">
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
            What is Style Vista?
            </summary>
            <div className="px-4 pb-4">
              <p>
              Style Vista is an online platform dedicated to helping you discover and express your unique style. We offer curated fashion collections, personalized style tips, and trend insights to make fashion accessible and fun for everyone.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
            How can I find my personal style on Style Vista?
            </summary>
            <div className="px-4 pb-4">
              <p>
              We provide expert guides, style quizzes, and curated looks to help you identify your unique preferences. Our platform is designed to inspire you with ideas that suit your lifestyle and personality, making it easier than ever to define your personal style.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
            Do you offer any styling advice or tips?
            </summary>
            <div className="px-4 pb-4 space-y-2">
              <p>
              Yes! At Style Vista, we’re passionate about offering personalized style tips and advice to help you elevate your wardrobe. You can find expert recommendations, fashion guides, and trend updates on our blog and styling pages, or reach out directly for one-on-one advice.
              </p>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
