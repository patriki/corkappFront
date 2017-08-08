import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cork',
  templateUrl: './cork.component.html',
  styleUrls: ['./cork.component.css']
})
export class CorkComponent implements OnInit {

  corks: Array<Object> = [
    { id: 100, title: 'cork1', contentCork: ['note1', 'note2','note3'] },
    { id: 201, title: 'cork2', contentCork: ['note1', 'note2','note3'] },
    { id: 302, title: 'cork3', contentCork: ['note1', 'note2','note3'] }
  ];


  constructor() { }

  ngOnInit() {
  }

}
