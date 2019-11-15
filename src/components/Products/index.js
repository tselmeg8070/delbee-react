import React from 'react';
import {Link, withRouter} from "react-router-dom";
import Item from  '../shared/Item';
import {connect} from "react-redux";
import {compose} from "recompose";
import * as ROUTES from "../../constants/routes";

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category: 0
        }
    }
    onChangeCategory = (category) => {
        console.log("Category changing");
        this.setState({
            category
        })
    };
    handleAddProduct = () => {
        this.props.history.push(ROUTES.ADMIN_PRODUCT_ADD);
    };
    render() {
        const products = this.props.products;
        const category = this.state.category;
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-12">
                            <ul className="filter text-center mb-5">
                                <li>
                                    <button className="btn btn-secondary btn-outline waves waves-dark btn-lg"
                                       onClick={()=>this.onChangeCategory(0)}>Бүгд</button>
                                </li>
                                <li>
                                    <button className="btn btn-secondary btn-outline waves waves-dark btn-lg"
                                       data-filter=".1" onClick={()=>this.onChangeCategory(1)}>Ариун цэврийн цаас</button>
                                </li>
                                <li>
                                    <button className="btn btn-secondary btn-outline waves waves-dark btn-lg"
                                       data-filter=".2" onClick={()=>this.onChangeCategory(2)}>Хуурай салфетка</button>
                                </li>
                                <li>
                                    <button className="btn btn-secondary btn-outline waves waves-dark btn-lg"
                                       data-filter=".3" onClick={()=>this.onChangeCategory(3)}>Нойтон салфетка</button>
                                </li>
                                <li>
                                    <button className="btn btn-secondary btn-outline waves waves-dark btn-lg"
                                       data-filter=".4" onClick={()=>this.onChangeCategory(4)}>Бусад</button>
                                </li>
                            </ul>
                    </div>
                </div>
                {this.props.authUser !== null &&
                    <div className={'row'}>
                        <button className={'btn btn-block'} onClick={this.handleAddProduct}>+ ШИНЭ БҮТЭЭГДЭХҮҮН НЭМЭХ</button>
                    </div>
                }

                <div className='row'>
                    <div className={'col-md-12'}>
                        <div className="isotope cols-3 gutter">
                        {category === 0
                            ? Object.keys(products).map(key => <Item key={key} id={key} data={products[key]}/>)
                            : Object.keys(products).filter(key => products[key].category === category).map(key => <Item key={key} id={key} data={products[key]}/>)}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    products: state.productState,
    authUser: state.sessionState.authUser
});
export default compose(
    connect(mapStateToProps),
    withRouter
    )(Product);
