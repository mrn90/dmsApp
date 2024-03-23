import React, {useState} from 'react';
import {View, Text, ImageBackground} from 'react-native';
import styles from './styles';
import HeaderBackground from '../../components/HeaderBackground';
import DropDownPicker from 'react-native-dropdown-picker';
import {colors} from '../../utils/theme';
import {vh} from '../../utils/units';
import {images} from '../../assets';
import {UserApi} from '../../api/user-api';
import EurostileBold from '../../components/Wrappers/Text/EurostileBold';

const Home = ({route}) => {
  const [temperature, setTemperature] = useState('');
  const [feelsLike, setFeelsLike] = useState('');
  const [humidity, setHumidity] = useState('');

  const [error, setError] = useState('');

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Karachi', valueLat: '24.8607', valueLon: '67.0011'},
    {label: 'New York', valueLat: '40.7128', valueLon: '74.0060'},
    {label: 'London', valueLat: '51.5072', valueLon: '0.1276'},
    {label: 'Sydney', valueLat: '33.8688', valueLon: '151.2093'},
    {label: 'Maldives', valueLat: '3.2028', valueLon: '73.2207'},
    {label: 'Houston', valueLat: '29.7604', valueLon: '95.3698'},
  ]);

  const [city, setCity] = useState('');
  const [loader, setLoader] = useState(false);

  async function weatherUpdates(obj) {
    let data = {
      city: obj.label,
      lat: obj.valueLat,
      lon: obj.valueLon,
    };
    try {
      setLoader(true)
      console.log('data', data);
      const User = new UserApi();
      let resultHandle = await User.GetWeatherUpdates(data);

      if (resultHandle?.cod == 200) {
        console.log('RESULThANDLE', resultHandle?.name);

        setTemperature(resultHandle?.main?.temp);
        setFeelsLike(resultHandle?.main?.feels_like);
        setHumidity(resultHandle?.main?.humidity);
        setCity(resultHandle?.name);
        setLoader(false)
      }
      if (resultHandle?.cod == 401) {
        console.log('401');
        setLoader(false)
        setError(resultHandle?.message);
      }
    } catch (error) {
      setLoader(false)
      console.log('error', error);
      setError(error);
    }
  }
  return (
    <View style={styles.mainView}>
      {/* <HeaderBackground heading={"Weather"} /> */}
      <ImageBackground
        resizeMode="contain"
        source={images.world_map}
        style={styles.world_map}>
        <DropDownPicker
          placeholder="Select City"
          placeholderStyle={styles.placeholderStyle}
          zIndex={3}
          listMode="SCROLLVIEW"
          zIndexInverse={2 * vh}
          open={open}
          value={city || value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          style={styles.dropdown}
          dropDownContainerStyle={{
            backgroundColor: colors.white,
            width: '90%',
            alignSelf: 'center',
            margin: 2 * vh,
            // paddingBottom: 3 * vh,
            borderWidth: 0.1 * vh,
            borderRadius: 2 * vh,
            borderColor: colors.grayText1,
          }}
          listItemLabelStyle={{
            color: colors.black,
          }}
          onSelectItem={item => {
            console.log('item', item);
            weatherUpdates(item);
          }}
        />

        {temperature ? (
          <View>
            <EurostileBold style={styles.textHeading}>{city}</EurostileBold>
            <View style={styles.tempContainer}>
              <EurostileBold style={styles.textHeading}>
                Temperature:
              </EurostileBold>
              <EurostileBold style={styles.text}>{temperature} K</EurostileBold>
            </View>
            <View style={styles.tempContainer}>
              <EurostileBold style={styles.textHeading}>
                Feels Like:
              </EurostileBold>
              <EurostileBold style={styles.text}>{feelsLike} K</EurostileBold>
            </View>
            <View style={styles.tempContainer}>
              <EurostileBold style={styles.textHeading}>
                Humidity:
              </EurostileBold>
              <EurostileBold style={styles.text}>{humidity} </EurostileBold>
            </View>
          </View>
        ) : null}

        <EurostileBold style={styles.errorText}>{error}</EurostileBold>
      </ImageBackground>
    </View>
  );
};

export default Home;
