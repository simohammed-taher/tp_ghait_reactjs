// Function
// import React from "react";
// export default function Header() {
//     const titre = "Application mon premier fonctionnel composant"
//     return (
//         <div>
//             <h1>ici afficher le {titre}</h1>
//             <hr />
//         </div>
//     )
// }
// class
import React, { Component } from 'react'

export default class Header extends Component {
    constructor(props) {
        super(props)
        this.titre = "Application mon premier classe composant"
    }
    render() {
        return (
            <div>
                <h1>ici le {this.titre}</h1>
                <hr />
            </div>)
    }
}
