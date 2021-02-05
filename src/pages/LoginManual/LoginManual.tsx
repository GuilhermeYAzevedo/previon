import React from 'react';
import {
  Image,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import styles from './LoginManualStykes';

import {globalStyle} from '../../styles/global';

import Icon from 'react-native-vector-icons/Ionicons';

export default class LoginManual extends React.Component {
  render() {
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
              <View>
                <TextInput
                  style={globalStyle.inputPrimary}
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
      </ScrollView>
    );
  }
}
