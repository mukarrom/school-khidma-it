import AboutHome from "../About/AboutHome";
import Contact from "../Contact/Contact";
import Footer from "../Shared/Footer";
import HeroBenner from "./HeroBenner";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div>
      {/* // eslint-disable-next-line jsx-a11y/no-distracting-elements */}
      <marquee
        id="latestNews"
        behavior="scroll"
        direction="left"
        onmouseover="this.stop();"
        onmouseout="this.start();"
      >
        <span className="dot"></span>
        <a href="Pages/NewsEvents/NewsDetailsN.aspx?eventId=50118">
          ২০২২ শিক্ষাবর্ষে ৭ম শ্রেণিতে মেধা তালিকা থেকে সকল শিক্ষার্থী ভর্তি
          হওয়ায় কোনো আসন খালি না থাকায় অপেক্ষমাণ তালিকা থেকে ভর্তি নেয়া সম্ভব
          হচ্ছেনা-কলেজ কর্তৃপক্ষ
        </a>
      </marquee>
      <HeroBenner />
      <AboutHome />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
