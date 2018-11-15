const initialState = {
    data: [],
    isReady: false
};

const BaseReducer = (state = initialState, action) => {
    switch (action.type)
    {
        case 'GET_BASE_DATA' :
            return {
                ...state,
                data: action.payload.data,
                isReady: action.payload.isReady,
            };
        default:
            return state;
    }
};

export default BaseReducer;