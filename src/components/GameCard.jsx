
import { Link } from "react-router-dom";
import { Star, ArrowUpRight } from "lucide-react";
import "./GameCard.css";

function GameCard({ game }) {
    return (
        <Link
            to={`/games/${game.id}`}
            className="catalog-card game-card-link"
            aria-label={`Подробнее об игре ${game.title}`}
        >
            <div className="catalog-image">
                <img
                    src={game.image}
                    alt={game.title}
                    loading="lazy"
                />

                <span className="catalog-rating">
          <Star size={14} fill="currentColor" />
                    {game.rating.toFixed(1)}
        </span>

                <span className="game-card-open">
          <ArrowUpRight size={19} />
        </span>
            </div>

            <div className="catalog-info">
                <div className="catalog-meta">
                    <span>{game.genre}</span>
                    <span>{game.year}</span>
                </div>

                <h3>{game.title}</h3>

                <div className="catalog-bottom">
                    <span>{game.platform}</span>
                    <span className="catalog-score">
            {game.rating >= 9 ? "Excellent" : "Great"}
          </span>
                </div>
            </div>
        </Link>
    );
}

export default GameCard;