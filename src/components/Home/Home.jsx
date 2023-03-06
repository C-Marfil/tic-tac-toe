import React from "react";
import { useNavigate } from "react-router-dom";

const Home = ({ setUsername, username }) => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="joinChatContainer">
        <h3>Join the Conversation</h3>
        <input
          type="text"
          placeholder="Username..."
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <button
          type="button"
          onClick={() => {
            if (username) {
              navigate("/lobby");
            } else {
              alert("Please choose your username");
            }
          }}
        >
          👍
        </button>
      </div>
    </div>
  );
};

export default Home;
