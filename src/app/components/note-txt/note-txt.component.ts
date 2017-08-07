import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-note-txt',
  templateUrl: './note-txt.component.html',
  styleUrls: ['./note-txt.component.css']
})
export class NoteTxtComponent implements OnInit {

  title: string;
  contentNote: string;
  isPrivate: true;


  constructor() { }

  ngOnInit() {
  }

}
