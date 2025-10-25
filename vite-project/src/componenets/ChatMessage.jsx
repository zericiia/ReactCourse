import RobotProfilePicture from "../assets/robot.png";
import UserProfilePicture from "../assets/user.png";
import "./ChatMessage.css";

export function ChatMessage({ message, sender }) {
  return (
    <div
      className={
        sender === "robot" ? "chat-message-robot" : "chat-message-user"
      }
    >
      {sender === "robot" && <img src={RobotProfilePicture} width="50px" />}
      <div className="chat-message-text">{message}</div>
      {sender === "user" && <img src={UserProfilePicture} width="50px" />}
    </div>
  );
}
