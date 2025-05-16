import { Component, Input, OnInit } from '@angular/core';
import { Trainer } from '../Trainer';
import { ActivatedRoute } from '@angular/router';
import { TrainerService } from '../trainer.service';

@Component({
  selector: 'app-trainer-detail',
  templateUrl: './trainer-detail.component.html',
  styleUrls: ['./trainer-detail.component.css'],
})
export class TrainerDetailComponent implements OnInit {
  
  @Input() trainer!: Trainer;

  constructor(
    private route: ActivatedRoute,
    private trainerService: TrainerService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.trainerService.getTrainer(id).subscribe(trainer => {
      this.trainer = trainer;
    });
  }
}
