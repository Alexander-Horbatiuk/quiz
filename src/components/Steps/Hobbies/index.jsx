import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../../../Context';
import { Title, SubTitle } from '../../../GlobalStyles';
import { ButtonVariable } from '../../Buttons/ButtonVariable';

export const Hobbies = () => {
    const { nextStep, hobies, t } = useContext(AppContext);

    const [selectedGender, setSelectedGender] = useState(
        localStorage.getItem('books') || []
    );

    const handleChange = (value) => {
        setSelectedGender(value);
        localStorage.setItem('books', value);
    };

    useEffect(() => {
        const storedValue = localStorage.getItem('books');
        if (storedValue) {
            setSelectedGender(storedValue);
        }
    }, []);

    return (
        <div>
            <Title>{t('StepHobbiesTitle')}</Title>
            <SubTitle>{t('StepHobbiesSubTitle')}</SubTitle>

            <ButtonVariable
                flexDirection={'initial'}
                maxWidth={'88px'}
                sizeLabel={'13px'}
                options={hobies}
                value={selectedGender}
                onChange={handleChange}
                stateRadio={false}
                maxSelection={3}
                sizeEnoji={'25px'}
            />

            <button onClick={nextStep}>{t('ButtonNext')}</button>
        </div>
    );
};
