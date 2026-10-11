
import { NavLink, useNavigate } from "react-router-dom";
import {
  Search,
  Gamepad2,
  UserRound,
  Menu,
  LogOut,
} from "lucide-react";
import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const currentUser = (() => {
    try {
      return JSON.parse(
          localStorage.getItem("gamezone_current_user") || "null"
      );
    } catch {
      return null;
    }
  })();

  const handleLogout = () => {
    localStorage.removeItem("gamezone_current_user");
    setMenuOpen(false);
    navigate("/auth");
    window.location.reload();
  };

  return (
      <header className="navbar">
        <NavLink to="/" className="navbar-logo">
          <Gamepad2 size={30} strokeWidth={2.5} />
          <span>
          GAME<span className="logo-accent">ZONE</span>
        </span>
        </NavLink>

        <nav className={`navbar-links ${menuOpen ? "menu-open" : ""}`}>
          <NavLink to="/" end onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>

          <NavLink to="/games" onClick={() => setMenuOpen(false)}>
            Games
          </NavLink>

          <NavLink to="/news" onClick={() => setMenuOpen(false)}>
            News
          </NavLink>
        </nav>

        <div className="navbar-actions">
          <button
              className="navbar-search"
              aria-label="Search"
              onClick={() => navigate("/games")}
          >
            <Search size={20} />
            <span>Search games...</span>
            <kbd>/</kbd>
          </button>

          {currentUser ? (
              <>
                <NavLink
                    to="/profile"
                    className="navbar-profile"
                    aria-label="Profile"
                    title={currentUser.nickname}
                >
                  <UserRound size={20} />
                  <span className="navbar-username">
                {currentUser.nickname}
              </span>
                </NavLink>

                <button
                    className="navbar-logout"
                    onClick={handleLogout}
                    title="Выйти из аккаунта"
                    aria-label="Выйти из аккаунта"
                >
                  <LogOut size={19} />
                </button>
              </>
          ) : (
              <NavLink to="/auth" className="navbar-login">
                <UserRound size={19} />
                <span>Войти</span>
              </NavLink>
          )}

          <button
              className="navbar-menu"
              aria-label="Открыть меню"
              onClick={() => setMenuOpen(!menuOpen)}
          >
            <Menu size={24} />
          </button>
        </div>
      </header>
  );
}

export default Navbar;