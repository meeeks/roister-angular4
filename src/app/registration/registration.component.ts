import { Component } from '@angular/core';
import { RegistrationService } from '../services/registration.service';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  providers: [
    RegistrationService,
    ConfigService
  ]
})

export class RegistrationComponent {
  registrationEmail: string;
  registrationPassword: string;
  registrationProvider = 'email';

  constructor(private registrationService: RegistrationService) {}

  postToServer(registrationEmail, registrationPassword) {
    console.log('info: ', {contact: registrationEmail, password: registrationPassword, provider: this.registrationProvider});

    this.registrationService.storeService(registrationEmail, registrationPassword, this.registrationProvider, (err)=>{
      if(err) {
        console.log(err);
      } else {
        console.log('ok');
      }
    });
  }

}
