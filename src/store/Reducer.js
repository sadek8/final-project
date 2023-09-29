let INITIAL_STATE = {
    lang: 'en-US',
    favorites: []
}

export default function Reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "SET_LANGUAGE":
            return { ...state, lang: action.payload };
      

        default:
            return state;
    }
}
