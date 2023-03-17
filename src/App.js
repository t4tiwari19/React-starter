import React from "react";
import RAF from "./views/RAF/RAF.view";
import GlobalStyleWrapper from "./App.style";

const App = () => (
  <GlobalStyleWrapper>
    <div className="header mb20">Header</div>
    <RAF />
    <div className="header mt20">Footer</div>
  </GlobalStyleWrapper>
);

export default App;
