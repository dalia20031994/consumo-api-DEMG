import { Component } from '@angular/core';
import { UserListComponent } from './components/user-list/user-list.component';

@Component({
  selector: 'app-root',
  template: '<app-user-list></app-user-list>',
  standalone: true,
  imports: [UserListComponent]
})
export class AppComponent {
  title: string = 'Angular';

}
