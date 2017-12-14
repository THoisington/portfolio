import { Component, OnInit} from '@angular/core';
import { Project } from '../project';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ProjectService }  from '../project.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  project: Project;

  constructor(
  private route: ActivatedRoute,
  private projectService: ProjectService,
  private location: Location) { }

  ngOnInit(): void {
    this.getProject();
  }

  getProject(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.projectService.getProject(id)
      .subscribe(curr => this.project = curr);
  }

}
