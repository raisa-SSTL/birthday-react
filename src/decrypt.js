import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Decrypt({onSubmit}) {

    const [showHint, setShowHint] = useState(false);
    const [inputText, setInputText] = useState("");

    // Function to handle submission
    const handleSubmit = () => {
        if (inputText.trim().toLowerCase() === "shiki") {
            onSubmit(); // Call the function if correct
        } else {
            toast.error("tough luck 🤷🏾‍♀️", {
                position: "top-right",
                autoClose: 2000, // Auto dismiss in 2 seconds
            });
        }
    };

    return(
        <div className="decrypt-container">
            <h1>Hey, Rafid</h1>
            <h1>Here's a challenge for you 😈</h1>
            <h1>Decrypt this message: </h1>
            <h1>omqju</h1>
            {/* Input Field */}
            <input 
                type="text" 
                className="decrypt-input" 
                placeholder="Enter your answer..." 
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
            />

            {/* Submit Button */}
            <button className="decrypt-button" onClick={handleSubmit}>Submit</button>
            {/* Hint Button */}
            <button className="decrypt-button" onClick={() => setShowHint(!showHint)}>Hint?</button>
            {/* Hint Message */}
            {showHint && <p className="hint-text">
                <ul>
                    <li>shift consonants backward by 2 places</li>
                    <li>exchange the vowels (E→A, I→E, O→I, U→O, A→U)</li>
                    <li>reverse the text</li>
                </ul>
            </p>}
            {/* Toast Notification */}
            <ToastContainer />
        </div>
    );
}