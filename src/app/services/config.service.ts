import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {

  configuration = {
    urls: {
      baseUrl:  'http://localhost:3000/',
      thirdPartyLibs: {
        gravatar: 'http://www.gravatar.com/avatar/'
      }
    }
  };

}
