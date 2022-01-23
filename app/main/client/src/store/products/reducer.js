import { TOGGLE_SELECTED_STATE } from './actions';
import { FILTER_PRODUCTS } from './actions';
import Axios from 'axios';

let initialProducts = {}
try {
    Axios.get('http://localhost:3001/products/get').then((response) => {
        for (let prod of response.data) {
            if (prod.name) {
                initialProducts[prod.id] = {
                    name: prod.name,
                    selected: Boolean(+prod.selected)
                }
            }
        }
    })
    console.log(initialState)
} catch {
    initialProducts = {
        1: {
            name: 'яблоко',
            selected: false
        },
        2: {
            name: 'орехи',
            selected: false
        },
        3: {
            name: 'печенье',
            selected: false
        },
        4: {
            name: 'тесто для пиццы',
            selected: false
        },
        5: {
            name: 'моцарелла',
            selected: false
        },
        6: {
            name: 'манка',
            selected: false
        },
        7: {
            name: 'клубника',
            selected: false
        },
        8: {
            name: 'кинза',
            selected: false
        },
        9: {
            name: 'соус чили',
            selected: false
        },
        10: {
            name: 'бальзамический уксус',
            selected: false
        },
        11: {
            name: 'клубничный джем',
            selected: false
        },
        12: {
            name: 'красная луковица',
            selected: false
        },
        13: {
            name: 'копченый бекон',
            selected: false
        },
        14: {
            name: 'филе куриной грудки',
            selected: false
        },
        15: {
            name: 'молотый кориандр',
            selected: false
        },
        16: {
            name: 'тертый имбирь',
            selected: false
        },
        17: {
            name: 'майонез',
            selected: false
        },
        18: {
            name: 'смесь салатных листьев',
            selected: false
        },
        19: {
            name: 'перец чили',
            selected: false
        },
        20: {
            name: 'лимон',
            selected: false
        },
        21: {
            name: 'свежая мята',
            selected: false
        },
        22: {
            name: 'огурец',
            selected: false
        },
        23: {
            name: 'булочки с кунжутом',
            selected: false
        },
        24: {
            name: 'цукини',
            selected: false
        },
        25: {
            name: 'томаты черри',
            selected: false
        },
        26: {
            name: 'консервированные томаты',
            selected: false
        },
        27: {
            name: 'паста (пенне)',
            selected: false
        },
        28: {
            name: 'чеснок',
            selected: false
        },
        29: {
            name: 'спаржа',
            selected: false
        },
        30: {
            name: 'пармезан',
            selected: false
        },
        31: {
            name: 'тобаско',
            selected: false
        },
        32: {
            name: 'соль',
            selected: false
        },
        33: {
            name: 'черный перец',
            selected: false
        }
    }
}

const initialState = {
    products: initialProducts,
    selectedProducts: {},
    selectedProductsNames: []
}

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FILTER_PRODUCTS: {
            const newProducts = {}
            for (let item in initialState.products) {
                if (initialState.products[item].name.includes(action.payload)) {
                    newProducts[item] = initialState.products[item]
                }
            }
            return {
                ...state,
                products: {
                    ...newProducts
                }
            }
        }
        case TOGGLE_SELECTED_STATE: {
            const prods = {...initialState.products}
            prods[action.payload].selected = !prods[action.payload].selected

            const newSelectedProducts = {}
            const newSelectedProductsNames = []
            for (let item in initialState.products) {
                if (initialState.products[item].selected) {
                    newSelectedProducts[item] = initialState.products[item]
                    newSelectedProductsNames.push(initialState.products[item].name)
                }
            }
            console.log(newSelectedProducts)

            return {
                ...state,
                products: prods,
                selectedProducts: newSelectedProducts,
                selectedProductsNames: newSelectedProductsNames
            }
        }
        default: {
            return state
        }
    }
}