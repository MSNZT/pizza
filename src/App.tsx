import React from "react";
import {Route, Routes} from "react-router-dom";
import {Cart, FullProduct, Home, MainLayout, NotFound, PaymentBlock} from "./components";
import './scss/app.scss'

// const Cart = React.lazy(() => import('./components/Pages/Cart'))
// const NotFound = React.lazy(() => import('./components/NotFound/NotFound'))
// const FullProduct = React.lazy(() => import('./components/FullProduct'))
// const Home = React.lazy(() => import('./components/Pages/Home'))

const App: React.FC = () => {
	return (
		<Routes>
			<Route path="/" element={<MainLayout/>}>
				<Route path=''
							 element={<Home/>}></Route>
				<Route path='*'
							 element={<NotFound/>}/>
				<Route path='cart' element={<Cart/>}/>
				<Route path='product/:id'
							 element={<FullProduct/>}/>
				<Route path='payment'
							 element={<PaymentBlock/>}/>
			</Route>
		</Routes>
	);
}

export default App;
