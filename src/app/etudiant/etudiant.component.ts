import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {


  listEtudiant;
  constructor(private http:HttpClient) { }

  ngOnInit() {

    this.http.get("http://localhost:3029/etudiants")
      .subscribe(data=>{
        this.listEtudiant=data;
      },error => {
        console.log(error)
    })
  }

}
