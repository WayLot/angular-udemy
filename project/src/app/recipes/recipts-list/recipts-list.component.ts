import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipts-list',
  templateUrl: './recipts-list.component.html',
  styleUrls: ['./recipts-list.component.css']
})
export class ReciptsListComponent implements OnInit {

  recipes:Recipe[] = [
    new Recipe('A Aest Recipe','This is a simple Test','https://th.bing.com/th/id/OIP.boU0VLtfyLfKIbp_1YIWJgHaFj?pid=ImgDet&rs=1'),
    new Recipe('A Aest Recipe','This is a simple Test','https://th.bing.com/th/id/OIP.boU0VLtfyLfKIbp_1YIWJgHaFj?pid=ImgDet&rs=1'),
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
