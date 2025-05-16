import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ChatInputComponent } from './components/chat-input/chat-input.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { ChatComponent } from './pages/chat/chat.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthModalComponent } from './components/auth-modal/auth-modal.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PromptResultComponent } from './components/prompt-result/prompt-result.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ChatInputComponent,
    HomeComponent,
    ChatComponent,
    AuthModalComponent,
    SidebarComponent,
    PromptResultComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
