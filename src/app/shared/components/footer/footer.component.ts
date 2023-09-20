import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  Renderer2,
  inject,
} from '@angular/core';
import { Contributor } from '../../interfaces/contributors.interface';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  @Output() blurEffectToggled = new EventEmitter<boolean>()
  isBlurred: boolean = false;

  isContributorListShown: boolean = false;
  selectedArray: Contributor[] = [];
  contributorsArray: Contributor[] = [
    {
      image: '../../../../assets/images/lola-garcia.jpg',
      contributor: 'Lola García Morcillo',
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
      link: 'https://www.linkedin.com/in/ricardo-mera.jpg/',
    },
    {
      image: '../../../../assets/images/giovanni.PNG',
      contributor: 'Giovanni Martínez Díaz',
      link: 'asdf3',
    },
    {
      image: '../../../../assets/images/David.PNG',
      contributor: 'David Galisteo Pujol',
      link: 'asdf3',
    },
    {
      image: '../../../../assets/images/daniel-sanchez.jpg',
      contributor: 'Daniel Sánchez Pinazo',
      link: 'https://www.linkedin.com/in/daniel-s%C3%A1nchez-pinazo-00336a231/',
    },
  ];

  public hideWhat: boolean = false;
  public whatDo: string = '';

  private el = inject(ElementRef);
  private renderer = inject(Renderer2);
  public isModalShown:boolean = true;

  ngOnInit(): void {
    this.renderer.listen('document', 'click', (event: Event) => {
      if (!this.el.nativeElement.contains(event.target)) {
        this.closeMenu();
        this.isBlurred = false;
        this.blurEffectToggled.emit(this.isBlurred);
      }
    });
  }

  toggledBlurEffect() {
    this.isBlurred = !this.isBlurred
    this.blurEffectToggled.emit(this.isBlurred);
  }

  closeMenu() {
    this.isContributorListShown = false;
    this.selectedArray = [];
  }

  showContributorsList() {
    this.toggledBlurEffect()
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
      }, 200);
    }
  }

  showModalContent(){
    console.log("hola")
  }
}
