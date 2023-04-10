import React from "react";
import Card from "./card";
import "./index.css";
import Tree from "./assets/imgs/yester.png";

class Carusel extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Card
          title="tit"
          src="https://s3-alpha-sig.figma.com/img/d6c4/4e0e/047ff22cd0b54d65a00d57427410b161?Expires=1682294400&Signature=oPj4nCmL3f6QbxijQemH55LhF8qHBja-xgN9sAN6LRCyy5gKMEEX8kCkDOQDeExFswm9Mx7eie5Y2tc-u-4~xDBLn8V0mPhVj5XqSQ2QP4UlBXirfg7mxN9RZ0kI6IOhO9cnFKvd3xCaAhRl2R2u3Tlcx09CTcnj05k7oh8HnWUWkWvOY7i93hJXj0h49VLFXa0ZUMv2c-19ASLX2NL7fPV3SsT9017ePM7u-sSINljwB3mioh3ri5m8ELjiCfqWnO2o-2Yzqxdp~OdkhkOF8BSDEyawPZcIfRTXgTokVvyvXIKGwg80MuEhCA~AZH2SWM09tsSl~-8NxZBzwh4yIg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        />
        <Card
          title="hous"
          src="https://s3-alpha-sig.figma.com/img/348a/9872/65add135c66e5d356aae0e7a44733748?Expires=1682294400&Signature=hR8-WvYoc16II7jHr1RyMBolPPlsnuCdxrh0UjBBOJshDjoredUEu1VDhHlWmthHJygCqvzvYqCBx50XVYmi0MdWB4DuNi8-GKLXQxi3RGKGTPOftgqelgHmm4I4ZxFxucWcLiTv6Ld0dqbojJJ8rwF-MZ1VLGn1g92vJDfrXG5S8pdml7T7UgQhEKX-Rym2Va9EelxQiJ-JDdq6imDbhrEzl9st3a3phWFMJ99pQGqG9hPbDEFlCJLn-4kP-z0ZnRBjPbl5NaosMX-xPo1KLM~ovapwwK4gMsLaPZDNYLT8A9f1~mamqvSu1gGyULWRxeXei0iPWhRm2CmNyNN5kQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        />
        <Card title="apple" src={Tree} />
      </div>
    );
  }
}

export default Carusel;
