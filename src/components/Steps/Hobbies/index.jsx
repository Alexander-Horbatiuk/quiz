import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../../../Context';
import { Title, SubTitle, Wrapper } from '../../../GlobalStyles';
import { ButtonToGo } from '../../Buttons/ButtonGoTo';
import { ButtonVariable } from '../../Buttons/ButtonVariable';

export const Hobbies = () => {
    const { nextStep, hobies, t } = useContext(AppContext);

    const [selectedValue, setSelectedValue] = useState([]);

    useEffect(() => {
        const storedValue = localStorage.getItem('hobbies');
        if (storedValue) {
            setSelectedValue(storedValue.split(','));
        } else {
            setSelectedValue([]);
        }
    }, []);

    const handleChange = (value) => {
        setSelectedValue(value);
        localStorage.setItem('hobbies', value.join(','));
    };

    return (
        <Wrapper>
            <Title>{t('StepHobbiesTitle')}</Title>
            <SubTitle>{t('StepHobbiesSubTitle')}</SubTitle>

            <>
                <ButtonVariable
                    onChange={handleChange}
                    value={selectedValue}
                    options={hobies}
                    maxSelection={3}
                    flexDirection={'initial'}
                    sizeEnoji={'25px'}
                    btnRadius={'50px'}
                    sizeLabel={'13px'}
                    maxWidth={'88px'}
                />

                <ButtonToGo
                    disabled={selectedValue.length !== 3}
                    onClick={nextStep}
                >
                    {t('ButtonNext')}
                </ButtonToGo>
            </>
        </Wrapper>
    );
};
