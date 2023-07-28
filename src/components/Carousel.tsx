function Carousel() {
  return (



    
    <div className="container mx-auto py-8 sm:px-12 md:px-24 h-full">
      
      <div className="card border-2 rounded-lg w-fit p-2 mx-auto">
        <img
          className="aspect-video object-cover h-48 rounded-md mb-2"
          src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=481&q=80"
          alt=""
        />
        <div className="flex justify-between mb-2">
          <h1 className="text-2xl">Pizza</h1>
          <h1 className="text-2xl">$4</h1>
        </div>
        <button className="py-2 px-4 bg-violet-500 hover:bg-violet-700 w-full rounded md">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Carousel;
