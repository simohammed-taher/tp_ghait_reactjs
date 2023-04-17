// Function
// import React from 'react'
// export default function Presentation(props) {
//     const nom = "Mohamed"
//     const prenom = "Taher"
//     return (
//         <div >
//             <h2>Salut -{nom} {prenom} </h2>
//         </div>
//     )
// }
// class
import React, { Component } from 'react'

export default class Presentation extends Component {
    constructor(props) {
        super(props)
        this.nom = 'simo';
        this.prenom = "taher"
    }
    render() {
        return (
            <div><h2>Salut ici le {this.nom} et {this.prenom} </h2></div>
        )
    }
}
