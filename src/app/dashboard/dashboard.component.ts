import { Component } from '@angular/core';
import { ConfigService } from '../services/config.service';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [
    ConfigService,
    ProfileService
  ]
})
export class DashboardComponent {
  userInfo: UserInfo[];

  constructor(
    private profileService: ProfileService) {

    }

  getPosts() {
    this.profileService.getPosts((err, data) => {
      if (err) {
        console.log(err);
      } else {
        this.userInfo = JSON.parse(data._body);
      }
    });
  }

}

interface UserInfo {
  firstName: string;
  lastName: string;
  displayName: string;
  company: string;
}
