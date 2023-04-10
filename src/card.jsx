import React from "react";
import "./caruselStyle.css";
import Ellip from './assets/icon/Ellipse 11.svg'
import Sofa from './assets/icon/sofa.svg'
import Vanna from './assets/icon/vanna.svg'
import Car from './assets/icon/car.svg'
import Ter from './assets/icon/triangle.svg'
import Love from './assets/icon/love 1.svg'
import Line from './assets/icon/1.svg'

class Card extends React.Component {
  render() {
    return (
      <div className="container">
        <img 
          src={this.props.src}
          alt=""
        />
        <img
          className="cyrcle"
          src={Ellip}
          alt=""
        />
        <button className="but">Featured</button>
        <button className="but2">For Sale</button>
        <p>
          <b className="new">New Apartment Nice Wiew</b>
        </p>
        <p>Quincy St, Brooklyn, NY, USA</p>
        <div className="icon">
          <div className="wrap">
            <img
              className="icons"
              src={Sofa}
              alt=""
            />
            <p>4 Beds</p>
          </div>
          <div className="wrap">

          <img
            className="icons"
            src={Vanna}
            alt=""
            />
            <p>5 Baths</p>
            </div>
            <div className="wrap">

          <img
            className="icons"
            src={Car}
            alt=""
            />
            <p>1 Garage</p>
            </div>
            <div className="wrap">


          <img
            className="icons"
            src={Ter}
            alt=""
            />
            <p>120 Sq Ft</p>
            </div>
        </div>
        <div className="line"></div>
        <div className="con">
            <div className="sum">

            <del>$2,800/mo</del>
            <b className="count">$7,500/mo</b>
            </div>
            <div className="ims">
            <img className="like" src={Line} alt="" />
            <img className="like" src={Love} alt="" />
            </div>
        </div>
      </div>
    );
  }
}

export default Card;
