import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  entries = [
    {
      id: 1,
      firstName: 'Hugo',
      lastName: 'Meier'
    },
    {
      id: 2,
      firstName: 'Lisa',
      lastName: 'Müller'
    },
    {
      id: 3,
      firstName: 'Fritz',
      lastName: 'Fischer'
    }
  ]
}
