import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AulaRevisaoComponent } from './aula-revisao.component';

describe('AulaRevisaoComponent', () => {
  let component: AulaRevisaoComponent;
  let fixture: ComponentFixture<AulaRevisaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AulaRevisaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AulaRevisaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
