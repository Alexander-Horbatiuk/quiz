import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Language } from '../components/Steps/Language';
import { Age } from '../components/Steps/Age';
import { Gender } from '../components/Steps/Gender';
import { Books } from '../components/Steps/Books';
import { Hobbies } from '../components/Steps/Hobbies';
import { Loader } from '../components/Loader';
import { Email } from '../components/Steps/Email';
import { GlobalStyle } from '../GlobalStyles';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

export const AppNav = ({ open }) => {
    const location = useLocation();

    console.log(location.key, 'location');
    return (
        <div>
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
                    </Routes>
                </CSSTransition>
            </TransitionGroup>
        </div>
    );
};
