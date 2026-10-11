
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Gamepad2, Mail, LockKeyhole, UserRound } from "lucide-react";
import "./Auth.css";

function Auth({ onLogin }) {
    const [isRegister, setIsRegister] = useState(false);
    const [nickname, setNickname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        setError("");

        const users = JSON.parse(
            localStorage.getItem("gamezone_users") || "[]"
        );

        if (isRegister) {
            if (nickname.trim().length < 3) {
                setError("Ник должен содержать минимум 3 символа.");
                return;
            }

            if (password.length < 6) {
                setError("Пароль должен содержать минимум 6 символов.");
                return;
            }

            const exists = users.some(
                (user) => user.email.toLowerCase() === email.trim().toLowerCase()
            );

            if (exists) {
                setError("Аккаунт с таким email уже существует.");
                return;
            }

            const newUser = {
                id: Date.now(),
                nickname: nickname.trim(),
                email: email.trim().toLowerCase(),
                password,
            };

            users.push(newUser);
            localStorage.setItem("gamezone_users", JSON.stringify(users));

            const session = {
                id: newUser.id,
                nickname: newUser.nickname,
                email: newUser.email,
            };

            localStorage.setItem("gamezone_current_user", JSON.stringify(session));
            onLogin(session);
            navigate("/profile");
            return;
        }

        const user = users.find(
            (item) =>
                item.email === email.trim().toLowerCase() &&
                item.password === password
        );

        if (!user) {
            setError("Неверный email или пароль.");
            return;
        }

        const session = {
            id: user.id,
            nickname: user.nickname,
            email: user.email,
        };

        localStorage.setItem("gamezone_current_user", JSON.stringify(session));
        onLogin(session);
        navigate("/profile");
    };

    return (
        <main className="auth-page">
            <section className="auth-card">
                <div className="auth-logo">
                    <Gamepad2 size={34} />
                </div>

                <h1>{isRegister ? "Создать аккаунт" : "С возвращением!"}</h1>

                <p className="auth-subtitle">
                    {isRegister
                        ? "Присоединяйся к сообществу GameZone."
                        : "Войди в свой аккаунт GameZone."}
                </p>

                <form onSubmit={handleSubmit} className="auth-form">
                    {isRegister && (
                        <label>
                            Никнейм
                            <div className="auth-input">
                                <UserRound size={18} />
                                <input
                                    type="text"
                                    placeholder="Твой ник"
                                    value={nickname}
                                    onChange={(event) => setNickname(event.target.value)}
                                    minLength={3}
                                    maxLength={24}
                                    required
                                />
                            </div>
                        </label>
                    )}

                    <label>
                        Email
                        <div className="auth-input">
                            <Mail size={18} />
                            <input
                                type="email"
                                placeholder="example@email.com"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                required
                            />
                        </div>
                    </label>

                    <label>
                        Пароль
                        <div className="auth-input">
                            <LockKeyhole size={18} />
                            <input
                                type="password"
                                placeholder="Минимум 6 символов"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                                minLength={isRegister ? 6 : undefined}
                                required
                            />
                        </div>
                    </label>

                    {error && <p className="auth-error">{error}</p>}

                    <button type="submit" className="auth-submit">
                        {isRegister ? "Зарегистрироваться" : "Войти"}
                    </button>
                </form>

                <div className="auth-switch">
                    {isRegister ? "Уже есть аккаунт?" : "Ещё нет аккаунта?"}
                    <button
                        type="button"
                        onClick={() => {
                            setIsRegister(!isRegister);
                            setError("");
                        }}
                    >
                        {isRegister ? "Войти" : "Создать аккаунт"}
                    </button>
                </div>

                <Link to="/" className="auth-home">
                    Вернуться на главную
                </Link>
            </section>
        </main>
    );
}

export default Auth;