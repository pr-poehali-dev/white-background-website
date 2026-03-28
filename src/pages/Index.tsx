import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [text, setText] = useState("");
  const [sent, setSent] = useState(false);

  const handleSend = () => {
    if (!text.trim()) return;
    setSent(true);
    setText("");
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <div className="min-h-screen bg-white font-body">

      {/* Header */}
      <header className="border-b border-gray-100 sticky top-0 bg-white/95 backdrop-blur-sm z-10">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="font-display text-2xl font-semibold tracking-wide text-gray-900">
            Блог
          </span>
          <nav className="flex items-center gap-6">
            <a
              href="https://jojowiki.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 border border-gray-900 text-sm text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-200 rounded-none"
            >
              <Icon name="ExternalLink" size={13} />
              Вики
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-2xl mx-auto px-6 pt-32 pb-32 animate-fade-in-up flex flex-col items-center justify-center min-h-[80vh] gap-10">
        <h1 className="font-display text-6xl md:text-8xl font-light text-gray-900 leading-tight text-center">
          кент хвали,<br />
          <span className="italic">Юля люби ❤️</span>
        </h1>

        {/* Input */}
        <div className="w-full flex flex-col gap-3">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Напиши что-нибудь..."
            rows={3}
            className="w-full border border-gray-200 focus:border-gray-900 outline-none px-4 py-3 text-sm font-body text-gray-800 placeholder-gray-300 resize-none transition-colors duration-200"
          />
          <button
            onClick={handleSend}
            className="self-end inline-flex items-center gap-2 px-6 py-2.5 bg-gray-900 text-white text-sm hover:bg-gray-700 transition-colors duration-200"
          >
            <Icon name="Send" size={14} />
            Отправить
          </button>
          {sent && (
            <p className="text-xs text-gray-400 text-right animate-fade-in">Отправлено ✓</p>
          )}
        </div>
      </section>

    </div>
  );
};

export default Index;