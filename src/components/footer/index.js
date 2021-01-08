import React from "react";
import Pics from "../../@assets";

export default function Footer() {
  return (
    <div className="bg-dark px-3 text-white d-flex flex-row justify-content-between align-items-center">
      <div className="d-flex flex-row align-items-center">
        <img alt="logo" src={Pics.logo} height={50} />
        <span className="d-none d-md-block ml-3">
          Copyright © 2020 Priorise - All Rights Reserved.
        </span>
      </div>
      <div style={{ fontSize: 45 }} className="mt-3">
        <ion-icon name="logo-twitter" style={{ marginRight: 20 }} />
        <ion-icon name="logo-facebook" style={{ marginRight: 20 }} />
        <ion-icon name="logo-linkedin" style={{ marginRight: 20 }} />
      </div>
    </div>
  );
}
