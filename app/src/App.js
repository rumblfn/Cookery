import { Header } from './components/header';
import {Routes, Route} from 'react-router-dom';
import { HomePage } from './routes/HomePage';
import { LoginPage } from './routes/LoginPage';
import { ProfilePage } from './routes/ProfilePage';
import { SignUp } from './routes/RegistrationPage';
import './appStyles.css';

export const App = () => {
  return (
    <div className="app">
        <Header/>
        <div className="app">
            <Routes>
                <Route path="/login" element={<LoginPage />}/>
                <Route path="/signup" element={<SignUp />}/>
                <Route path="/profile" element={<ProfilePage />}/>
                <Route path="/*" element={<HomePage />}/>
            </Routes>
        </div>
    </div>
);
}