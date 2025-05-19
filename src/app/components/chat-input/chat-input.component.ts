import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { PromptService, ComedianInfo } from '../../services/prompt.service';

@Component({
  selector: 'app-chat-input',
  standalone: false,
  templateUrl: './chat-input.component.html',
  styleUrl: './chat-input.component.css',
})
export class ChatInputComponent implements OnInit {
  @Input() isSidebarCollapsed: boolean = true;
  @Output() generatePrompt = new EventEmitter<{ prompt: string, comedian: string }>();

  comedians: ComedianInfo[] = [];
  selectedComedian: string = '';
  promptText: string = '';

  constructor(private promptService: PromptService) {}

  ngOnInit() {
    this.promptService.getComedians().subscribe({
      next: (comedians) => {
        this.comedians = comedians;
        if (comedians.length > 0) {
          this.selectedComedian = comedians[0].name;
        }
      }
    });
  }

  sendPrompt() {
    if (this.promptText.trim() && this.selectedComedian) {
       console.log('Emitir prompt:', this.promptText, 'Comediante:', this.selectedComedian); 
      this.generatePrompt.emit({
        prompt: this.promptText,
        comedian: this.selectedComedian
      });
      this.promptText = '';
    }
  }
}