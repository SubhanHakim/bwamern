import React, { Component } from "react";

import Header from "parts/Header";
import PageDetailTitle from "parts/PageDetailTitle";
import { connect } from "react-redux";

import ItemDetails from "json/itemDetails.json";
import FeaturedImage from "parts/FeaturedImage";
import PageDetailDescription from "parts/PageDetailDescription";
import BookingForm from "parts/BookingForm";
import Categories from "parts/Categories";
import Testimony from "parts/Testimony";
import Footer from "parts/Footer";
import { Fade } from "react-awesome-reveal";

import { checkoutBooking } from "store/actions/checkout";

class DetailsPage extends Component {
  componentDidMount() {
    window.title = "Details Page";
    window.scrollTo(0, 0);
  }

  render() {
    const breadcrumb = [
      { pageTitle: "Home", pagehref: "" },
      { pageTitle: "House Details", pagehref: "" },
    ];
    return (
      <>
        <Header {...this.props} />
        <PageDetailTitle breadcrumb={breadcrumb} data={ItemDetails} />
        <FeaturedImage data={ItemDetails.imageUrls} />
        <section className="container">
          <div className="row">
            <div className="col-7 pr-5">
              <Fade direction="up">
                <PageDetailDescription data={ItemDetails} />
              </Fade>
            </div>
            <div className="col-5">
              <Fade direction="up">
                <BookingForm itemDetails={ItemDetails} startBooking={this.props.checkoutBooking} />
              </Fade>
            </div>
          </div>
        </section>

        <Categories data={ItemDetails.categories} />
        <Testimony data={ItemDetails.testimonial} />

        <Footer />
      </>
    );
  }
}

export default connect(null, { checkoutBooking })(DetailsPage);
