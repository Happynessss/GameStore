
import { useState } from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Games from "./pages/Games";
import News from "./pages/News";
import Profile from "./pages/Profile";
import Auth from "./pages/Auth";
import GameDetails from "./pages/GameDetails";
import NewsDetails from "./pages/NewsDetails";
import Footer from "./components/Footer";

function App() {
    const [currentUser, setCurrentUser] = useState(() => {
        try {
            return JSON.parse(
                localStorage.getItem("gamezone_current_user") || "null"
            );
        } catch {
            return null;
        }
    });

    const handleLogout = () => {
        localStorage.removeItem("gamezone_current_user");
        setCurrentUser(null);
    };

    return (
        <BrowserRouter>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/games" element={<Games />} />
                <Route path="/news" element={<News />} />
                <Route path="/games/:id" element={<GameDetails />} />
                <Route path="/news" element={<News />} />
                <Route path="/news/:id" element={<NewsDetails />} />
                <Route
                    path="/auth"
                    element={
                        currentUser ? (
                            <Navigate to="/profile" replace />
                        ) : (
                            <Auth onLogin={setCurrentUser} />
                        )
                    }
                />

                <Route
                    path="/profile"
                    element={
                        currentUser ? (
                            <Profile
                                currentUser={currentUser}
                                onLogout={handleLogout}
                            />
                        ) : (
                            <Navigate to="/auth" replace />
                        )
                    }
                />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;