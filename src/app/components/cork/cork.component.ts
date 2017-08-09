import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CorkService } from '../../services/cork.service';

@Component({
  selector: 'app-cork',
  templateUrl: './cork.component.html',
  styleUrls: ['./cork.component.css']
})
export class CorkComponent implements OnInit {

  // corks: Array<Object> = [
  //   { id: 100, title: 'cork1', contentCork: ['note1', 'note2','note3'] },
  //   { id: 201, title: 'cork2', contentCork: ['note1', 'note2','note3'] },
  //   { id: 302, title: 'cork3', contentCork: ['note1', 'note2','note3'] }
  // ];

  cork = {};

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private corkService: CorkService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getCorkDetails(params['id']);
    })
  }

  getCorkDetails(id) {
    this.corkService.getCork(id).subscribe((cork) => {
      this.cork = cork[0];
    })
  }

}
