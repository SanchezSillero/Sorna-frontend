import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { GeneratePromptResponse } from '../../services/prompt.service';


@Component({
  selector: 'app-prompt-result',
  standalone: false,
  templateUrl: './prompt-result.component.html',
  styleUrls: ['./prompt-result.component.css']
})
export class PromptResultComponent {
  @Input() result?: GeneratePromptResponse;
   ngOnChanges(changes: SimpleChanges): void {
    if (changes['result']) {
      console.log('PromptResultComponent recibió:', this.result);
    }
  }
}