import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, getAllProducts } from "./redux/productsRedux";
import { useEffect } from "react";

const App = () => {
  const dispatch = useDispatch();
  const products = useSelector(getAllProducts);

  useEffect(() => {
    dispatch(fetchProducts());
}, [dispatch]);

  return (
    <div>
      {products.map(product => <li key={product.id}>{product.title} <img src={product.icon}/></li>)}
    </div>
  );
}

export default App;
