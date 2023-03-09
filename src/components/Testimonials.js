import React from "react";
import { Form } from "react-bootstrap";

export default function Testimonials() {
  return (
    <section className="home-newsletter mt-5 mb-3" id="testimonials">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="single">
              <h2>Subscribe to our Newsletter</h2>
              <Form>
                <div className="input-group">
                  <input type="email" className="form-control" placeholder="Enter your email" />
                  <span className="input-group-btn">
                    <button
                      className="btn btn-theme"
                      type="submit"
                      onClick={(e) => {
                        e.preventDefault();
                        alert('Thanks for subscribing to our monthly Newsletter!😄');
                      }}>
                      Subscribe
                    </button>
                  </span>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}