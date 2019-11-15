import React from 'react';
import {withFirebase} from "../../firebase";
import {withRouter} from "react-router-dom";
import {compose} from "recompose";
import * as ROUTES from '../../constants/routes';
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };
    handleSubmit = () => {
        const { email, password } = this.state;

        this.props.firebase
            .doSignInWithEmailAndPassword(email, password)
            .then(() => {
                this.props.history.push(ROUTES.PRODUCTS);
            })
            .catch(error => {
                console.log(error);
            });
    };
    render() {
        return (
            <div className={'container'}>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card-box">
                        <ul className="nav nav-tabs tabs-bordered nav-justified">
                        </ul>
                        <div className="row">
                            <div className="col-md-1"></div>
                            <div className="col-md-10">
                                <br/>
                                    <h2 className={"mb-2"}><b>Дэлбээ админы хэсэг</b></h2>
                                    <br/>
                            </div>
                            <div className="col-md-1"></div>
                        </div>


                        <div className="">


                                <div className="form-group row">

                                    <div className="col-md-1"></div>
                                    <div className="col-md-10">
                                        <input id="email" type="email"
                                               className="form-control"
                                               name="email" value={this.state.email}  onChange={this.handleChange} required
                                               placeholder="Цахим хаяг*"/>

                                    </div>
                                    <div className="col-md-1"></div>
                                </div>

                                <div className="form-group row">

                                    <div className="col-md-1"></div>
                                    <div className="col-md-10">
                                        <input id="" type="password"
                                               className="form-control"
                                               value={this.state.password} onChange={this.handleChange}
                                               name="password" required placeholder="Нууц үг*"/>

                                    </div>
                                    <div className="col-md-1"></div>
                                </div>


                                <br/>
                                    <div className="form-group row mb-0">
                                        <div className="col-md-10 offset-md-1">
                                            <button type="submit" className="btn btn-md btn-primary btn-block" onClick={this.handleSubmit}>
                                                Нэвтрэх
                                            </button>
                                        </div>
                                    </div>
                                    <br/>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}
export default compose(
    withFirebase,
    withRouter
)(Login)
