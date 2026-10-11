
import { Link, useParams } from "react-router-dom";
import {
    ArrowLeft,
    CalendarDays,
    Tag,
    Newspaper,
} from "lucide-react";
import "./NewsDetails.css";

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
        content: [
            "Minecraft продолжает развиваться благодаря новым идеям и улучшениям игрового процесса. Игроки ценят свободу творчества, исследование мира и возможность создавать собственные проекты.",
            "Обновления могут затрагивать игровые механики, генерацию мира, предметы и исправление ошибок. Благодаря этому знакомый мир получает новые возможности для исследования.",
            "Следи за официальными объявлениями разработчиков, чтобы узнавать подтверждённые подробности будущих обновлений.",
        ],
    },
    {
        id: 2,
        category: "Индустрия",
        date: "9 октября 2026",
        title: "Что происходит в игровой индустрии?",
        description:
            "Главные события, новые проекты и интересные анонсы этой недели.",
        image:
            "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80",
        content: [
            "Игровая индустрия объединяет разработчиков, издателей, стримеров и миллионы игроков по всему миру.",
            "Новые проекты, игровые презентации и технологии постоянно меняют способы создания и прохождения игр. Особенно большое внимание привлекают многопользовательские проекты и открытые миры.",
            "Перед публикацией конкретных новостей важно проверять информацию по официальным источникам.",
        ],
    },
    {
        id: 3,
        category: "Киберспорт",
        date: "8 октября 2026",
        title: "Киберспорт продолжает расти",
        description:
            "Турниры собирают всё больше зрителей, а команды готовятся к новым соревнованиям.",
        image:
            "https://images.unsplash.com/photo-1547394765-185e1e68f34e?auto=format&fit=crop&w=1200&q=80",
        content: [
            "Киберспорт строится на командной работе, регулярных тренировках и умении принимать решения под давлением.",
            "Турниры по популярным соревновательным играм привлекают зрителей благодаря сильным командам, напряжённым матчам и профессиональным трансляциям.",
            "Для начинающих игроков особенно полезны анализ собственных ошибок, тренировка механических навыков и общение с командой.",
        ],
    },
    {
        id: 4,
        category: "Игры",
        date: "7 октября 2026",
        title: "Во что поиграть на выходных?",
        description:
            "Подборка игр, которые помогут отлично провести свободное время.",
        image:
            "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80",
        content: [
            "Если хочется исследовать мир и строить, попробуй Minecraft. Для любителей сложных сражений подойдёт Elden Ring.",
            "Поклонники гонок могут выбрать Forza Horizon 5, а тем, кто предпочитает сюжетные приключения, стоит обратить внимание на The Witcher 3 и Red Dead Redemption 2.",
            "Выбирай игру под настроение, доступное время и возможности своего компьютера.",
        ],
    },
    {
        id: 5,
        category: "Технологии",
        date: "6 октября 2026",
        title: "Как меняется игровой мир",
        description:
            "Новые технологии делают игры реалистичнее и открывают больше возможностей.",
        image:
            "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=1200&q=80",
        content: [
            "Современные игровые технологии развиваются в нескольких направлениях: графика, физика, искусственный интеллект и производительность.",
            "Технологии масштабирования изображения и генерации кадров помогают повышать частоту кадров на совместимом оборудовании. При этом результат зависит от конкретной игры и устройства.",
            "Разработчикам также доступны инструменты, позволяющие создавать более сложные виртуальные миры.",
        ],
    },
    {
        id: 6,
        category: "Обновления",
        date: "5 октября 2026",
        title: "Важные обновления популярных игр",
        description:
            "Разбираемся, какие изменения могут заинтересовать игроков.",
        image:
            "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&w=1200&q=80",
        content: [
            "Обновления игр могут добавлять новый контент, исправлять ошибки и изменять баланс персонажей или предметов.",
            "Перед установкой обновления полезно ознакомиться со списком изменений и системными требованиями.",
            "Конкретные даты выхода и содержание обновлений лучше проверять на официальных страницах соответствующих игр.",
        ],
    },
];

function NewsDetails() {
    const { id } = useParams();
    const news = newsData.find((item) => item.id === Number(id));

    if (!news) {
        return (
            <main className="news-details-page">
                <div className="news-details-not-found">
                    <Newspaper size={48} />
                    <h1>Новость не найдена</h1>
                    <Link to="/news" className="news-details-back">
                        <ArrowLeft size={18} />
                        Ко всем новостям
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="news-details-page">
            <Link to="/news" className="news-details-back">
                <ArrowLeft size={18} />
                Ко всем новостям
            </Link>

            <article className="news-article">
                <img
                    className="news-article-image"
                    src={news.image}
                    alt={news.title}
                />

                <div className="news-article-content">
                    <div className="news-article-meta">
            <span>
              <Tag size={15} />
                {news.category}
            </span>
                        <span>
              <CalendarDays size={15} />
                            {news.date}
            </span>
                    </div>

                    <h1>{news.title}</h1>
                    <p className="news-article-lead">{news.description}</p>

                    <div className="news-article-body">
                        {news.content.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>

                    <Link to="/news" className="news-details-back bottom-back">
                        <ArrowLeft size={18} />
                        Вернуться к новостям
                    </Link>
                </div>
            </article>
        </main>
    );
}

export default NewsDetails;