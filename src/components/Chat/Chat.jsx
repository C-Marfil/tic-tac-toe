import React, { useState, useEffect } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import PropTypes from "prop-types";
import "./chat.css";

const Chat = ({ socket, roomCode, username }) => {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: roomCode,
        author: username,
        message: currentMessage,
        time: `${new Date(Date.now()).getHours()}
          :
          ${new Date(Date.now()).getMinutes()}`,
      };
      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
    }
  };

  useEffect(() => {
    socket.off("receive_message");
    socket.on("receive_message", (data) => {
      setMessageList((list) => [...list, data]);
    });
  }, [socket]);

  return (
    <div className="chat-window">
      <div className="chat-header">
        <p>Live Chat</p>
      </div>
      <div className="chat-body">
        <ScrollToBottom className="message-container">
          {messageList.map((messageContent) => {
            return (
              <div
                className="message"
                id={username === messageContent.author ? "you" : "other"}
              >
                <div>
                  <div className="message-content">
                    <p>{messageContent.message}</p>
                  </div>
                  <div className="message-meta">
                    <p id="author">{messageContent.author} </p>
                    <p id="time">{messageContent.time} </p>
                  </div>
                </div>
              </div>
            );
          })}
        </ScrollToBottom>
      </div>
      <div className="chat-footer">
        <input
          type="text"
          aria-label="message-input"
          value={currentMessage}
          placeholder="Chat"
          onChange={(event) => {
            setCurrentMessage(event.target.value);
          }}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              sendMessage();
            }
          }}
        />
        <button type="button" onClick={sendMessage}>
          &#9658;
        </button>
      </div>
    </div>
  );
};

Chat.propTypes = {
  roomCode: PropTypes.string.isRequired,
  socket: PropTypes.shape({
    emit: PropTypes.func.isRequired,
    off: PropTypes.func.isRequired,
    on: PropTypes.func.isRequired,
  }).isRequired,
  username: PropTypes.string.isRequired,
};

export default Chat;
