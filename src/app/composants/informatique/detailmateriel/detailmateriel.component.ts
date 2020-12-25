import { Component, Input, OnInit } from '@angular/core';
import { Materiel } from 'src/app/models/materiel';
import { ActivatedRoute } from '@angular/router';
import { MaterielService } from 'src/app/services/materiel.service';
import {Router} from '@angular/router';

@Component({
  selector: 'siw-detailmateriel',
  templateUrl: './detailmateriel.component.html',
  styleUrls: ['./detailmateriel.component.css']
})
export class DetailmaterielComponent implements OnInit {
  afficher:boolean =false;
   materiel: Materiel;
   identifiant :String;
  

  constructor(private materielservice:MaterielService,private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.identifiant = this.activatedRoute.snapshot.params['id'];
    this.materiel =this.materielservice.getMaterielById("2");
  }
  onRetour(){
    this.router.navigate(['/listmateriel']);
    }
  onClick(){
    this.afficher = !this.afficher;}
}
  
