import axios from 'axios';

export const fetchSearchData = (query) => {
    return (dispatch) => {
        dispatch({
            type: 'GET_SEARCH_DATA',
            payload: {
                isReady: false
            }
        });

        if(query.length > 0) {
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=108413e1a2cd7457bbf0b9df9953b7eb&language=en-US&query=${query}&page=1&include_adult=false`)
                .then(response => {
                    const data = response.data.results;

                    dispatch({
                        type: 'GET_SEARCH_DATA',
                        payload: {
                            data: data,
                            isReady: true
                        }
                    })
                });
        }
    }
};

export const changeLength = (query) => {
    return {
        type: 'QUERY_LENGTH_CHANGE',
        payload: {
            length: query.length
        }
    }
};