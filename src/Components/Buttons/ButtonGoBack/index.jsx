import React, { useContext } from 'react';
import { AppContext } from '../../../Context/index.js';
import { BtnGoBack } from '../../../GlobalStyles/buttons.js';

export const ButtonGoBack = ({ onClick, children, ...props }) => {
    const { prevStep, currentStep } = useContext(AppContext);
    const currentStepPlus = currentStep + 1;

    return (
        currentStepPlus > 2 &&
        currentStepPlus <= 5 && (
            <BtnGoBack onClick={prevStep} {...props}>
                {children}
            </BtnGoBack>
        )
    );
};
