import axios from 'axios';

const PROFILE_API_BASE_URL = "https://bekend.azurewebsites.net/user/profile"


class ProfileService {
    getProfile(){
        return axios.get(PROFILE_API_BASE_URL);
    }
}

export default new ProfileService()