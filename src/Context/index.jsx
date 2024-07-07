import { createContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import {
    optionsAge,
    optionsGender,
    optionLanguages,
    optionsBooks,
    optionsHobbies,
    steps
} from '../constants';

export const AppContext = createContext(null);

export const ContextProvider = ({ children }) => {
    const { i18n, t } = useTranslation();
    const navigate = useNavigate();
    const [user, setUser] = useState('');
    const [currentStep, setCurrentStep] = useState(() => {
        const savedStep = localStorage.getItem('currentStep');
        return savedStep ? parseInt(savedStep, 10) : 0;
    });

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    useEffect(() => {
        navigate(steps[currentStep]);
        localStorage.setItem('currentStep', currentStep);
    }, [currentStep, navigate]);

    const nextStep = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        }
    };

    const prevStep = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    const years = t('StepAgeYears');
    const ages = optionsAge(years);
    const gender = optionsGender(t);
    const books = optionsBooks(t);
    const hobies = optionsHobbies(t);

    const model = {
        changeLanguage,
        nextStep,
        prevStep,
        setUser,
        optionLanguages,
        currentStep,
        gender,
        hobies,
        books,
        ages,
        user,
        t
    };

    return <AppContext.Provider value={model}>{children}</AppContext.Provider>;
};
