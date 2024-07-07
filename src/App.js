import React from 'react';
import { AppNav } from './Navigation/AppNav';
import { ContextProvider } from './Context';
import { ProgressBar } from './components/ProgressBar';
import { ButtonGoBack } from './components/Buttons/ButtonGoBack';
import styled from 'styled-components';

export const App = () => {
    return (
        <AppDiv className="App">
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

const AppDiv = styled.div`
    text-align: center;
    background: #1f002b;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const AppContent = styled.div`
    max-width: 360px;
    width: 100%;
    outline: 3px solid #ccc;
    position: relative;
    padding: 10px;
    box-sizing: border-box;
`;
