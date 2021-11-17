import React from "react";

const News = (Props) => {
    return(
        <div>
            <h1>Hai tháng Hà Nội căng mình chống dịch COVID-19</h1>
            <p style = {{fontSize : "12px", color : "#999"}}>Thứ Ba, ngày 28/09/2021 14:00 PM (GMT+7)</p>
            <h4>Từ 24/7/2021, Hà Nội đã thực hiện bốn đợt giãn cách xã hội theo Chỉ thị 16 của Thủ tướng Chính phủ; tiếp đó là hàng loạt giải pháp mạnh mẽ của chính quyền thành phố nhằm ngăn chặn sự lây lan của dịch COVID-19, ngày 28/9, Hà Nội điều chỉnh biện pháp phòng, chống dịch, cho phép một số hoạt động được khôi phục trở lại với điều kiện mới, như: hoạt động thể dục, thể thao ngoài trời, trung tâm thương mại, cửa hàng may mặc, thời trang, hoá mỹ phẩm...</h4>
            <img className="img-news" src={require('../assets/img/photos/news-item1.jpg')}  alt={"logo"}/>
        </div>
    )
}

export default News;