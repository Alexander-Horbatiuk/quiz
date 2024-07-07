import React from 'react';
import { RadioButtonGroup } from '../../../GlobalStyles/buttons';

export const ButtonVariable = ({
    onClick,
    options,
    value,
    stateRadio,
    onChange,
    maxSelection,
    maxWidth,
    flexDirection,
    sizeEnoji,
    btnRadius,
    sizeLabel,
    ...props
}) => {
    const handleCheckboxChange = (selectedValue) => {
        let newValue;

        if (Array.isArray(value)) {
            if (value.includes(selectedValue)) {
                newValue = value.filter((val) => val !== selectedValue);
            } else {
                if (!maxSelection || value.length < maxSelection) {
                    newValue = [...value, selectedValue];
                } else {
                    newValue = value; // Если достигнут лимит, не изменяем значение
                }
            }
        } else {
            newValue = [selectedValue];
        }

        onChange(newValue);

        if (onClick && (!maxSelection || newValue.length === maxSelection)) {
            onClick(newValue);
        }
    };

    return (
        <RadioButtonGroup
            flexDirection={flexDirection}
            maxWidth={maxWidth}
            options={options}
            selectedValue={value}
            hideRadio={!stateRadio}
            onChange={handleCheckboxChange}
            sizeEnoji={sizeEnoji}
            btnRadius={btnRadius}
            sizeLabel={sizeLabel}
            {...props}
        />
    );
};

//maxSelection,  - не обязательно передавать если вы хотите чтобы выбор был равен 1 элементу.
//hideRadio,  - не обязательно передавать.
