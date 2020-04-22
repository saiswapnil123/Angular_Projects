import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'image-root',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  ironman = "ironman";
  thor = "thor";
  captain ="captain";
  constructor() { }

  ngOnInit(): void {
  }

}
