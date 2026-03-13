"use client";

import { useState, useRef, useEffect } from "react";
import { portfolioKnowledge as data } from "@/data/portfolioKnowledge";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");

  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: `Hello, I'm Jitesh's portfolio assistant.

You can ask about:
• skills
• projects
• experience
• contact`,
    },
  ]);

  const chatRef = useRef<HTMLDivElement>(null);
  const messageContainerRef = useRef<HTMLDivElement>(null);

  // close when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (chatRef.current && !chatRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    if (open) document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  // auto scroll
  useEffect(() => {
    const container = messageContainerRef.current;
    if (container) container.scrollTop = container.scrollHeight;
  }, [messages]);

  function getBotResponse(message: string) {
    const msg = message.toLowerCase().trim();

    /* ---------------- GREETING DETECTION ---------------- */

    const greetingWords = [
      "hi",
      "hello",
      "hey",
      "good morning",
      "good evening",
      "good afternoon",
    ];

    const isGreeting = greetingWords.some((g) => msg === g || msg.startsWith(g));

    if (isGreeting) {
      const greetings = data.greetings.hello;
      return greetings[Math.floor(Math.random() * greetings.length)];
    }

    /* ---------------- SKILLS ---------------- */

    if (msg.includes("skill") || msg.includes("tech")) {
      return `Skills

Frontend:
${data.skills.frontend.join(", ")}

Backend:
${data.skills.backend.join(", ")}

AI:
${data.skills.ai.join(", ")}

Databases:
${data.skills.databases.join(", ")}`;
    }

    /* ---------------- PROJECTS ---------------- */

    if (msg.includes("project")) {
      return data.projects
        .map(
          (p) =>
            `${p.name}

${p.short_description}

Tech Stack: ${p.tech.join(", ")}

GitHub:
${p.github}`,
        )
        .join("\n\n");
    }

    /* ---------------- EXPERIENCE ---------------- */

    if (
      msg.includes("experience") ||
      msg.includes("work") ||
      msg.includes("career") ||
      msg.includes("job")
    ) {
      return `Experience

${data.experience
  .map(
    (exp) =>
      `${exp.role}
${exp.company} (${exp.period})

${exp.description}

Tech: ${exp.tech.join(", ")}`,
  )
  .join("\n\n")}

Overall Experience:
${data.personal.experience}`;
    }

    /* ---------------- CONTACT ---------------- */

    if (
      msg.includes("contact") ||
      msg.includes("email") ||
      msg.includes("phone") ||
      msg.includes("github") ||
      msg.includes("linkedin")
    ) {
      return `Contact Information

Email:
${data.contact.email}

Phone:
${data.contact.phone}

GitHub:
${data.contact.github}

LinkedIn:
${data.contact.linkedin}`;
    }

    /* ---------------- ABOUT ---------------- */

    if (
      msg.includes("who") ||
      msg.includes("about") ||
      msg.includes("jitesh")
    ) {
      return `${data.personal.name} is a ${data.personal.role} based in ${data.personal.location} with ${data.personal.experience}.

He specializes in backend development, scalable APIs, database architecture, and modern full stack applications.`;
    }

    /* ---------------- DEFAULT RESPONSE ---------------- */

    return `I can help you explore Jitesh's portfolio.

Try asking about:
• skills
• projects
• experience
• contact`;
  }

  function sendMessage() {
    if (!input.trim()) return;

    const userMessage = {
      type: "user",
      text: input,
    };

    const botReply = {
      type: "bot",
      text: getBotResponse(input),
    };

    setMessages((prev) => [...prev, userMessage, botReply]);
    setInput("");
  }

  /* ---------------- CLICKABLE LINKS ---------------- */

  function renderMessage(text: string) {
    const urlRegex = /(https?:\/\/[^\s]+)/g;

    const parts = text.split(urlRegex);

    return parts.map((part, index) => {
      if (part.match(urlRegex)) {
        return (
          <a
            key={index}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline break-all"
          >
            {part}
          </a>
        );
      }
      return part;
    });
  }

  return (
    <>
      {/* Floating Button */}

      <div
        onClick={() => setOpen(!open)}
        className="fixed bottom-5 right-5 z-50 cursor-pointer"
      >
        <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 shadow-xl hover:scale-110 transition">
          <span className="absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-30 animate-ping"></span>

          <span className="text-2xl">🤖</span>
        </div>
      </div>

      {open && (
        <div
          ref={chatRef}
          className="fixed bottom-24 right-5 w-[95%] max-w-sm sm:w-80 sm:right-6 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border border-gray-200 dark:border-gray-700 rounded-xl shadow-2xl p-4"
        >
          {/* Header */}

          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                🤖
              </div>

              <h3 className="font-semibold text-blue-500">
                Portfolio Assistant
              </h3>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="text-gray-400 hover:text-red-500 transition"
            >
              ✕
            </button>
          </div>

          {/* Messages */}

          <div
            ref={messageContainerRef}
            className="h-64 overflow-y-auto text-sm space-y-2 mb-3 pr-1"
          >
            {messages.map((m, i) => (
              <div
                key={i}
                className={m.type === "user" ? "text-right" : "text-left"}
              >
                <span
                  className={`inline-block px-4 py-2 rounded-xl whitespace-pre-line text-sm
                  ${
                    m.type === "user"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 dark:bg-gray-700 dark:text-gray-100"
                  }`}
                >
                  {renderMessage(m.text)}
                </span>
              </div>
            ))}
          </div>

          {/* Input */}

          <div className="flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") sendMessage();
              }}
              className="border border-gray-300 dark:border-gray-600 rounded-lg p-2 flex-1 focus:ring-2 focus:ring-blue-500 outline-none dark:bg-gray-800 dark:text-white text-sm"
              placeholder="Ask something..."
            />

            <button
              onClick={sendMessage}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 rounded-lg transition text-sm"
            >
              Send
            </button>
          </div>

          {/* Suggestions */}

          <div className="mt-3 flex flex-wrap gap-2 text-xs">
            {["skills", "projects", "experience", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => setInput(item)}
                className="px-3 py-1 rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-blue-500 hover:text-white transition"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}