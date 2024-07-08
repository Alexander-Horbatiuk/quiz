import { createContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { saveAs } from 'file-saver';

import {
    optionsAge,
    optionsGender,
    optionLanguages,
    optionsBooks,
    optionsHobbiesYoung,
    optionsHobbiesMature,
    optionsHobbiesElderly,
    optionsHobbiesOld,
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
        setTimeout(() => {
            localStorage.setItem('currentStep', currentStep);
        }, 500);
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

    const storedAge = localStorage.getItem('age');

    const getStoredData = () => {
        return [
            { order: 1, title: t('StepOneTitle'), key: 'single-select' },
            { order: 2, title: t('StepGenderTitle'), key: 'gender' },
            { order: 3, title: t('StepAgeTitle'), key: 'age' },
            { order: 4, title: t('StepBookTitle'), key: 'books' },
            { order: 5, title: t('StepHobbiesTitle'), key: 'hobbies' },
            { order: 6, title: t('StepEmailTittle'), key: 'email' }
        ].map(({ order, title, key }) => ({
            order: String(order),
            title,
            type: key,
            answer: localStorage.getItem(key) || ''
        }));
    };

    const data = getStoredData();

    const years = t('StepAgeYears');
    const ages = optionsAge(years);
    const gender = optionsGender(t);
    const books = optionsBooks(t);
    const hobiesYoung = optionsHobbiesYoung(t);
    const hobiesMature = optionsHobbiesMature(t);
    const hobbiesElderly = optionsHobbiesElderly(t);
    const hobbiesOld = optionsHobbiesOld(t);

    const convertToCSV = (data) => {
        const csvArray = [];
        // Добавляем заголовки
        csvArray.push(Object.keys(data[0]).join(','));

        // Добавляем данные
        data.forEach((item) => {
            const row = Object.values(item)
                .map((val) => `"${val}"`)
                .join(',');
            csvArray.push(row);
        });

        return csvArray.join('\n');
    };

    const generateCSV = () => {
        const csvContent = convertToCSV(data);
        const blob = new Blob([csvContent], {
            type: 'text/csv;charset=utf-8;'
        });
        saveAs(blob, 'data.csv');
    };

    const model = {
        changeLanguage,
        generateCSV,
        nextStep,
        prevStep,
        setUser,
        optionLanguages,
        currentStep,
        hobiesYoung,
        hobiesMature,
        hobbiesElderly,
        hobbiesOld,
        storedAge,
        gender,
        books,
        years,
        ages,
        user,
        t
    };

    return <AppContext.Provider value={model}>{children}</AppContext.Provider>;
};
