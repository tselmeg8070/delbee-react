import React from 'react';
import {Link} from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

class Navigation extends React.Component {

    render() {
        return (
            <header id="header">

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3">

                            <div id="logo">
                                <Link to="/">
                                    <img src={process.env.PUBLIC_URL + '/assets/images/logo_white.png'} width="110px" alt=""/>
                                </Link>
                            </div>

                        </div>
                        <div className="col-md-9">
                            <nav>
                                <Link className="mobile-menu-button" to="#"><i className="decode-icon-menu"></i></Link>
                                <ul className="menu clearfix" id="menu">
                                    <li className="">
                                        <Link to={ROUTES.LANDING}><b>Нүүр</b></Link>
                                    </li>
                                    <li className="">
                                        <Link to={ROUTES.ABOUT}><b>Танилцуулга</b></Link>
                                    </li>
                                    <li className="">
                                        <Link to={ROUTES.PRODUCTS}><b>Бүтээгдэхүүн</b></Link>
                                    </li>
                                    <li className="">
                                        <Link to={ROUTES.CART}><i className="fa fa-shopping-cart"
                                                                     style={{fontSize: 20}}></i>  </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Navigation
