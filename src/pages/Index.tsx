import Icon from "@/components/ui/icon";

const articles = [
  {
    id: 1,
    category: "Культура",
    title: "Как манга изменила визуальный язык поколения",
    excerpt: "Японские комиксы давно перестали быть нишевым увлечением — сегодня они формируют эстетику моды, кино и цифрового искусства по всему миру.",
    date: "24 марта 2026",
    readTime: "6 мин",
  },
  {
    id: 2,
    category: "Интервью",
    title: "«Я рисую то, что чувствую» — разговор с иллюстратором",
    excerpt: "Встретились с Анной Серовой, чьи работы собирают тысячи сохранений в день. Она рассказала о вдохновении, кризисах и о том, почему бумага лучше планшета.",
    date: "19 марта 2026",
    readTime: "9 мин",
  },
  {
    id: 3,
    category: "Эссе",
    title: "Тишина как форма высказывания",
    excerpt: "Что происходит, когда автор намеренно убирает слова? Исследуем минимализм в тексте — от Хемингуэя до современных микроблогеров.",
    date: "12 марта 2026",
    readTime: "5 мин",
  },
  {
    id: 4,
    category: "Обзор",
    title: "Пять книг, которые стоит прочитать этой весной",
    excerpt: "Редакция собрала подборку — от дебютного романа до переиздания классики, которое давно ждали.",
    date: "5 марта 2026",
    readTime: "4 мин",
  },
];

const shareLinks = (title: string) => [
  {
    name: "Telegram",
    icon: "Send",
    href: `https://t.me/share/url?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(title)}`,
    color: "hover:text-blue-500",
  },
  {
    name: "VK",
    icon: "Users",
    href: `https://vk.com/share.php?url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(title)}`,
    color: "hover:text-blue-600",
  },
  {
    name: "Twitter/X",
    icon: "Twitter",
    href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(title)}`,
    color: "hover:text-sky-500",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-body">

      {/* Header */}
      <header className="border-b border-gray-100 sticky top-0 bg-white/95 backdrop-blur-sm z-10">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <span className="font-display text-2xl font-semibold tracking-wide text-gray-900">
              Блог
            </span>
          </div>
          <nav className="flex items-center gap-6">
            <a
              href="#articles"
              className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
            >
              Статьи
            </a>
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
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-16 animate-fade-in-up">
        <p className="text-xs tracking-widest text-gray-400 uppercase mb-4">Издание о культуре и тексте</p>
        <h1 className="font-display text-6xl md:text-7xl font-light text-gray-900 leading-tight mb-6">
          Юля,<br />
          <span className="italic">я люблю тебя ❤️</span>
        </h1>
        <p className="text-gray-500 text-base font-light max-w-lg leading-relaxed">
          Статьи о культуре, искусстве и людях — без спешки и лишнего шума.
        </p>
      </section>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="h-px bg-gray-100" />
      </div>

      {/* Articles */}
      <section id="articles" className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-0">
          {articles.map((article, index) => (
            <article
              key={article.id}
              className="group py-10 border-b border-gray-100 animate-fade-in-up cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s`, opacity: 0 }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs tracking-widest text-gray-400 uppercase">
                      {article.category}
                    </span>
                    <span className="text-gray-200">·</span>
                    <span className="text-xs text-gray-400">{article.date}</span>
                    <span className="text-gray-200">·</span>
                    <span className="text-xs text-gray-400">{article.readTime}</span>
                  </div>
                  <h2 className="font-display text-2xl md:text-3xl font-medium text-gray-900 mb-3 group-hover:text-gray-600 transition-colors leading-snug">
                    {article.title}
                  </h2>
                  <p className="text-gray-500 font-light text-sm leading-relaxed max-w-xl">
                    {article.excerpt}
                  </p>
                </div>

                {/* Share buttons */}
                <div className="flex items-center gap-3 md:pt-2 shrink-0">
                  <span className="text-xs text-gray-300 hidden md:block">Поделиться</span>
                  {shareLinks(article.title).map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={link.name}
                      onClick={(e) => e.stopPropagation()}
                      className={`text-gray-300 ${link.color} transition-colors duration-200`}
                    >
                      <Icon name={link.icon} fallback="Share2" size={16} />
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-10">
        <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-display text-lg text-gray-400">Блог</span>
          <p className="text-xs text-gray-300">© 2026 — Все права защищены</p>
          <a
            href="https://jojowiki.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-gray-400 hover:text-gray-900 transition-colors flex items-center gap-1"
          >
            <Icon name="ExternalLink" size={11} />
            jojowiki.com
          </a>
        </div>
      </footer>

    </div>
  );
};

export default Index;