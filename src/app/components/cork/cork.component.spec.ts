import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorkComponent } from './cork.component';

describe('CorkComponent', () => {
  let component: CorkComponent;
  let fixture: ComponentFixture<CorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
