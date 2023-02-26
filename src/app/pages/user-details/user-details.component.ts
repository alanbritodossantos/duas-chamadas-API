import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { UserServiceService } from '../../service/user-service.service';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})

export class UserDetailsComponent implements OnInit {
  userDetails?: User;

  constructor(
    private route: ActivatedRoute,
    private userService: UserServiceService
  ) {}

  ngOnInit() {
    const uuid = this.route.snapshot.paramMap.get('uuid');
    if (uuid) {
      this.userService.getUser(uuid).subscribe((data: any) => {
        this.userDetails = data.results[0];
      });
    }
  }
}
