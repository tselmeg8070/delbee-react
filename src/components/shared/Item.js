import React from 'react';
import {Link} from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

class Item extends React.Component {
    render() {
        const id = this.props.id;
        const {picture, price, name, category} = this.props.data;
        const link = "/product/1";

        return (
                <div className={"isotope-item " + category}>
                    <div className="image-box wow fadeInUp"
                         style={{backgroundColor: '#51afc0', color: 'white', paddingBottom: 20}}>
                        <div className="image-box-thumbnail mb-1">
                            <Link to={ROUTES.PRODUCT + id}><img
                                className="img img-responsive full-width"
                                src={picture} alt=""/></Link>
                        </div>
                        <h5 style={{color: 'white', marginBottom: 10, paddingTop: 0}}><Link
                            to={link}
                            style={{color: "white"}}>{name}</Link></h5>

                        <div className="row" style={{marginTop: 0, paddingTop: 0, lineHeight: 1.3}}>
                            <div className="col-md-12 text-center">{price}₮/үнэ/</div>
                        </div>
                    </div>
                </div>
        )
    }
}
export default Item;