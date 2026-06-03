import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Counter from "../pages/Counter/Counter";
// import Form from "../pages/Form";
// import Todo from "../pages/Todo";
// import Debounce from "../pages/Debounce";
// import Calculator from "../pages/Calculator";
// import Weather from "../pages/Weather";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/counter" element={<Counter />} />
            {/* <Route path="/form" element={<Form />} />
            <Route path="/todo" element={<Todo />} />
            <Route path="/debounce" element={<Debounce />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/weather" element={<Weather />} /> */}
        </Routes>
    );
};

export default AppRoutes;