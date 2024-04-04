import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public  currentClass:any;
  title = 'FirstApp';
constructor(private router:Router) {
}
  goToProduct() {
  this.currentClass='product'
    this.router.navigateByUrl("/product")
  }

  goToHome() {
    this.currentClass='home';
    this.router.navigateByUrl("/home")
  }
}
