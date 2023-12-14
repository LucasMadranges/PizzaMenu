import {useState} from "react";

export default function Footer() {
    const [time, setTime] = useState(new Date().toLocaleTimeString("fr-FR"));
    setTimeout(() => {
        setTime(new Date().toLocaleTimeString("fr-FR"))
    }, 1000)

    const TimeRestaurant = function () {
        const hour = new Date().getHours();
        const openHours = 12;
        const closeHours = 18;

        if (hour >= openHours && hour <= closeHours) {
            return "We're currently open "
        } else {
            return "Sorry we're closed"
        }
    }

    return (
        <>
            <footer>
                <p>{time} {TimeRestaurant()}</p>
            </footer>
        </>
    )
}