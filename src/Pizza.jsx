export default function Pizza({pizza}) {
    if (pizza.soldOut) {
        return (
            <>
                <li className="pizza sold-out">
                    <img src={pizza.photoName}
                         alt={pizza.name}/>
                    <div>
                        <h3>{pizza.name}</h3>
                        <p>{pizza.ingredients}</p>
                        <span>{pizza.price}€</span>
                    </div>
                </li>
            </>
        )
    } else {
        return (
            <>
                <li className="pizza">
                    <img src={pizza.photoName}
                         alt={pizza.name}/>
                    <div>
                        <h3>{pizza.name}</h3>
                        <p>{pizza.ingredients}</p>
                        <span>{pizza.price}€</span>
                    </div>
                </li>
            </>
        )
    }
}
