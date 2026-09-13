import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaseterComponent } from './maseter.component';

describe('MaseterComponent', () => {
  let component: MaseterComponent;
  let fixture: ComponentFixture<MaseterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaseterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaseterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
