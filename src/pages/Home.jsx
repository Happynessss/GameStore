import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";
import GameCard from "../components/GameCard";
import NewsCard from "../components/NewsCard";
import "./Home.css";

const games = [
  {
    id: 2,
    title: "Elden Ring",
    genre: "Action",
    platform: "PC",
    rating: 9.5,
    year: 2022,
    image: "https://i.playground.ru/e/HE0QuM9FKd3J-I9nMd41TA.png",
    description:
      "Explore a vast fantasy world, fight dangerous enemies and uncover the secrets of the Lands Between.",
  },
  {
    id: 1,
    title: "Cyberpunk 2077",
    genre: "RPG",
    platform: "PC",
    rating: 9.2,
    year: 2020,
    image: "https://store-images.s-microsoft.com/image/apps.47379.63407868131364914.bcaa868c-407e-42c2-baeb-48a3c9f29b54.89bb995b-b066-4a53-9fe4-0260ce07e894",
    description:
      "Step into Night City, a megalopolis where technology, corporations and street gangs decide who wins.",
  },
  {
    id: 3,
    title: "Minecraft",
    genre: "Sandbox",
    platform: "PC",
    rating: 9.0,
    year: 2011,
    image: "https://habrastorage.org/getpro/habr/upload_files/62f/930/2df/62f9302dffe9571da0995eb4276b31b2.jpg",
    description:
      "Build your own worlds, mine resources, explore caves and survive in a world made of blocks.",
  },
  {
    id: 4,
    title: "Forza Horizon 5",
    genre: "Racing",
    platform: "Xbox",
    rating: 8.8,
    year: 2021,
    image: "https://upload.wikimedia.org/wikipedia/ru/5/58/%D0%9E%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0_Forza_Horizon_5.jpg?utm_source=ru.wikipedia.org&utm_campaign=index&utm_content=original",
    description:
      "Race across a vivid Mexico and explore an open world in hundreds of different cars.",
  },
];

const popular = [
  { id: 5, title: "The Witcher 3", genre: "RPG", platform: "PC", rating: 9.7, year: 2015, image: "https://thumb.wikimedia.org/wikipedia/en/thumb/0/0c/Witcher_3_cover_art.jpg/250px-Witcher_3_cover_art.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail" },
  { id: 8, title: "Red Dead Redemption 2", genre: "Action", platform: "PC", rating: 9.6, year: 2018, image: "https://upload.wikimedia.org/wikipedia/en/4/44/Red_Dead_Redemption_II.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original" },
  { id: 7, title: "Grand Theft Auto V", genre: "Action", platform: "PC", rating: 9.1, year: 2013, image: "https://store-images.s-microsoft.com/image/apps.32034.68565266983380288.0f5ef871-88c0-45f7-b108-6aacbc041fcf.9b094362-c51d-49e5-9e92-80710c585fca" },
  { id: 6, title: "Counter-Strike 2", genre: "Shooter", platform: "PC", rating: 8.5, year: 2023, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7MIrbdCIBd01-KyLip6wX-O_ugGDz1FgsaMlqDyfqbg&s=10" },
];

const news = [
  {
    id: 1,
    category: "Обновления",
    date: "10 октября 2026",
    title: "Minecraft получил новые возможности",
    description:
      "Разработчики продолжают расширять игровой мир, добавляя новые механики и улучшения.",
    image: "https://habrastorage.org/getpro/habr/upload_files/62f/930/2df/62f9302dffe9571da0995eb4276b31b2.jpg",
  },
  {
    id: 2,
    category: "Индустрия",
    date: "9 октября 2026",
    title: "Что происходит в игровой индустрии?",
    description:
      "Главные события, новые проекты и интересные анонсы этой недели.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    category: "Киберспорт",
    date: "8 октября 2026",
    title: "Киберспорт продолжает расти",
    description:
      "Турниры собирают всё больше зрителей, а команды готовятся к новым соревнованиям.",
    image: "https://images.unsplash.com/photo-1547394765-185e1e68f34e?auto=format&fit=crop&w=900&q=80",
  },
];

function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const featured = games[activeIndex];

  return (
    <main className="home">
      <section className="hero" aria-label="Featured games">
        <Link to={`/games/${featured.id}`} className="hero-feature">
          <img key={featured.id} src={featured.image} alt="" />
          <div className="hero-shade" />

          <div className="hero-content">
            <span className="hero-meta">
              <Star size={14} fill="currentColor" />
              {featured.rating.toFixed(1)} · {featured.genre} · {featured.year}
            </span>
            <h1>{featured.title}</h1>
            <p>{featured.description}</p>
            <span className="btn btn-primary">
              View game <ArrowRight size={17} />
            </span>
          </div>
        </Link>

        <ul className="hero-rail">
          {games.map((game, index) => (
            <li key={game.id}>
              <button
                type="button"
                className={`hero-rail-item ${index === activeIndex ? "active" : ""}`}
                onClick={() => setActiveIndex(index)}
                aria-pressed={index === activeIndex}
              >
                <img src={game.image} alt="" loading="lazy" />
                <span>
                  <strong>{game.title}</strong>
                  <small>{game.genre}</small>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </section>

      <section className="home-section">
        <div className="section-heading">
          <h2>Popular Games</h2>
          <Link to="/games" className="view-all">
            View all <ArrowRight size={16} />
          </Link>
        </div>

        <div className="catalog-grid">
          {popular.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </section>

      <section className="home-section">
        <div className="section-heading">
          <h2>Latest News</h2>
          <Link to="/news" className="view-all">
            All news <ArrowRight size={16} />
          </Link>
        </div>

        <div className="news-grid">
          {news.map((item) => (
            <NewsCard key={item.id} news={item} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;
