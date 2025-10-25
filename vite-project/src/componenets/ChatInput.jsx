import { useState } from "react";
import { Chatbot } from "supersimpledev";
import "./Chatinput.css";
export function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState("");
  function saveInputText(event) {
    setInputText(event.target.value);
  }
  function SendMessage() {
    // console.log(inputText);
    const newChatMessages = [
      ...chatMessages,
      { text: inputText, sender: "user", id: crypto.randomUUID() },
    ];
    setChatMessages(newChatMessages);

    const response = Chatbot.getResponse(inputText);

    setChatMessages([
      ...newChatMessages,
      { text: response, sender: "robot", id: crypto.randomUUID() },
    ]);

    setInputText("");
  }
  return (
    <div className="chat-input-container">
      <input
        className="chat-input"
        type="text"
        placeholder="send a meesage to chatbot"
        size="30"
        value={inputText}
        onChange={saveInputText}
      />
      <button className="send-button" onClick={SendMessage}>
        send
      </button>
    </div>
  );
}
