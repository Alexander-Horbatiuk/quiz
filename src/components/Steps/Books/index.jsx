import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../../../Context';
import { ButtonToGo } from '../../Buttons/ButtonGoTo';
import { Wrapper, Title } from '../../../GlobalStyles';
import { ButtonVariable } from '../../Buttons/ButtonVariable';

export const Books = () => {
    const { nextStep, books, t } = useContext(AppContext);

    const [selectedValue, setSelectedValue] = useState([]);

    useEffect(() => {
        const storedValue = localStorage.getItem('books');
        if (storedValue) {
            setSelectedValue(storedValue.split(','));
        } else {
            setSelectedValue([]);
        }
    }, []);

    const handleChange = (value) => {
        setSelectedValue(value);
        localStorage.setItem('books', value.join(','));
    };

    return (
        <Wrapper>
            <Title>{t('StepBookTitle')}</Title>

            <ButtonVariable
                options={books}
                value={selectedValue}
                onChange={handleChange}
                stateRadio={true} // Указываем, что это радиокнопки
                maxSelection={2}
            />
            <ButtonToGo disabled={selectedValue.length < 2} onClick={nextStep}>
                {t('ButtonNext')}
            </ButtonToGo>
        </Wrapper>
    );
};
