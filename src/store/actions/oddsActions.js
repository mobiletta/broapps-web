/* import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';

export const LOAD_DATA_SUCCESS = "LOAD_DATA_SUCCESS";

export const loadNflOdds = () => dispatch => {

    return fetch(
        'https://api.the-odds-api.com/v3/odds?api_key=603934817333fedddb2eaf8df098761a&sport=americanfootball_nfl&region=us&mkt=h2h')
        .then(response => {
            if (response.ok) {
                return response.json();
            }

            throw new Error(response.statusText);
        })
        .then(
            data => {
                toast.success("NFL Odds Updated");
                dispatch({type: LOAD_DATA_SUCCESS, data});
            },
            error => {
                toast.error(`Error loading data: ${error.message}`);
            })
}; */
