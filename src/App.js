import { Route, Routes } from "react-router-dom";
import Home from './components/pages/Home/Home';
import GameList from './components/pages/GameList/GameList';
import BestSellers from './components/pages/BestSellers/BestSellers';
import AccessoriesList from './components/pages/AccessoriesList/AccessoriesList';
import Shop from './components/pages/Shop/Shop';
import Help from './components/pages/Help/Help';
import NotFound from './components/pages/NotFound/NotFound';
import Footer from "./components/views/Footer/Footer";
import SingleProduct from "./components/pages/SingleProduct/SingleProduct";

const App = () => {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/games" element={<GameList />}></Route>
        <Route path="/best-sellers" element={<BestSellers />}></Route>
        <Route path="/accessories" element={<AccessoriesList />}></Route>
        <Route path="/:id" element={<SingleProduct />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/help" element={<Help />}></Route>
        <Route path="/*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
