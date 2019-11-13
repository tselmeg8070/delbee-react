import React from 'react';
import {validateEmail} from "../../utils/HelperFunctions";

class HelpBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {email: '', button: false}
    }
   handleSendOffer = () => {
       if(validateEmail(this.state.email)) {
           this.setState({button: true});
           fetch('https://us-central1-delbee.cloudfunctions.net/widgets/offer', {
               method: 'POST',
               headers: {
                   'Content-Type': 'application/json'
               },
               body: JSON.stringify({
                   email: this.state.email,
               })
           }).then(res => {
               if (res.ok) {
                   window.offerSuccess();
               } else {
               }
           })
       }
   };

    render() {
        return (
            <div>
                <section className="full-section dark-section"
                         style={{backgroundColor: '#51afc0', color: '#ffffff', marginBottom: 30, paddingTop: 20, paddingBottom: 20, marginTop: 20}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="headline no-margin-bottom">
                                    <br/>
                                    <h3 style={{color: '#ffffff'}}>Захиалга  заавар үзэх</h3>
                                    <br/>
                                    <button className="btn btn-white btn-outline waves waves-dark btn-lg"
                                            onClick={() => window.showHelp()}
                                            style={{color: '#ffffff', borderColor: '#ffffff'}}
                                    >Заавар үзэх
                                    </button>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="widget widget-newsletter no-margin-bottom">
                                    <div className="headline mb-2">
                                        <h4 style={{color: '#ffffff'}}>Үнийн санал авах</h4>
                                    </div>
                                    <fieldset>
                                        <div>
                                            <input type="text" name="email" value={this.state.email}
                                                   onChange={(e)=>this.setState({email: e.target.value})}
                                                   placeholder="" required/>
                                            <span></span>
                                            <label>Цахим хаягаа оруулна уу</label>
                                        </div>
                                        <button onClick={() => this.handleSendOffer()}  disabled={this.state.button} className="btn btn-white btn-outline waves waves-dark btn-lg"
                                                type="submit" name="submit" value="">Үнийн санал авах <i
                                            className="decode-icon-cursor"></i></button>
                                    </fieldset>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
export default HelpBar
