import { useEffect, useState } from "react";

function Popular() {
  const [popular, setPopular] = useState([]);

  async function getData() {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/random?number=6&apiKey=c8c4a5a8779b4c4ca7407b2cc855ea89`
    );
    const data = await response.json();

    setPopular(data.recipes);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
      <div className="container mx-auto py-8 sm:px-12 md:px-24 h-full">
        <h1 className="text-4xl font-serif font-bold mb-10">Popular picks today</h1>
        
        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
        {popular.map((recipe) => {
        return (
          <div
            className="flex flex-col justify-between card border-2 rounded-lg  p-2 mx-auto"
            key={recipe.['id']}
          >
            <img
              className="aspect-video object-cover rounded-md mb-4"
              src={recipe['image']}
              alt=""
            />
            <div className="flex justify-between mb-2">
              <h1 className="text-xl font-semibold w-64 truncate ...">{recipe['title']}</h1>
              <h1 className="text-xl font-semibold mb-2">$4</h1>
            </div>
            <button className="py-2 px-4 bg-violet-500 hover:bg-violet-700 w-full rounded-md text-white font-semibold text-xl">
              Add to Cart
            </button>
          </div>
        );
      })}
        </div>
      
    </div>
  );
}

export default Popular;
