import { useState } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import "./Games.css";
import GameCard from "../components/GameCard";
const gamesData = [
  {
    id: 1,
    title: "Cyberpunk 2077",
    genre: "RPG",
    platform: "PC",
    rating: 9.2,
    year: 2020,
    image:
      "https://store-images.s-microsoft.com/image/apps.47379.63407868131364914.bcaa868c-407e-42c2-baeb-48a3c9f29b54.89bb995b-b066-4a53-9fe4-0260ce07e894",
  },
  {
    id: 2,
    title: "Elden Ring",
    genre: "Action",
    platform: "PC",
    rating: 9.5,
    year: 2022,
    image:
      "https://i.playground.ru/e/HE0QuM9FKd3J-I9nMd41TA.png",
  },
  {
    id: 3,
    title: "Minecraft",
    genre: "Sandbox",
    platform: "PC",
    rating: 9.0,
    year: 2011,
    image:
      "https://habrastorage.org/getpro/habr/upload_files/62f/930/2df/62f9302dffe9571da0995eb4276b31b2.jpg",
  },
  {
    id: 4,
    title: "Forza Horizon 5",
    genre: "Racing",
    platform: "Xbox",
    rating: 8.8,
    year: 2021,
    image:
      "https://upload.wikimedia.org/wikipedia/ru/5/58/%D0%9E%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0_Forza_Horizon_5.jpg?utm_source=ru.wikipedia.org&utm_campaign=index&utm_content=original",
  },
  {
    id: 5,
    title: "The Witcher 3",
    genre: "RPG",
    platform: "PC",
    rating: 9.7,
    year: 2015,
    image:
      "https://thumb.wikimedia.org/wikipedia/en/thumb/0/0c/Witcher_3_cover_art.jpg/250px-Witcher_3_cover_art.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
  },
  {
    id: 6,
    title: "Counter-Strike 2",
    genre: "Shooter",
    platform: "PC",
    rating: 8.5,
    year: 2023,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7MIrbdCIBd01-KyLip6wX-O_ugGDz1FgsaMlqDyfqbg&s=10",
  },
  {
    id: 7,
    title: "Grand Theft Auto V",
    genre: "Action",
    platform: "PC",
    rating: 9.1,
    year: 2013,
    image:
      "https://store-images.s-microsoft.com/image/apps.32034.68565266983380288.0f5ef871-88c0-45f7-b108-6aacbc041fcf.9b094362-c51d-49e5-9e92-80710c585fca",
  },
  {
    id: 8,
    title: "Red Dead Redemption 2",
    genre: "Action",
    platform: "PC",
    rating: 9.6,
    year: 2018,
    image:
      "https://upload.wikimedia.org/wikipedia/en/4/44/Red_Dead_Redemption_II.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original",
  },
];

const genres = [
  "All",
  "Action",
  "RPG",
  "Shooter",
  "Racing",
  "Sandbox",
];

function Games() {
  const [search, setSearch] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [sortBy, setSortBy] = useState("popular");
  const [selectedPlatform, setSelectedPlatform] = useState("All");
  const [showFilters, setShowFilters] = useState(false);

  const filteredGames = gamesData
    .filter((game) =>
      game.title.toLowerCase().includes(search.toLowerCase())
    )
    .filter(
      (game) =>
        selectedGenre === "All" || game.genre === selectedGenre
    )
    .filter(
      (game) =>
        selectedPlatform === "All" ||
        game.platform === selectedPlatform
    )
    .sort((a, b) => {
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "year") return b.year - a.year;
      return a.id - b.id;
    });

  function resetFilters() {
    setSearch("");
    setSelectedGenre("All");
    setSelectedPlatform("All");
    setSortBy("popular");
  }

  return (
    <main className="games-page">
      <section className="games-header">
        <h1>Games</h1>
        <p>
          Discover your next favorite game from our growing collection.
        </p>
      </section>

      <section className="games-toolbar">
        <div className="games-search">
          <Search size={20} />
          <input
            type="text"
            placeholder="Search games..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />

          {search && (
            <button
              className="clear-search"
              onClick={() => setSearch("")}
              aria-label="Clear search"
            >
              <X size={17} />
            </button>
          )}
        </div>

        <button
          className={`filter-toggle ${showFilters ? "selected" : ""}`}
          onClick={() => setShowFilters(!showFilters)}
        >
          <SlidersHorizontal size={18} />
          Filters
        </button>

        <select
          className="games-sort"
          value={sortBy}
          onChange={(event) => setSortBy(event.target.value)}
          aria-label="Sort games"
        >
          <option value="popular">Popular</option>
          <option value="rating">Highest rated</option>
          <option value="year">Newest releases</option>
        </select>
      </section>

      <section className="games-layout">
        <aside className={`games-sidebar ${showFilters ? "open" : ""}`}>
          <div className="sidebar-heading">
            <h2>Filters</h2>
            <button onClick={resetFilters}>Reset</button>
          </div>

          <div className="filter-group">
            <h3>Genre</h3>

            {genres.map((genre) => (
              <button
                key={genre}
                className={`genre-option ${
    selectedGenre === genre ? "active" : ""
}`}
                onClick={() => setSelectedGenre(genre)}
              >
                {genre}
              </button>
            ))}
          </div>

          <div className="filter-group">
            <h3>Platform</h3>

            {["All", "PC", "Xbox"].map((platform) => (
              <button
                key={platform}
                className={`genre-option ${
    selectedPlatform === platform ? "active" : ""
}`}
                onClick={() => setSelectedPlatform(platform)}
              >
                {platform}
              </button>
            ))}
          </div>
        </aside>

        <div className="games-results">
          <div className="results-heading">
            <h2>All Games</h2>
            <span>{filteredGames.length} games found</span>
          </div>

          {filteredGames.length > 0 ? (
            <div className="catalog-grid">
              {filteredGames.map((game) => (
                  <GameCard key={game.id} game={game} />
              ))}
            </div>
          ) : (
            <div className="empty-results">
              <Search size={35} />
              <h3>No games found</h3>
              <p>Try another title or change your filters.</p>
              <button onClick={resetFilters}>Reset filters</button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default Games;

