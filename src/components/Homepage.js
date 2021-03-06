import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Breadcrumb, BreadcrumbItem,
  TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col
} from 'reactstrap';
import "../assets/css/components/Homepage.css";
import classnames from 'classnames';
const Homepage = (props) => {

    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
      if(activeTab !== tab) setActiveTab(tab);
    }
    const items = [
        {
          src: require('../assets/img/photos/background-img.jpg'),
          altText: 'Slide 1',
          caption: 'Slide 1'
        },
        {
          src: require('../assets/img/photos/background-img.jpg'),
          altText: 'Slide 2',
          caption: 'Slide 2'
        },
        {
          src: require('../assets/img/photos/background-img.jpg'),
          altText: 'Slide 3',
          caption: 'Slide 3'
        }
      ];
      
      const CarouselHomepage = (props) => {
        const [activeIndex, setActiveIndex] = useState(0);
        const [animating, setAnimating] = useState(false);
      
        const next = () => {
          if (animating) return;
          const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
          setActiveIndex(nextIndex);
        }
      
        const previous = () => {
          if (animating) return;
          const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
          setActiveIndex(nextIndex);
        }
      
        const goToIndex = (newIndex) => {
          if (animating) return;
          setActiveIndex(newIndex);
        }
      
        const slides = items.map((item) => {
          return (
            <CarouselItem
              onExiting={() => setAnimating(true)}
              onExited={() => setAnimating(false)}
              key={item.src}
            >
              <img src={item.src} alt={item.altText} />
              <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
            </CarouselItem>
          );
        });
      
        return (
          <div style={{width: "450px", height: "200px", margin: "auto"}}>
              <Carousel
              activeIndex={activeIndex}
              next={next}
              previous={previous}
              > 
              <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
              {slides}
              <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
              <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
            </Carousel>
          </div>
        );
      }

    return (
        <React.Fragment>
            <div style = {{marginTop: '96px', width: '100%', textAlign: 'center',  backgroundImage: `url("../assets/img/photos/background-img.jpg")` }}>
                {/* <CarouselHomepage/> */}
                <div tabs className = "tabs">
                  <Breadcrumb className = 'Breadcrumb'>
                    <BreadcrumbItem  className={classnames({ active: activeTab === '1' })}
                                     onClick={() => { toggle('1'); }} 
                                     id = 'Breadcrumb-item1' active>Vi???t Nam</BreadcrumbItem>
                    <BreadcrumbItem  className={classnames({ active: activeTab === '2' })}
                                     onClick={() => { toggle('2'); }}>Th??? gi???i</BreadcrumbItem>
                  </Breadcrumb>
                </div>
                <TabContent activeTab={activeTab} >
                  <TabPane tabId="1" style = {{width : '100%', height : '80px',padding : '20px', display : 'flex'}}>
                      <div className = "tabs-item1">
                          <h6>S??? CA NHI???M</h6>
                          <p>770.640</p>
                      </div>
                      <div  className = "tabs-item2">
                          <h6>KH???I</h6>
                          <p>559.941</p>
                      </div>
                      <div  className = "tabs-item3">
                          <h6>T??? VONG</h6>
                          <p>18.936</p>
                      </div>
                  </TabPane>
                  {/* <TabPane tabId="2" style = {{width : '100%', height : '80px',padding : '20px', display : 'flex'}}>
                      <div  className = "tabs-item1">
                          <h6>S??? CA NHI???M</h6>
                          <p>770.640</p>
                      </div>
                      <div  className = "tabs-item2">
                          <h6>KH???I</h6>
                          <p>559.941</p>
                      </div>
                      <div  className = "tabs-item3">
                          <h6>T??? VONG</h6>
                          <p>18.936</p>
                      </div>
                  </TabPane> */}
                </TabContent>
                <div className = 'body'>
                  <div className = 'news-left'>
                      <div className = 'title'>
                        <div className = 'hrblue'></div>
                        <div className = 'hrred'></div>
                          <h3>Ch??? ?????o ch???ng d???ch</h3>
                      </div>
                      <div className = 'news-body'>
                        <div className = 'news-img'>
                          <img src={require('../assets/img/photos/news-img1.jpeg')} alt={"logo"}/>
                        </div>
                        <div className = 'news-content'>
                          <h4>Th??? tr?????ng Tr???n V??n Thu???n: B??? Y t??? ch??a mua test kh??ng nguy??n nhanh</h4>
                          <p>Trong m???y ng??y g???n ????y m???t s??? th??ng tin ph???n ??nh gi?? x??t nghi???m kh??ng nguy??n nhanh r???t kh??c nhau, </p>
                        </div>
                      </div>
                      <div className = 'news-body'>
                        <div className = 'news-img'>
                          <img src={require('../assets/img/photos/news-img5.jpeg')} alt={"logo"}/>
                        </div>
                        <div className = 'news-content'>
                          <h4>B??? Y t???: X??? l?? ti??u c???c, l???i ??ch nh??m trong mua s???m trang thi???t b???, sinh...</h4>
                          <p>B??? Y t??? ????? ngh??? x??? l?? nghi??m kh???c c??c h??nh vi tham nh??ng, ti??u c???c, l???i ??ch...</p>
                        </div>
                      </div>
                      <div className = 'news-body'>
                        <div className = 'news-img'>
                          <img src={require('../assets/img/photos/news-img6.jpeg')} alt={"logo"}/>
                        </div>
                        <div className = 'news-content'>
                          <h4>????? th??ch ???ng an to??n v???i COVID-19 c???n nh???ng ch??? s???, ??i???u ki???n g???</h4>
                          <p>D??? th???o h?????ng d???n t???m th???i "Th??ch ???ng an to??n, linh ho???t, ki???m so??t hi???u qu???... </p>
                        </div>
                      </div>
                  </div>
                  <div className = 'news-right'>
                      <div className = 'title'>
                        <div className = 'hrblue'></div>
                        <div className = 'hrred'></div>
                        <h3>B???n tin Covid-19</h3>
                      </div>
                      <div className = 'news-body'>
                        <div className = 'news-img'>
                          <img src={require('../assets/img/photos/news-img2.jpg')} alt={"logo"}/>
                        </div>
                        <div className = 'news-content'>
                          <h4>S??ng 28/9: Vi???t Nam ti???p nh???n 2,6 tri???u li???u vaccine COVID-19 t??? Ch??nh...</h4>
                          <p>SK??S - Vi???t Nam ti???p nh???n 2,6 tri???u li???u vaccine COVID-19 t??? Ch??nh ph??? ?????c;... </p>
                        </div>
                      </div>
                      <div className = 'news-body'>
                        <div className = 'news-img'>
                          <img src={require('../assets/img/photos/news-img7.webp')} alt={"logo"}/>
                        </div>
                        <div className = 'news-content'>
                          <h4>Tr??a 28/9: C??? n?????c ???? ti??m tr??n 40,2 tri???u li???u vaccine COVID-19; Tr???n...</h4>
                          <p>SK??S - ?????n tr??a ng??y 28/9, c??? n?????c ???? ti??m tr??n 40,2 tri???u li???u vaccine... </p>
                        </div>
                      </div>
                      <div className = 'news-body'>
                        <div className = 'news-img'>
                          <img src={require('../assets/img/photos/news-img8.webp')} alt={"logo"}/>
                        </div>
                        <div className = 'news-content'>
                          <h4>Ng??y 28/9: S??? ca m???c m???i COVID-19 ch??? c??n 4.589, s??? ca kh???i nhi???u g???p g???n 5 l???n</h4>
                          <p>SK??S - Vi???t Nam ti???p nh???n 2,6 tri???u li???u vaccine COVID-19 t??? Ch??nh ph??? ?????c;...</p>
                        </div>
                      </div>
                  </div>
                </div>
                <div className = 'hr'></div>
                <div className = 'body-2'>
                  <div className = 'news-left-2'>
                      <div className = 'title'>
                        <div className = 'hrblue'></div>
                        <div className = 'hrred'></div>
                          <h3>D??? ph??ng - ??i???u tr???</h3>
                      </div>
                      <div className = 'news-container' >
                      <div className = 'news-body-2'>
                          <div className = 'news-img-2'>
                            <img src={require('../assets/img/photos/news-img3.jpeg')} alt={"logo"}/>
                          </div>
                          <div className = 'news-content-2'>
                            <h3>B??? Y t??? ???? h?????ng d???n S??? Y t??? TP.HCM c???p nh???t ca F0 qua x??t nghi???m b???ng test nhanh t??? ng??y 20/8</h3>
                            <p>Trong m???y ng??y g???n ????y m???t s??? th??ng tin ph???n ??nh gi?? x??t nghi???m kh??ng nguy??n nhanh r???t kh??c nhau, </p>
                          </div>
                      </div>
                          <div className = 'displayBlock'>
                            <div className = 'news-body-3'>
                              <div className = 'news-img'>
                                <img src={require('../assets/img/photos/news-img9.webp')} alt={"logo"}/>
                              </div>
                              <div className = 'news-content'>
                                <h4>Kh??ng xem nh??? ??i???u tr??? "h???u COVID-19"</h4>
                              </div>
                            </div>
                            <div className = 'news-body-3'>
                              <div className = 'news-img'>
                                <img src={require('../assets/img/photos/news-img10.png')} alt={"logo"}/>
                              </div>
                              <div className = 'news-content'>
                                <h4>H?? N???i l??n ph????ng ??n d??? tr?? s??? vaccine COVID-19 c???n ????? ti??m m??i 2 cho ng?????i d??n</h4>
                              </div>
                            </div>
                            <div className = 'news-body-3'>
                              <div className = 'news-img'>
                                <img src={require('../assets/img/photos/news-img11.jpeg')} alt={"logo"}/>
                              </div>
                              <div className = 'news-content'>
                                <h4>H?? N???i ??i???u ch???nh ph??n lu???ng x??t nghi???m s??ng l???c ch???n ??o??n SARS-CoV-2</h4>
                              </div>
                            </div>
                          </div>
                      </div>
                  </div>
                </div>
                <div className = 'hr'></div>
                <div className = 'body-2'>
                  <div className = 'news-left-2'>
                      <div className = 'title'>
                        <div className = 'hrblue'></div>
                        <div className = 'hrred'></div>
                          <h3>Vaccine - Ti??m ch???ng</h3>
                      </div>
                      <div className = 'news-container' >
                      <div className = 'news-body-2'>
                          <div className = 'news-img-2'>
                            <img src={require('../assets/img/photos/news-img4.webp')} alt={"Ph??n b??? 100.000 li???u vaccine AstraZeneca ????? ??u ti??n ti??m m??i 2 cho ng?????i d??n H?? N???i"}/>
                          </div>
                          <div className = 'news-content-2'>
                            <h3>Ph??n b??? 100.000 li???u vaccine AstraZeneca ????? ??u ti??n ti??m m??i 2 cho ng?????i d??n H?? N???i</h3>
                            <p>Trong m???y ng??y g???n ????y m???t s??? th??ng tin ph???n ??nh gi?? x??t nghi???m kh??ng nguy??n nhanh r???t kh??c nhau,</p>
                          </div>
                      </div>
                          <div className = 'displayBlock'>
                            <div className = 'news-body-3'>
                              <div className = 'news-img'>
                                <img src={require('../assets/img/photos/news-img12.webp')} alt={"logo"}/>
                              </div>
                              <div className = 'news-content'>
                                <h4>TP.HCM ti???p t???c tri???n khai ti??m vaccine Pfizer cho ng?????i d??n</h4>
                              </div>
                            </div>
                            <div className = 'news-body-3'>
                              <div className = 'news-img'>
                                <img src={require('../assets/img/photos/news-img13.jpeg')} alt={"logo"}/>
                              </div>
                              <div className = 'news-content'>
                                <h4>B??? Y t???: T??? th??ng 10, vaccine COVID-19 v??? nhi???u, c??c ?????a ph????ng s???n s??ng tri???n khai ti??m s??? l?????ng l???n</h4>
                              </div>
                            </div>
                            <div className = 'news-body-3'>
                              <div className = 'news-img'>
                                <img src={require('../assets/img/photos/news-img14.jpg')} alt={"logo"}/>
                              </div>
                              <div className = 'news-content'>
                                <h4>Ti??m vaccine ph??ng COVID-19 v?????t 40 tri???u li???u</h4>
                              </div>
                            </div>
                          </div>
                      </div>
                  </div>
                </div>
            </div>
        </React.Fragment>
        
    )
}

export default Homepage;