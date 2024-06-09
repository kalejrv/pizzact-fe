import React from "react";
import ReactDOM from "react-dom/client";
import { Pizzact } from "./Pizzact.tsx";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Pizzact />
	</React.StrictMode>
);
