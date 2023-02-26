import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../../service/user-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: any[] = [];
  selectedUser: any;

  constructor(private userService: UserServiceService, private router: Router) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(data => {
      this.users = data.results;
    });
  }

  selectUser(user: any) {
    this.selectedUser = user;
    this.router.navigate(['user-details', user.login.uuid]);
  }

}
