import React from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';

import styles from './LoginManualStykes';
import {globalStyle} from '../../styles/global';

// import ChevronBack from '../../assets/icons/';

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
              <Text style={styles.sectionTitle}>Digite sua senha</Text>
              <TextInput
                style={globalStyle.inputPrimary}
                placeholder="***************"
                placeholderTextColor="#fff"
              />
            </View>
            <View style={styles.loginBtnView}>
              <TouchableOpacity style={styles.loginBtn}>
                <Text>Avançar</Text>
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
