"use client";
import { useState } from "react";

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([
        { sender: "bot", text: "Halo! 👋 Aku asisten AI Kak Raga. Ada yang mau ditanyakan seputar skill (Next.js, Node.js, dll) atau pengalaman Kak Raga?" }
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
            {/* --- Tombol Chat Melayang (Warna Hitam dengan Aksen Borda Biru/Ungu agar senada dengan badge) --- */}
            {!isOpen && (
                <button 
                    onClick={() => setIsOpen(true)}
                    // Ganti jadi background hitam, border biru halus, dan teks putih
                    className="bg-black text-white p-4 rounded-full shadow-lg border border-blue-600 hover:border-purple-500 transition duration-300 font-bold flex items-center gap-2 group"
                >
                    💬 Chat AI
                </button>
            )}

            {/* --- Jendela Chat (Tema Gelap) --- */}
            {isOpen && (
                // Ganti jadi background hitam, border gelap, dan teks putih
                <div className="w-[320px] h-[450px] bg-black rounded-2xl shadow-2xl flex flex-col border border-zinc-700/50 overflow-hidden text-white">
                    
                    {/* --- Header (Warna Hitam dengan aksen gradient halus di bawah) --- */}
                    <div className="bg-black text-white p-4 font-bold flex justify-between items-center shadow-md border-b border-zinc-700/50">
                        <div className="flex items-center gap-2">
                            {/* Halo gradient halus di sekitar emoji agar senada dengan foto */}
                            <span className="text-xl p-1.5 rounded-full bg-gradient-to-r from-purple-600 to-blue-600">🤖</span>
                            <span className="text-sm">AI Assistant Raga</span>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="text-zinc-400 hover:text-white font-bold text-lg">
                            ✖
                        </button>
                    </div>

                    {/* --- Area Obrolan (Background Hitam) --- */}
                    <div className="flex-1 p-4 overflow-y-auto bg-black flex flex-col gap-3">
                        {messages.map((msg, idx) => (
                            <div key={idx} className={`max-w-[85%] p-3 rounded-xl text-sm shadow-sm flex items-start gap-2 ${msg.sender === "user" 
                                // BALON CHAT USER: Ganti pakai Gradient Ungu-Biru yang sama kayak di portofolio kakak
                                ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white self-end rounded-br-none" 
                                // BALON CHAT BOT: Ganti pakai Abu-abu Gelap (Slate)
                                : "bg-slate-800 border border-slate-700 text-zinc-100 self-start rounded-bl-none"}`}>
                                
                                {msg.text}
                            </div>
                        ))}
                        {isLoading && (
                            <div className="bg-slate-800 border border-slate-700 text-zinc-300 self-start p-3 rounded-xl rounded-bl-none text-sm animate-pulse shadow-sm">
                                AI lagi mikir... ✍️
                            </div>
                        )}
                    </div>

                    {/* --- Area Ketik Pesan (Background Hitam) --- */}
                    <div className="p-3 border-t border-zinc-700/50 bg-black flex gap-2">
                        <input 
                            type="text" 
                            // Input gelap dengan border gelap, placeholder abu-abu
                            className="flex-1 bg-black border border-zinc-600 text-white placeholder:text-zinc-500 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                            placeholder="Tanya soal Raga..." 
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && handleSend()}
                        />
                        <button 
                            onClick={handleSend}
                            disabled={isLoading}
                            // Tombol Kirim: Warna Putih, Teks Hitam (Disamakan dengan tombol "Lihat Karyaku")
                            className="bg-white text-black px-4 py-2 rounded-xl text-sm font-bold hover:bg-zinc-200 disabled:bg-zinc-400 transition"
                        >
                            ➤
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
