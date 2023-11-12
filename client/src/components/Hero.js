import HeroImg from "../assets/Hero-img.jpeg";

const Hero = () => {
  return (
    <section className="bg-white dark:bg-gray-900 mt-28">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 mb-28 mt-20">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Welcome to Michelin Food restaurant chain
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Experience the digital transformation of dining at Michelin Food.
            Fill out the forms below to provide us with essential information
            about your restaurant, menu offerings, and maintenance history for a
            seamless transition to our platform.
          </p>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img
            className=" rounded-2xl"
            src={HeroImg}
            alt="hero section image"
          />
        </div>
      </div>
      <hr />
    </section>
  );
};

export default Hero;
