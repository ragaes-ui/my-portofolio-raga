import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const message = body.message;
        const apiKey = process.env.GEMINI_API_KEY;

        if (!apiKey) {
            return NextResponse.json({ reply: "Kunci AI belum dipasang di Vercel! 🔑" });
        }

        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;

        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{
                    parts: [{ 
                        text: `Kamu adalah asisten AI pribadi untuk portofolio Raga Esa Pratama. Raga adalah seorang Full Stack Developer (Next.js, React, Node.js, Tailwind, PostgreSQL) dan lulusan Sistem Informasi dengan pengalaman IT Support SIMRS. Jawab pertanyaan pengunjung tentang Raga dengan ramah, profesional, singkat, dan gunakan emoji. Pertanyaan pengunjung: ${message}` 
                    }]
                }]
            })
        });

        const data = await response.json();

        if (data.candidates && data.candidates[0].content) {
            const replyText = data.candidates[0].content.parts[0].text;
            return NextResponse.json({ reply: replyText });
                } else {
            const pesanError = data.error ? data.error.message : "Nggak tau kenapa nih";
            return NextResponse.json({ reply: "Google bilang: " + pesanError });
        }

    } catch (error) {
        return NextResponse.json({ reply: "Koneksi terputus! Pastikan sinyal aman 📶" });
    }
}
