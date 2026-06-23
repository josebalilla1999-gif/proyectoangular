import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface EvolutionNode {
  name: string;
  evolvesTo: EvolutionNode[];
}

@Component({
  selector: 'app-evolution-node',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './evolution.node.html',
  styleUrl: './evolution.node.css'
})
export class EvolutionNodeComponent {
  @Input() node!: EvolutionNode;
}