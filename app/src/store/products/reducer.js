import { TOGGLE_SELECTED_STATE } from './actions';
import { FILTER_PRODUCTS } from './actions';


const initialState = {
    products: {
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
            name: 'Тесто для пиццы',
            selected: false
        },
        5: {
            name: 'Моцарелла',
            selected: false
        },
        6: {
            name: 'Манка',
            selected: false
        },
        7: {
            name: 'Клубника',
            selected: false
        },
        8: {
            name: 'Кинза',
            selected: false
        },
        9: {
            name: 'Соус чили',
            selected: false
        },
        10: {
            name: 'Бальзамический уксус',
            selected: false
        },
        11: {
            name: 'Клубничный джем',
            selected: false
        },
        12: {
            name: 'Красная луковица',
            selected: false
        },
        13: {
            name: 'Копченый бекон',
            selected: false
        },
        14: {
            name: 'Филе куриной грудки',
            selected: false
        },
        15: {
            name: 'Молотый кориандр',
            selected: false
        },
        16: {
            name: 'Тертый имбирь',
            selected: false
        },
        17: {
            name: 'Майонез',
            selected: false
        },
        18: {
            name: 'Смесь салатных листьев',
            selected: false
        },
        19: {
            name: 'Перец чили',
            selected: false
        },
        20: {
            name: 'Лимон',
            selected: false
        },
        21: {
            name: 'Свежая мята',
            selected: false
        },
        22: {
            name: 'Огурец',
            selected: false
        },
        23: {
            name: 'Булочки с кунжутом',
            selected: false
        },
        24: {
            name: 'Цукини',
            selected: false
        },
        25: {
            name: 'Томаты черри',
            selected: false
        },
        26: {
            name: 'Консервированные томаты',
            selected: false
        },
        27: {
            name: 'Паста (пенне)',
            selected: false
        },
        28: {
            name: 'Чеснок',
            selected: false
        },
        29: {
            name: 'Спаржа',
            selected: false
        },
        30: {
            name: 'Пармезан',
            selected: false
        },
        31: {
            name: 'Тобаско',
            selected: false
        },
        32: {
            name: 'Соль',
            selected: false
        },
        33: {
            name: 'Черный перец',
            selected: false
        }
    },
    selectedProducts: {}
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
            const prods = {...state.products}
            prods[action.payload].selected = !prods[action.payload].selected

            const newSelectedProducts = {}
            for (let item in initialState.products) {
                if (initialState.products[item].selected) {
                    newSelectedProducts[item] = initialState.products[item]
                }
            }
            console.log(newSelectedProducts)

            return {
                ...state,
                products: prods,
                selectedProducts: newSelectedProducts
            }
        }
        default: {
            return state
        }
    }
}