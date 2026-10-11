
import { useState } from "react";
import {
    CalendarDays,
    Search,
} from "lucide-react";
import "./News.css";
import NewsCard from "../components/NewsCard";
const newsData = [
    {
        id: 1,
        category: "Обновления",
        date: "10 октября 2026",
        title: "Minecraft получил новые возможности",
        description:
            "Разработчики продолжают расширять игровой мир, добавляя новые механики и улучшения.",
        image:
            "https://habrastorage.org/getpro/habr/upload_files/62f/930/2df/62f9302dffe9571da0995eb4276b31b2.jpg",
        featured: true,
    },
    {
        id: 2,
        category: "Индустрия",
        date: "9 октября 2026",
        title: "Что происходит в игровой индустрии?",
        description:
            "Главные события, новые проекты и интересные анонсы этой недели.",
        image:
            "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=900&q=80",
    },
    {
        id: 3,
        category: "Киберспорт",
        date: "8 октября 2026",
        title: "Киберспорт продолжает расти",
        description:
            "Турниры собирают всё больше зрителей, а команды готовятся к новым соревнованиям.",
        image:
            "https://images.unsplash.com/photo-1547394765-185e1e68f34e?auto=format&fit=crop&w=900&q=80",
    },
    {
        id: 4,
        category: "Игры",
        date: "7 октября 2026",
        title: "Во что поиграть на выходных?",
        description:
            "Подборка игр, которые помогут отлично провести свободное время.",
        image:
            "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=900&q=80",
    },
    {
        id: 5,
        category: "Технологии",
        date: "6 октября 2026",
        title: "Как меняется игровой мир",
        description:
            "Новые технологии делают игры реалистичнее и открывают больше возможностей.",
        image:
            "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=900&q=80",
    },
    {
        id: 6,
        category: "Обновления",
        date: "5 октября 2026",
        title: "Важные обновления популярных игр",
        description:
            "Разбираемся, какие изменения могут заинтересовать игроков.",
        image:
            "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&w=900&q=80",
    },
];

const categories = [
    "Все",
    "Игры",
    "Обновления",
    "Киберспорт",
    "Технологии",
    "Индустрия",
];

function News() {
    const [search, setSearch] = useState("");
    const [activeCategory, setActiveCategory] = useState("Все");

    const filteredNews = newsData.filter((news) => {
        const matchesSearch =
            news.title.toLowerCase().includes(search.toLowerCase()) ||
            news.description.toLowerCase().includes(search.toLowerCase());

        const matchesCategory =
            activeCategory === "Все" || news.category === activeCategory;

        return matchesSearch && matchesCategory;
    });

    const featuredNews = newsData.find((news) => news.featured);

    return (
        <main className="news-page">
            <section className="news-heading">
                <div className="news-heading-text">

                    <h1>Новости</h1>

                    <p>
                        Анонсы, обновления, технологии и события игровой индустрии
                        в одном месте.
                    </p>
                </div>

                <div className="news-search">
                    <Search size={20} />
                    <input
                        type="text"
                        placeholder="Найти новость..."
                        value={search}
                        onChange={(event) => setSearch(event.target.value)}
                    />
                </div>
            </section>

            {!search && activeCategory === "Все" && featuredNews && (
                <section className="featured-news">
                    <img src={featuredNews.image} alt="Главная новость" />

                    <div className="featured-overlay">
            <span className="news-category">
              {featuredNews.category}
            </span>

                        <h2>{featuredNews.title}</h2>
                        <p>{featuredNews.description}</p>

                        <div className="news-date">
                            <CalendarDays size={16} />
                            {featuredNews.date}
                        </div>
                    </div>
                </section>
            )}

            <section className="news-content">
                <div className="news-section-title">
                    <div>
                        <h2>Все новости</h2>
                        <p>Будь в курсе последних событий</p>
                    </div>

                    <span className="news-count">
            {filteredNews.length} материалов
          </span>
                </div>

                <div className="news-categories">
                    {categories.map((category) => (
                        <button
                            key={category}
                            className={
                                activeCategory === category ? "active" : ""
                            }
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {filteredNews.length > 0 ? (
                    <div className="news-grid">
                        {filteredNews.map((news) => (
                            <NewsCard key={news.id} news={news} />
                        ))}
                    </div>
                ) : (
                    <div className="news-empty">
                        <Search size={36} />
                        <h3>Новости не найдены</h3>
                        <p>Попробуй изменить запрос или выбрать другую категорию.</p>
                    </div>
                )}
            </section>
        </main>
    );
}

export default News;
