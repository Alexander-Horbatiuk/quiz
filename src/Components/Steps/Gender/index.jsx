import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../../../Context/index.js';
import { Wrapper, Title, SubTitle } from '../../../GlobalStyles/index.js';
import { ButtonVariable } from '../../Buttons/ButtonVariable/index.jsx';

export const Gender = () => {
    const { nextStep, gender, t } = useContext(AppContext);
    const [selectedGender, setSelectedGender] = useState(
        localStorage.getItem('gender') || []
    );

    const handleChange = (value) => {
        setSelectedGender(value);
        localStorage.setItem('gender', value);
    };

    const handleNextStep = () => {
        nextStep();
    };

    useEffect(() => {
        const storedValue = localStorage.getItem('gender');
        if (storedValue) {
            setSelectedGender(storedValue);
        }
    }, []);

    return (
        <Wrapper>
            <Title>{t('StepGenderTitle')}</Title>
            <SubTitle>{t('StepGenderSubTitle')}</SubTitle>

            <ButtonVariable
                flexDirection={'initial'}
                maxWidth={'100px'}
                options={gender}
                value={selectedGender}
                onChange={handleChange}
                stateRadio={false}
                onClick={handleNextStep}
            />
        </Wrapper>
    );
};
