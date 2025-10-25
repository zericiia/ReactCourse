import { useEffect, useRef } from "react";
import { ChatMessage } from "./ChatMessage";
import "./ChatMessages.css";
function ChatMessages({ chatMessages }) {
  //  an array of components
  const chatMessagesRef = useRef(null);

  useEffect(() => {
    const containerElem = chatMessagesRef.current;
    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  }, [chatMessages]);
  // dependancy array
  return (
    <div className="chat-messages-container" ref={chatMessagesRef}>
      {chatMessages.map((chatMessages) => {
        return (
          <ChatMessage
            message={chatMessages.text}
            sender={chatMessages.sender}
            key={chatMessages.id}
          />
        );
      })}
    </div>
  );
}

export default ChatMessages;
