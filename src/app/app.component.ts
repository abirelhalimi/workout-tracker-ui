import { Component } from '@angular/core';
import { Exercise } from './exercise';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'workout-tracker-ui';
  exercises: Exercise[] = [];

  onExerciseAdded(exerciseData: any) {
    this.exercises.push(exerciseData);
  }
}
