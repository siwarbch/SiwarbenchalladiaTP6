import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'siw-accuei',
  templateUrl: './accuei.component.html',
  styleUrls: ['./accuei.component.css']
})
export class AccueiComponent implements OnInit {
  nomSupermarket: string = "Chez Nous";
  lesCategories= [
  {nom:'informatique', image:'assets/Images/informatique.jpg'},
  {nom:'alimentation', image:'assets/Images/alimentation.jpg'},
  {nom:'vetements', image:'assets/Images/habits.png'},
  {nom:'electroménager', image:'assets/Images/electromenager.jpg'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
