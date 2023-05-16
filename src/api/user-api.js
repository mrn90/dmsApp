// import AsyncStorage from '@react-native-async-storage/async-storage';
import {ApiConfig} from './api-config';

export class UserApi {
  //  create user
  async GetWeatherUpdates(obj) {
    // make the api
    // console.log('ApiConfig', ApiConfig);
    if (obj?.city === 'Karachi') {
      var data = {
        // otp: obj.otp,
        q: obj.city + ',pk',
        APPID: '828f58c7380ada7ba927a5be227e598c', // provided, after creating an account!
      };
    }
    if (obj?.city === 'New York') {
      var data = {
        // otp: obj.otp,
        q: obj.city + ',us',
        APPID: '828f58c7380ada7ba927a5be227e598c', // provided, after creating an account!
      };
    }
    if (obj?.city === 'London') {
      var data = {
        // otp: obj.otp,
        q: obj.city + ',uk',
        APPID: '828f58c7380ada7ba927a5be227e598c', // provided, after creating an account!
      };
    }
    if (obj?.city === 'Sydney') {
      var data = {
        // otp: obj.otp,
        q: obj.city + ',aus',
        APPID: '828f58c7380ada7ba927a5be227e598c', // provided, after creating an account!
      };
    }

    const response = await fetch(
      ApiConfig.url + 'q=' + data.q + '&APPID=' + data.APPID,
      {
        method: 'GET',
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      },
    );

    try {
      console.log('response ==>', response);
      if (response.status == 200) {
        let result = await response.json();
        // console.log('we here in api', result);
        return result;
      } else if (response.status == 401) {
        let result = await response.json();
        console.log('we here result', result);
        return result;
      }
    } catch (error) {
      console.log('in catch', error);
      return error;
    }
  }
}
