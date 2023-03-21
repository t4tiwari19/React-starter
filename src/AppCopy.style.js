import styled from "styled-components";

export default styled.div`
  .title {
    font-size: 3rem;
    @media ${(props) => props.theme.mediaQuery.smallMax} {
      font-size: 2rem;
    }
  }
  .sub-title {
    font-size: 1.8rem;
    margin-top: 20px;
    margin-bottom: 20px;
    @media ${(props) => props.theme.mediaQuery.smallMax} {
      font-size: 1.3rem;
    }
  }
  .txt-normal {
    font-size: 1rem;
    margin-bottom: 20px;
    @media ${(props) => props.theme.mediaQuery.smallMax} {
      font-size: 0.9rem;
    }
  }
  .txt-bold {
    font-weight: bold;
  }
  .txt-highlight {
    color: #e812d9;
  }
  font-family: "AvenirNext-Regular", "Helvetica Neue", Helvetica, Arial,
    sans-serif !important;
  .header {
    height: 72px;
    width: 100%;
    border-bottom: 1px solid #dbdbdb;
    background: #f8f8f8;
  }
  .mb20 {
    margin-bottom: 20px;
  }
  .mt20 {
    margin-top: 20px;
  }
  .pt40 {
    padding-top: 40px;
  }
  .fixed-view {
    max-width: 960px;
    width: 100%;
    margin: 0 auto;
  }
  .step {
    background-color: #ff6000;
    border-radius: 50%;
    padding: 10px;
    color: #fff;
    height: 20px;
    width: 20px;
    text-align: center;
    font-size: 1.1875em;
    font-weight: bold;
    @media ${(props) => props.theme.mediaQuery.smallMax} {
      margin: auto;
      height: 12px;
      width: 12px;
      padding: 6px;
      font-size: 1em;
    }
  }
`;
