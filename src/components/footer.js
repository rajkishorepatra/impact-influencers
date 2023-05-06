import React from "react";
import logo from "../assets/logo.jpg";
import { FaTwitter, FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";
import "../css/footer.css";
import { RiSendPlaneFill } from "react-icons/ri";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      <div className="footer ">
        <div className="container-lg">
          <div className="row p-4">
            <div className="col-12 col-md-6 d-flex flex-column justify-content-between ">
              <div className=" my-4" id="subscribe">
                <h4 className="h5 text-center">Subscribe to Our NewsLetter</h4>
                <div className="max-form-width">
                  <form className="d-flex flex-column gap-1">
                    <fieldset className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        id="message"
                        placeholder="Enter your email address"
                      />
                    </fieldset>
                    <fieldset className="form-group text-xs-right">
                      <button
                        type="button"
                        className="btn btn-warning w-100 rounded-5 p-2"
                      >
                        Subscribe
                      </button>
                    </fieldset>
                  </form>
                </div>
              </div>

              <div
                className="follow-section d-flex flex-column align-items-center my-3"
                id="socials"
              >
                <h3 className="h5 ">Follow Us</h3>
                <div className="footer_social">
                  <a href="hhttps://www.youtube.com">
                    <FaYoutube className="ut" />
                  </a>
                  <a href="https://www.facebook.com">
                    <FaFacebook className="fb" />
                  </a>
                  <a href="https://www.twitter.com">
                    <FaTwitter className="tw" />
                  </a>
                  <a href="https://www.instagram.com">
                    <FaInstagram className="ig" />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6">
              <h3 className="h5 text-center ">Contact Us</h3>
              <div className="max-form-width">
                <form className="d-flex flex-column gap-1">
                  <fieldset className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="inputName"
                      placeholder="Name"
                    />
                  </fieldset>
                  <fieldset className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail"
                      placeholder="Email"
                    />
                  </fieldset>
                  <fieldset className="form-group">
                    <textarea
                      className="form-control"
                      id="message"
                      placeholder="Message"
                    ></textarea>
                  </fieldset>
                  <fieldset className="form-group ">
                    <button
                      type="button"
                      className="btn btn-warning w-100 rounded-5 p-2"
                    >
                      Send
                    </button>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p className="m-0 text-center">
            Project by <span className="fw-bold">Leaflets</span> (a unit of
            IAMPIX TECHNOLOGY PVT LTD).
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
