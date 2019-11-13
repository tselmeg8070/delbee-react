import React from 'react';
import {Link} from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import HelpBar from '../shared/HelpBar';
class Landing extends React.Component {

    render() {
        return (
            <div>
               <img src={process.env.PUBLIC_URL + '/assets/images/bg.png'} width={'100%'}/>
                <div className="container mt-5" id="next-section">
                    <div className="row">
                        <div className="ml-auto col-xl-8 mr-auto">

                            <div className="headline text-center mb-2" >

                                <h6>Дэлбээ брэнд</h6>
                                <h2>Үргэлж шинэлэг бүтээгдэхүүн
                                    таны гарт</h2>
                                <br/>
                            </div>

                        </div>
                    </div>
                    <div className="row">





                    </div>
                    <div className="row ">
                        <div className="col-md-12 text-center">
                            <Link className="btn btn-white btn-outline waves waves-dark" to={ROUTES.PRODUCTS}>Цааш
                                үзэх ...</Link>
                        </div>
                    </div>
                </div>

                <div className="container mt-5" id="next-section">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="headline text-center no-margin-bottom">
                                <h4>Дэлбээ брэндийн давуу талууд</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="service-box style-4">
                                <img src={process.env.PUBLIC_URL + 'assets/images/layer.png'} alt=""/>
                                    <div className="service-box-content">
                                        <h5>3 давхар</h5>
                                        <p>Олон давхар байдал нь сайн шингээдэг ба нэвчилт сайтай </p>
                                    </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="service-box style-4">
                                <img src={process.env.PUBLIC_URL + 'assets/images/zuulun.png'} alt=""/>
                                <div className="service-box-content">
                                    <h5>Хөвөн зөөлөн</h5>
                                    <p>Хүрэхэд тааламжтай хөвөн шиг зөөлөн торгомсог мэдрэмж</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="service-box style-4">
                                <img src={process.env.PUBLIC_URL + 'assets/images/eco.png'}/>
                                <div className="service-box-content">
                                    <h5>Байгалын гаралтай</h5>
                                    <p>Химийн хорт нэгдэлгүй цэвэр байгалийн гаралтай бүтээгдэхүүн</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               <HelpBar/>
                <div className="row mb-5">
                    <div className="col-md-12 container">

                        <h4 className="text-center">Хамтрагч байгууллагууд</h4>
                        <ul className="logos-list no-margin-bottom">
                            <li><a
                                style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/images/bigbull.png'})`}}></a>
                            </li>
                            <li><a
                                style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/images/hardrock.png'})`}}></a>
                            </li>
                            <li><a
                                style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/images/oyutolgoi.png'})`}}></a>
                            </li>
                            <li><a
                                style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/images/royalhouse.png'})`}}></a>
                            </li>
                            <li><a
                                style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/images/worldwine.png'})`}}></a>
                            </li>

                        </ul>

                    </div>
                </div>
            </div>
        )
    }
}
export default Landing;
