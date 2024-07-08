import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../../Context';
import { ButtonVariable } from '../../Buttons/ButtonVariable';
import { Wrapper, Title, SubTitle } from '../../../GlobalStyles';

export const Language = () => {
    const { changeLanguage, nextStep, optionLanguages, t } =
        useContext(AppContext);
    const [selectedLanguages, setSelectedLanguages] = useState(
        localStorage.getItem('single-select') || []
    );

    const handleChange = (language) => {
        setSelectedLanguages(language); // Обновляем выбранный язык
        changeLanguage(language); // Вызываем функцию смены языка
        nextStep();

        localStorage.setItem('single-select', language);
    };

    useEffect(() => {
        const storedValue = localStorage.getItem('single-select');
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
