import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'template-form-app';
  anytext: string = "";
  email: string = "";
  age: number | null = null;
  message: string = "";
  submitted: boolean = false;

  onSubmit() {
    this.submitted = true;
  }
}
