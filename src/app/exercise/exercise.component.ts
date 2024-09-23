import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Exercise } from '../exercise';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrl: './exercise.component.css'
})
export class ExerciseComponent {

  exerciseForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    sets: new FormControl(0, [Validators.required]),
    reps: new FormControl(0, [Validators.required])
  });

  @Output() exerciseAdded = new EventEmitter<any>();

  onSubmit() {
    this.exerciseAdded.emit(this.exerciseForm.value);
    this.exerciseForm.reset();
  }

}
