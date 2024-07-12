import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Route, Routes, useLocation } from 'react-router-dom';
import { GlobalStyle } from '../GlobalStyles/index.js';
import { Language } from '../Components/Steps/Language/index.jsx';
import { Age } from '../Components/Steps/Age/index.jsx';
import { Gender } from '../Components/Steps/Gender/index.jsx';
import { Books } from '../Components/Steps/Books/index.jsx';
import { Hobbies } from '../Components/Steps/Hobbies/index.jsx';
import { Loader } from '../Components/Steps/Loader/index.jsx';
import { Email } from '../Components/Steps/Email/index.jsx';
import { Congratulations } from '../Components/Steps/Congratulations/index.jsx';

export const AppNav = () => {
    const location = useLocation();

    return (
        <>
            <GlobalStyle />
            <TransitionGroup component={null}>
                <CSSTransition
                    key={location.key}
                    classNames="fade"
                    timeout={700}
                    unmountOnExit
                >
                    <Routes location={location}>
                        <Route path="/language" element={<Language />} />
                        <Route path="/gender" element={<Gender />} />
                        <Route path="/age" element={<Age />} />
                        <Route path="/books" element={<Books />} />
                        <Route path="/hobbies" element={<Hobbies />} />
                        <Route path="/loader" element={<Loader />} />
                        <Route path="/email" element={<Email />} />
                        <Route
                            path="/congratulations"
                            element={<Congratulations />}
                        />
                    </Routes>
                </CSSTransition>
            </TransitionGroup>
        </>
    );
};
