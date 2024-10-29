import "./App.css"
import "../src/styles/css/style.css"
import "../src/styles/css/aos.css"
import "../src/styles/css/bootstrap-datepicker.css"
import "../src/styles/css/bootstrap.min.css"
import "../src/styles/css/bootstrap.min.css.map"
import "../src/styles/css/jquery-ui.css"
import "../src/styles/css/jquery.fancybox.min.css"
import "../src/styles/css/magnific-popup.css"
import "../src/styles/css/mediaelementplayer.css"
import "../src/styles/css/owl.carousel.min.css"
import "../src/styles/css/owl.theme.default.min.css"
import Header from "./Header"
import HomeSection from "./HomeSection"
import About from "./About"
import NextSection from "./NextSection"
import MeetTeam from "./MeetTeam"
import Gallery from "./Gallery"
import HowWorks from "./HowItWorks"
import CounterArea from "./CounterArea"
function App() {
  return (
    <div className="App">
      <Header />

      <HomeSection />
      <About />
      <NextSection />
      <MeetTeam />
      <CounterArea />
      <Gallery />
      <HowWorks />
    </div>
  )
}

export default App
