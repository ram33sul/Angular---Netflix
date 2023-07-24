import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile-pic',
  templateUrl: './profile-pic.component.html',
  styleUrls: ['./profile-pic.component.css']
})
export class ProfilePicComponent {

  @Input() src: string = '../../../../assets/images/netflix-avatar.png';
  @Input() width: string = '50px';
  
}
