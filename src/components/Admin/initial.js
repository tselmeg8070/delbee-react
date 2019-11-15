import {makeid} from '../../utils/HelperFunctions'
export const INITIAL_STATE = {
    name: '',
    price: '',
    description: '',
    category: 0,
    picture: null,
    packs: {
        [makeid(5)]: {
            name: '',
            quantity: ''
        }
    }
};
