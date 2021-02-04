import React from 'react';
import {Image, Text, TextInput, View, TouchableOpacity} from 'react-native';

import styles from './LoginManualStykes';

import {globalStyle} from '../../styles/global';

import Icon from 'react-native-vector-icons/Ionicons';

export default class LoginManual extends React.Component {
  render() {
    return (
      <>
        <View style={styles.body}>
          {/*Logo*/}
          <Image
            style={styles.imageLogo}
            source={require('../../assets/images/logo.png')}
          />
          {/*form*/}
          <View style={styles.form}>
            <View>
              <Text style={styles.sectionTitle}>
                Digite seu E-mail ou Número de telefone
              </Text>
              <TextInput
                style={globalStyle.inputPrimary}
                placeholder="mateus@bitzen.com.br"
                placeholderTextColor="#fff"
              />
            </View>
            <View>
              <View>
                <Text
                  style={[styles.sectionTitle, globalStyle.mediumMarginTop]}>
                  Digite sua senha
                </Text>
              </View>
              <View style={styles.loginInputView}>
                <TextInput
                  style={styles.inputPrimary}
                  placeholder="***************"
                  placeholderTextColor="#fff"
                />
                <Icon style={styles.loginInputIcon} name="eye-outline" />
              </View>
            </View>
            <View style={styles.loginBtnView}>
              <TouchableOpacity style={styles.loginBtn}>
                <Text style={styles.loginBtnText}>Avançar</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.sectionDescription}>
            Esqueceu sua senha? obtenha ajuda
          </Text>
        </View>
      </>
    );
  }
}

// export default LoginManual extends React.Component;
