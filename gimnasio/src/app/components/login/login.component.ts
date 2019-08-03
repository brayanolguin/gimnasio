import { Component, OnInit, ChangeDetectorRef, HostBinding } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'

import { FaIconService } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faHandPaper, faBellSlash, faKey } from '@fortawesome/free-solid-svg-icons';

import { User } from '../../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [
    FaIconService
  ]
})
export class LoginComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  user:User = {
    username: '',
    password: ''
  }

  errorLogin = '';

  constructor(private faIconService: FaIconService, private cdRef:ChangeDetectorRef, private router: Router, private active: ActivatedRoute) { 
    this.faIconService.defaultPrefix = 'fas';
    library.add(faUser, faHandPaper, faBellSlash, faKey);
  }

  ngOnInit() {
  }

  login(){
    console.log(this.user);
    if (this.user.username == 'admin' && this.user.password == '123'){
      this.router.navigate(['/index']);
    }else{
      this.errorLogin = 'Usuario y/o contraseña incorrectos';
    }
    
  }

}
