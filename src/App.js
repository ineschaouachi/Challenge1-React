import './App.css';
import styled from "styled-components";
import Header from './components/Header';
import Welcome from './pages/Welcome';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
    <Header></Header>
    <AppFrame className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/welcome' 
          render={(propos) =>  <Welcome {...propos} /> }></Route>
          <Route path='/products' 
          render={(propos) =>  <Products {...propos} /> }></Route>
          <Route path='/products/:name' 
          render={(propos) =>  <ProductDetails {...propos} /> }></Route>
          <Route exact render={()=><p>Default rendered page!</p>}></Route>
        </Routes>
    </BrowserRouter>
    </AppFrame>
    </>
  );
}
const AppFrame = styled.div`
  text-align : center;
  display : flex;
  `;

export default App;
