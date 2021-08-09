import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/User';
import { UserLogin} from '../model/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }


entrar(userLogin: UserLogin): Observable<UserLogin>{
  return this.http.post<UserLogin>('https://gustarhymesblog.herokuapp.com/usuarios/logar', userLogin)

}

cadastrar(user: User): Observable<User>{
  return this.http.post<User>('https://gustarhymesblog.herokuapp.com/usuarios/cadastrar', user)

}

logado(){
  let ok: boolean = false

  if(environment.token != ''){
    ok = true
  }

  return ok
}

}