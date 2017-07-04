import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ConfigService } from '../services/config.service';

@Injectable()
export class RegistrationService {

  constructor(
    private http: Http,
    private configService: ConfigService) {

  }

  storeService(email, pass, providerType, cb) {
    return this.http.post(this.configService.configuration.urls.baseUrl + 'v1/users/',
      {
        contact: email,
        password: pass,
        provider: providerType
      }
    )
      .subscribe(
        () => cb(null),
        (error) => cb(error)
      );
  }

}
