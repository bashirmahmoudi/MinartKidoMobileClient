import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.less']
})
export class UserProfileComponent implements OnInit {
  
  public get UserImage(): string {
    return this.profile.UserPicture;
  }

  public get UserName(): string {
    return this.profile.UserDisplayName;
  }

  public get UserInfo(): string {
    return this.profile.UserInfo;
  }

  constructor(private profile: ProfileService) { }

  ngOnInit() {
  }

}
