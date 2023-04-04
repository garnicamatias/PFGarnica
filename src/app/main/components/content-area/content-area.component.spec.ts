import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/shared/material.module';

import { ContentAreaComponent } from './content-area.component';

describe('ContentAreaComponent', () => {
  let component: ContentAreaComponent;
  let fixture: ComponentFixture<ContentAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentAreaComponent ],
      imports: [MaterialModule, RouterModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
