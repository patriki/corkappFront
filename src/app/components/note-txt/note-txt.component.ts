import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NoteTxtService } from '../../services/note-txt.service';


@Component({
  selector: 'app-note-txt',
  templateUrl: './note-txt.component.html',
  styleUrls: ['./note-txt.component.css']
})
export class NoteTxtComponent implements OnInit {

  note : {
    title: "Title",
    creator: "",
    contentNote: "Amazing note!",
    cork: "",
    isPrivate: true
  }

  error = null;

  constructor(
    private route: ActivatedRoute,
    private noteTxtService: NoteTxtService
  ) { }

  ngOnInit() {
  }

  onTodoDelete(){
  }

}
