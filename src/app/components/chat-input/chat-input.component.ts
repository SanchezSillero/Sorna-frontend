import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chat-input',
  standalone: false,
  templateUrl: './chat-input.component.html',
  styleUrl: './chat-input.component.css',
})
export class ChatInputComponent {
  @Input() isSidebarCollapsed: boolean = false;

  promptText: string = '';

  sendPrompt() {
    const trimmed = this.promptText.trim();
    if (trimmed.length > 0) {
      console.log('Mensaje enviado:', trimmed);
      this.promptText = ''; // Limpiar el input
    }
  }
}