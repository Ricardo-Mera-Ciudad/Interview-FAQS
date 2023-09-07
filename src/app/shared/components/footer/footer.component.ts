import { Component } from '@angular/core';
import { Contributor } from '../../interfaces/contributors.interface';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  isContributorListShown: boolean = false;
  selectedArray: Contributor[] = [];
  contributorsArray: Contributor[] = [
    {
      image: '../../../../assets/images/lola-garcia.jpg',
      contributor: 'María Dolores García Morcillo',
      link: 'https://es.linkedin.com/in/lola-garcia-morcillo',
    },
    {
      image: '../../../../assets/images/carlos-ortiz.png',
      contributor: 'Carlos Ortiz Sánchez',
      link: 'https://www.linkedin.com/in/carlosortizsanchez/',
    },
    {
      image: '../../../../assets/images/jesus-villalon.jpg',
      contributor: 'Jesús Villalón Gallardo',
      link: 'https://www.linkedin.com/in/jesus-villalon/',
    },
    {
      image: '../../../../assets/images/ricardo-mera.jpg',
      contributor: 'Ricardo Mera Ciudad',
      link: 'https://www.linkedin.com/in/ricardo-mera-ciudad-26b58a159/',
    },
    {
      image: 'asdf1',
      contributor: 'Giovanni Martínez Díaz',
      link: 'asdf3',
    },
    {
      image: 'asdf1',
      contributor: 'David Galisteo Pujol',
      link: 'asdf3',
    },
    {
      image: '../../../../assets/images/daniel-sanchez.jpg',
      contributor: 'Daniel Sánchez Pinazo',
      link: 'https://www.linkedin.com/in/daniel-s%C3%A1nchez-pinazo-00336a231/',
    },
  ];
  

  showContributorsList() {
    if (this.isContributorListShown) {
      this.selectedArray = [];
      this.isContributorListShown = false;
    } else {
      let index = 0;
      const intervalId = setInterval(() => {
        if (index === this.contributorsArray.length) {
          clearInterval(intervalId);
          this.isContributorListShown = true;
        } else {
          this.selectedArray.push(this.contributorsArray[index]);
          index++;
        }
      }, 100);
    }
  }
}
