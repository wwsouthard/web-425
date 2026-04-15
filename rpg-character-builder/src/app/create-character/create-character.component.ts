import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

export type GenderOption = 'Male' | 'Female' | 'Other';
export type ClassOption = 'Warrior' | 'Mage' | 'Rogue';

/** Form model for template-driven controls (name, gender, class). */
export interface CharacterFormModel {
  name: string;
  gender: GenderOption;
  class: ClassOption;
}

/** Character stored after submit, including generated id. */
export interface CreatedCharacter extends CharacterFormModel {
  id: number;
}

@Component({
  selector: 'app-create-character',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './create-character.component.html',
  styleUrl: './create-character.component.css',
})
export class CreateCharacterComponent {
  model: CharacterFormModel = {
    name: '',
    gender: 'Male',
    class: 'Warrior',
  };

  characters: CreatedCharacter[] = [];

  generateCharacterId(): number {
    return Math.floor(Math.random() * 1000) + 1;
  }

  onSubmit(): void {
    const newCharacter: CreatedCharacter = {
      id: this.generateCharacterId(),
      name: this.model.name,
      gender: this.model.gender,
      class: this.model.class,
    };
    this.characters = [...this.characters, newCharacter];
    this.resetForm();
  }

  resetForm(): void {
    this.model = {
      name: '',
      gender: 'Male',
      class: 'Warrior',
    };
  }
}
