import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function Banner() {
  return (
    <div> <Carousel >
    <div>
        <img src="https://img.freepik.com/free-psd/flat-design-language-learning-template_23-2149273677.jpg?size=626&ext=jpg&uid=R98219700&ga=GA1.2.1081700445.1665935105&semt=ais" />

    </div>
    <div>
        <img src="https://img.freepik.com/free-psd/language-learning-horizontal-banner-template_23-2149442038.jpg?size=626&ext=jpg&uid=R98219700&ga=GA1.2.1081700445.1665935105&semt=ais" />

    </div>
    <div>
        <img src="https://img.freepik.com/free-psd/foreign-language-lessons-horizontal-banner-template_23-2149449047.jpg?size=626&ext=jpg&uid=R98219700&ga=GA1.2.1081700445.1665935105&semt=ais" />
 
    </div>
    <div>
        <img src="https://img.freepik.com/free-psd/flat-design-language-learning-template_23-2149273676.jpg?size=626&ext=jpg&uid=R98219700&ga=GA1.2.1081700445.1665935105&semt=ais" />

    </div>

</Carousel></div>
  )
}

export default Banner;