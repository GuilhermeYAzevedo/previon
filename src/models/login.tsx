export default class User {
  login: string;
  senha: string;

  constructor() {
    this.login = '';
    this.senha = '';
  }
}

export interface user {
  login: any;
  senha: any;
}
