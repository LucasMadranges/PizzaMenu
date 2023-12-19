import {useState} from "react";

export default function Footer() {
    const [time, setTime] = useState(new Date().toLocaleTimeString("fr-FR"));

    const hour = new Date().getHours();
    console.log(hour)
    const openHours = 8;
    const closeHours = 18;
    let isOpen = false;

    setTimeout(() => {
        setTime(new Date().toLocaleTimeString("fr-FR"))
    }, 1000)

    if (hour >= openHours && hour <= closeHours) {
        isOpen = true;
    } else {
        isOpen = false;
    }

    return (
        <>
            <footer className="footer">
                {isOpen ? (
                    <div className="order">
                        <p>{time} We're open form {openHours}:00 to {closeHours}:00. Come visit us !</p>
                        <button className="btn">Order</button>
                    </div>
                ) : (
                    <div className="order">
                        <p>{time} Sorry, we're closed right now. We're opneing at {openHours}:00</p>
                    </div>
                )}
            </footer>
        </>
    )
}