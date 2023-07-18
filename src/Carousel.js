import React from 'react';
import './Carousel.css';
import birddex from './images/birddex.png'
import fantasydungeon from './images/fantasydungeon.PNG'
import reactjam from './images/reactjam.PNG'

function Carousel({ theme }) {

  const getItemBoxBlogClassName = () => {
    if (theme.name === 'Theme 1') {
      return 'item-box-blog item-box-blog-hover-theme1';
    } else if (theme.name === 'Theme 2') {
      return 'item-box-blog item-box-blog-hover-theme2';
    } else if (theme.name === 'Theme 3') {
      return 'item-box-blog item-box-blog-hover-theme3';
    } else if (theme.name === 'Theme 4') {
      return 'item-box-blog item-box-blog-hover-theme4';
    } else if (theme.name === 'Theme 5') {
      return 'item-box-blog item-box-blog-hover-theme5';
    } else if (theme.name === 'Theme 6') {
      return 'item-box-blog item-box-blog-hover-theme6';
    } else if (theme.name === 'Theme 7') {
      return 'item-box-blog item-box-blog-hover-theme7';
    } else if (theme.name === 'Theme 8') {
      return 'item-box-blog item-box-blog-hover-theme8';
    } else if (theme.name === 'Theme 9') {
      return 'item-box-blog item-box-blog-hover-theme9';
    } else if (theme.name === 'Theme 10') {
      return 'item-box-blog item-box-blog-hover-theme10';
    } else {
      return 'item-box-blog';
    }
  };

  return (
    <div className="carousel-container">
      <div className="container-fluid">
        <div className="row blog">
          <div className="col-md-12">
            <div id="blogCarousel" className="carousel slide container-blog">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row">
                    <div className="col-md-4">
                      <div className={getItemBoxBlogClassName()}>
                        <div className="item-box-blog-image">
                          <div className="item-box-blog-date bg-blue-ui white">
                            <span className="mon">Fantasy<br/>Dungeon</span>
                          </div>
                          <figure>
                            <img alt="" src={fantasydungeon} />
                          </figure>
                        </div>
                        <div className="item-box-blog-body">
                          <div className="item-box-blog-data">
                          </div>
                          <div className="item-box-blog-text">
                            <p>A D&D Character Customization App. Built using Python, a PostgresSQL database, Flask, and more, with the D&D5E API.</p>
                          </div>
                          <div className="mt">
                            <a href="https://github.com/bethany-lynn/dnd-character-creation" className="btn bg-blue-ui white read" rel="noopener noreferrer" target="_blank">
                              Check it out!
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className={getItemBoxBlogClassName()}>
                        <div className="item-box-blog-image">
                          <div className="item-box-blog-date bg-blue-ui white">
                            <span className="mon">Bird-Dex</span>
                          </div>
                          <figure>
                            <img alt="" src={birddex} />
                          </figure>
                        </div>
                        <div className="item-box-blog-body">
                          <div className="item-box-blog-data">
                          </div>
                          <div className="item-box-blog-text">
                            <p>An 8-bit style bird appreciated app. Built alongside June Adams with React, Node, and more! Dynamically displayed using re-usable components.</p>
                          </div>
                          <div className="mt">
                            <a href="https://github.com/juneadam/bird-app" className="btn bg-blue-ui white read" rel="noopener noreferrer" target="_blank">
                              Check it out!
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className={getItemBoxBlogClassName()}>
                        <div className="item-box-blog-image">
                          <div className="item-box-blog-date bg-blue-ui white">
                            <span className="mon">React Jam</span>
                          </div>
                          <figure>
                            <img alt="" src={reactjam} />
                          </figure>
                        </div>
                        <div className="item-box-blog-body">
                          <div className="item-box-blog-data">
                          </div>
                          <div className="item-box-blog-text">
                            <p>Currently preparing for the annual React Jam to make an small game in 10 days! Possible screen-scoller, point collector!</p>
                          </div>
                          <div className="mt">
                            <a href="https://reactjam.com/" className="btn bg-blue-ui white read" rel="noopener noreferrer" target="_blank">
                              Check it out!
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;