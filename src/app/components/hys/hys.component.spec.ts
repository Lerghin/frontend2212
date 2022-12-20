import { ComponentFixture, TestBed } from '@angular/core/testing';
import { hysComponent } from './hys.component';



describe('HabilidadesComponent', () => {
  let component: hysComponent;
  let fixture: ComponentFixture<hysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ hysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(hysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
