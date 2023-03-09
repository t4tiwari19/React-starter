import React from "react";
import withStyles from "../../components/common/hoc/withStyles";
import styles from "./RAF.style";
const RAF = () => {
  return (
    <>
      <div className="refer-a-friend-banner">RAF Banner</div>
      <div className="multi-contact">Multi Contact</div>
      <div className="disclaimer-text">Disclaimer</div>
    </>
  );
};

export default withStyles(RAF, styles);
export { RAF as RAFVanilla };
