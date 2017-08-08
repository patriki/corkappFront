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
    { id: 302, title: 'nota3', contentNote: 'content of note3' }
  ];


  constructor() { }

  ngOnInit() {
  }

  onTodoDelete(){
  }

}
