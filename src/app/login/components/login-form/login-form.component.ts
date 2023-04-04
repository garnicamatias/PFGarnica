import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { LoginUser } from 'src/app/shared/models/loginUser';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { Subscription } from 'rxjs';
import { User } from 'src/app/shared/models/user';
import { Session } from 'src/app/shared/models/session';
import { loadLoginState, loginStateLoaded } from '../../state/login-state.actions';
import { Store } from '@ngrx/store';
import { LoginState } from '../../state/login-state.reducer';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit{

  loginForm !: FormGroup;
  suscription !: Subscription;
  users !: User[]

  constructor(
    private loginService : LoginService,
    private route : Router,
    private loginStore : Store<LoginState>
  ){}

  ngOnInit(): void {
    this.loginForm = new FormGroup(
      {
        email : new FormControl(),
        pass : new FormControl(),
        isAdmin : new FormControl(false),
        isActive : new FormControl(false)
      }
    );
  }

  login() {
    let loginData : LoginUser= {
      email : this.loginForm.value.email,
      pass : this.loginForm.value.pass,
      isAdmin : this.loginForm.value.isAdmin,
      isActive : this.loginForm.value.isActive
    }

    this.suscription = this.loginService.login(loginData).subscribe((session: Session) => {
      this.loginStore.dispatch(loginStateLoaded({ session: session }));
      if(session.isSessionActive){
        this.route.navigate(['main']);
      }
      else alert('Los datos ingresados son incorrectos')
    });

  }

  ngOnDestroy(): void {
    this.suscription.unsubscribe();
  }


}
