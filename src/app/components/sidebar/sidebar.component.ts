import { Component, Output, EventEmitter, Input } from '@angular/core';

interface Chat {
  id: string;
  title: string;
  lastMessage: string;
  createdAt: Date;
}

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  // --- Estado del sidebar ---
  @Input() isCollapsed: boolean = false; // Recibe estado desde el padre (navbar)
  @Output() toggleCollapseEvent = new EventEmitter<void>(); // Notifica al padre

  // --- Chats de ejemplo (luego los cargarás desde una API) ---
  chats: Chat[] = [
    {
      id: '1',
      title: 'Cómo funciona RAG',
      lastMessage: 'Explícame el modelo...',
      createdAt: new Date(),
    },
    {
      id: '2',
      title: 'Diseño UI',
      lastMessage: 'Necesito ayuda con Angular...',
      createdAt: new Date(Date.now() - 86400000),
    }, // Ayer
    {
      id: '3',
      title: 'Reunión con el equipo',
      lastMessage: 'Hoy a las 17:00...',
      createdAt: new Date(Date.now() - 172800000),
    }, // Anteayer
  ];

  searchQuery: string = '';

  // --- Agrupar chats por fecha ---
  get todaysChats(): Chat[] {
    const today = new Date().toDateString();
    return this.chats.filter((chat) => chat.createdAt.toDateString() === today);
  }

  get yesterdaysChats(): Chat[] {
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    return this.chats.filter(
      (chat) => chat.createdAt.toDateString() === yesterday
    );
  }

  get olderChats(): Chat[] {
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    return this.chats.filter(
      (chat) => chat.createdAt.toDateString() < yesterday
    );
  }

  // --- Eventos ---
  toggleCollapse(): void {
    this.toggleCollapseEvent.emit(); // Comunica al padre (navbar) que debe cambiar el estado
  }

  createNewChat(): void {
    // Lógica para crear un nuevo chat (ej: abrir modal o emitir evento)
    console.log('Nuevo chat creado');
    // this.chats.unshift({ id: '4', title: 'Chat sin título', lastMessage: '', createdAt: new Date() });
  }

  selectChat(chatId: string): void {
    console.log('Chat seleccionado:', chatId);
    // Aquí cargarías el chat en el área principal (ej: emitir evento al padre)
  }
}
