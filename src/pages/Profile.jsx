
import { useState } from "react";
import {
    UserRound,
    Pencil,
    Check,
    Gamepad2,
    Trophy,
    Clock3,
    Star,
    Settings,
    CalendarDays,
    Target,
    Zap,
} from "lucide-react";
import "./Profile.css";

const initialGames = [
    {
        id: 1,
        title: "Cyberpunk 2077",
        genre: "RPG • Open World",
        image:
            "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=700&q=80",
        rating: "9.5",
    },
    {
        id: 2,
        title: "Minecraft",
        genre: "Sandbox • Survival",
        image:
            "https://habrastorage.org/getpro/habr/upload_files/62f/930/2df/62f9302dffe9571da0995eb4276b31b2.jpg",
        rating: "9.2",
    },
    {
        id: 3,
        title: "Elden Ring",
        genre: "Action RPG",
        image:
            "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=700&q=80",
        rating: "9.7",
    },
];

const achievements = [
    {
        icon: <Target size={21} />,
        title: "Первый шаг",
        description: "Посетил свой игровой профиль",
        color: "purple",
    },
    {
        icon: <Zap size={21} />,
        title: "На старте",
        description: "Начал своё путешествие",
        color: "orange",
    },
    {
        icon: <Trophy size={21} />,
        title: "Коллекционер",
        description: "Собрал коллекцию любимых игр",
        color: "blue",
    },
];

