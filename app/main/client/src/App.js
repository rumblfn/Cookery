import { Header } from './components/Header/header';
import { Routes, Route } from 'react-router-dom';
import { RecipesPage } from './routes/RecipesPage';
import { HomePage } from './routes/HomePage';
import { LoginPage } from './routes/LoginPage';
import { ProfilePage } from './routes/ProfilePage';
import { SignUp } from './routes/RegistrationPage';
import { PrivateRoute } from "./hocks/PrivateRoute";
import { useEffect, useState } from 'react';
import './appStyles.css';
import { Footer } from './components/Footer/footer';
import { useSelector } from 'react-redux';


export const App = () => {
    const userIsLoged = useSelector((state) => state.user.loged)

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
                        <PrivateRoute authed={userIsLoged}>
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


