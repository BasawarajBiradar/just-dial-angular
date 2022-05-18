import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ElementConfigService } from '../element-config.service';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {

  apiData: any;

  constructor(private elementServ:ElementConfigService, private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get("https://reqres.in/api/users?page=2").subscribe(
      (data)=>{this.apiData= data}
    )
  }

}
