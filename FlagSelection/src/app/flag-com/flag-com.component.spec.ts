import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlagComComponent } from './flag-com.component';

describe('FlagComComponent', () => {
  let component: FlagComComponent;
  let fixture: ComponentFixture<FlagComComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlagComComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlagComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