function Profile({ currentUser, onLogout }) {
    const [nickname, setNickname] = useState(
        currentUser?.nickname || "GameMaster"
    );
    const [draftNickname, setDraftNickname] = useState("GameMaster");
    const [editing, setEditing] = useState(false);
    const [favoriteGames, setFavoriteGames] = useState(initialGames);

    const saveNickname = () => {
        const trimmed = draftNickname.trim();

        if (!trimmed) return;

        setNickname(trimmed);
        setDraftNickname(trimmed);

        const updatedUser = {
            ...currentUser,
            nickname: trimmed,
        };

        localStorage.setItem(
            "gamezone_current_user",
            JSON.stringify(updatedUser)
        );

        const users = JSON.parse(
            localStorage.getItem("gamezone_users") || "[]"
        );

        const updatedUsers = users.map((user) =>
            user.id === currentUser.id
                ? { ...user, nickname: trimmed }
                : user
        );

        localStorage.setItem(
            "gamezone_users",
            JSON.stringify(updatedUsers)
        );

        setEditing(false);
    };

    const removeFavorite = (gameId) => {
        setFavoriteGames((games) =>
            games.filter((game) => game.id !== gameId)
        );
    };

    return (
        <main className="profile-page">
            <section className="profile-heading">
                <div>
                    <h1>Мой профиль</h1>
                    <p>Твоя игровая история начинается здесь.</p>
                </div>

                <button
                    className="profile-settings"
                    onClick={() =>
                        document
                            .getElementById("profile-nickname")
                            ?.focus()
                    }
                >
                    <Settings size={18} />
                    Настройки
                </button>
            </section>

            <section className="profile-hero">
                <div className="profile-cover" />

                <div className="profile-main-info">
                    <div className="profile-avatar">
                        <UserRound size={43} />
                        <span className="profile-online" />
                    </div>

                    <div className="profile-identity">
                        {editing ? (
                            <div className="nickname-editor">
                                <input
                                    id="profile-nickname"
                                    value={draftNickname}
                                    maxLength={24}
                                    onChange={(event) =>
                                        setDraftNickname(event.target.value)
                                    }
                                    onKeyDown={(event) => {
                                        if (event.key === "Enter") saveNickname();
                                        if (event.key === "Escape") {
                                            setDraftNickname(nickname);
                                            setEditing(false);
                                        }
                                    }}
                                    autoFocus
                                />

                                <button
                                    className="nickname-save"
                                    onClick={saveNickname}
                                    aria-label="Сохранить никнейм"
                                >
                                    <Check size={18} />
                                </button>
                            </div>
                        ) : (
                            <div className="profile-name-row">
                                <h2>{nickname}</h2>
                                <button
                                    className="nickname-edit"
                                    onClick={() => setEditing(true)}
                                    aria-label="Изменить никнейм"
                                >
                                    <Pencil size={15} />
                                </button>
                            </div>
                        )}

                        <p>Игрок GameZone</p>

                        <div className="profile-member-date">
                            <CalendarDays size={14} />
                            Участник сообщества
                        </div>
                        <p className="profile-email">{currentUser?.email}</p>

                        <button className="profile-logout" onClick={onLogout}>
                            Выйти из аккаунта
                        </button>
                    </div>

                    <div className="profile-level">
                        <span>Уровень</span>
                        <strong>01</strong>
                        <div className="level-progress">
                            <span />
                        </div>
                        <small>100 / 1000 XP</small>
                    </div>
                </div>
            </section>

            <section className="profile-stats">
                <article className="profile-stat-card">
                    <div className="profile-stat-icon purple">
                        <Gamepad2 size={22} />
                    </div>
                    <div>
                        <span>Любимые игры</span>
                        <strong>{favoriteGames.length}</strong>
                    </div>
                </article>

                <article className="profile-stat-card">
                    <div className="profile-stat-icon orange">
                        <Trophy size={22} />
                    </div>
                    <div>
                        <span>Достижения</span>
                        <strong>{achievements.length}</strong>
                    </div>
                </article>

                <article className="profile-stat-card">
                    <div className="profile-stat-icon blue">
                        <Clock3 size={22} />
                    </div>
                    <div>
                        <span>Время в играх</span>
                        <strong>0 ч</strong>
                    </div>
                </article>

                <article className="profile-stat-card">
                    <div className="profile-stat-icon pink">
                        <Star size={22} />
                    </div>
                    <div>
                        <span>Рейтинг профиля</span>
                        <strong>Новичок</strong>
                    </div>
                </article>
            </section>

            <div className="profile-content-grid">
                <section className="profile-panel favorite-panel">
                    <div className="profile-panel-heading">
                        <div>
                            <h2>Любимые игры</h2>
                            <p>Игры, которые тебе нравятся</p>
                        </div>
                        <Gamepad2 size={23} />
                    </div>

                    {favoriteGames.length > 0 ? (
                        <div className="favorite-games-list">
                            {favoriteGames.map((game) => (
                                <article className="favorite-game" key={game.id}>
                                    <img src={game.image} alt={game.title} />

                                    <div className="favorite-game-info">
                                        <h3>{game.title}</h3>
                                        <p>{game.genre}</p>
                                        <span>
                      <Star size={14} fill="currentColor" />
                                            {game.rating}
                    </span>
                                    </div>

                                    <button
                                        className="favorite-remove"
                                        onClick={() => removeFavorite(game.id)}
                                        title="Убрать из избранного"
                                        aria-label={`Убрать ${game.title} из избранного`}
                                    >
                                        <Star size={18} fill="currentColor" />
                                    </button>
                                </article>
                            ))}
                        </div>
                    ) : (
                        <div className="profile-empty">
                            <Gamepad2 size={32} />
                            <p>В избранном пока нет игр.</p>
                        </div>
                    )}

                    <p className="profile-demo-note">
                        Демонстрационная коллекция — можешь убрать игры из списка.
                    </p>
                </section>

                <section className="profile-panel achievements-panel">
                    <div className="profile-panel-heading">
                        <div>
                            <h2>Достижения</h2>
                            <p>Твои игровые награды</p>
                        </div>
                        <Trophy size={23} />
                    </div>

                    <div className="achievements-list">
                        {achievements.map((achievement) => (
                            <article
                                className="achievement-item"
                                key={achievement.title}
                            >
                                <div
                                    className={`achievement-icon ${achievement.color}`}
                                >
                                    {achievement.icon}
                                </div>

                                <div>
                                    <h3>{achievement.title}</h3>
                                    <p>{achievement.description}</p>
                                </div>

                                <Check className="achievement-check" size={17} />
                            </article>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}

export default Profile;