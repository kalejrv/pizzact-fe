import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Register = (): JSX.Element => {
	return (
		<main className="mx-auto container h-[calc(100vh-70px)] flex justify-center items-center">
			<div className="flex flex-col justify-center gap-y-2">
				<form className="w-[500px] p-4 flex flex-col gap-y-2 border border-gray-800 shadow-lg">
					<h1 className="text-3xl text-gray-800 font-semibold">Register</h1>

					<div className="w-full flex justify-center items-center gap-x-2">
						<label htmlFor="name" className="w-1/2 flex flex-col items-start text-gray-800">
							Name:
							<input type="text" name="name" id="name" placeholder="E.g: Kevin Reyes" className="w-full p-2 border border-gray-800 outline-none" />
						</label>

						<label htmlFor="phone" className="w-1/2 flex flex-col items-start text-gray-800">
							Phone:
							<input type="tel" name="phone" id="phone" placeholder="E.g: 87238723" className="w-full p-2 border border-gray-800 outline-none" />
						</label>
					</div>

					<label htmlFor="address" className="flex flex-col items-start text-gray-800">
						Address:
						<textarea name="address" id="address" placeholder="E.g: Ciudad Sandino casa 24, Managua." className="w-full p-2 border border-gray-800 outline-none resize-none"></textarea>
					</label>

					<div className="w-full flex justify-center items-center gap-x-2">
						<label htmlFor="email" className="w-1/2 flex flex-col items-start text-gray-800">
							E-mail:
							<input type="email" name="email" id="email" placeholder="E.g: Kevin@correo.com" className="w-full p-2 border border-gray-800 outline-none" />
						</label>

						<label htmlFor="password" className="w-1/2 flex flex-col items-start text-gray-800">
							Password:
							<input type="password" name="password" id="password" placeholder="******" className="w-full p-2 border border-gray-800 outline-none" />
						</label>
					</div>

					<button type="submit" className="mt-6 w-full py-2 flex justify-center items-center gap-x-2 text-white bg-gray-800 hover:cursor-pointer">
						Create account
						<FaUserCircle className="text-2xl" />
					</button>
				</form>

				<p className="self-end text-gray-800 ">
					Already have an account?<span> </span>
					<Link to="/auth/login" className="text-orange-600 underline">Login</Link>
				</p>
			</div>
		</main>
	);
};
