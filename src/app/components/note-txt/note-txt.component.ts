import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-note-txt',
  templateUrl: './note-txt.component.html',
  styleUrls: ['./note-txt.component.css']
})
export class NoteTxtComponent implements OnInit {
  noteTxts: Array<Object> = [
    { id: 100, title: 'la compra del super', contentNote: ' acuerdate de comprar aguacates y leche. Tambien tomates' },
    { id: 201, title: 'nota2', contentNote: 'content of note2' },
    { id: 302, title: 'nota3', contentNote: 'content of note3' },
    { id: 431, title: 'nota4', contentNote: 'content of note4' },
    { id: 352, title: 'nota5', contentNote: 'content of note5' },
    { id: 261, title: 'nota6', contentNote: 'content of note6' },
    { id: 372, title: 'nota7', contentNote: 'content of content of content of content omprar aguacates y leche. Tambien tomatesn of note7' }
  ];


  constructor() { }

  ngOnInit() {
  }

  onTodoDelete(){
  }

}
