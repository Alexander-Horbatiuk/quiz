import React from 'react';
import { AppNav } from './Navigation/AppNav';
import { ContextProvider } from './Context';
import { ProgressBar } from './Components/ProgressBar';
import { ButtonGoBack } from './Components/Buttons/ButtonGoBack';
import { AppDiv, AppContent } from './GlobalStyles';

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
