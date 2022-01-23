import { Header } from './components/Header/header';
import { Routes, Route } from 'react-router-dom';
import { RecipesPage } from './routes/RecipesPage';
import { HomePage } from './routes/HomePage';
import { LoginPage } from './routes/LoginPage';
import { ProfilePage } from './routes/ProfilePage';
import { SignUp } from './routes/RegistrationPage';
import { PrivateRoute } from "./hocks/PrivateRoute";
import { useEffect, useState } from 'react';
import { auth } from './firebase/index';
import './appStyles.css';
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
            <div style={{minHeight: 'calc(100vh - 80px)'}}>
            <Header />
            <div className="app">
                <Routes>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/recipes/:recipeId" element={<RecipesPage />} />
                    <Route path="/profile/*" element={
                        <PrivateRoute authed={authed}>
                            <ProfilePage />
                        </PrivateRoute>
                    } />
                    <Route path="/*" element={<HomePage />} />
                </Routes>
            </div>
            </div>
            <Footer />
        </div>
    );
}


