import { Component, OnInit, ChangeDetectorRef, HostBinding  } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router'

import { FaIconService } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faHandPaper, faBellSlash, faKey, faGamepad, faPlusCircle, faPlus } from '@fortawesome/free-solid-svg-icons';

import { User } from '../../models/user';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css']
})
export class NavigatorComponent implements OnInit {

  constructor(private faIconService: FaIconService, private cdRef:ChangeDetectorRef, private router: Router, private active: ActivatedRoute) { 
    this.faIconService.defaultPrefix = 'fas';
    library.add(faGamepad, faUser, faPlusCircle);
  }

  ngOnInit() {
  }

}
