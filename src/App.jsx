import Categories from "./components/Categories";
import Downloads from "./components/Downloads";
import Footer from "./components/Footer";

import Header from "./components/Header";
import NearMeComponents from "./components/NearMeComponents";
import OnlineDelivery from "./components/OnlineDelivery";
import TopRest from "./components/TopRest";
function App() {

  return (
<>
<Header />
<Categories/>
<TopRest/>
<OnlineDelivery/>
<NearMeComponents/>
<Downloads/>
<Footer/>
</>
  );
}

export default App;
