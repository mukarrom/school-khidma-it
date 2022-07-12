import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", position:'absolute', top:"50%", right:'2%' }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", position:'absolute', top:"50%", left:"2%", zIndex:'1' }}
        onClick={onClick}
      />
    );
  }

const Carousel = () => {
    const img = [
        "https://demo.web3canvas.com/themeforest/unisco/images/slider.jpg",
        "https://demo.web3canvas.com/themeforest/unisco/images/slider-2.jpg",
        "https://demo.web3canvas.com/themeforest/unisco/images/slider-3.jpg"
    ];
    const setting = {
        autoplay: true,
        autoplaySpeed:4000,
        dots:true,
        slidesToScroll:1,
        initialSlide:2,
        infinite:true,

      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    }
    return (
        <div className=''>
            <Slider {...setting} >
                {img.map(slide=> (
                    <div className="">
                        <img className='h-80' src={slide} alt=""/>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;