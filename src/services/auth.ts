import { request } from '@/services/request'
import { setTokens } from '@/store/token'

export class AuthService {
  tokenService = setTokens()


  async create ({login, password}: {login: string, password: string}){
    
     request.get('').then(value => console.log(value))

  }

  async signin ({login, password}: {login: string, password: string}) {

  }

  async singout (){

  }
  async logout (){
    console.log('logout')
    this.tokenService()

  }
}