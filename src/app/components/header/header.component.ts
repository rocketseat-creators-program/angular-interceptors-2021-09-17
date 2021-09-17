import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  currentUserFirstname = '';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService
      .getUserFirstname()
      .subscribe(username => this.currentUserFirstname = username);
  }

  logout(): void {
    this.authService.logout();
  }

}
