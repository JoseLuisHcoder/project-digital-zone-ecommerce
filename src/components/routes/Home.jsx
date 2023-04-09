import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../store/slices/products.slice";
import CardHome from "./home/CardHome";
import CategoryFilter from "./home/CategoryFilter";
import InputSearch from "./home/InputSearch";
import PriceFilter from "./home/PriceFilter";
import "./home/style/home.css";


const Home = () => {
  const [inputSearch, setInputSearch] = useState("");
  const [filterProducts, setFilterProducts] = useState();
  const [objFilterPrice, setObjFilterPrice] = useState({});

  // console.log(formIsClose);

  const products = useSelector((state) => state.products);
  //filtro por Categorias
  useEffect(() => {
    // inputSearch.length   quitamos eso del if por  error en consola
    if (inputSearch.length !== 0) {
      const filter = products?.filter((e) =>
        e.title.toLowerCase().includes(inputSearch.toLowerCase())
      );
      setFilterProducts(filter);
    } else {
      setFilterProducts("");
    }
  }, [inputSearch]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  // console.log(objFilterPrice);
  useEffect(() => {
    const filter = products?.filter((e) => {
      const price = Number(e.price);
      const min = objFilterPrice.from;
      const max = objFilterPrice.to;
      //este if es para cuando colocan un valor en los dos inputs
      if (min && max) {
        return min <= price && price <= max;
        // este if es para cuando colocan un valor en min
      } else if (min && !max) {
        return min <= price;
        //este if es para cuando colocan un valor solo en max
      } else if (!min && max) {
        return price <= max;
        //este else para cuando no colocan ningun dato en los dos inputs
      } else {
        return true;
      }
    });
    setFilterProducts(filter);
  }, [objFilterPrice.to, objFilterPrice.from]);
  // [objFilterPrice.to , objFilterPrice.from]  quitamos esto del arreglo de dependencias por error en consola que da, lo pondremos una vez sepamosporque ocurre el error

  // console.log(inputSearch);

  // console.log(products);
  return (
    <main className="home">
      <div className="home__filters">
        <div className="home__filter__price">
          <PriceFilter setObjFilterPrice={setObjFilterPrice} />
        </div>
        <div className="home__filter__category">
          <CategoryFilter />
        </div>
      </div>
      <div className="home__container__card">
        <div>
          <InputSearch setInputSearch={setInputSearch} />
        </div>
        {filterProducts
          ? filterProducts?.map((product) => (
              <CardHome key={product.id} product={product} />
            ))
          : products?.map((product) => (
              <CardHome key={product.id} product={product} />
            ))}
      </div>
    </main>
  );
};

export default Home;
