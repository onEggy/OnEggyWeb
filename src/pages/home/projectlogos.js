import React from "react";
import Image from "next/image";
import Slider from "react-slick";


const projectlogos = () => {

  return (
    <main className="sm:mt-14 my-12">
      <div className="inner">
      <div className="wrapper">
        <section style={{ "--speed": `${20000}ms` }} className="leftSwipe">
          <div className="image">
             <img
          src="/home/projectLogos/mgmt-logo.png"
          alt="Management Logo"
          className="project_logo"
          style={{
            filter: 'grayscale(100%)',
            width:"160px",
            height:"54px"
          }}
        />
        </div>
        <div className="image">
        <img
          src="/home/projectLogos/east-mojo-logo.png"
          alt="east-mojo-logo"
          className="project_logo"
          style={{
            filter: 'grayscale(100%)',
            width:"200px",
            height:"54px"
          }}
        />
        </div>
        <div className="image">
         <img
          src="/home/projectLogos/beyond-logo.png"
          alt="beyond"
          className="project_logo"
          style={{
            filter: 'grayscale(100%)',
            width:"128px",
            height:"54px"
          }}
        />
        </div>
        <div className="image">
          <img
            src="/home/projectLogos/bit-logo.png"
            alt="bitmemoir"
            className="project_logo"
            style={{
              filter: 'grayscale(100%)',
              width:"200px",
              height:"53px"
            }}
          />
          </div>
          <div className="image">
        <img
          src="/home/projectLogos/smile-logo.png"
          alt="smile"
          className="project_logo"
          style={{
            filter: 'grayscale(100%)',
            width:"120px",
            height:"54px"
          }}
        />
        </div>
        <div className="image">
        <img
          src="/home/projectLogos/numwize-logo.png"
          alt="nuberwize"
          className="project_logo"
          style={{
            filter: 'grayscale(100%)',
            width:"83px",
            height:"54px"
          }}
        />
      </div> 
        </section>
              <section style={{ "--speed": `${20000}ms` }} className="leftSwipe">
          <div className="image">
             <img
          src="/home/projectLogos/mgmt-logo.png"
          alt="Management Logo"
          className="project_logo"
          style={{
            filter: 'grayscale(100%)',
            width:"160px",
            height:"54px"
          }}
        />
        </div>
        <div className="image">
        <img
          src="/home/projectLogos/east-mojo-logo.png"
          alt="east-mojo-logo"
          className="project_logo"
          style={{
            filter: 'grayscale(100%)',
            width:"200px",
            height:"54px"
          }}
        />
        </div>
        <div className="image">
         <img
          src="/home/projectLogos/beyond-logo.png"
          alt="beyond"
          className="project_logo"
          style={{
            filter: 'grayscale(100%)',
            width:"128px",
            height:"54px"
          }}
        />
        </div>
        <div className="image">
          <img
            src="/home/projectLogos/bit-logo.png"
            alt="bitmemoir"
            className="project_logo"
            style={{
              filter: 'grayscale(100%)',
              width:"200px",
              height:"53px"
            }}
          />
          </div>
          <div className="image">
        <img
          src="/home/projectLogos/smile-logo.png"
          alt="smile"
          className="project_logo"
          style={{
            filter: 'grayscale(100%)',
            width:"120px",
            height:"54px"
          }}
        />
        </div>
        <div className="image">
        <img
          src="/home/projectLogos/numwize-logo.png"
          alt="nuberwize"
          className="project_logo"
          style={{
            filter: 'grayscale(100%)',
            width:"83px",
            height:"54px"
          }}
        />
      </div> 
        </section>
        {/* <section style={{ "--speed": `${speed}ms` }}>
          {images.map(({ id, image }) => (
            <div className="image" key={id}>
              <img src={image} alt={id} />
            </div>
          ))}
        </section>
        <section style={{ "--speed": `${speed}ms` }}>
          {images.map(({ id, image }) => (
            <div className="image" key={id}>
              <img src={image} alt={id} />
            </div>
          ))}
        </section> */}
      </div>
    </div>
      
        {/* <div className="mx-auto">
   
    {/* </Slider> */}
      {/* <div className="mt-20 flex flex-row justify-between items-center flex-wrap"> */}
      {/* <Slider {...settings}> */}
        {/*
       </div> */}
      {/* </Slider> */}
    </main>
  );
};

export default projectlogos;
