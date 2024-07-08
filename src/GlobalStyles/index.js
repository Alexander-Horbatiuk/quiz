import { styled, createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  .fade-enter {
      opacity: 0;
      position: absolute;
      width: 100%;
      height: 100%;
    }

    .fade-enter-active {
      opacity: 1;
      transition: opacity 1.5s ;
    }

    .fade-exit {
      opacity: 1;
      position: absolute;
      width: 100%;
      height: 100%;
    }

    .fade-exit-active {
      opacity: 0;
    }
`;

export const AppDiv = styled.div`
    width: 335px;
    position: relative;
    text-align: center;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    max-height: 480px;
`;

export const AppContent = styled.div`
    max-width: 335px;
    width: 100%;
    position: relative;
    box-sizing: border-box;
    height: 100%;
`;

export const Wrapper = styled.div`
    width: 335px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    color: #fff;
    height: 100%;
`;

export const PrivacyPoliticStyle = styled.span`
    font-size: 15px;
`;

export const InputWrapper = styled.div`
    position: relative;
    margin-bottom: 60px;
`;

export const ErrorEmail = styled.span`
    display: block;
    font-size: 15px;
    color: red;
    position: absolute;
    top: 70px;
    left: 30px;
`;

export const LinkStyle = styled.span`
    list-style: none;
    color: #eb2f9a;
`;

export const Title = styled.h2`
    font-size: 28px;
    line-height: 34px;
    margin: 0;
    margin-bottom: 10px;

    color: #fff;
`;

export const SubTitle = styled.span`
    font-size: 17px;
    line-height: 24px;
    color: #c4c8cc;
    margin-bottom: 20px;
`;

export const Form = styled.form`
    width: 335px;
    display: flex;
    gap: 41px;
    flex-direction: column;
    height: 100%;
    justify-content: space-around;
`;

export const InputEmail = styled.input.attrs({ type: 'text' })`
    padding: 20px;
    box-sizing: border-box;
    border-radius: 16px;
    max-width: 335px;
    width: 100%;
    border: none;
    outline: none;
    border: 1px solid ${(props) => props.borderColorValidate};
    font-size: 17px;
    background: #36173d;
    color: #fff;
`;
