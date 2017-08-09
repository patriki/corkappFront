import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CorkService } from '../../services/cork.service';

@Component({
  selector: 'app-corks',
  templateUrl: './corks.component.html',
  styleUrls: ['./corks.component.css']
})
export class CorksComponent implements OnInit {

  corks;

  constructor(private corkService: CorkService) { }

  ngOnInit() {
    this.corkService.getCorks().subscribe((corks) => {
      this.corks = corks;
    })
  }

}
