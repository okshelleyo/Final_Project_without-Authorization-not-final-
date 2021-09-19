import { TestBed } from '@angular/core/testing';

import { MyGalleryService } from './my-gallery.service';

describe('MyGalleryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyGalleryService = TestBed.get(MyGalleryService);
    expect(service).toBeTruthy();
  });
});
