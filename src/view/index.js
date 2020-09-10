import React from "react";
function IndexPage() {
  return (
    <div>
      <img src={require("../img/img4.png")} className="banner" />
      <div className="wrap">
        <img src={require("../img/img_1.png")} />
        <img src={require("../img/img_2.png")} />
      </div>
    </div>
  );
}
export default IndexPage;
