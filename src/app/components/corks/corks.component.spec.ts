import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorksComponent } from './corks.component';

describe('CorksComponent', () => {
  let component: CorksComponent;
  let fixture: ComponentFixture<CorksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
