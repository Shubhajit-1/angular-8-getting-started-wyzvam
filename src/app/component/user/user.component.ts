import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  constructor(private ser: AppService) {}

  ngOnInit() {
    this.ser.fetchData().subscribe((response) => {
      this.data = response;
    });
  }
}
