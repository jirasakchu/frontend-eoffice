import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  userData: any;
  actionNumber: number = 0;
  constructor(private backendService: BackendService) { }

  ngOnInit(): void {
    this.userData = jwt_decode(localStorage.getItem("token"));
    console.log(location.origin);

    this.backendService.getCountDocumentByUser(this.userData.id).then(data => {
      this.actionNumber = data.dataList.users_action;
    })
  }
  openNav() {
    //ความกว้างของ slide menu
    document.getElementById("mySidenav").style.width = "300px";
  }

  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
}
