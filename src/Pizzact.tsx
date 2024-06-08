import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";

export const Pizzact = (): JSX.Element => {
	return (
		<BrowserRouter>
			<AppRouter />
		</BrowserRouter>
	);
};
