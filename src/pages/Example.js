import BreadCrumb from "elements/Breadcrumb";
import React, { Component } from "react";

export default class Example extends Component {
  render() {
    const breadcrumb = [
      { pageTitle: "Home", pagehref: "" },
      { pageTitle: "House Details", pagehref: "" },
    ];
    return (
      <div className="container">
        <div className="row align-items-center justify-content-center" style={{ height: "100vh" }}>
          <div className="col-auto">
            <BreadCrumb data={breadcrumb} />
          </div>
        </div>
      </div>
    );
  }
}
