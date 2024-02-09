import { Component, inject } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import { TitleComponent } from '@shared/title/title.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [TitleComponent, RouterModule],
  templateUrl: './users.component.html',
})
export default class UsersComponent {
  public usersService = inject(UsersService);
}
