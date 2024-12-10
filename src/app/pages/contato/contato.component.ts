import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html', // HTML do componente
  styleUrls: ['./contato.component.css'], // Estilos do componente
})
export class ContatoComponent {
  scrollPosition = 0; // Variável para rastrear o scroll

  @HostListener('window:scroll', ['$event']) // Captura o evento de scroll na janela
  onScroll() {
    const scrolled = window.scrollY; // Obtém a posição do scroll
    this.scrollPosition = scrolled * 0.5; // Define o deslocamento parallax
  }
}
