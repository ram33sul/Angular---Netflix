import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-netflix-logo-small',
  templateUrl: './netflix-logo-small.component.html',
  styleUrls: ['./netflix-logo-small.component.css']
})
export class NetflixLogoSmallComponent {
  @Input() width: string = '25px'
}
