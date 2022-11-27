import { Component, OnInit } from '@angular/core';
import { ArticoliService } from '../../../services/articoli.service';
import { IArticoli } from '../../models/articoli';

@Component({
  selector: 'app-grid-articoli',
  templateUrl: './grid-articoli.component.html',
  styleUrls: ['./grid-articoli.component.css']
})
export class GridArticoliComponent implements OnInit {

  articoli$ : IArticoli[] = [];

  constructor(private articoliService: ArticoliService) { }

  ngOnInit(): void {
    this.articoli$ = this.articoliService.getArticoli();
    console.log(this.articoli$);
  }

  handleEdit = (codart : string) => {
    console.log("cliccato tasto modifica del codice " + codart);
  }

  handleDelete = (codart : string) => {
    console.log("cliccato tasto elimina del codice " + codart);
  }

}
