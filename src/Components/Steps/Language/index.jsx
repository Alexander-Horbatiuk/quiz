import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../../Context/index.js';
import { ButtonVariable } from '../../Buttons/ButtonVariable/index.jsx';
import { Wrapper, Title, SubTitle } from '../../../GlobalStyles/index.js';

export const Language = () => {
    const { changeLanguage, nextStep, optionLanguages, t } =
        useContext(AppContext);
    const [selectedLanguages, setSelectedLanguages] = useState(
        localStorage.getItem('language') || [],
    );

    const handleChange = (language) => {
        setSelectedLanguages(language); // Обновляем выбранный язык
        changeLanguage(language); // Вызываем функцию смены языка
        nextStep();

        localStorage.setItem('language', language);
    };

    useEffect(() => {
        const storedValue = localStorage.getItem('language');
        if (storedValue) {
            setSelectedLanguages(storedValue);
        }
    }, []);

    return (
        <Wrapper>
            <Title>{t('StepOneTitle')}</Title>
            <SubTitle>{t('SubTitle')}</SubTitle>

            <ButtonVariable
                options={optionLanguages}
                value={selectedLanguages}
                onChange={handleChange}
                maxSelection={1}
                stateRadio={false}
            />
        </Wrapper>
    );
};
