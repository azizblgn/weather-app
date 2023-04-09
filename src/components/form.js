import { useState } from "react";
import axios from "axios"; 

export default function Form({ setInfo, setState }) {
    const [city, setCity] = useState("");

    const handleChange = async () => {
        const api = "YOUR_API_KEY";
        const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric&lang=tr`;
        await axios(baseURL).then(res => setInfo(res.data));
        setState(true);
        
    }

    return (
        <div>
            <h1>Hava Durumu</h1>
            <form onSubmit={(e) => {e.preventDefault(); handleChange()}}>
                <div className="form">
                    <input onChange={(e) => setCity(e.target.value)} type="text" className="inputText" placeholder="Sehir Giriniz" />
                </div>
                <div className="btnDiv">
                    <button type="submit" className="btn">Verileri Getir</button>
                </div>
            </form>
        </div>
    )
}
