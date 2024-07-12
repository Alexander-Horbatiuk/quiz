import { styled } from 'styled-components';

import React, { useContext } from 'react';
import { AppContext } from '../../../Context/index.js';
import { ButtonToGo } from '../../Buttons/ButtonToGo/index.jsx';
import { Wrapper, Title, SubTitle } from '../../../GlobalStyles/index.js';
import { SaveCSV } from '../../../GlobalStyles/buttons.js';

export const Congratulations = () => {
    const { t, generateCSV } = useContext(AppContext);

    const getStatusGQuiz = () => {
        localStorage.clear();
        window.location.replace('/language');
    };

    return (
        <Wrapper>
            <Title>{t('StepEmailTittle')}</Title>
            <SubTitle>{t('StepGenderSubTitle')}</SubTitle>

            <CheckIn>
                <svg
                    width="100"
                    height="100"
                    viewBox="0 0 48 48"
                    fill="none"
                    stroke="#01dd01"
                    stroke-width="3"
                    stroke-dasharray="100"
                >
                    <path d="M 12,22 L 22,31 L 36,13" stroke-dashoffset="0">
                        <animate
                            attributeName="stroke-dashoffset"
                            from="100"
                            to="0"
                            repeatCount="1"
                            dur="2s"
                        ></animate>
                    </path>
                </svg>
            </CheckIn>

            <SaveCSV onClick={generateCSV}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 1024.000000 1280.000000"
                >
                    <g
                        transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
                        fill="#fff"
                    >
                        <path d="M3230 9905 l0 -2895 -1136 -2 -1135 -3 1072 -1330 c589 -731 1524 -1891 2077 -2577 553 -687 1008 -1248 1012 -1248 6 0 511 625 3363 4165 l798 990 -1136 3 -1135 2 0 2895 0 2895 -1890 0 -1890 0 0 -2895z" />
                        <path d="M0 810 l0 -810 5120 0 5120 0 0 810 0 810 -5120 0 -5120 0 0 -810z" />
                    </g>
                </svg>
                {t('DownloadCvs')}
            </SaveCSV>

            <ButtonToGo onClick={() => getStatusGQuiz()}>
                {t('ButtonRetakeQuiz')}
            </ButtonToGo>
        </Wrapper>
    );
};

const CheckIn = styled.div`
    display: inline-block;
    width: 100px;
    height: 100px;
    border-radius: 50px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #cdf7cd;
`;
