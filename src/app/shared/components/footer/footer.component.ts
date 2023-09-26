import {Component,ElementRef,EventEmitter,OnInit,Output,Renderer2,TemplateRef,inject} from '@angular/core';
import { Contributor } from '../../interfaces/contributors.interface';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {

  private renderer = inject(Renderer2);
  private elementRef = inject(ElementRef);

  public hideWhat: boolean = false;
  public whatDo: string = '';
  public isModalShown:boolean = true;
  public isBlurred: boolean = false;
  public isContributorListShown: boolean = false;
  public selectedArray: Contributor[] = [];
  public contributorsArray: Contributor[] = [
    {
      image: '../../../../assets/images/lola-garcia.jpg',
      contributor: 'Lola García Morcillo',
      link: 'https://www.linkedin.com/in/lola-garcia-morcillo',
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
      link: 'https://es.linkedin.com/in/ricardo-mera-ciudad-26b58a159/',
    },
    {
      image: '../../../../assets/images/giovanni.PNG',
      contributor: 'Giovanni Martínez Díaz',
      link: 'https://es.linkedin.com/in/giovanni-jose-mart%C3%ADnez-d%C3%ADaz-',
    },
    {
      image: '../../../../assets/images/David.PNG',
      contributor: 'David Galisteo Pujol',
      link: 'https://es.linkedin.com/in/davidgalisteopujol',
    },
    {
      image: '../../../../assets/images/daniel-sanchez.jpg',
      contributor: 'Daniel Sánchez Pinazo',
      link: 'https://www.linkedin.com/in/daniel-s%C3%A1nchez-pinazo-00336a231/',
    },
  ];

  @Output() blurEffectToggled = new EventEmitter<boolean>();

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
    this.renderer.listen('document', 'click', (event: Event) => {
      if (!this.elementRef.nativeElement.contains(event.target)) {
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

  openVerticallyCentered(content: TemplateRef<any>) {
		this.modalService.open(content, { centered: true });
	}

}
