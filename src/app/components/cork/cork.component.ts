import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CorkService } from '../../services/cork.service';
import { NoteTxtService } from '../../services/note-txt.service';

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

  notes = [];

  note = {
    title: "Title",
    creator: "",
    contentNote: "Amazing note!",
    cork: "",
    isPrivate: true
  }

  error = null;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private corkService: CorkService,
    private noteTxtService: NoteTxtService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getCorkDetails(params['id']);
      this.note.cork = params['id'];
    });
    console.log("Note:", this.note);
  }

  getCorkDetails(id) {
    this.corkService.getCork(id).subscribe((cork) => {
      this.cork = cork;
      this.notes = cork.contentCork;
    })
  }

  newNote() {
    this.noteTxtService.createNote(this.note).subscribe((data) => {
      this.notes.push(data.note);
    },
    (err) => {
      this.error = err;
    })
  };

}
