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
import "../assets/scss/Homepage.scss";
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
                                     id = 'Breadcrumb-item1' active>Việt Nam</BreadcrumbItem>
                    <BreadcrumbItem  className={classnames({ active: activeTab === '2' })}
                                     onClick={() => { toggle('2'); }}>Thế giới</BreadcrumbItem>
                  </Breadcrumb>
                </div>
                <TabContent activeTab={activeTab} >
                  <TabPane tabId="1" style = {{width : '100%', height : '80px',padding : '20px', display : 'flex'}}>
                      <div className = "tabs-item1">
                          <h6>SỐ CA NHIỄM</h6>
                          <p>770.640</p>
                      </div>
                      <div  className = "tabs-item2">
                          <h6>KHỎI</h6>
                          <p>559.941</p>
                      </div>
                      <div  className = "tabs-item3">
                          <h6>TỬ VONG</h6>
                          <p>18.936</p>
                      </div>
                  </TabPane>
                  {/* <TabPane tabId="2" style = {{width : '100%', height : '80px',padding : '20px', display : 'flex'}}>
                      <div  className = "tabs-item1">
                          <h6>SỐ CA NHIỄM</h6>
                          <p>770.640</p>
                      </div>
                      <div  className = "tabs-item2">
                          <h6>KHỎI</h6>
                          <p>559.941</p>
                      </div>
                      <div  className = "tabs-item3">
                          <h6>TỬ VONG</h6>
                          <p>18.936</p>
                      </div>
                  </TabPane> */}
                </TabContent>
                <div className = 'body'>
                  <div className = 'news-left'>
                      <div className = 'title'>
                        <div className = 'hrblue'></div>
                        <div className = 'hrred'></div>
                          <h3>Chỉ đạo chống dịch</h3>
                      </div>
                      <div className = 'news-body'>
                        <div className = 'news-img'>
                          <img src={require('../assets/img/photos/news-img1.jpeg')} alt={"logo"}/>
                        </div>
                        <div className = 'news-content'>
                          <h4>Thứ trưởng Trần Văn Thuấn: Bộ Y tế chưa mua test kháng nguyên nhanh</h4>
                          <p>Trong mấy ngày gần đây một số thông tin phản ánh giá xét nghiệm kháng nguyên nhanh rất khác nhau, </p>
                        </div>
                      </div>
                      <div className = 'news-body'>
                        <div className = 'news-img'>
                          <img src={require('../assets/img/photos/news-img5.jpeg')} alt={"logo"}/>
                        </div>
                        <div className = 'news-content'>
                          <h4>Bộ Y tế: Xử lý tiêu cực, lợi ích nhóm trong mua sắm trang thiết bị, sinh...</h4>
                          <p>Bộ Y tế đề nghị xử lý nghiêm khắc các hành vi tham nhũng, tiêu cực, lợi ích...</p>
                        </div>
                      </div>
                      <div className = 'news-body'>
                        <div className = 'news-img'>
                          <img src={require('../assets/img/photos/news-img6.jpeg')} alt={"logo"}/>
                        </div>
                        <div className = 'news-content'>
                          <h4>Để thích ứng an toàn với COVID-19 cần những chỉ số, điều kiện gì?</h4>
                          <p>Dự thảo hướng dẫn tạm thời "Thích ứng an toàn, linh hoạt, kiểm soát hiệu quả... </p>
                        </div>
                      </div>
                  </div>
                  <div className = 'news-right'>
                      <div className = 'title'>
                        <div className = 'hrblue'></div>
                        <div className = 'hrred'></div>
                        <h3>Bản tin Covid-19</h3>
                      </div>
                      <div className = 'news-body'>
                        <div className = 'news-img'>
                          <img src={require('../assets/img/photos/news-img2.jpg')} alt={"logo"}/>
                        </div>
                        <div className = 'news-content'>
                          <h4>Sáng 28/9: Việt Nam tiếp nhận 2,6 triệu liều vaccine COVID-19 từ Chính...</h4>
                          <p>SKĐS - Việt Nam tiếp nhận 2,6 triệu liều vaccine COVID-19 từ Chính phủ Đức;... </p>
                        </div>
                      </div>
                      <div className = 'news-body'>
                        <div className = 'news-img'>
                          <img src={require('../assets/img/photos/news-img7.webp')} alt={"logo"}/>
                        </div>
                        <div className = 'news-content'>
                          <h4>Trưa 28/9: Cả nước đã tiêm trên 40,2 triệu liều vaccine COVID-19; Trốn...</h4>
                          <p>SKĐS - Đến trưa ngày 28/9, cả nước đã tiêm trên 40,2 triệu liều vaccine... </p>
                        </div>
                      </div>
                      <div className = 'news-body'>
                        <div className = 'news-img'>
                          <img src={require('../assets/img/photos/news-img8.webp')} alt={"logo"}/>
                        </div>
                        <div className = 'news-content'>
                          <h4>Ngày 28/9: Số ca mắc mới COVID-19 chỉ còn 4.589, số ca khỏi nhiều gấp gần 5 lần</h4>
                          <p>SKĐS - Việt Nam tiếp nhận 2,6 triệu liều vaccine COVID-19 từ Chính phủ Đức;...</p>
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
                          <h3>Dự phòng - Điều trị</h3>
                      </div>
                      <div className = 'news-container' >
                      <div className = 'news-body-2'>
                          <div className = 'news-img-2'>
                            <img src={require('../assets/img/photos/news-img3.jpeg')} alt={"logo"}/>
                          </div>
                          <div className = 'news-content-2'>
                            <h3>Bộ Y tế đã hướng dẫn Sở Y tế TP.HCM cập nhật ca F0 qua xét nghiệm bằng test nhanh từ ngày 20/8</h3>
                            <p>Trong mấy ngày gần đây một số thông tin phản ánh giá xét nghiệm kháng nguyên nhanh rất khác nhau, </p>
                          </div>
                      </div>
                          <div className = 'displayBlock'>
                            <div className = 'news-body-3'>
                              <div className = 'news-img'>
                                <img src={require('../assets/img/photos/news-img9.webp')} alt={"logo"}/>
                              </div>
                              <div className = 'news-content'>
                                <h4>Không xem nhẹ điều trị "hậu COVID-19"</h4>
                              </div>
                            </div>
                            <div className = 'news-body-3'>
                              <div className = 'news-img'>
                                <img src={require('../assets/img/photos/news-img10.png')} alt={"logo"}/>
                              </div>
                              <div className = 'news-content'>
                                <h4>Hà Nội lên phương án dự trù số vaccine COVID-19 cần để tiêm mũi 2 cho người dân</h4>
                              </div>
                            </div>
                            <div className = 'news-body-3'>
                              <div className = 'news-img'>
                                <img src={require('../assets/img/photos/news-img11.jpeg')} alt={"logo"}/>
                              </div>
                              <div className = 'news-content'>
                                <h4>Hà Nội điều chỉnh phân luồng xét nghiệm sàng lọc chẩn đoán SARS-CoV-2</h4>
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
                          <h3>Vaccine - Tiêm chủng</h3>
                      </div>
                      <div className = 'news-container' >
                      <div className = 'news-body-2'>
                          <div className = 'news-img-2'>
                            <img src={require('../assets/img/photos/news-img4.webp')} alt={"Phân bổ 100.000 liều vaccine AstraZeneca để ưu tiên tiêm mũi 2 cho người dân Hà Nội"}/>
                          </div>
                          <div className = 'news-content-2'>
                            <h3>Phân bổ 100.000 liều vaccine AstraZeneca để ưu tiên tiêm mũi 2 cho người dân Hà Nội</h3>
                            <p>Trong mấy ngày gần đây một số thông tin phản ánh giá xét nghiệm kháng nguyên nhanh rất khác nhau,</p>
                          </div>
                      </div>
                          <div className = 'displayBlock'>
                            <div className = 'news-body-3'>
                              <div className = 'news-img'>
                                <img src={require('../assets/img/photos/news-img12.webp')} alt={"logo"}/>
                              </div>
                              <div className = 'news-content'>
                                <h4>TP.HCM tiếp tục triển khai tiêm vaccine Pfizer cho người dân</h4>
                              </div>
                            </div>
                            <div className = 'news-body-3'>
                              <div className = 'news-img'>
                                <img src={require('../assets/img/photos/news-img13.jpeg')} alt={"logo"}/>
                              </div>
                              <div className = 'news-content'>
                                <h4>Bộ Y tế: Từ tháng 10, vaccine COVID-19 về nhiều, các địa phương sẵn sàng triển khai tiêm số lượng lớn</h4>
                              </div>
                            </div>
                            <div className = 'news-body-3'>
                              <div className = 'news-img'>
                                <img src={require('../assets/img/photos/news-img14.jpg')} alt={"logo"}/>
                              </div>
                              <div className = 'news-content'>
                                <h4>Tiêm vaccine phòng COVID-19 vượt 40 triệu liều</h4>
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