import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersService } from 'src/app/CoreModules/Services/users.service';
import { User } from 'src/app/CoreModules/interfaces/user';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  users!: Observable<User[]>;

  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.userService.usersCall();

    this.users = this.userService.users$;
  }
}
