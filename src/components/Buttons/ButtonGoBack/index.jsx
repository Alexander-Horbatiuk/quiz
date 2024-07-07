import React, { useContext } from 'react';
import { AppContext } from '../../../Context';
import { BtnGoBack } from '../../../GlobalStyles/buttons';

export const ButtonGoBack = ({ onClick, children, ...props }) => {
    const { prevStep, currentStep } = useContext(AppContext);
    const currentStepPlus = currentStep + 1;

    return (
        currentStepPlus > 1 &&
        currentStepPlus <= 5 && (
            <BtnGoBack onClick={prevStep} {...props}>
                {children}
            </BtnGoBack>
        )
    );
};
