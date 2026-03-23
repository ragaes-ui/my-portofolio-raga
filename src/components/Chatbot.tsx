"use client";
import { useState } from "react";

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([
        { sender: "bot", text: "Halo! 👋 Aku asisten AI Kak Raga. Ada yang mau ditanyakan seputar portofolio, skill, atau pengalaman Kak Raga?" }
    ]);
    const [isLoading, setIsLoading] = useState(false);

    const handleSend = async () => {
        if (!input.trim()) return;
        
        const userText = input;
        setMessages((prev) => [...prev, { sender: "user", text: userText }]);
        setInput("");
        setIsLoading(true);

        try {
            const res = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: userText }),
            });
            const data = await res.json();
            
            setMessages((prev) => [...prev, { sender: "bot", text: data.reply }]);
        } catch (error) {
            setMessages((prev) => [...prev, { sender: "bot", text: "Waduh, sinyalnya putus nih kak. 😅" }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed bottom-5 right-5 z-50">
            {!isOpen && (
                <button 
                    onClick={() => setIsOpen(true)}
                    className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 font-bold flex items-center gap-2"
                >
                    💬 Chat AI
                </button>
            )}

            {isOpen && (
                <div className="w-[320px] h-[450px] bg-white rounded-2xl shadow-2xl flex flex-col border border-gray-200 overflow-hidden text-black">
                    <div className="bg-blue-600 text-white p-4 font-bold flex justify-between items-center shadow-md">
                        <div className="flex items-center gap-2">
                            <span className="text-xl">🤖</span>
                            <span>AI Assistant Raga</span>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-200 font-bold text-lg">
                            ✖
                        </button>
                    </div>

                    <div className="flex-1 p-4 overflow-y-auto bg-gray-50 flex flex-col gap-3">
                        {messages.map((msg, idx) => (
                            <div key={idx} className={`max-w-[85%] p-3 rounded-xl text-sm shadow-sm ${msg.sender === "user" ? "bg-blue-500 text-white self-end rounded-br-none" : "bg-white border border-gray-200 text-gray-800 self-start rounded-bl-none"}`}>
                                {msg.text}
                            </div>
                        ))}
                        {isLoading && (
                            <div className="bg-white border border-gray-200 text-gray-800 self-start p-3 rounded-xl rounded-bl-none text-sm animate-pulse shadow-sm">
                                AI lagi ngetik... ✍️
                            </div>
                        )}
                    </div>

                    <div className="p-3 border-t bg-white flex gap-2">
                        <input 
                            type="text" 
                            className="flex-1 border border-gray-300 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                            placeholder="Tanya soal Raga..." 
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && handleSend()}
                        />
                        <button 
                            onClick={handleSend}
                            disabled={isLoading}
                            className="bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-bold hover:bg-blue-700 disabled:bg-gray-400 transition"
                        >
                            ➤
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
