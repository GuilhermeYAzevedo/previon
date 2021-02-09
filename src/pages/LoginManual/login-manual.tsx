import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import styles from './login-manual-styles';

import {globalStyle} from '../../styles/global';

import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import api from '../../services/api';


import {user} from '../../models/login';

export default function LoginManual() {
  const [input, setInput] = useState<user>({login: '', senha: ''});

  const navigation = useNavigation();

  const handleChange = (name: any, value: any) => {
    setInput({...input, [name]: value});
  };

  const successfulLogin = async () => {
    await api.post('/Usuario/Login', input).then(
      (res) => {
        console.log(res);
        navigation.navigate('Home');
      },
      (err) => {
        console.log(err);
      },
    );
  };

  return (
    <ScrollView style={styles.scrollViewProp}>
      <View style={styles.body}>
        <Image
          style={styles.imageLogo}
          source={require('../../assets/images/logo.png')}
        />
        <View style={styles.form}>
          <View>
            <Text style={styles.sectionTitle}>
              Digite seu E-mail ou Número de telefone
            </Text>
            <TextInput
              style={globalStyle.inputPrimary}
              keyboardType={'email-address'}
              placeholder="mateus@bitzen.com.br"
              placeholderTextColor="#fff"
              onChangeText={(e) => handleChange('login', e)}
              value={input.login}
            />
          </View>
          <View>
            <View>
              <Text style={[styles.sectionTitle, globalStyle.mediumMarginTop]}>
                Digite sua senha
              </Text>
            </View>
            <View>
              <TextInput
                style={globalStyle.inputPrimary}
                placeholder="***************"
                placeholderTextColor="#fff"
                onChangeText={(e) => handleChange('senha', e)}
                value={input.senha}
              />
              <Icon style={styles.loginInputIcon} name="eye-outline" />
            </View>
          </View>
          <View style={styles.loginBtnView}>
            <TouchableOpacity
              style={styles.loginBtn}
              onPress={() => successfulLogin()}>
              <Text style={styles.loginBtnText}>Avançar</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.sectionDescription}>
          Esqueceu sua senha? obtenha ajuda
        </Text>
      </View>
    </ScrollView>
  );
}
