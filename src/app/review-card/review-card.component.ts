import {Component, Input, OnInit} from '@angular/core';
import {Review} from '@app/shared/review.model';

@Component({
  selector: 'app-review-card',
  templateUrl: './review-card.component.html',
  styleUrls: ['./review-card.component.less']
})
export class ReviewCardComponent implements OnInit {

  @Input() review: Review;
  constructor() { }

  ngOnInit() {
  }

}
