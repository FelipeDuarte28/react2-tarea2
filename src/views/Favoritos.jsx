import { useContext } from "react";

import "../assets/css/galeria.css";
import MyContext from "../context/MyContext";

export default function Favoritos() {

    const fotos = useContext(MyContext)

    let resultadoFiltrado = fotos.filter(
        (foto) => foto.like === true
    );

    return (

        <div className="row row-cols-1 row-cols-md-5 g-4 p-5">
            {resultadoFiltrado.map(info =>
                <div key={info.id} className="col">
                    <div className="card h-100">
                        <img src={info.source} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text">{info.description}</p>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}
