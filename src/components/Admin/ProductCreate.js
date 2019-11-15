import React from 'react';
import {withFirebase} from "../../firebase";
import {INITIAL_STATE} from "./initial";
import {makeid} from '../../utils/HelperFunctions';
import {connect} from "react-redux";
import {compose} from 'recompose';

class ProductCreate extends React.Component {

    constructor(props) {
        super(props);
        this.state = INITIAL_STATE;
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };
    handleChangePack = (name, value, key) => {
        this.setState((state) => ({
            packs: {
                ...state.packs,
                [key]: {
                    ...state.packs[key],
                    [name]: value
                }
            }
        }))
    };
    onChange = (e) => {
        if (e.target.files[0]) {
            const image = e.target.files[0];
            this.props.firebase.uploadPostImage(image).then(url => this.setState({picture: url}))
        }
    };
    onAddPack = () => {
        this.setState({
            packs: {
                ...this.state.packs,
                [makeid(5)]: {
                    name: '',
                    quantity: ''
                }
            }
        });
    };
    onRemovePack = () => {
        let packs = this.state.packs;
        let keys = Object.keys(packs);
        delete packs[keys[keys.length - 1]];
        this.setState({packs})
    };
    handleSubmit = () => {
        console.log(this.state);
        this.props.firebase.createProductInstance(this.props.productState, this.state).then(() => {

        })
    };
    render() {
        return (
            <div className={'container'}>
                <div className={'row'}>
                    <div className={'col-md-6'}>
                        <input type={'file'} onChange={this.onChange}/>
                        <img src={this.state.picture || "https://via.placeholder.com/400x300"} />
                    </div>
                    <div className={'col-md-6 mt-4'}>
                        <input className={'form-control'} value={this.state.name} placeholder={'Бүтээгдэхүүний нэр'} name={'name'} onChange={this.handleChange}/>
                        <select className={'form-control'} value={this.state.category} placeholder={'Бүтээгдэхүүний төрөл'} name={'category'} onChange={this.handleChange}>
                            <option value={0}>Бүтээгдэхүүний төрөл</option>
                            <option value={1}>Ариун цэврийн цаас</option>
                            <option value={2}>Хуурай салфетка</option>
                            <option value={3}>Нойтон салфетка</option>
                            <option value={4}>Бусад</option>
                        </select>
                        <input className={'form-control'} value={this.state.description} placeholder={'Бүтээгдэхүүний тайлбар'} name={'description'} onChange={this.handleChange}/>
                        <input className={'form-control'} value={this.state.price} placeholder={'Бүтээгдэхүүний үнэ'} type={'number'} name={'price'} onChange={this.handleChange}/>

                        <h5>Багц</h5>
                        {Object.keys(this.state.packs).map(key =>
                            <div className={'row'} key={key}>
                            <div className={'col-md-6'}>
                                <input className={'form-control'} value={this.state.packs[key].name} placeholder={'Багцын нэр'} name={'name'} onChange={(e) => this.handleChangePack(e.target.name, e.target.value, key)}/>
                            </div>
                            <div className={'col-md-6'}>
                                <input className={'form-control'} value={this.state.packs[key].quantity} placeholder={'Багц доторх ширхэг'} type={'number'} name={'quantity'} onChange={(e) => this.handleChangePack(e.target.name, e.target.value, key)}/>
                            </div>
                        </div>)}

                        <div className={'row'}>
                            <div className={'col-md-6'}>
                                <button className={'btn btn-block'} onClick={this.onRemovePack}>Багц хасах</button>
                            </div>
                            <div className={'col-md-6'}>
                                <button className={'btn btn-block'} onClick={this.onAddPack}>Багц нэмэх</button>
                            </div>
                        </div>

                        <button className={'btn btn-block'} onClick={this.handleSubmit}>Бүтээндэхүүн нэмэх</button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    productState: state.productState
});
export default compose(
    withFirebase,
    connect(mapStateToProps)
)(ProductCreate);
