import { Header } from './components/Header/header';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './routes/HomePage';
import { LoginPage } from './routes/LoginPage';
import { ProfilePage } from './routes/ProfilePage';
import { SignUp } from './routes/RegistrationPage';
import { PrivateRoute } from "./hocks/PrivateRoute";
import { useEffect, useState } from 'react';
import { auth } from './firebase/index';
import './appStyles.css';
import Recipes from './routes/Recipes/recipes.js';
import { Footer } from './components/Footer/footer';


export const App = () => {
    const [authed, setAuthed] = useState(false);


    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                setAuthed(true);
            } else {
                setAuthed(false);
            }
        })
    }, []);

    return (
        <div className="app">
            <Header />
            <div className="app">
                <Routes>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/profile" element={
                        <PrivateRoute authed={authed}>
                            <ProfilePage />
                        </PrivateRoute>
                    } />
                    <Route path="/*" element={<HomePage />} />
                    <Route path="/recipes" element={<Recipes />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
}

