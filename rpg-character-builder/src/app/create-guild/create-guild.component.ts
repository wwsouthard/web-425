import { Component } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';

export type GuildTypeOption =
  | 'Competitive'
  | 'Casual'
  | 'Social'
  | 'Educational';

export type NotificationPreferenceOption = 'Email' | 'SMS' | 'In-App';

/** Values collected from the guild form before persistence. */
export interface GuildFormModel {
  guildName: string;
  description: string;
  type: GuildTypeOption;
  acceptTerms: boolean;
  notificationPreference: NotificationPreferenceOption;
}

/** Guild shown in the roster after a successful submit. */
export interface CreatedGuild extends GuildFormModel {
  id: number;
}

@Component({
  selector: 'app-create-guild',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './create-guild.component.html',
  styleUrl: './create-guild.component.css',
})
export class CreateGuildComponent {
  guildForm = this.fb.group({
    guildName: ['', Validators.required],
    description: ['', Validators.required],
    type: ['' as GuildTypeOption | '', Validators.required],
    acceptTerms: [false, Validators.requiredTrue],
    notificationPreference: [
      '' as NotificationPreferenceOption | '',
      Validators.required,
    ],
  });

  guilds: CreatedGuild[] = [];

  constructor(private fb: FormBuilder) {}

  generateGuildId(): number {
    return Math.floor(Math.random() * 1000) + 1;
  }

  onSubmit(): void {
    if (this.guildForm.invalid) {
      this.guildForm.markAllAsTouched();
      return;
    }

    const value = this.guildForm.getRawValue();
    const newGuild: CreatedGuild = {
      id: this.generateGuildId(),
      guildName: value.guildName!,
      description: value.description!,
      type: value.type as GuildTypeOption,
      acceptTerms: value.acceptTerms!,
      notificationPreference:
        value.notificationPreference as NotificationPreferenceOption,
    };

    this.guilds = [...this.guilds, newGuild];
    this.resetForm();
  }

  resetForm(): void {
    this.guildForm.reset({
      guildName: '',
      description: '',
      type: '',
      acceptTerms: false,
      notificationPreference: '',
    });
  }
}
