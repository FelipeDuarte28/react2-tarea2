import "./styles.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";

import Home from "./views/Home";
import Favoritos from "./views/Favoritos";
import MyContext from "./context/MyContext";

export default function App() {
    const [fotos, setFotos] = useState([]);

    useEffect(() => {
        consultarInformacion();
    }, []);

    const consultarInformacion = async () => {
        let dataImg = []
        try {
            let res = await fetch('/fotos.json');
            let {photos} = await res.json();
            dataImg = photos.map((info) => (
                {
                    id: info.id,
                    source: info.src.tiny,
                    description: info.alt,
                    like: info.liked,
                }
            ));
            setFotos(dataImg);
        } catch (err) {
            alert(err.message);
        }

        
    }

    return (
        <div className="App">
            <MyContext.Provider value={fotos}>
                <BrowserRouter>
                    <Navbar />

                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/favoritos" element={<Favoritos />} />
                    </Routes>
                </BrowserRouter>
            </MyContext.Provider>
        </div>
    );
}
