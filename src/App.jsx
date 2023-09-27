import { Route, Routes } from "react-router-dom";

import Contact from "./views/Contact";
import Error404 from "./views/Error404";
import Home from "./views/Home";
import Navigation from './components/Navigation';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

const App = () => {
    return (
        <>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="contacto" element={<Contact />} />
                <Route path="*" element={<Error404 />} />
            </Routes>
        </>
    );
};

export default App;
