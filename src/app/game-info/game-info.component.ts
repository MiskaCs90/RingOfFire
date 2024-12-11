import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-game-info',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule
  ],
  templateUrl: './game-info.component.html',
  styleUrl: './game-info.component.scss'
})
export class GameInfoComponent implements OnChanges {
  cardAction = [
    {titel: 'Waterfall', description: 'You start a waterfall, each player starts drinking at the same time as the person to their right. Players then need to continue drinking until the person before them stops! This continues until the person who drew the card stops drinking'},
    {titel: 'Give a sip', description: 'You give a sip to another player, cheers!'},
    {titel: 'Take a sip', description: 'You take a sip from your drink, cheers!'},
    {titel: 'Whore', description: 'All females take sip, cheers!'},
    {titel: 'Thumb Master', description: 'The last player to put their thumb on the table, when the card holder puts their thumb on the table, takes a sip (This card can be saved for another point in the game!)'},
    {titel: 'Dicks', description: 'All males take sip, cheers!'},
    {titel: 'Heaven', description: 'Last person to point up to the sky takes a sip'},
    {titel: 'Mate', description: 'Pick a drinking buddy, for the rest of the game they drink when you drink!'},
    {titel: 'Rhyme', description: 'You choose a word (any word will do).Take turns going clockwise, saying things that rhyme with the previous word that was said. Last one unable to say a word, or does not say a word that rhymes, takes a sip!'},
    {titel: 'Category', description: 'You choose a category (like animals or countries).Take turns going clockwise, saying things in that category. Last one unable to say a word takes a sip!'},
    {titel: 'Make a rule', description: 'The cardholder makes a rule to be followed for the rest of the game'},
    {titel: 'Questions', description: 'The cardholder asks a question to another player. If they respond with anything but another question, they must drink!'},
    {titel: 'Middle cup!', description: 'For the first three kings drawn, the players must pour a bit of their drink into the middle cup. On the fourth king, the cardholder must drink the entire large cup in the middle, ending the game!'},
  ];

  titel: string = '';
  description: string = '';
  @Input() card: string = '';


  ngOnChanges(): void {
    if (this.card) {
      console.log('Current Card is '+ this.card);
      let cardNumber = +this.card.split('_')[1];
      this.titel = this.cardAction[cardNumber - 1].titel;
      this.description = this.cardAction[cardNumber - 1].description;
    }
  }
}
