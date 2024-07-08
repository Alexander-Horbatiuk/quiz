import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { GlobalStyle } from '../GlobalStyles';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Language } from '../Components/Steps/Language';
import { Age } from '../Components/Steps/Age';
import { Gender } from '../Components/Steps/Gender';
import { Books } from '../Components/Steps/Books';
import { Hobbies } from '../Components/Steps/Hobbies';
import { Loader } from '../Components/Steps/Loader';
import { Email } from '../Components/Steps/Email';
import { Congratulations } from '../Components/Steps/Congratulations';

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
