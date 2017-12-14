import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Project } from './project';
import { PROJECTS } from './local-list';

@Injectable()
export class ProjectService {

  constructor() { }

  getProjects(): Observable<Project[]> {
    return of(PROJECTS);
  }

  //Hopefully changing the name to curr means it works the way I think it does
  getProject(id: number): Observable<Project> {
    return of(PROJECTS.find(curr => curr.id === id));
  }

}
