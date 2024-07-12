import React from 'react';
import { BtnToGo } from '../../../GlobalStyles/buttons.js';

export const ButtonToGo = ({ onClick, children, ...props }) => {
    return (
        <BtnToGo onClick={onClick} {...props}>
            {children}
        </BtnToGo>
    );
};
