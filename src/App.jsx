import "./assets/scss/App.scss";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { Home, Search } from "./pages";
import { AppContext } from "./contexts/AppContext";
import { useState } from "react";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/">
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="*" element={<h1>Page not found</h1>} />
        </Route>
    )
);

const App = () => {
    const [category, setCategory] = useState("All");
    return (
        <AppContext.Provider value={{ category, setCategory }}>
            <RouterProvider router={router} />
        </AppContext.Provider>
    );
};

export default App;
