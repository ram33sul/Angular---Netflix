import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-one',
  templateUrl: './button-one.component.html',
  styleUrls: ['./button-one.component.css']
})
export class ButtonOneComponent {
  @Input() type: string;
  protected iconSrc: string;

  ngOnInit(): void{
    this.iconSrc = `../../../../assets/images/${this.type ?? 'play'}.png`
  }
}
