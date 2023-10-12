import React from "react";
import "./Home.scss";
import Navbar from "../Navbar/Navbar";
import { AiOutlineRight } from "react-icons/ai";
import tv from "../../assets/images/tv.png";
import videoFile from "../../assets/images/video-tv-in-0819.mp4";
import Stranger from "../../assets/images/mobile-0819.jpg";
import boxShot from "../../assets/images/boxshot.png";
import gif from "../../assets/images/download-icon.gif";
import { IconContext } from "react-icons";
import device from "../../assets/images/device-pile-in.png";
import videoFile2 from "../../assets/images/video-devices-in.mp4";
import animation from "../../assets/images/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png";
import Accordion from "./Accordion";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <header className="container-image">
        <Navbar />
        <div className="container-content">
          <h1>
            The biggest Indian hits. The best Indian stories. All streaming
            here.
          </h1>
          <p>Watch anywhere. Cancel anytime.</p>
          <p>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div className="container-input">
            <input type="text" placeholder="Email address" />
            <div className="button-icons" onClick={() => navigate("/login")}>
              <a>
                Get Started
                <AiOutlineRight
                  style={{
                    color: "white",
                    fontWeight: 700,
                    fontSize: "22px",
                    marginLeft: "10px",
                  }}
                />
              </a>
            </div>
          </div>
        </div>
      </header>
      <section>
        <div className="lineHeight"></div>
        <div className="container-section">
          <div className="section-h1">
            <h1>Enjoy on your TV</h1>
            <p>
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray players and more.
            </p>
          </div>
          <div className="container-video">
            <img src={tv} alt="tv" />
            <video autoPlay playsInline muted loop>
              <source src={videoFile} type="video/mp4"></source>
            </video>
          </div>
        </div>
      </section>
      <section>
        <div className="lineHeight"></div>
        <div className="container-section2">
          <div className="container-video2">
            <img src={Stranger} alt="tv" />
            <div className="stranger">
              <img src={boxShot} alt="boxshot" />
              <div>
                <h1>Stranger Things</h1>
                <p>Downloading...</p>
              </div>
              <div className="gif">
                <img src={gif} alt="gif" />
              </div>
            </div>
          </div>
          <div className="section-h12">
            <h1>Download your shows to watch offline</h1>
            <p>
              Save your favourites easily and always have something to watch.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="lineHeight"></div>
        <div className="container-section3">
          <div className="section-h13">
            <h1>Watch everywhere</h1>
            <p>
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV.
            </p>
          </div>
          <div className="container-video3">
            <img src={device} alt="device" />
            <video autoPlay playsInline muted loop>
              <source src={videoFile2} type="video/mp4"></source>
            </video>
          </div>
        </div>
      </section>
      <section>
        <div className="lineHeight"></div>
        <div className="container-section2">
          <div className="container-video2">
            <img src={animation} alt="animation" />
            {/* <div className="stranger">
              <img src={boxShot} alt="boxshot" />
              <div>
                <h1>Stranger Things</h1>
                <p>Downloading...</p>
              </div>
              <div className="gif">
                <img src={gif} alt="gif" />
              </div>
            </div> */}
          </div>
          <div className="section-h12">
            <h1>Create profiles for kids</h1>
            <p>
              Send children on adventures with their favourite characters in a
              space made just for them—free with your membership.
            </p>
          </div>
        </div>
      </section>
      <div className="lineHeight"></div>
      <main>
        <Accordion />
        <div className="membership">
          <p>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div className="container-input2">
            <input type="text" placeholder="Email address" />
            <div className="button-icons2">
              <a>
                Get Started
                <AiOutlineRight
                  style={{
                    color: "white",
                    fontWeight: 700,
                    fontSize: "22px",
                    marginLeft: "10px",
                  }}
                />
              </a>
            </div>
          </div>
        </div>
      </main>
      <div className="lineHeight"></div>
      <footer>
        <div className="footerList">
          <div className="Questions">Questions? Call 000-800-919-1694</div>
          <div className="footerui">
            <ul>
              <li>
                <a href="">FAQ</a>
              </li>
              <li>
                <a href="">Investor Relations</a>
              </li>
              <li>
                <a href="">Privacy</a>
              </li>
              <li>
                <a href="">Speed Test</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="">Help Centre</a>
              </li>
              <li>
                <a href="">Jobs</a>
              </li>
              <li>
                <a href="">Cookie Preferences</a>
              </li>
              <li>
                <a href="">Legal Notices</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="">Account</a>
              </li>
              <li>
                <a href="">Ways to Watch</a>
              </li>
              <li>
                <a href="">Corporate Information</a>
              </li>
              <li>
                <a href="">Only on Netflix</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="">Media Centre</a>
              </li>
              <li>
                <a href="">Terms of Use</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-container2">
          <div className="navbar-select2">
            <select name="" id="">
              <option value="english">English</option>
              <option value="hindi">Hindi</option>
            </select>
            <div>Netflix India</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
