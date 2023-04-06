import { useContext } from "react";

import "../assets/css/galeria.css";
import MyContext from "../context/MyContext";

export default function Galeria() {

    const fotos = useContext(MyContext)

    const handleClick = (id, like) => {
        let status = null
        like ? (status = false) : (status = true)

        let foundIndex = fotos.findIndex(x => x.id === id )
        fotos[foundIndex].like = status
    }

    return (

        <div className="row row-cols-1 row-cols-md-5 g-4 p-5">
            {fotos.map(info =>
                <div key={info.id} className="col" onClick={() => handleClick(info.id, info.like)}>
                    <div className="card h-100">
                        <img src={info.source} className="card-img-top" alt="..." />



                        <div style={{position: "absolute", top: "12px", right: "12px"}}>
                            <img 
                                src={
                                    info.like ? "https://www.svgrepo.com/show/513311/heart.svg" : "https://www.svgrepo.com/show/513212/heart.svg"
                                    }
                                alt="Heart" 
                                style={{height: "30px"}}
                            />
                        </div>

                        <div className="card-body">
                            <p className="card-text">{info.description}</p>
                        </div>
                    </div>
                </div>
            )}

        </div>


    );
}
