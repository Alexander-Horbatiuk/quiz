import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../../../Context';
import { Wrapper, Title } from '../../../GlobalStyles';
import { ButtonVariable } from '../../Buttons/ButtonVariable';

export const Age = () => {
    const { nextStep, ages, t } = useContext(AppContext);
    const [selectedValue, setSelectedValue] = useState(
        localStorage.getItem('age') || ''
    );

    useEffect(() => {
        // Проверяем localStorage при загрузке компонента
        const storedValue = localStorage.getItem('age');
        if (storedValue) {
            setSelectedValue(storedValue);
        }
    }, []);
    const handleChange = (value) => {
        // Обновляем выбранное значение
        setSelectedValue(value);
        localStorage.setItem('age', value);
        // Всегда вызываем nextStep
        nextStep();
    };

    const handleRadioClick = (value) => {
        if (selectedValue === value) {
            nextStep();
        }
        setSelectedValue(value);
        localStorage.setItem('age', value);
    };

    return (
        <Wrapper>
            <Title>{t('StepAgeTitle')}</Title>
            <ButtonVariable
                options={ages}
                value={selectedValue}
                onChange={handleChange}
                onClick={handleRadioClick}
            />
        </Wrapper>
    );
};
