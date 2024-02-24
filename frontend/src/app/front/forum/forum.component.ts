import { Component, OnInit } from '@angular/core';
import { Forum } from 'src/app/core/models/Forum';
import { ForumService } from 'src/app/core/services/forum.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {
  f:Forum;

  constructor(private forumServive:ForumService) { }

  ngOnInit(): void {
    this.getLatestForum();
  }
  private getLatestForum(){
    this.forumServive.getLatestForum().subscribe(data =>{
        this.f=data;
     });
 }

}
