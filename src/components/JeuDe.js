import React, { Component } from 'react';
export default class JeuDe extends Component {
    constructor(props) {
        super(props);
        this.state = { face: null, compteur: 0, end: false };
    }

    jouer = () => {
        let faceval = Math.floor(Math.random() * 6 + 1);
        this.setState({ face: faceval, compteur: this.state.compteur + 1 });
        if (faceval === this.props.cache)
            this.setState({ end: true });
    }

    initialiser = () => {
        this.setState({ face: null, compteur: 0, end: false });
    }

    render() {
        return (
            <div>
                <img src={
                    this.state.face === null ? "images/init.png" : `images/face${this.state.face}.png`
                } alt="dice face" />
                <h1>Jeu de Dé...</h1>
                <h2>face:{this.state.face} </h2>
                <h2>nombre d'essais:{this.state.compteur}</h2>
                {this.state.end ?
                    <div>
                        <p>Bravo vous avez trouvez la face cachée.....</p>
                        <button onClick={() => this.initialiser()}>Initialiser</button>
                    </div> :
                    <button onClick={() => this.jouer()}>jouer</button>
                }
            </div>
        );
    }
}
