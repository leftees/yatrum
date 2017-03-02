import { environment } from './../environments/environment';

let apiLink: string = environment.API_ENDPOINT; // "http://localhost:3000";
// Function for settting the default restangular configuration
export function RestangularConfigFactory (RestangularProvider) {
  RestangularProvider.setBaseUrl(apiLink);
  RestangularProvider.setDefaultHeaders(
    { 'Content-Type': 'application/json',
      'Authorization': getUserAuthToken()
    }
  );
}

function getUserAuthToken() {
    let user_data = JSON.parse(localStorage.getItem('user'));
    if (user_data) {
      return user_data.auth_token;
    }
  }