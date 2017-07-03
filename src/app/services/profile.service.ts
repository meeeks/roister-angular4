import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ConfigService } from '../services/config.service';

@Injectable()
export class ProfileService {

  constructor(
    private http: Http,
    private configService: ConfigService) {

  }

  getPosts(cb) {
    return this.http.get(this.configService.configuration.urls.baseUrl + 'v1/users/profile', null)
      .subscribe(
        (response) => cb(null, response),
        (error) => cb(error)
      );
  }

}
