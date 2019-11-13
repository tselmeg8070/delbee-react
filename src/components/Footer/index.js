import React from 'react';
import {Link} from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

class Footer extends React.Component {
    render() {
        return (
            <div>
                <footer>
                    <div id="footer" style={{paddingTop: 20, paddingBottom: 20}}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3 col-md-6">

                                    <img src={process.env.PUBLIC_URL + '/assets/images/png.png'} width="100%"/>

                                </div>


                                <div className="col-lg-3 col-md-6 pb-1">

                                    <div className="widget widget-pages">

                                        <h6 className="widget-title">Холбоосууд</h6>

                                        <ul>
                                            <li><Link to={ROUTES.LANDING}>Нүүр</Link></li>
                                            <li><Link to={ROUTES.ABOUT}>Танилцуулга</Link></li>
                                            <li><Link to={ROUTES.PRODUCTS}>Бүтээгдэхүүн</Link></li>
                                            <li><Link to={ROUTES.CART}>Сагс</Link></li>
                                        </ul>

                                    </div>


                                </div>
                                <div className="col-lg-3 col-md-6 pt-1">

                                    <div className="widget widget-contact">

                                        <h6 className="widget-title">Холбоо барих</h6>

                                        <ul>
                                            <li>Хаяг: СХД, 20-р хороо, Сонсголон товчоо 26</li>
                                            <li>Утас: 21-254144, 96653161, 96037244, 91887244</li>
                                        </ul>

                                    </div>

                                </div>
                                <div className="col-md-3 pt-1">
                                    <div id="fb-root"></div>
                                    {function(d, s, id) {
                                        var js, fjs = d.getElementsByTagName(s)[0];
                                        if (d.getElementById(id)) return;
                                        js = d.createElement(s); js.id = id;
                                        js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2&appId=501372743559082&autoLogAppEvents=1';
                                        fjs.parentNode.insertBefore(js, fjs);
                                    }(document, 'script', 'facebook-jssdk')}
                                    <div className="fb-page" data-href="https://www.facebook.com/www.altangarid.mn/"
                                         data-tabs="timeline" data-height="70" data-small-header="false"
                                         data-adapt-container-width="true" data-hide-cover="false"
                                         data-show-facepile="true">
                                        <blockquote cite="https://www.facebook.com/www.altangarid.mn/"
                                                    className="fb-xfbml-parse-ignore"><a
                                            href="https://www.facebook.com/www.altangarid.mn/">Delbee Brand - Дэлбээ
                                            брэнд</a></blockquote>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>



                </footer>
            </div>
        )
    }
}
export default Footer