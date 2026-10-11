
import { Link, useParams } from "react-router-dom";
import {
    ArrowLeft,
    Star,
    Calendar,
    Gamepad2,
    Monitor,
} from "lucide-react";
import "./GameDetails.css";

const gamesData = [
    {
        id: 1,
        title: "Cyberpunk 2077",
        genre: "RPG",
        platform: "PC",
        rating: 9.2,
        year: 2020,
        image: "https://store-images.s-microsoft.com/image/apps.47379.63407868131364914.bcaa868c-407e-42c2-baeb-48a3c9f29b54.89bb995b-b066-4a53-9fe4-0260ce07e894",
        description:
            "Погрузись в Найт-Сити — огромный мегаполис будущего, где технологии, корпорации и уличные банды определяют жизнь людей.",
    },
    {
        id: 2,
        title: "Elden Ring",
        genre: "Action",
        platform: "PC",
        rating: 9.5,
        year: 2022,
        image: "https://i.playground.ru/e/HE0QuM9FKd3J-I9nMd41TA.png",
        description:
            "Исследуй огромный фэнтезийный мир, сражайся с опасными противниками и раскрывай тайны Междуземья.",
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
            "Строй собственные миры, добывай ресурсы, исследуй пещеры и выживай в мире, состоящем из блоков.",
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
            "Отправляйся в красочную Мексику, участвуй в гонках и исследуй открытый мир на самых разных автомобилях.",
    },
    {
        id: 5,
        title: "The Witcher 3",
        genre: "RPG",
        platform: "PC",
        rating: 9.7,
        year: 2015,
        image: "https://thumb.wikimedia.org/wikipedia/en/thumb/0/0c/Witcher_3_cover_art.jpg/250px-Witcher_3_cover_art.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
        description:
            "Стань Геральтом из Ривии, охотником на чудовищ, и отправляйся в путешествие по миру, полному опасностей и непростых решений.",
    },
    {
        id: 6,
        title: "Counter-Strike 2",
        genre: "Shooter",
        platform: "PC",
        rating: 8.5,
        year: 2023,
        image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/730/6328493f4cc4a8fb83e1149be1cac5a7823fe588/capsule_616x353.jpg?t=1789251637",
        description:
            "Соревновательный тактический шутер, в котором командная работа, точность стрельбы и стратегия решают исход раунда.",
    },
    {
        id: 7,
        title: "Grand Theft Auto V",
        genre: "Action",
        platform: "PC",
        rating: 9.1,
        year: 2013,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeSJGpa9IhMqgKM-JnzbgPt3f7tnMqNhbN5DyFPP4qi09x8ho9_rmGU-DE&s=10git ",
        description:
            "Исследуй открытый мир Лос-Сантоса, следи за историями трёх главных героев и выполняй разнообразные задания.",
    },
    {
        id: 8,
        title: "Red Dead Redemption 2",
        genre: "Action",
        platform: "PC",
        rating: 9.6,
        year: 2018,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1174180/header.jpg?t=1759502961",
        description:
            "История Артура Моргана и банды Ван дер Линде на Диком Западе в эпоху перемен.",
    },
];

function GameDetails() {
    const { id } = useParams();
    const game = gamesData.find((item) => item.id === Number(id));

    if (!game) {
        return (
            <main className="game-details-page">
                <div className="game-not-found">
                    <Gamepad2 size={48} />
                    <h1>Game not found</h1>
                    <p>Такой игры нет в нашем каталоге.</p>
                    <Link to="/games" className="game-back-button">
                        <ArrowLeft size={18} />
                        Back to Games
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="game-details-page">
            <Link to="/games" className="game-back-link">
                <ArrowLeft size={18} />
                Back to Games
            </Link>

            <section className="game-details-hero">
                <img
                    className="game-details-cover"
                    src={game.image}
                    alt={game.title}
                />
                <div className="game-details-overlay" />

                <div className="game-details-content">

                    <h1>{game.title}</h1>

                    <p className="game-details-description">
                        {game.description}
                    </p>

                    <div className="game-details-tags">
            <span>
              <Star size={17} fill="currentColor" />
                {game.rating.toFixed(1)} / 10
            </span>
                        <span>
              <Calendar size={17} />
                            {game.year}
            </span>
                        <span>
              <Gamepad2 size={17} />
                            {game.genre}
            </span>
                        <span>
              <Monitor size={17} />
                            {game.platform}
            </span>
                    </div>

                    <Link to="/games" className="game-back-button">
                        <ArrowLeft size={18} />
                        Explore more games
                    </Link>
                </div>
            </section>

            <section className="game-details-info">
                <div>
                    <span>Жанр</span>
                    <h3>{game.genre}</h3>
                </div>
                <div>
                    <span>Год выхода</span>
                    <h3>{game.year}</h3>
                </div>
                <div>
                    <span>Платформа</span>
                    <h3>{game.platform}</h3>
                </div>
                <div>
                    <span>Рейтинг GameZone</span>
                    <h3>{game.rating.toFixed(1)} / 10</h3>
                </div>
            </section>
        </main>
    );
}

export default GameDetails;