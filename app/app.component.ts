import { Component } from '@angular/core';
import { CatsComponent } from './cats/cats.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-clock';
  hours = new Array(12);

  dateInfo = new Date();
  hr = this.dateInfo.getHours() > 12 ? this.dateInfo.getHours() - 12 : this.dateInfo.getHours();
  min = this.dateInfo.getMinutes();
  sec = this.dateInfo.getSeconds();
  milsec = this.dateInfo.getMilliseconds();

  ngOnInit(): void {
    this.setTime();
  }

  setTime() {
    let hrAngle = this.hr * 30 + (this.min * 6 / 12);
    let minAngle = this.min * 6 + (this.sec * 6 / 60);
    let secAngle = this.sec * 6 + (this.milsec * 0.36 / 1000);

    this.setAngle("hr-wrapper", hrAngle);
    this.setAngle("min-wrapper", minAngle);
    this.setAngle("sec-wrapper", secAngle);

  }

  setAngle(wrapper: any, angle: any) {
    const divTag = document.querySelector("." + wrapper) as HTMLElement
    if (divTag) {
      divTag.style.transform = "rotate(" + angle + "deg)";
    }
  }
  login(){
    alert(' welcome you are loged in')
  }
  firstname: string = '';
  lastname: string = '';
  password: string = '';

}

