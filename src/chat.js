import React, {useState, useEffect} from "react";

export default function Chat() {

    const [messages, setMessages] = useState([
        {
          id: 1,
          text: "7 continents, over 190 countries, 8 billion people around the world and I had the privilege of knowing you. I must be God's favorite. It's close to impossible to describe the impact you have on the lives of people around you, but I'll still give it a try.",
          sender: "bot",
        },
    ]);

    const [showResponses, setShowResponses] = useState(false);
    const [waitingForResponse, setWaitingForResponse] = useState(false);
    const [showNextButton, setShowNextButton] = useState(false);

      useEffect(() => {
        setTimeout(() => {
            setMessages((prev) => [...prev, { id: 2, text: "Typing...", sender: "bot" }]);
        
            setTimeout(() => {
              setMessages((prev) =>
                prev.map((msg) =>
                  msg.id === 2
                    ? {
                        id: 2,
                        text: "Being in your presence means having someone teach you about the universe, conspiracies, the great msteries of the world and life. You waltz into our lives with your shy-smile, voluminous hair, villanous humor and soft eyes- as a gift. You're kind for the sake of being kind. You challenge people to be their best selves. You're a well-fitted, fine-tailored suit. I'm grateful for the leaf falling when it did, where ever it did, to nudge the stars to align in our favor. I am in awe of the person you are and I wish you a long, healthy life so you can bring more people the joy of getting to know you.",
                        sender: "bot",
                      }
                    : msg
                )
              );
            //   Show response options after a short delay
            setTimeout(() => setShowResponses(true), 1000);
            }, 2000); 
          }, 7000);
      }, []);

      // Function to handle response selection
  const handleResponseClick = (responseText) => {
    setMessages((prev) => [
      ...prev,
      { id: prev.length + 1, text: responseText, sender: "user" },
    ]);

    setShowResponses(false); // Hide response options after selection
    setWaitingForResponse(true); // Wait before bot sends another message

    // Trigger bot's third message based on user response
    setTimeout(() => {
      setMessages((prev) => [...prev, { id: prev.length + 1, text: "Typing...", sender: "bot" }]);

      setTimeout(() => {
            setMessages((prev) => [
                ...prev.filter((msg) => msg.text !== "Typing..."), // Remove the typing message
                {
                    id: prev.length + 1,
                    text: responseText === "aww tnx"
                        ? "👉👈 🙈 🫶"
                        : "HAHAHA, never speak to me again 😂",
                    sender: "bot",
                },
            ]);
            setWaitingForResponse(false);
            // Show "Next?" button after a short delay
            setTimeout(() => setShowNextButton(true), 1000);
      }, 2000);
    }, 2000);
  };


    return(
        <div className="chat-container">
            <div className="chat-box">
                {messages.map((msg) => (
                <div key={msg.id} className={`chat-bubble ${msg.sender}`}>
                    {msg.text}
                </div>
                ))}
                {/* Response options appear after the second message */}
                {showResponses && (
                <div className="response-options">
                    <button className="response-btn" onClick={() => handleResponseClick("aww tnx")}>aww tnx</button>
                    <button className="response-btn" onClick={() => handleResponseClick("eww cringe")}>eww cringe</button>
                </div>
                )}
                {showNextButton && !waitingForResponse && (
                    <div className="response-option-next">
                        <button className="response-btn">Next?</button>
                    </div>
                )}
            </div>
        </div>
    );
}