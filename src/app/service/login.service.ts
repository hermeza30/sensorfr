import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICE } from '../config/config';
import { map } from 'rxjs/operators';
import { Usuario } from '../models/usuario.model';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  public token = '';
  public usuario:Usuario;
  constructor(public http: HttpClient,public router:Router) {
    this.cargarStorage();
  }
  loginService() {
    let url = URL_SERVICE + '/login';
    return this.http.get(url).pipe(
      map((res: any) => {
        this.token=res.token;
        this.usuario=res.usuariodb;
        this.guardarStorage(res.token,res.usuariodb);
        return res;
      })
    );
  }
  logout() {
    this.token = '';
    this.usuario = null;
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    this.router.navigate(['/login']);
  }

  guardarStorage(token:string,usuario:Usuario){
    localStorage.setItem('token',token);
    localStorage.setItem('usuario',JSON.stringify(usuario));

    this.token=token;
    this.usuario=usuario;
  }
  cargarStorage(){
    if(localStorage.getItem('token')){
      this.token=localStorage.getItem('token');
      this.usuario = JSON.parse(localStorage.getItem('usuario'));
    }else{
      this.token="";
    }
  }
  estaLogueado(){
   
    return (this.token.length>0)?true:false;
}

}
