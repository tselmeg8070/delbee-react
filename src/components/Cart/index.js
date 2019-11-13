import React from 'react';
import {connect} from "react-redux";
import {numberWithCommas} from "../../utils/HelperFunctions";
import {withRouter} from 'react-router-dom';
import {compose} from "recompose";
import * as ROUTES from '../../constants/routes'

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            register: '',
            phone: '',
            location: ''
        }
    }
    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    };
    handleSubmit = () => {
          if(this.validate()) {
              this.setState({ name: '',
                  email: '',
                  register: '',
                  phone: '',
                  location: ''});
              var i = 1;
              let data = [];
              var price = 0;
              this.props.cartState.map(item => {
                  price += this.props.productState[item.id].price * item.quantity * this.props.productState[item.id].packs[item.pack].quantity;
                  data.push({
                      id: i++,
                      name: this.props.productState[item.id].name,
                      pack: {
                          name: this.props.productState[item.id].packs[item.pack].name,
                          quantity: this.props.productState[item.id].packs[item.pack].quantity,
                      },
                      quantity: item.quantity * this.props.productState[item.id].packs[item.pack].quantity,
                      price: this.props.productState[item.id].price * item.quantity * this.props.productState[item.id].packs[item.pack].quantity
                  })
              });

              fetch('https://us-central1-delbee.cloudfunctions.net/widgets/invoice', {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                      data,
                      user: {...this.state, price}
                  })
              }).then(res => {
                  if (res.ok) {
                      window.orderSuccess();
                      this.props.history.push(ROUTES.LANDING);
                  } else {

                  }
              })

          }
    };
    validate() {
        return true
    }
    render() {
        const cartItems = this.props.cartState;
        var i = 1;
        var priceSum = 0;
        return (
            <div className='container mt-4'>
                <div className="row">
                    <div className="col-md-9">
                        <h3>Таны сагсанд</h3>
                        <div className="table-responsive">
                            <table className="table">
                                <tr>
                                    <th>#</th>
                                    <th>Бүтээгдэхүүн</th>
                                    <th>Багц</th>
                                    <th>Ширхэг</th>
                                    <th>Үнэ</th>
                                    <th>Үйлдэл</th>
                                </tr>
                                {cartItems.map(item => {
                                    var price = this.props.productState[item.id].packs[item.pack].quantity *  item.quantity * this.props.productState[item.id].price;
                                    priceSum += price;
                                    return (
                                        <tr>

                                            <td >
                                                {i++}
                                            </td>
                                            <td >
                                                {this.props.productState[item.id].name}
                                            </td>
                                            <td >
                                                {this.props.productState[item.id].packs[item.pack].name}
                                            </td>
                                            <td >
                                                {numberWithCommas(this.props.productState[item.id].packs[item.pack].quantity * item.quantity)}
                                            </td>
                                            <td >
                                                {numberWithCommas(price)}₮
                                            </td>
                                            <td className="">
                                                <i className="fa fa-trash"></i>
                                            </td>
                                        </tr>
                                    )})}


                            </table>
                            <p className="text-right">
                                <b>Нийт үнэ: {numberWithCommas(priceSum)}₮</b><br/>
                            </p>

                        </div>
                    </div>
                    <div className="col-md-3">
                        <br/>
                        <br/>
                        <div className="text-box">
                            <h5 className="text-center">ЗАХИАЛГА</h5>
                            <p className="text-center">
                                <input placeholder={'Нэр'} value={this.state.name} name={'name'} onChange={this.handleChange}/>
                                <input placeholder={'Цахим хаяг'} value={this.state.email} name={'email'} onChange={this.handleChange}/>
                                <input placeholder={'Регистрийн дугаар'} value={this.state.register} name={'register'} onChange={this.handleChange}/>
                                <input placeholder={'Утасны дугаар'} value={this.state.phone} name={'phone'} onChange={this.handleChange}/>
                                <input placeholder={'Хаяг'} value={this.state.location} name={'location'} onChange={this.handleChange}/>
                                <button className="btn btn-primary btn-block" onClick={this.handleSubmit} disabled={priceSum < 100000}>Захиалах<br/>{numberWithCommas(priceSum)}₮
                                </button>

                            </p>
                        </div>
                        <p></p>
                    </div>

                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    productState: state.productState,
    cartState: state.cartState,
});
export default compose(
    connect(mapStateToProps),
    withRouter
)(Cart);
