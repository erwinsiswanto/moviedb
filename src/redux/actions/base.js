import axios from 'axios';

const fetchBaseData = () => {
    return (dispatch) => {
        axios.get('https://api.themoviedb.org/3/configuration?api_key=108413e1a2cd7457bbf0b9df9953b7eb')
            .then(response => {
                const data = response.data.images;

                dispatch({
                    type: 'GET_BASE_DATA',
                    payload: {
                        data: data,
                        isReady: true
                    }
                });
            });
    }
};

export default fetchBaseData;