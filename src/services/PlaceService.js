import axios from 'axios';

const PLACE_API_BASE_URL = "https://bekend.azurewebsites.net/place/"
const ADD_PLACE_API_BASE_URL = "https://bekend.azurewebsites.net/place/new/add"
const GET_CLOSEST_PLACES_BASE_URL = "https://bekend.azurewebsites.net/place/closest"
const ADD_TO_FAVORITES_API_BASE_URL = "https://bekend.azurewebsites.net/user/"

class PlaceService {
    getPlace(ID){
        return axios.get(PLACE_API_BASE_URL+ID);
    }
    addPlace(place){
        return axios.post(ADD_PLACE_API_BASE_URL, place)
    }
    findPlaces(location){
        return axios.post(GET_CLOSEST_PLACES_BASE_URL, location)
    }
    addPlaceToFavorites(ID){
        return axios.get(ADD_TO_FAVORITES_API_BASE_URL+ID)
    }
}

export default new PlaceService()