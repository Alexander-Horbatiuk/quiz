import React from 'react';
import { AppNav } from './Navigation/AppNav.jsx';
import { ContextProvider } from './Context/index.js';
import { ProgressBar } from './Components/ProgressBar/index.jsx';
import { ButtonGoBack } from './Components/Buttons/ButtonGoBack/index.jsx';
import { AppDiv, AppContent } from './GlobalStyles/index.js';

export const App = () => {
    return (
        <AppDiv>
            <ContextProvider>
                <AppContent>
                    <ButtonGoBack />
                    <ProgressBar />
                    <AppNav />
                </AppContent>
            </ContextProvider>
        </AppDiv>
    );
};
