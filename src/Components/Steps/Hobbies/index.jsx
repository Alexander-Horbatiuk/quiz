import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../../../Context/index.js';
import { Title, SubTitle, Wrapper } from '../../../GlobalStyles/index.js';
import { ButtonToGo } from '../../Buttons/ButtonToGo/index.jsx';
import { ButtonVariable } from '../../Buttons/ButtonVariable/index.jsx';

export const Hobbies = () => {
    const {
        t,
        years,
        nextStep,
        storedAge,
        hobiesYoung,
        hobiesMature,
        hobbiesElderly,
        hobbiesOld,
    } = useContext(AppContext);
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

    const getTopics = () => {
        switch (storedAge) {
            case `18-29 ${years}`:
                return hobiesYoung;
            case `30-39 ${years}`:
                return hobiesMature;
            case `40-49 ${years}`:
                return hobbiesElderly;
            case '50+':
                return hobbiesOld;
            default:
                return hobiesYoung;
        }
    };

    return (
        <Wrapper>
            <Title>{t('StepHobbiesTitle')}</Title>
            <SubTitle>{t('StepHobbiesSubTitle')}</SubTitle>

            <>
                <ButtonVariable
                    onChange={handleChange}
                    value={selectedValue}
                    options={getTopics()}
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
