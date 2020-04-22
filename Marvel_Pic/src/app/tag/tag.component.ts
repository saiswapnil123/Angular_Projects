import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'tag-root',
    templateUrl: 'tag.component.html',
    styleUrls:['tag.component.css']
})

export class TagComponent implements OnInit {
    

    superman = "superman";
    aquaman = "aquaman";
    wonderwoman = "wonderwoman";
    ironman = "ironman";
  thor = "thor";
  captain ="captain";
    constructor() { }

    ngOnInit() { }
}