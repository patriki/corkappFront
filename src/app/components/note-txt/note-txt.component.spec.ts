import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteTxtComponent } from './note-txt.component';

describe('NoteTxtComponent', () => {
  let component: NoteTxtComponent;
  let fixture: ComponentFixture<NoteTxtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteTxtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteTxtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
