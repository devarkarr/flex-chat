import React from "react";
import ChatHeader from "../components/chat-header";
import MessageCard from "../components/message-card";

const ChatPage = () => {
  return (
    <section>
      <ChatHeader />
      <div className="py-4">
        <MessageCard />
      </div>
    </section>
  );
};

export default ChatPage;
