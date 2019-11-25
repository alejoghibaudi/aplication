import axios from 'axios';
import { GET_ITINERARY } from './types';

export const getItemsItinerary = (ciudad) => dispatch => {
	axios.get('http://localhost:4000/api/itinerary/'+ciudad).then(res =>
		dispatch({
			type: GET_ITINERARY,
			payload: res.data.Respuesta
		})
	);
};
