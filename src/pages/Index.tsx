import Icon from "@/components/ui/icon";

const Index = () => {
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
      <section className="max-w-4xl mx-auto px-6 pt-32 pb-32 animate-fade-in-up flex items-center justify-center min-h-[80vh]">
        <h1 className="font-display text-6xl md:text-8xl font-light text-gray-900 leading-tight text-center">
          Юля,<br />
          <span className="italic">я люблю тебя ❤️</span>
        </h1>
      </section>

    </div>
  );
};

export default Index;
