import React from "react";
import "./caruselStyle.css";

class Card extends React.Component {
  render() {
    return (
      <div className="container">
        <img
          src="https://s3-alpha-sig.figma.com/img/d6c4/4e0e/047ff22cd0b54d65a00d57427410b161?Expires=1681689600&Signature=MU7ThV4q~FqS9atZPqJEiW9cNQTHZG6dbujNp9wdF9CBgkxKyFinhzzP6M568l8GT6R25pRVsxNpfKUsz3cMlZQ9ifG8EFISDjbw1lCubcjekP3lS-tejsDVUcbrEKiX14Yk1koIMzscZEnhe5aXC4c9sH8~iFM9XjiCJK~JdlsuE0iSufSThmCClgpRaTNVAEV0lu9xJ01W0FnapPdvDazkhD6xacXerqgrTFenOtl2PWQvoEKymG1uX0bf0EvdBfVazB0S-NpEBjns1nivr6eab2f0yBDZNBNOqjR2-C89XgZp703SpczBcSQG~EN4nwdsHwqzfbANe0oKpW~LMw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt=""
        />
        <img
          className="cyrcle"
          src="https://s3-alpha-sig.figma.com/img/53cd/8e33/dcfee82afbf5810c3c017a0704b153c0?Expires=1681689600&Signature=qvEKyC4ukWcAR0vsioUUOuBJQKCR7tefR5hlAOIJDRyeFrf04qoJiqPO3FnXScxkTyIRAisWVmiwEl4fEog3~UmBw43ITr-YCdNt4Vhw6yKlB-ZCDiLDd-qDbdHr~s0okXILv0Z~nX9ZUgZNMjOkYKacoVn-lvWL~n8PRLuPp~WGKE8Zs-Hu5lZZyIT3W2rfYQqN1uFAScME~I3-Es~ZTQ4G0nz7HpSfx~9A4cYxXlQ9Fl1h9q5doWe9x4OIilM-pM4tsrhqbEncY9uL2cVjQoxxbDrBXGtTu1PQlO9fJweikyng2jhodN2N-hifQAXkf2m06ZEoCbpzEkhl~btoRA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt=""
        />
        <button className="but">Featured</button>
        <button className="but2">For Sale</button>
        <p>
          <b>New Apartment Nice Wiew</b>
        </p>
        <p>Quincy St, Brooklyn, NY, USA</p>
        <div className="icon">
          <div className="wrap">
            <img
              className="icons"
              src="https://cdn-icons-png.flaticon.com/512/333/333493.png"
              alt=""
            />
            <p>4beds</p>
          </div>
          <div className="wrap">

          <img
            className="icons"
            src="https://cdn-icons-png.flaticon.com/512/333/333493.png"
            alt=""
            />
            <p>5 baths</p>
            </div>
            <div className="wrap">

          <img
            className="icons"
            src="https://cdn-icons-png.flaticon.com/512/333/333493.png"
            alt=""
            />
            <p>1 garage</p>
            </div>
            <div className="wrap">


          <img
            className="icons"
            src="https://cdn-icons-png.flaticon.com/512/333/333493.png"
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
            <img className="like" src="https://as2.ftcdn.net/v2/jpg/02/13/71/41/500_F_213714173_zx3pF8cy6yFFghIQ3NldmGpnx1pmPTBF.jpg" alt="" />
            <img className="like" src="https://as2.ftcdn.net/v2/jpg/02/13/71/41/500_F_213714173_zx3pF8cy6yFFghIQ3NldmGpnx1pmPTBF.jpg" alt="" />
            </div>
        </div>
      </div>
    );
  }
}

export default Card;
