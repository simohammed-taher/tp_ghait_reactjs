import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Apppppp() {
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [afficher, setAfficher] = useState(false);
    const [password, setPassword] = useState('')
    const handleAfficher = () => {
        setAfficher(` ${nom} ${prenom}`);

    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <input type="text" className="form-control my-2" placeholder="Nom" value={nom} onChange={(e) => setNom(e.target.value.toUpperCase())} />
                    <input type="text" className="form-control my-2" placeholder="Prénom" value={prenom} onChange={(e) => setPrenom(e.target.value.toUpperCase())} />
                    <label>Entrer votre password:</label>
                    <input type="password" className="form-control my-2" value={password} onChange={(event) => setPassword(event.target.value)} />
                    <button className="btn btn-primary my-2" onClick={handleAfficher}>
                        Afficher
                    </button>
                    {afficher && <p className="alert alert-dark">{afficher}</p>}
                    {password.length < 4 ? "Password doit avoir au moins t 4caractères" : ""}

                </div>
            </div>
        </div>
    );
}

export default Apppppp;
