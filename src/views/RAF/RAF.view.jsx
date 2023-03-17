import React from "react";
import {
  MainBannerWrapper,
  DynamicCardWrapper,
  RefralBonusDetails,
  ThanksGivingText,
  DisclaimerTextWrapper,
} from "./RAF.style";
const RAF = (props) => {
  return (
    <>
      <MainBannerWrapper>
        <div className="customised-offer-wrapper">
          <div className="fixed-view">
            <div className="offer">
              <div className="title">
                $<span className="txt-highlight ">50</span> for you
              </div>
              <div className="title">
                $<span className="txt-highlight ">50</span> for your friend
                <span>
                  <a href="#disclaimer-txt">1</a>
                </span>
              </div>
              <p className="txt-normal">
                <span className="txt-highlight">Abhishek</span> , here's how to
                share Discover® with the people in your life.
              </p>
            </div>
          </div>
        </div>
        <div className="share-link-wrapper">
          <div className="fixed-view">
            <div className="share-widget">
              {" "}
              <div className="step">1</div>
            </div>
          </div>
        </div>
        <div className="share-link-mobile">
          <div className="step">1</div>
        </div>
      </MainBannerWrapper>
      <DynamicCardWrapper>
        <div className="fixed-view">
          <div className="content-wrapper">
            <div className="step">2</div>
            <div className="sub-title">
              Your Friend applies and gets their card{" "}
            </div>
            <div className="txt-normal">
              Make sure they use your link to apply. Once approved they'll need
              to make a purchase in the first 3 months.
            </div>
          </div>
        </div>
      </DynamicCardWrapper>
      <RefralBonusDetails>
        <div className="fixed-view">
          <div className="content-wrapper">
            {" "}
            <div className="step">3</div>
            <div className="sub-title">You each get a $50 statement credit</div>
            <div className="txt-normal">
              Earn up to $500 in the statement credits per calender year when
              you invite more friends!
            </div>
          </div>
        </div>
      </RefralBonusDetails>
      <ThanksGivingText>
        <div className="fixed-view">
          <div className="content-wrapper">
            {" "}
            Thanks for being a cardmember since May 1,2020
          </div>
        </div>
      </ThanksGivingText>
      <DisclaimerTextWrapper>
        <div className="fixed-view">
          <ol className="disclaimer-txt">
            <li>
              {" "}
              <span className="txt-bold">Refer-a-Friend Program:</span> eligible
              cardmembers will receive a statement credit referral reward if
              their friend applies for the specific offer sent via the link
              provided and is approved by December 31, 2023. Referral reward
              statement credit amounts range from $50 to $100 and maximum annual
              referral amount will be stated in individual referral offers upon
              login. You are not eligible to refer a friend if you have a
              Discover it® Secured Credit Card, or Discover it® Business Card.
              Your account must be in good standing to receive your referral
              reward. Each eligible friend who was referred will receive a
              statement credit after making a purchase within three months of
              opening a new Discover account. Existing Discover cardmembers and
              those who have opted out of receiving marketing communications
              from Discover are not eligible referrals. You will not be notified
              whether a specific referral was approved or declined. Please allow
              up to 1-2 billing periods for the statement credit to post to your
              account after each referral is approved. Statement credits you
              receive may be taxable to you. Please contact your tax advisor.
              Offer may not be combined with any other introductory offer.
            </li>
          </ol>
        </div>
      </DisclaimerTextWrapper>
    </>
  );
};
export default RAF;
