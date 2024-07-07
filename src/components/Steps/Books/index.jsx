import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../../../Context';
import { ButtonToGo } from '../../Buttons/ButtonGoTo';
import { Wrapper, Title } from '../../../GlobalStyles';
import { ButtonVariable } from '../../Buttons/ButtonVariable';

export const Books = () => {
    const { nextStep, books, t } = useContext(AppContext);

    const [selectedValue, setSelectedValue] = useState(
        localStorage.getItem('books') || ''
    );

    useEffect(() => {
        const storedValue = localStorage.getItem('books');
        if (storedValue) {
            setSelectedValue(storedValue);
        }
    }, []);

    const handleChange = (value) => {
        setSelectedValue(value);
        localStorage.setItem('books', value);
    };

    const handleRadioClick = (value) => {
        setSelectedValue(value); // Обновляем выбранное значение
        localStorage.setItem('books', value); // Сохраняем в localStorage
    };

    return (
        <div>
            <Title>{t('StepBookTitle')}</Title>

            <Wrapper>
                <Title>{t('StepAgeTitle')}</Title>
                <ButtonVariable
                    options={books}
                    value={selectedValue}
                    onChange={handleChange} // Передаем handleSelectChange как onChange
                    stateRadio={true} // Указываем, что это радиокнопки
                    onClick={handleRadioClick}
                    maxSelection={2}
                />
            </Wrapper>

            <ButtonToGo onClick={nextStep}>{t('ButtonNext')}</ButtonToGo>
        </div>
    );
};
