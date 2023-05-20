import React from "react";
import "./Content.scss";
const Content = () => {
  return (
    <>
      <div className="content">
        <div className="content___best">
          <div className="content___best___txt">
            <div className="content___best___txt___p1">
              Best IT Solution in your city
            </div>
            <div className="content___best___txt___line"></div>
            <div className="content___best___txt___p2">
              Prevent data loss with encrypted storage and virtualized recovery,
              then enjoy increased productivity.
            </div>
            <button>Find Out More</button>
          </div>
        </div>
        <div className="content___manage">
          <p className="content___manage--s1">INDUSTRY WE OFFER</p>
          <p className="content___manage--s2">
            Managed IT services customized for your industry
          </p>
          <p className="content___manage--s3">
            We understand the complexities of modern markets and translate them
            into real business solutions for automotive, financial, insurance,
            pharma & life sciences,
          </p>
          <div className="content___manage--icons">
            <div className="manage--icons">
              <div className="manage--icons--icon">
                <img
                  src="https://preview.colorlib.com/theme/itlock/assets/img/icon/services1.svg"
                  alt=""
                />
                <p>Industries & Manufacturing</p>
              </div>
              <div className="manage--icons--icon">
                <img
                  src="https://preview.colorlib.com/theme/itlock/assets/img/icon/services2.svg"
                  alt=""
                />
                <p>Industries & Manufacturing</p>
              </div>
              <div className="manage--icons--icon">
                <img
                  src="https://preview.colorlib.com/theme/itlock/assets/img/icon/services3.svg"
                  alt=""
                />
                <p>Industries & Manufacturing</p>
              </div>
              <div className="manage--icons--icon">
                <img
                  src="https://preview.colorlib.com/theme/itlock/assets/img/icon/services4.svg"
                  alt=""
                />
                <p>Industries & Manufacturing</p>
              </div>
            </div>
          </div>
        </div>
        <div className="content___insights">
          <div className="content___insights___top">
            <div className="content___insights___top___txt">
              <p className="content___insights___top___txt--p1">
                Insights to help you do what you do better, faster and more
                profitably.
              </p>
              <p className="content___insights___top___txt--p2">
                We understand the complexities of modern markets and translate
                them into real business solutions for automotive, financial,
                insuranc.
              </p>
              <button>Learn More</button>
            </div>
            <img
              src="https://preview.colorlib.com/theme/itlock/assets/img/gallery/about1.jpg.webp"
              alt=""
            />
          </div>
          <div className="content___insights___bottom">
            <ul>
              <li>
                <img
                  src="https://preview.colorlib.com/theme/itlock/assets/img/gallery/brand1.png.webp"
                  alt=""
                />
              </li>
              <li>
                <img
                  src="https://preview.colorlib.com/theme/itlock/assets/img/gallery/brand2.png.webp"
                  alt=""
                />
              </li>
              <li>
                <img
                  src="https://preview.colorlib.com/theme/itlock/assets/img/gallery/brand3.png.webp"
                  alt=""
                />
              </li>
              <li>
                <img
                  src="https://preview.colorlib.com/theme/itlock/assets/img/gallery/brand4.png.webp"
                  alt=""
                />
              </li>
              <li>
                <img
                  src="https://preview.colorlib.com/theme/itlock/assets/img/gallery/brand5.png.webp"
                  alt=""
                />
              </li>
            </ul>
          </div>
        </div>
        <div className="content___brands">
          <div className="content___brands___top">
            <p className="content___brands___top--p1">OUR CASE STUDY</p>
            <p className="content___brands___top--p2">
              We work with global brands
            </p>
          </div>
          <div className="content___brands___bottom">
            <div className="content___brands___bottom--vitrine">
              <div className="content___brands___bottom--vitrine--item">
                <div className="content___brands___bottom--vitrine--item--top">
                  <img
                    src="https://preview.colorlib.com/theme/itlock/assets/img/gallery/blog5.jpg.webp"
                    alt=""
                  />
                </div>
                <div className="content___brands___bottom--vitrine--item--bottom">
                  <p className="item--name">Name</p>
                  <p className="item--price">Price</p>
                </div>
              </div>
              <div className="content___brands___bottom--vitrine--item">
                <div className="content___brands___bottom--vitrine--item--top">
                  <img
                    src="https://preview.colorlib.com/theme/itlock/assets/img/gallery/blog5.jpg.webp"
                    alt=""
                  />
                </div>
                <div className="content___brands___bottom--vitrine--item--bottom">
                  <p className="item--name">Name</p>
                  <p className="item--price">Price</p>
                </div>
              </div>
              <div className="content___brands___bottom--vitrine--item">
                <div className="content___brands___bottom--vitrine--item--top">
                  <img
                    src="https://preview.colorlib.com/theme/itlock/assets/img/gallery/blog5.jpg.webp"
                    alt=""
                  />
                </div>
                <div className="content___brands___bottom--vitrine--item--bottom">
                  <p className="item--name">Name</p>
                  <p className="item--price">Price</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content___work">
          <p className="content___work--p1">Let's work together.</p>
          <p className="content___work--p2">
            We understand the complexities of modern markets and translate them
            into real business solutions for automotive, financial, insuranc.
          </p>
          <div className="content___work--btn">
            <button>Start Discussion</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
