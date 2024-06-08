import { PizzaCardProps } from "../types";

export const PizzaCard = ({ img, name, price }: PizzaCardProps): JSX.Element => {
  return (
    <div className="shadow-lg">
      <div className="w-full h-[150px]">
        <img src={img} alt={`${name} pizza image.`} className="w-full h-full object-cover" />
      </div>
      
      <div className="p-4 flex flex-col items-center gap-y-2">
        <h2 className="text-base text-gray-800 uppercase font-semibold">{name}</h2>

        <p className="text-base text-red-600 font-normal">{price}</p>
      </div>
    </div>
  );
};
