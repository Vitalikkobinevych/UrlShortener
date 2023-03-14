import axios from "axios";
import React, { useState } from 'react';


function UrlShort() {
    const [loader, setLoader] = useState("false");
    const [input, setInput] = useState("");
    const [result, setResult] = useState("");
    const fetchData = async () => {
        try {
            setLoader("true")
            const res = await axios(`https://api.shrtco.de/v2/shorten?url=${input}`)
            setLoader("false")
            setResult(res.data.result.full_short_link)
        } catch (err) {
            alert(err)
        }
    }

    const handleClick = () => {
        fetchData();
        setInput("");
    }

        return (
            <div>
                <h1>Url Short</h1>
                <input
                    type="text"
                    placeholder="enter your link here"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button onClick={handleClick}>Submit</button>
                {
                    loader === "true" ? <p>Loading ...</p> : <p>{result}
                    </p>
                }
            </div >
        );
    }

export default UrlShort;