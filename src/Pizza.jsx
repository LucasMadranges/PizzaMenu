export default function Pizza() {
    const pizzaData = [
        {
            name: "Focaccia",
            ingredients: "Bread with italian olive oil and rosemary",
            price: 6,
            photoName: "src/assets/pizzas/focaccia.jpg",
            soldOut: false,
        },
        {
            name: "Pizza Margherita",
            ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
            price: 10,
            photoName: "src/assets/pizzas/margherita.jpg",
            soldOut: false,
        },
        {
            name: "Pizza Spinaci",
            ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
            price: 12,
            photoName: "src/assets/pizzas/spinaci.jpg",
            soldOut: false,
        },
        {
            name: "Pizza Funghi",
            ingredients: "Tomato, mozarella, mushrooms, and onion",
            price: 12,
            photoName: "src/assets/pizzas/funghi.jpg",
            soldOut: false,
        },
        {
            name: "Pizza Salamino",
            ingredients: "Tomato, mozarella, and pepperoni",
            price: 15,
            photoName: "src/assets/pizzas/salamino.jpg",
            soldOut: true,
        },
        {
            name: "Pizza Prosciutto",
            ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
            price: 18,
            photoName: "src/assets/pizzas/prosciutto.jpg",
            soldOut: false,
        },
    ];

    return (
        <>
            <div className="pizzas">
                {
                    pizzaData.map((pizza, index) => {
                        return (
                            <>
                                <div key={index}
                                     className="pizza">
                                    <img src={pizza.photoName}/>
                                    <div>
                                        <h3>{pizza.name}</h3>
                                        <p>{pizza.ingredients}</p>
                                        <span>{pizza.price}€</span>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}