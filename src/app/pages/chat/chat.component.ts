import { Component, OnInit } from '@angular/core';
import { PromptService, GeneratePromptResponse, ComedianInfo } from '../../services/prompt.service';


@Component({
  selector: 'app-chat',
  standalone: false,
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent implements OnInit {
  title = 'Sorna-frontend';
  isSidebarCollapsed: boolean = true;

  comedians: ComedianInfo[] = [];
  selectedComedian: string = '';
  prompt: string = '';
  generatedStory?: GeneratePromptResponse;
  error: string = '';

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

  onToggleMenu() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
    console.log('Toggle del menú lateral');
  }

  onOpenSettings() {
    console.log('Abrir configuración de usuario');
  }

generate(event: { prompt: string, comedian: string }) {
  this.error = '';
  this.generatedStory = undefined;
  this.promptService.generatePrompt(event.prompt, event.comedian).subscribe({
    next: (res) => {
      console.log('Respuesta recibida:', res);
      this.generatedStory = res; // <--- Aquí se asigna la respuesta
    },
    error: (err) => {
      this.error = 'Error generando historia';
    }
  });
}

}