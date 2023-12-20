import Pizza from "./Pizza.jsx";
import focacciaImg from "./assets/pizzas/focaccia.jpg"
import margheritaImg from "./assets/pizzas/margherita.jpg"
import spinaciImg from "./assets/pizzas/spinaci.jpg"
import funghiImg from "./assets/pizzas/funghi.jpg"
import salaminoImg from "./assets/pizzas/salamino.jpg"
import prosciuttoImg from "./assets/pizzas/prosciutto.jpg"

export default function Menu() {
    let pizzaData = [
        {
            name: "Focaccia",
            ingredients: "Bread with italian olive oil and rosemary",
            price: 6,
            photoName: focacciaImg,
            soldOut: false,
        },
        {
            name: "Pizza Margherita",
            ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
            price: 10,
            photoName: margheritaImg,
            soldOut: false,
        },
        {
            name: "Pizza Spinaci",
            ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
            price: 12,
            photoName: spinaciImg,
            soldOut: false,
        },
        {
            name: "Pizza Funghi",
            ingredients: "Tomato, mozarella, mushrooms, and onion",
            price: 12,
            photoName: funghiImg,
            soldOut: false,
        },
        {
            name: "Pizza Salamino",
            ingredients: "Tomato, mozarella, and pepperoni",
            price: 15,
            photoName: salaminoImg,
            soldOut: true,
        },
        {
            name: "Pizza Prosciutto",
            ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
            price: 18,
            photoName: prosciuttoImg,
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