import React from "react";
import logo from "../assets/logo.jpg";
import { FaTwitter, FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";
import "../css/footer.css";
import { RiSendPlaneFill } from "react-icons/ri";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      {/* <div className='footer text-center mt-3'>
        <p className='mx-3 p-3'>Project by <span>Leaflets</span> (a unit of IAMPIX TECHNOLOGY PVT LTD).</p>
    </div> */}
      <div className="footer ">
        <div className="container">
          <div className="footer_box">
            <div className="footer_box_social">
              <div id="about-us">
                <img src={logo} alt="footer logo" height={100} width={100} />
                <p className="text-secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                  quas assumenda veritatis commodi adipisci officia voluptas
                  nostrum at quod dicta?
                </p>
              </div>

              <div className="follow-section" id="socials">
                <h3>Follow Us</h3>
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

            <div className="subscribe" id="subscribe">
              <h4 className="mx-3">Subscribe to Our NewsLetter</h4>
              <div className="subscribe_box">
                <input type="email" placeholder="Email Address..." />
                <RiSendPlaneFill className="subscribe_box_send" />
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <div className="footer-menu">
            <Link to="/">Home</Link>
            <Link to={{ pathname: "/campaigns", hash: "#campaigns" }}>
              Campaigns
            </Link>
            <Link to="/case-studies">Case Studies</Link>
            <Link
              to={{
                pathname: "/",
                hash: "#socials",
              }}
            >
              Social
            </Link>
          </div>
          <p>
            Project by <span>Leaflets</span> (a unit of IAMPIX TECHNOLOGY PVT
            LTD).
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
