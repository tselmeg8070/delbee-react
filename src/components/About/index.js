import React from 'react';

class About extends React.Component {
    render() {
        return (
            <div>
                <br/><br/>

                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <br/><br/><br/><br/>
                            <div className="headline no-margin-bottom">

                                <h6>Танилцуулга</h6>
                                <h3>Компанийн танилцуулга</h3>

                            </div>

                            <br/>

                            <div className="service-box style-3 icon-left wow fadeInRight">

                                <i className="fa fa-building"></i>

                                <div className="service-box-content">


                                    <p>АЛТАНГАРЬД ХХК нь анх 2000 онд МӨН ЗӨВ нэртэйгээр гадаад худалдааны
                                        чиглэлээр үйл ажиллагаагаа эхлүүлж 2006 онд ДЭЛБЭЭ нэртэйгээр цаасан
                                        бүтээгдэхүүн үйлдвэрлэл, худалдааны чиглэлээр үйл ажиллагаагаа
                                        өргөжиж 10 гаруй жил амжилттай ажиллаж байна. </p>

                                </div>

                            </div>

                            <br/>


                        </div>
                        <div className="col-md-6">
                            <img src={process.env.PUBLIC_URL + "assets/images/taniltsuulga.png"} alt=""
                                 style={{borderRadius: 80}}/>
                        </div>
                    </div>
                </div>
                <br/><br/>
                <div className="container">
                    <section className="full-section half-image" id="section-21">

                        <div className="half-image-left" style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/images/zoriltto.png'})`, borderRadius: 80}}>
                            <img src={process.env.PUBLIC_URL + "assets/images/zorilt.jpg"} alt="" />
                        </div>

                        <div className="full-section-container">

                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-lg-5 ml-lg-auto">

                                        <div className="headline no-margin-bottom">

                                            <h6>Танилцуулга</h6>
                                            <h3>Бидний зорилго</h3>

                                        </div>

                                        <br/><br/>

                                        <div className="service-box style-3 icon-left wow fadeInRight">

                                            <i className="decode-icon-growth"></i>

                                            <div className="service-box-content">


                                                <p>Манай байгууллага нь үндэсний үйлдвэрлэлээ хөгжүүлж
                                                    хэрэгчиддээ эрүүл байгалийн гаралтай бүтээгдэхүүнээр
                                                    хангахаар зорьж байна. Мөн үйлдвэрлэлийн шинэ технологи
                                                    нэвтрүүлж нэмүү өртөг шингээж, гадаадын гаралтай
                                                    бүтээгдэхүүнтэй өрсөлдөх нь гол зорилго юм. </p>

                                            </div>

                                        </div>


                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>

                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="headline text-center mb-1">

                                    <h6>Хамтрагч байгууллагууд</h6>
                                    <h3></h3>

                                </div>

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
                        <br/>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;