import { Link } from "react-router-dom";
import { PizzaCard } from "../components";

export const Home = (): JSX.Element => {
  return (
    <main>
      <div className="mt-12 mb-24 w-full h-[500px] flex justify-center items-center gap-x-4">
        <div className="w-1/2 h-full flex flex-col items-end justify-center">
          <p className="text-[80px] text-right font-semibold ">Feel the extraordinary <span className="text-red-700">love</span> <span className="underline">for our pizzas</span></p>

          <div className="mt-8 flex justify-center items-center gap-x-2">
            <Link to="/menu" className="px-6 py-2 text-orange-600 font-semibold border border-orange-600 bg-white hover:text-white hover:bg-orange-600">View menu</Link>
          </div>
        </div>

        <div className="w-1/2 h-full">
          <img src="/images/pizza.jpg" alt="Vegetarian pizza image" className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="mb-8 mx-auto container flex justify-center items-center gap-x-4">
        <div className="w-1/5 flex flex-col items-end">
          <p className="text-[40px] text-right font-semibold">Our best sellers</p>

          <span className="text-xl text-gray-600 text-right font-normal">Your better choice</span>

          <Link to="/login" className="mt-4 px-6 py-2 text-white font-semibold bg-orange-600">Order now</Link>
        </div>

        <div className="w-4/5 grid grid-cols-5 gap-x-4">
          <PizzaCard img="/images/pizza_pepperoni.webp" name="Pepperoni" price="$23" />
          <PizzaCard img="/images/pizza_jamon_queso.webp" name="Ham & cheese" price="$23" />
          <PizzaCard img="/images/pizza_hawaiana.webp" name="Hawaiana" price="$23" />
          <PizzaCard img="/images/pizza_vegetarian.webp" name="Vegetarian" price="$23" />
          <PizzaCard img="/images/pizza_cheese.webp" name="Cheese" price="$23" />
        </div>
      </div>
    </main>
  );
};
