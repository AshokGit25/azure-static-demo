import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'staticwebapp';
  public name: string = '';
  public result: string = '';

  constructor(private http: HttpClient) {}

  public keyup() {
    this.result = this.name;
  }
}
