
import { Link } from "react-router-dom";
import { Gamepad2, ArrowUpRight } from "lucide-react";
import "./Footer.css";

function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-main">
                <div className="footer-brand">
                    <Link to="/" className="footer-logo">
                        <Gamepad2 size={30} strokeWidth={2.5} />
                        <span>
              GAME<span>ZONE</span>
            </span>
                    </Link>

                    <p>
                        Твой портал в мир видеоигр. Открывай новые игры,
                        следи за новостями и оставайся частью игрового сообщества.
                    </p>

                    <Link to="/games" className="footer-discover">
                        Исследовать игры
                        <ArrowUpRight size={17} />
                    </Link>
                </div>

                <div className="footer-column">
                    <h3>Навигация</h3>
                    <Link to="/">Главная</Link>
                    <Link to="/games">Игры</Link>
                    <Link to="/news">Новости</Link>
                    <Link to="/profile">Профиль</Link>
                </div>

                <div className="footer-column">
                    <h3>Популярные жанры</h3>
                    <Link to="/games">Action</Link>
                    <Link to="/games">RPG</Link>
                    <Link to="/games">Shooter</Link>
                    <Link to="/games">Racing</Link>
                </div>

                <div className="footer-column footer-contact">
                    <h3>GameZone</h3>
                    <p>Место для тех, кто любит игры.</p>
                    <Link to="/news">
                        Последние новости <ArrowUpRight size={15} />
                    </Link>
                </div>
            </div>

            <div className="footer-bottom">
                <span>© {new Date().getFullYear()} GameZone. Все права защищены.</span>
                <span className="footer-made">
          Создано для геймеров <Gamepad2 size={15} />
        </span>
            </div>
        </footer>
    );
}

export default Footer;