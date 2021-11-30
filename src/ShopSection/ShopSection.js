import React from 'react'
import "./ShopSection.css"

class ShopSection extends React.Component {
    monAction = () => {
        console.log('ily a eu un clique');
    }

    render() {
        return (
            <section>
                <button onClick={this.monAction}>Ajouter au panier</button>
            </section>
        )
    }
}


export default ShopSection