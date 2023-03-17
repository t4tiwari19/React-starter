import styled, { css } from "styled-components";
import baner1 from "@app/Assets/images/banner1.png";
import baner2 from "@app/Assets/images/banner2.png";
import baner3 from "@app/Assets/images/banner3.png";
import DynamicCard from "@app/Assets/images/DynamicCard.png";
import shareWidget from "@app/Assets/images/Sharewidget.png";
export default css``;
export const MainBannerWrapper = styled.div`
  .customised-offer-wrapper {
    display: flex;
    background: url(${baner1}) right top no-repeat;
    background-size: auto;
    min-height: 270px;
    @media ${(props) => props.theme.mediaQuery.smallMax} {
      padding: 25% 20px 0px;
      width: auto;
      text-align: center;
      background-size: 50%;
      min-height: unset;
    }
    .offer {
      width: 50%;
      @media ${(props) => props.theme.mediaQuery.smallMax} {
        width: auto;
      }
    }
  }
  .share-link-wrapper {
    display: flex;
    justify-content: flex-end;
    background: url(${baner2}) left bottom no-repeat;
    background-size: contain;
    min-height: 270px;
    @media ${(props) => props.theme.mediaQuery.smallMax} {
      width: auto;
      text-align: center;
      background-size: 50%;
    }
    .share-widget {
      width: 50%;
      float: right;
      background: url(${shareWidget}) left bottom no-repeat;
      background-size: contain;
      min-height: 270px;
      @media ${(props) => props.theme.mediaQuery.smallMax} {
        display: none;
      }
    }
  }
  .share-link-mobile {
    display: none;
    @media ${(props) => props.theme.mediaQuery.smallMax} {
      display: block;
      background: url(${shareWidget}) center bottom no-repeat;
      background-size: contain;
      min-height: 270px;
    }
  }
`;
export const DynamicCardWrapper = styled.div`
  min-height: 270px;
  background: url(${DynamicCard}) right top no-repeat;
  background-size: contain;
  @media ${(props) => props.theme.mediaQuery.smallMax} {
    background-size: 50%;
  }
  .content-wrapper {
    width: 50%;
    padding-top: 40px;
    @media ${(props) => props.theme.mediaQuery.smallMax} {
      padding: 25% 20px 0px;
      width: auto;
      text-align: center;
    }
  }
`;
export const RefralBonusDetails = styled.div`
  min-height: 270px;
  background: url(${baner3}) left bottom no-repeat;
  background-size: contain;
  @media ${(props) => props.theme.mediaQuery.smallMax} {
    background-size: 35%;
  }
  .content-wrapper {
    width: 50%;
    padding-top: 40px;
    float: right;
    @media ${(props) => props.theme.mediaQuery.smallMax} {
      padding: 0px 20px 35%;
      width: auto;
      float: unset;
      text-align: center;
    }
  }
`;
export const ThanksGivingText = styled.div`
  background-color: #23233f;

  .content-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    color: #fff;
    min-height: 200px;
    @media ${(props) => props.theme.mediaQuery.smallMax} {
      text-align: center;
      padding: 0 30px;
    }
  }
`;
export const DisclaimerTextWrapper = styled.div`
  .disclaimer-txt {
    padding: 30px;
  }
`;
