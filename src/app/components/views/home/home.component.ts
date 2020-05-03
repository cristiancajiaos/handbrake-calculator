import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'Handbrake Bitrate Calculator';

  bitrateCalculated: number;

  options: FormGroup;

  weight = new FormControl(null, Validators.required);
  timeDuration = new FormControl(null, Validators.required);
  audioBitrate = new FormControl(null, Validators.required);

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.options = formBuilder.group({
      weight: this.weight,
      timeDuration: this.timeDuration,
      audioBitrate: this.audioBitrate
    });
  }

  ngOnInit() {

  }

  calculateBitrate(): void {
    this.bitrateCalculated = Math.ceil((this.weight.value * 1024 * 8) / this.timeDuration.value) - this.audioBitrate.value;
  }

  resetForm(): void {
    this.bitrateCalculated = null;
    this.options.reset();
  }

}
