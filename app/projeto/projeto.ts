import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-catalogo-filmes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './projeto.component.html',
  styleUrls: ['./projeto.component.css']
})
export class CatalogoFilmesComponent {
  
  filmes: string[] = [
    'Velozes e Furiosos',
    'Titanic',
    'Robocop',
    'Click',
    'Gente Grande'
  ];

  
  filmeSelecionado: string | null = null;
  novoFilme: string = '';
  isFavorito: boolean = false;
  visualizacoes: number = 0;
 
  selecionarFilme(filme: string): void {
    this.filmeSelecionado = filme;
    this.isFavorito = false;
    this.visualizacoes = 0;
  }
 
  adicionarFilme(): void {
    if (this.novoFilme.trim()) {
      this.filmes.push(this.novoFilme.trim());
      this.novoFilme = ''; 
    }
  }

  alternarFavorito(): void {
    this.isFavorito = !this.isFavorito;
  }

  aumentarVisualizacoes(): void {
    this.visualizacoes++;
  }
}