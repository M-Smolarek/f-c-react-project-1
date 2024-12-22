import "./reset.css";
import TopBanner from "./components/TopBanner/TopBanner";
import MainSection from "./components/MainSection/MainSection";
import Coworkers from "./components/Coworkers/Coworkers";
import Services from "./components/Services/Services";
import BottomBanner from "./components/BottomBanner/BottomBanner";

const App = () => {
  return (
    <div className="App">
      <TopBanner />
      <MainSection />
      <Coworkers />
      <Services />
      <BottomBanner />
    </div>
  );
};

export default App;
