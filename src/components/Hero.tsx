function Hero() {
  return (
    <div className="container mx-auto py-8 sm:px-12 md:px-24">
      <div className="lg:flex items-center justify-between">
        <div className="text text-center lg:text-left ">
          <h1 className="md:text-8xl text-6xl font-serif mb-8">Welcome to Foodie Haven</h1>
          <p className="text-neutral-500 text-2xl mb-8">
            Your One-Stop Food Ordering Destination!
          </p>
          <a href="" className="py-2 px-4 bg-violet-500 hover:bg-violet-700 rounded-lg text-2xl text-white">Explore</a>
        </div>
        <img className="aspect-square rounded-full mx-auto mt-8 lg:mt-0 lg:w-1/2" src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80" alt=""/>
      </div>
    </div>
  );
}

export default Hero;
