import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumPicsComponent } from './album-pics.component';

describe('AlbumPicsComponent', () => {
  let component: AlbumPicsComponent;
  let fixture: ComponentFixture<AlbumPicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumPicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumPicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
