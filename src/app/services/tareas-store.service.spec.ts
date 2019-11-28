import { TestBed } from '@angular/core/testing';

import { TareasStoreService } from './tareas-store.service';
import { AppModule } from '../app.module';

describe('TareasStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[AppModule]
  }));

  it('should be created', () => {
    const service: TareasStoreService = TestBed.get(TareasStoreService);
    expect(service).toBeTruthy();
  });
});
