import { useState } from "react";
import { ChatInput } from "./componenets/ChatInput";
import ChatMessages from "./componenets/ChatMessages";
import "./App.css";

function App() {
  // lifting the state up
  const [chatMessages, setChatMessages] = useState([
    {
      text: "hello chatbot",
      sender: "user",
      id: "id1",
    },
    {
      text: "I only know how to flip a coin, roll a dice, or get today's date. Let me know how I can help!",
      sender: "robot",
      id: "id2",
    },
    {
      text: "flip a coin",
      sender: "user",
      id: "id3",
    },
    {
      text: "Sure! You got tails",
      sender: "robot",
      id: "id4",
    },
  ]);
  return (
    <div className="app-container">
      <ChatMessages chatMessages={chatMessages} />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}

export default App;
