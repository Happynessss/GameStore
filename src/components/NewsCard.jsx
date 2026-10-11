
import { Link } from "react-router-dom";
import { ArrowUpRight, CalendarDays } from "lucide-react";
import "./NewsCard.css";

function NewsCard({ news }) {
    return (
        <article className="news-card">
            <Link
                to={`/news/${news.id}`}
                className="news-card-image"
                aria-label={`Читать: ${news.title}`}
            >
                <img
                    src={news.image}
                    alt={news.title}
                    loading="lazy"
                />
                <span className="news-card-category">
          {news.category}
        </span>
            </Link>

            <div className="news-card-content">
                <div className="news-card-date">
                    <CalendarDays size={15} />
                    <span>{news.date}</span>
                </div>

                <h3>
                    <Link to={`/news/${news.id}`}>
                        {news.title}
                    </Link>
                </h3>

                <p>{news.description}</p>

                <Link
                    to={`/news/${news.id}`}
                    className="news-card-read"
                >
                    Читать далее
                    <ArrowUpRight size={17} />
                </Link>
            </div>
        </article>
    );
}

export default NewsCard;