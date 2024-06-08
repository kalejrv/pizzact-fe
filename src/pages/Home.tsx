import { Link } from "react-router-dom";

export const Home = (): JSX.Element => {
  return (
    <main className="h-[calc(100vh-70px)] flex justify-center items-center bg-orange-600">
      <div className="h-full flex justify-center items-center gap-x-4">
        <div className="w-1/2 h-full flex flex-col items-end justify-center">
          <p className="text-[80px] text-white text-right font-semibold ">Feel the extraordinary <span className="underline">love for our pizzas</span></p>

          <div className="mt-8 flex justify-center items-center gap-x-2">
            <Link to="/menu" className="px-6 py-2 text-white font-semibold border border-white bg-orange-600 hover:text-orange-600 hover:bg-white">View menu</Link>

            <Link to="/auth/login" className="px-6 py-2 text-orange-600 font-semibold border border-white bg-white">Order now</Link>
          </div>
        </div>

        <div className="w-1/2 h-full">
          <img src="/images/pizza.jpg" alt="Vegetarian pizza image" className="w-full h-full object-cover" />
        </div>
      </div>
    </main>
  );
};
