import React, { useEffect } from 'react';
import './Carousel.css';
import $ from 'jquery';

function Carousel() {
    useEffect(() => {
        $(".project-carousel .indicators li").click(function(e) {
            e.preventDefault();
          let i = $(this).index();
          let targetElement = $(".project-carousel .tabs li");
          targetElement.eq(i).addClass('active');
          targetElement.not(targetElement[i]).removeClass('active');
        });
    
        $(".project-carousel .tabs li").click(function() {
          let targetElement = $(".project-carousel .tabs li");
          targetElement.addClass('active');
          targetElement.not($(this)).removeClass('active');
        });
    
        $(".slider .swiper-pagination span").each(function(i) {
          $(this).text(i + 1).prepend("0");
        });
      }, []);


  return (
    <section className="project-carousel">
      <div className="carousel-container">
        <div className="row">
          <div className="col-lg-6 col-12 d-lg-block">
            <ol className="carousel-indicators tabs">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active">
                <figure>
                  <img src="https://i.pinimg.com/736x/1b/f9/db/1bf9db61b32ceff79539bae2e2c1b98d.jpg" className="img-fluid" alt="" />
                </figure>
              </li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1">
                <figure>
                  <img src="https://i.pinimg.com/736x/1b/f9/db/1bf9db61b32ceff79539bae2e2c1b98d.jpg" className="img-fluid" alt="" />
                </figure>
              </li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2">
                <figure>
                  <img src="https://i.pinimg.com/736x/1b/f9/db/1bf9db61b32ceff79539bae2e2c1b98d.jpg" className="img-fluid" alt="" />
                </figure>
              </li>
            </ol>
          </div>
          <div className="col-lg-6 col-12 d-flex justify-content-center align-items-center">
            <div id="carouselExampleIndicators" data-interval="false" className="carousel slide" data-ride="carousel">
              <h3>MY PROJECTS</h3>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="quote-wrapper">
                    <p>BIRD-DEX</p>
                    <h3>bird information</h3>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="quote-wrapper">
                    <p>FANTASY DUNGEON</p>
                    <h3>dungeon information</h3>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="quote-wrapper">
                    <p>PORTFOLIO?</p>
                    <h3>link to resume?</h3>
                  </div>
                </div>
              </div>
              <ol className="carousel-indicators indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Carousel;