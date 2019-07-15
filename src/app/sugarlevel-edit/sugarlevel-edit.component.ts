import { Component, OnDestroy,OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import SugarLevelService from '../shared/api/sugar-level.service';
import SugarLevel from '../shared/models/SugarLevel';
import { resource } from 'selenium-webdriver/http';
@Component({
  selector: 'app-sugarlevel-edit',
  templateUrl: './sugarlevel-edit.component.html',
  styleUrls: ['./sugarlevel-edit.component.css']
})
export class SugarlevelEditComponent implements OnInit ,OnDestroy{
  sugarLevel:SugarLevel =new SugarLevel();
  sub:Subscription;

  constructor(private route: ActivatedRoute, private router: Router, private sugarLevelService:SugarLevelService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if(id)
      {
        this.sugarLevelService.get(id).subscribe((sugarLevel:any)=>{
          if(sugarLevel){
            this.sugarLevel= sugarLevel;
            this.sugarLevel.measuredAt = new Date(this.sugarLevel.measuredAt).toISOString();
          }
          else{
            console.log(`Sugar level with id '${id}' not found, returing to list`);
            this.gotoList();
          }
        });
      }
    });
  }
ngOnDestroy(){
  this.sub.unsubscribe();
}
gotoList(){
  this.router.navigate(['/sugarlevel-list']);
}
save(form:any){
  this.sugarLevelService.save(form).subscribe(
    result=>{
      this.gotoList();
    },
    error => console.log(error)
  );
}
}
