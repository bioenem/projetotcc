import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcologiaComponent } from './ecologia.component';

describe('EcologiaComponent', () => {
  let component: EcologiaComponent;
  let fixture: ComponentFixture<EcologiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EcologiaComponent]
    });
    fixture = TestBed.createComponent(EcologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
