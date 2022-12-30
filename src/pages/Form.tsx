import { useState } from "react";
import "../App.css";
const email = require("../foto/gmail.png");

export default function Alertuser() {

    const [gmail, setUsrGmail] = useState("");

    function alertusr() {
        alert(gmail);
    }

    return (
        <div className="input">
            <div>
                <img src={email} className="gmail" alt="gmail"></img>
                <h2 className="form1">Gmail</h2>
                <input type="text" value={gmail} onChange={e => setUsrGmail(e.target.value)} placeholder="Enter the correct ur email..."></input>
                <button onClick={alertusr} >Submit</button>
            </div>
        </div>
    )

}
