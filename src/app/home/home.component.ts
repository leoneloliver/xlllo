import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

declare var myAct: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  users: Object;
  searchText = "";
  title = 'Tutors';

  constructor(private data: DataService) { }



  ngOnInit() {
    myAct();
    this.data.getUsers().subscribe(data => {
        this.users = data
        console.log(this.users);
      }
    );
  }

}