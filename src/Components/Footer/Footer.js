import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="wrapper-footer">
      <div className="container footer-widget">
        <div className="box-1">
          <div className="widget box-1__subscribe">
            <h2 className="title">Subscribe</h2>
            <h2 className="name">Loredana Celebre</h2>
            <p>
              Hello, here you can tell something about yourself or you can put
              your blog description here or even you can add some quote of your
              choice here.
            </p>
          </div>
          <div className="box-1__social">
            <h2 className="title">SOCIAL MEDIA</h2>
            <div className="widget-content">
              <ul className="social-icon">
                <li className="facebook" />
                <li className="twitter" />
                <li className="instagram" />
                <li className="google-plus" />
                <li className="snapchat" />
                <li className="dribbble" />
                <li className="rss" />
                <li className="behance" />
                <li className="vimeo" />
              </ul>
            </div>
          </div>
        </div>
        <div className="box-2">
          <h2 className="title">POPULAR POSTS</h2>
          <div className="widget-content">
            <ul>
              <li>
                <div className="item-thumbnail"></div>
                <div className="item-title">
                  Chair trick performed by this bearded man
                </div>
              </li>
              <li>
                <div className="item-thumbnail"></div>
                <div className="item-title">Attractive Beautiful Girl Flowers</div>
              </li>
              <li>
                <div className="item-thumbnail"></div>
                <div className="item-title">Posing near the wardrobe</div>
              </li>
              <li>
                <div className="item-thumbnail"></div>
                <div className="item-title">Adventure Beautiful Nature</div>
              </li>
              <li>
                <div className="item-thumbnail"></div>
                <div className="item-title">Coffee Girl in Canteen</div>
              </li>
            </ul>
          </div>
        </div>
        <div className="box-3">
          <h2 className="title">LABELS</h2>
          <div className="widget-content">
            <ul>
              <li>Beauty
                <span dir="ltr">4</span>
              </li>
              <li>Break
                <span dir="ltr">8</span>
              </li>
              <li>Cool
                <span dir="ltr">6</span>
              </li>
              <li>Extras
                <span dir="ltr">4</span>
              </li>
              <li>Fashion
                <span dir="ltr">6</span>
              </li>
              <li>Lifestyle
                <span dir="ltr">5</span>
              </li>
              <li>Music
                <span dir="ltr">6</span>
              </li>
              <li>Sport
                <span dir="ltr">6</span>
              </li>
              <li>Travel
                <span dir="ltr">8</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="odd-wrapper">
        <div className="container">
          <pre>
            Copyright © {new Date().getFullYear()}{" "}
            <a href="#">Loredana Celebre</a>
          </pre>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
