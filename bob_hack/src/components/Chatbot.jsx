import React, { useState } from "react";
import axios from "axios";
import { ID } from "appwrite";

const API_URL = "api-endpoint";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 0, question: "", answer: "Hello! How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const handleSend = async () => {
    if (!input.trim()) return; // Prevent sending empty messages

    setIsLoading(true); // Indicate loading state
    try {
      const response = await axios.post(API_URL, {
        id: messages.length,
        question: input,
      });

      // Add chatbot response to chat
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          id: prevMessages.length,
          question: input,
          answer: response.data.answer,
        },
      ]);
    } catch (error) {
      console.error("Error sending message:", error);
      alert("An error occurred while sending your message."); // Inform the user
    } finally {
      setIsLoading(false); // Reset loading state
    }

    setInput(""); // Clear input field
  };

  return (
    <div>
      <button
        className="fixed bottom-8 right-8 bg-bob-pri text-white rounded-full p-4 shadow-lg text-3xl"
        onClick={toggleChatbot}
      >
        🤖
      </button>
      {isOpen && (
        <div className="fixed bottom-20 right-8 w-80 h-[350px] bg-white rounded-lg shadow-lg p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Sarah: BOB AI Agent</h2>
            <button
              onClick={toggleChatbot}
              className="text-gray-500 hover:text-gray-700"
            >
              ✖
            </button>
          </div>
          <div className="flex flex-col h-full">
            <div className="flex-grow overflow-y-auto p-2 border border-gray-200 rounded">
              {messages.map((message) => (
                <div key={message.id} className="mb-2">
                  <p className="text-gray-400 ">
                    {message.question ? `You: ${message.question}` : ""}
                  </p>
                  <p className="text-gray-700">
                    {message.answer ? `Sarah: ${message.answer}` : ""}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex items-center mt-4">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="p-2 border border-gray-300 rounded w-full"
              />
              <button
                onClick={handleSend}
                className="ml-2 p-2 bg-bob-pri text-white rounded"
                disabled={isLoading} // Disable button during loading
              >
                {isLoading ? "Sending..." : "Send"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
