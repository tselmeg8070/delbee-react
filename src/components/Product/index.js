import React from 'react';
import {connect} from "react-redux";
import HelpBar from '../shared/HelpBar';
import {addToCart} from "../../redux/actions/cart";
import {numberWithCommas} from "../../utils/HelperFunctions";
import {compose} from 'recompose';
import {withRouter} from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: 0,
            pack: '',
        }
    }

    handleMinus = () => {
        if (this.state.quantity > 0) {
            this.setState({quantity: this.state.quantity - 1})
        }
    };
    handlePlus = () => {
        this.setState({quantity: this.state.quantity + 1})
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    handleSubmit = () => {
        const data = {
            id: this.props.match.params.id,
            pack: this.state.pack,
            quantity: this.state.quantity,
        };
        this.props.dispatchToCart(data);
        window.addedToCart();
        this.props.history.push(ROUTES.PRODUCTS);
    };

    render() {
        // const {name, picture, description, packs, price} = this.props.product;
        const product = this.props.product;
        const {quantity} = this.state;
        return (
            <div>
                {this.props.product !== undefined &&
                <div className={'container'}>
                <div className="row">
                    {console.log(this.state.pack)}
                    <div className="col-md-6 mt-3">
                        <img src={product.picture} width="100%"/>

                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-12">
                                <br/>
                                <h4><b>{product.name}</b></h4>
                                <p>{product.description}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <h5><b>Багц:</b></h5>
                                <div className="" data-toggle="buttons">

                                    {Object.keys(product.packs).map(key =>
                                        <button className="btn btn-primary" name={'pack'} value={key} key={key} onClick={this.handleChange}>
                                            <input type="radio" name="pack"
                                                   value={key} /><b>{product.packs[key].name}</b>
                                            <br/>
                                            {product.packs[key].quantity}ш
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <h5><b>Тоо ширхэг:</b></h5>
                                <div id="input_div" className="input-group">
                                    <button
                                        className="btn btn-default btn-number input-group-prepend"
                                        style={{backgroundColor: '#51afc0'}}
                                        onClick={this.handleMinus}>-
                                    </button>

                                    <input type="text" name={'quantity'} className="text-center" onChange={this.handleChange}
                                           size="5" value={quantity}/>
                                    <button
                                        className="btn btn-default btn-number input-group-prepend ml-3"
                                        style={{backgroundColor: '#51afc0'}}
                                        onClick={this.handlePlus}>+</button>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <button type="button" onClick={this.handleSubmit} disabled={'' === this.state.pack && this.state.quantity > 0} className="btn btn-white">
                                    <b>Сагсанд нэмэх</b>
                                    <br/>
                                    {numberWithCommas(product.price)}₮/үнэ/
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                }
                <HelpBar/>

            </div>
        )
    }
}
const mapStateToProps = (state, props) => ({
    product: state.productState[props.match.params.id]
});
const mapDispatchToProps = (dispatch) => ({
    dispatchToCart: (product) => dispatch(addToCart(product))
});
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter
)(Product)
