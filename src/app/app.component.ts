import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  value!:number;

  indianSalary = 4000;

  result!: string;
  
  AppComponent()
  {
    
  }

  showResult()
  {
    this.result = `You wirth ${this.value / this.indianSalary} indians`;
  }

  loading: boolean = false;

  loadAndShow() {
      this.loading = true;

      setTimeout(() => {
          this.loading = false
          this.showResult()
      }, 2000);
  }
  
}
