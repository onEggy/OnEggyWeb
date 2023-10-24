import React from "react";
import Headline from "../components/headline";
const talks = () => {
  const title = "Let's Talk";
  const desc = "Let's talk about your digital services requirements.";
  return (
    <div className="talk">
      <Headline title={title} desc={desc} />

      <div className="talk-content mt-10">
        <div className="talk-content-left">
          <p>Trusted by 100+ companies worldwide</p>
          <div className="company-grid mt-5">
            <div className="company-card">
              <img src="/iconImages/onemg.png" alt="company" />
            </div>
            <div className="company-card">
              <img
                className="company-card-logo"
                src="/iconImages/aera.png"
                alt="company"
              />
            </div>
            <div className="company-card">
              <img
                className="company-card-logo"
                src="/iconImages/equinx.png"
                alt="company"
              />
            </div>
            <div className="company-card">
              <img
                className="company-card-logo"
                src="/iconImages/hdfc.png"
                alt="company"
              />
            </div>
            <div className="company-card">
              <img
                className="company-card-logo"
                src="/iconImages/hitachi.png"
                alt="company"
              />
            </div>
            <div className="company-card">
              <img
                className="company-card-logo"
                src="/iconImages/intellect.png"
                alt="company"
              />
            </div>
            <div className="company-card">
              <img
                className="company-card-logo"
                src="/iconImages/jpmorgan.png"
                alt="company"
              />
            </div>
            <div className="company-card">
              <img
                className="company-card-logo"
                src="/iconImages/loft.png"
                alt="company"
              />
            </div>
            <div className="company-card">
              <img
                className="company-card-logo"
                src="/iconImages/mercedes.png"
                alt="company"
              />
            </div>
            <div className="company-card">
              <img
                className="company-card-logo"
                src="/iconImages/packet.png"
                alt="company"
              />
            </div>
            <div className="company-card">
              <img
                className="company-card-logo"
                src="/iconImages/portworx.png"
                alt="company"
              />
            </div>
            <div className="company-card">
              <img
                className="company-card-logo"
                src="/iconImages/Qualys.png"
                alt="company"
              />
            </div>
            <div className="company-card">
              <img
                className="company-card-logo"
                src="/iconImages/reancher.png"
                alt="company"
              />
            </div>
            <div className="company-card">
              <img
                className="company-card-logo"
                src="/iconImages/styra.png"
                alt="company"
              />
            </div>
            <div className="company-card">
              <img
                className="company-card-logo"
                src="/iconImages/sunpower.png"
                alt="company"
              />
            </div>
            <div className="company-card">
              <img
                className="company-card-logo"
                src="/iconImages/taos.png"
                alt="company"
              />
            </div>
            <div className="company-card">
              <img
                className="company-card-logo"
                src="/iconImages/Tigera.png"
                alt="company"
              />
            </div>
            <div className="company-card">
              <img
                className="company-card-logo"
                src="/iconImages/upbound.png"
                alt="company"
              />
            </div>
          </div>
        </div>
        <div className="talk-content-right"></div>
      </div>
    </div>
  );
};
export default talks;
