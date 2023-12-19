import Pizza from "./Pizza.jsx";

export default function Menu() {
    let pizzaData = [
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
    const pizzaLength = pizzaData.length;

    return (
        <>
            <main className="menu">
                <h2>Our menu</h2>
                {pizzaData.length > 0 ? (
                    <>
                        <p>Authentic Italian cuisine. {pizzaLength} creative dishes to choose form. All from our stone
                            oven, all organic, all delicious</p>
                        <ul className="pizzas">
                            {
                                pizzaData.map((pizza, index) => <Pizza key={index}
                                                                       pizza={pizza}/>)
                            }
                        </ul>
                    </>
                ) : (
                    <p>We're still working on our menu. Please come back later :)</p>
                )}
            </main>
        </>
    )
}