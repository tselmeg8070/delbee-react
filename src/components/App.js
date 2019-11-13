import React from 'react';
import {compose} from 'recompose';
import {withFirebase} from '../firebase';
import {connect} from 'react-redux';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';
import {addProducts} from "../redux/actions/product";
import * as ROUTER from '../constants/routes';
import LandingPage from './Landing';
import Navigation from './Navigation';
import AboutPage from './About';
import Footer from './Footer';
import ProductsPage from './Products';
import CartPage from './Cart';
import ProductPage from './Product';
import AdminLogin from './Admin/Login'
import {withAuthentication} from '../session'

class App extends React.Component {

    componentDidMount() {
        console.log("Component did mount");
        this.props.firebase.getProductsInstance().then(data => {
            this.props.dispatchProducts(data.data());
            console.log(data.data())
        });
    }

    render() {
    return (
        <Router>
            <Navigation/>
            <Route exact path={ROUTER.LANDING} component={LandingPage}/>
            <Route exact path={ROUTER.ABOUT} component={AboutPage}/>
            <Route exact path={ROUTER.PRODUCTS} component={ProductsPage}/>
            <Route exact path={ROUTER.PRODUCT+':id'} render={(props) => (
                <ProductPage key={props.match.params.id} {...props} />)
            } />
            <Route exact path={ROUTER.CART} component={CartPage}/>
            <Route exact path={ROUTER.LOGIN} component={AdminLogin}/>
            <Footer/>
        </Router>
    )
  }
}
const mapStateToProps = (state) => ({
    products: state.productState
});
const mapDispatchToProps = (dispatch) => ({
    dispatchProducts: (data) => {
        dispatch(addProducts(data))
    },
});
export default compose(
    withAuthentication,
    withFirebase,
    connect(mapStateToProps, mapDispatchToProps)
)(App);
