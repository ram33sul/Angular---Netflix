import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-netflix-logo-big',
  templateUrl: './netflix-logo-big.component.html',
  styleUrls: ['./netflix-logo-big.component.css']
})
export class NetflixLogoBigComponent {
  @Input() width: string = '50px';

}
