import React, { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../../Context/index.js';

export const ProgressBar = () => {
    const { currentStep } = useContext(AppContext);
    const currentStepPlus = currentStep + 1;
    const progress = currentStepPlus * 20;

    return (
        currentStep < 5 && (
            <ProgressBarWrapper>
                <Steps>
                    <NumStep>{currentStepPlus}</NumStep> / 5
                </Steps>
                <ProgressBarContainer>
                    <ProgressFill style={{ width: `${progress}%` }} />
                </ProgressBarContainer>
            </ProgressBarWrapper>
        )
    );
};

const ProgressBarWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
    color: #fff;
`;

const Steps = styled.span`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
`;

const NumStep = styled.span`
    color: #e4229c;
`;

const ProgressBarContainer = styled.div`
    width: 335px;
    height: 4px;
    background: #d3d3d3;
    border-radius: 5px;
    overflow: hidden;
    position: relative;
`;

const ProgressFill = styled.div`
    height: 100%;
    background: #ff69b4;
    transition: width 0.5s ease-in-out;
    border-radius: 20px;
`;
