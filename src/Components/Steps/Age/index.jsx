import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../../../Context/index.js';
import { ButtonVariable } from '../../Buttons/ButtonVariable/index.jsx';
import { Wrapper, Title } from '../../../GlobalStyles/index.js';

export const Age = () => {
    const { nextStep, ages, t } = useContext(AppContext);
    const [selectedValue, setSelectedValue] = useState(
        localStorage.getItem('age') || ''
    );

    useEffect(() => {
        const storedValue = localStorage.getItem('age');
        if (storedValue) {
            setSelectedValue(storedValue);
        }
    }, []);
    const handleChange = (value) => {
        setSelectedValue(value);
        localStorage.setItem('age', value);
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
