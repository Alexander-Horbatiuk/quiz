import React from 'react';
import { BtnToGo } from '../../../GlobalStyles/buttons';

export const ButtonToGo = ({ onClick, children, ...props }) => {
    return (
        <BtnToGo onClick={onClick} {...props}>
            {children}
        </BtnToGo>
    );
};
