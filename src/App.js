import React from "react";
import HomePage from "./pages/home-page/home-page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<HomePage />} />
			</Routes>
		</Router>
	);
};

export default App;
