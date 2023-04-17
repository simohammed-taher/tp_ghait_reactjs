// function
// import React from 'react'

// export default function Voiture() {
//     const myVoiture = {
//         matricule: '19873X9',
//         marque: 'Toyota',
//         chevaux: 8
//     }
//     return (
//         <div><h1 style={{ color: 'green' }}>Information voiture</h1>
//             <h4>voiture matricule:<span style={{ color: 'red' }}>{myVoiture.matricule}</span></h4>
//             <h5>marque:{myVoiture.marque}nombre de chevaux:{myVoiture.chevaux}</h5></div>
//     )
// }

// class
import React, { Component } from "react";
export default class Voiture extends Component {
    constructor(props) {
        super(props)
        this.state = {
            myVoiture: { matricule: '19873X9', marque: 'Toyota', chevaux: 8 }
        }
    }
    render() {
        const { myVoiture } = this.state;
        return (
            <div><h1 style={{ color: 'green' }}>Information voiture</h1>
                <h4>voiture matricule:<span style={{ color: 'red' }}>{myVoiture.matricule}</span></h4>
                <h5>marque:{myVoiture.marque}nombre de chevaux:{myVoiture.chevaux}</h5></div>
        )

    }
}
