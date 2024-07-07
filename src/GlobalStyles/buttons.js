import { styled, css } from 'styled-components';

export const BtnGoBack = styled.button`
    max-width: 24px;
    width: 100%;
    height: 24px;
    border: none;
    background: transparent;
    cursor: pointer;
    position: absolute;
    left: 30px;
    top: 10px;
    transition: 0.5s;

    &::before,
    &::after {
        content: '';
        position: absolute;
        width: 10px;
        height: 2px;
        background: #fff;
        top: 50%;
        left: -4px;
        transition: 0.5s;
    }

    &::before {
        transform: rotate(140deg) translate(-50%, -50%);
        border-radius: 5px 5px 0 5px;
    }

    &::after {
        transform: rotate(220deg) translate(-52%, 40%);
        border-radius: 5px 3px 5px 5px;
    }

    &:hover {
        &::before,
        &::after {
            background: #e4229c;
        }
    }
`;

export const BtnToGo = styled.button`
    max-width: 335px;
    width: 100%;
    background: #e4229c;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 50px;
    cursor: pointer;
    font-size: 17px;
    line-height: 34px;
    box-sizing: border-box;
    font-weight: 800;
    transition: 0.5s;

    &:hover {
        background: #ce1c8cdb;
    }

    &:active {
        background: #004085;
    }

    &:disabled {
        background: #007bff;
        opacity: 0.65;
        cursor: not-allowed;
    }
`;

const RadioButtonContainer = styled.div`
    max-width: 335px;
    display: flex;
    gap: 10px;
    width: 100%;
    flex-direction: ${(props) => props.flexDirection || 'column'};
`;

const RadioButtonWrapper = styled.label`
    max-width: ${(props) => props.maxWidth || '335px'};
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: ${(props) => (props.emoji ? 'column' : 'initial')};
    background: ${(props) => (props.checked ? '#e4229b69' : '#36173D')};
    padding: 21px 20px;
    box-sizing: border-box;
    text-align: start;
    border-radius: 16px;
    /* border-radius: 50px; */
    color: white;
    cursor: pointer;
    font-size: ${(props) => props.sizeLabel || '17px'};
    line-height: ${(props) => (props.sizeLabel ? props.sizeLabel : '24px')};
    transition: 0.3s;
    justify-content: space-between;
    border: 1px solid ${(props) => (props.checked ? '#E4229B' : 'transparent')};

    &:hover {
        background: ${(props) => (props.checked ? '#e4229b69' : '#e4229b12')};
        border: 1px solid
            ${(props) => (props.checked ? '#e4229b70' : '#e4229b69')};
    }

    ${(props) =>
        props.hideRadio &&
        css`
            justify-content: space-between;
            text-align: center;
        `}
`;

const Enoji = styled.span`
    font-size: ${(props) => props.sizeEnoji || '52px'};
    line-height: ${(props) => props.sizeEnoji || '72px'};
`;

const HiddenRadioButton = styled.input.attrs({ type: 'checkbox' })`
    display: none;
`;

const StyledRadioButton = styled.span`
    display: inline-block;
    width: 23px;
    height: 23px;
    border-radius: 30%;
    border: 1px solid #e4229b;
    background: ${(props) => (props.checked ? '#E4229B' : '#6D4376')};
    position: relative;

    &::after {
        content: '';
        display: ${(props) => (props.checked ? 'block' : 'none')};
        position: absolute;
        top: 4px;
        left: 8px;
        width: 5px;
        height: 10px;
        border: solid white;
        border-width: 0 2px 2px 0;
        border-radius: 2px;
        transform: rotate(45deg);
    }

    ${(props) =>
        props.hideRadio &&
        css`
            display: none;
        `}
`;

const RadioButton = ({
    label,
    checked,
    onChange,
    hideRadio,
    maxWidth,
    sizeLabel,
    emoji,
    flexDirection,
    sizeEnoji
}) => (
    <RadioButtonWrapper
        maxWidth={maxWidth}
        sizeLabel={sizeLabel}
        checked={checked}
        hideRadio={hideRadio}
        emoji={emoji}
        flexDirection={flexDirection}
    >
        {emoji && <Enoji sizeEnoji={sizeEnoji}>{emoji}</Enoji>}
        {label}
        <HiddenRadioButton checked={checked} onChange={onChange} />
        <StyledRadioButton checked={checked} hideRadio={hideRadio} />
    </RadioButtonWrapper>
);

export const RadioButtonGroup = ({
    options,
    selectedValue,
    onChange,
    hideRadio,
    maxWidth,
    sizeLabel,
    sizeEnoji,
    flexDirection
}) => (
    <RadioButtonContainer flexDirection={flexDirection}>
        {options.map((option, index) => (
            <RadioButton
                flexDirection={flexDirection}
                maxWidth={maxWidth}
                sizeLabel={sizeLabel}
                key={index}
                label={option.label}
                emoji={option.emoji}
                sizeEnoji={sizeEnoji}
                checked={selectedValue.includes(option.value)}
                onChange={() => onChange(option.value)}
                hideRadio={hideRadio}
            />
        ))}
    </RadioButtonContainer>
);
