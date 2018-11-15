const initialState = {
    userData: [],
    isReady: false,
    length: 0
};

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_SEARCH_DATA' :
            return {
                ...state,
                userData: action.payload.data,
                isReady: action.payload.isReady,
            };
        case 'QUERY_LENGTH_CHANGE' :
            return {
                ...state,
                length: action.payload.length
            };
        default:
            return state;
    }
};

export default searchReducer;