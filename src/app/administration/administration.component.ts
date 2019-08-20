import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent implements OnInit {

  public newJoinees:any;
  public status: string;

  constructor(public http: HttpClient) { 

  }

  getNewJoinees() {
    this.http.get("http://localhost:3000/newJoinees")
            .toPromise()
            .then(data => {
              this.newJoinees = data;
            })
            .catch(error => this.status = "Connection to server failed.")
  }


  addEmployee(pNewEmployee) {
    this.http.post("http://localhost:3000/newJoinees", {
      name: pNewEmployee
    })
            .toPromise()
            .then(data => {
              this.getNewJoinees();
            })
            .catch(error => this.status = "Connection to server failed.")
  }

  deleteEmployee(pid) {
     this.http.delete("http://localhost:3000/newJoinees/" + pid)
            .toPromise()
            .then(data => {
              this.getNewJoinees();
            })
            .catch(error => this.status = "Connection to server failed.")
  }
  ngOnInit() {
    this.getNewJoinees();
  }

}
