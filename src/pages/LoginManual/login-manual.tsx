import React, {useState} from 'react';
import {
  Image,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import styles from './login-manual-styles';

import {globalStyle} from '../../styles/global';

import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {Login} from '../../models/login';
import api from '../../services/api';

const LoginManual = () => {
  const navigation = useNavigation();

  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  // requisição de login
  /*  handleSubmit = event => {
    event.preventDefault();

    const response = api.post('/Usuario/Login', user).then(
      res => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      },
  };*/

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
              value={login}
              onChange={e => setLogin(e) }
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
                value={senha}
                onChange={e => setSenha(e)}
              />
              <Icon style={styles.loginInputIcon} name="eye-outline" />
            </View>
          </View>
          <View style={styles.loginBtnView}>
            <TouchableOpacity
              style={styles.loginBtn}
              onPress={() => navigation.navigate('Home')}>
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
};

export default LoginManual;
