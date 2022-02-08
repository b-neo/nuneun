import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemScreen from "./Routes/Item";
import Home from "./Routes/Home";

export default function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="item" element={<ItemScreen />}></Route>
			</Routes>
		</BrowserRouter>
	);
}
