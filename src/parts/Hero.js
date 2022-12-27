import React from "react";
// import ImageHero from "assets/images/img-hero.jpg";
// import ImageHero_ from "assets/images/img-hero-frame.jpg";
// import IconCities from "assets/images/icons/ic_cities.svg";
import IconTraveler from "assets/images/icons/ic_traveler.svg";
// // import IconTreasure from "assets/images/icons/ic_treasure.svg";
// import Button from "elements/Button";

export default function Hero(props) {
  function showMostPicked() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  }

  return (
    <section className="container pt-4">
      <div className="row align-items-center">
        <div className="col-auto pr-5" style={{ width: 422 }}>
          <h1 className="h2 font-weight-bold line-height mb-3">
            Forget Busy Work, <br /> Start Next Vacation
          </h1>
          <p className="mb-5 font-weight-light text-gray-500 w-75">We provide what you need to enjoy your holiday with family. Time to make another memorable moments.</p>

          <div className="row mt-5">
            <div className="col-auto">
              <img src={IconTraveler} alt={`${props.data.travelers} Travalers`} />
              <h6 className="mt-3">
                {props.data.travelers} <span className="text-gray-900 font-weight-light">Travalers</span>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
