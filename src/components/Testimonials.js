import React from "react";
import {
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow
} from "mdb-react-ui-kit";

export default function Testimonials() {
  return (
    <MDBContainer id="testimonials" className="py-5" style={{ backgroundColor: "black", marginTop: "20px", borderRadius: "20px" }}>
      <MDBRow className="d-flex justify-content-center">
        <MDBCol md="10" xl="8" className="text-center">
          <h2 className="mb-4 pb-5" style={{ color: "white" }}>Testimonials</h2>
        </MDBCol>
      </MDBRow>
      <MDBRow className="text-center">
        <MDBCol md="4" className="mb-5 mb-md-0">
          <div className="d-flex justify-content-center mb-4">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
              className="rounded-circle shadow-1-strong"
              width="150"
              height="150"
            />
          </div>
          <h5 className="mb-3" style={{ color: "grey" }}>Maria Smantha</h5>
          <h6 className="text-primary mb-3">Web Developer</h6>
          <p className="px-xl-3" style={{ color: "lightgrey" }}>
            <MDBIcon fas icon="quote-left" className="pe-2" />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos
            id officiis hic tenetur quae quaerat ad velit ab hic tenetur.
          </p>
        </MDBCol>
        <MDBCol md="4" className="mb-5 mb-md-0">
          <div className="d-flex justify-content-center mb-4">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
              className="rounded-circle shadow-1-strong"
              width="150"
              height="150"
            />
          </div>
          <h5 className="mb-3" style={{ color: "grey" }}>Lisa Cudrow</h5>
          <h6 className="text-primary mb-3">Graphic Designer</h6>
          <p className="px-xl-3" style={{ color: "lightgrey" }}>
            <MDBIcon fas icon="quote-left" className="pe-2" />
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut aliquid commodi.
          </p>
        </MDBCol>
        <MDBCol md="4" className="mb-5 mb-md-0">
          <div className="d-flex justify-content-center mb-4">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
              className="rounded-circle shadow-1-strong"
              width="150"
              height="150"
            />
          </div>
          <h5 className="mb-3" style={{ color: "grey" }}>John Smith</h5>
          <h6 className="text-primary mb-3">Marketing Specialist</h6>
          <p className="px-xl-3" style={{ color: "lightgrey" }}>
            <MDBIcon fas icon="quote-left" className="pe-2" />
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti.
          </p>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}