import React, { useEffect, useState, useContext } from 'react';
import { AppContext } from '../../Context';
import styled from 'styled-components';
import { ButtonToGo } from '../Buttons/ButtonGoTo';

export const Loader = () => {
    const [percentage, setPercentage] = useState(0);
    const { t, prevStep } = useContext(AppContext);

    useEffect(() => {
        const interval = setInterval(() => {
            setPercentage((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + 1;
            });
        }, 50); // 5 секунд / 100 шагов = 50 мс на шаг

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <LoaderWrapper
                // className="loader"
                style={{ '--percentage': `${percentage}%` }}
                data-value={percentage}
            >
                {percentage}%
            </LoaderWrapper>
            <span>{t('Loader')}</span>
            <ButtonToGo onClick={prevStep}>next</ButtonToGo>
        </>
    );
};

const LoaderWrapper = styled.div`
    position: relative;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background: conic-gradient(
        #c71585 var(--percentage, 0%),
        #ccc var(--percentage, 0%)
    );
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 2em;
    font-weight: bold;

    &::before {
        content: attr(data-value) '%';
        position: absolute;
        z-index: 3;
    }

    &::after {
        content: '';
        width: 140px;
        height: 140px;
        position: absolute;
        border-radius: 50%;
        z-index: 2;
        background: rgb(44, 3, 85);
    }
`;