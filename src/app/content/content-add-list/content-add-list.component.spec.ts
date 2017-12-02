import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentAddListComponent } from './content-add-list.component';

describe('ContentAddListComponent', () => {
  let component: ContentAddListComponent;
  let fixture: ComponentFixture<ContentAddListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentAddListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentAddListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
