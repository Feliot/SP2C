import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap, take } from 'rxjs/operators';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { AngularFireAuth } from '@angular/fire/auth';
import { userInfo } from 'os';
import { UserServiceService } from '../services/user-service.service';
import { ConcesionariaServiceService } from '../services/concesionaria-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private usuarioService: UserServiceService,
    private usersS: ConcesionariaServiceService,
   private afsAuth: AngularFireAuth) {
 }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.afsAuth.authState
      .pipe(take(1))
      .pipe(map(authState => !!authState))
      .pipe(tap(auth => {
        if(!auth){
          this.router.navigate(['/login']);
        }
        else{
       /*    this.usuarioService.reCargarusuario(); */
          /* console.log('usuario',this.usuarioService.getUser()); */
          this.usuarioService.recargarYDevolverUsuario().then( e =>
           this.usersS.DevolverUsuarioFiltro(this.usuarioService.getUser().email, 'email')).then( r =>
            this.usersS.getUsuariosSC()).then( rr =>{
              console.log('usuario', this.usersS.getAuxUsers())
            }).catch(err => console.log(err))


        }
      }));

    }
  }
