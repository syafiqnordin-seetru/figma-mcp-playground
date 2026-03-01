import { Component, ElementRef, input, ViewChild } from '@angular/core';

export interface MilestoneItem {
  name: string;
  total: number;
  delayed: number;
  onTrack: number;
}

const CHEVRON_LEFT = '/assets/b1ebc1e3ef4fd98e7ca3fa1778134884510c0cea.svg';

@Component({
  selector: 'app-milestone-carousel',
  standalone: true,
  templateUrl: './milestone-carousel.component.html',
  styleUrl: './milestone-carousel.component.scss',
})
export class MilestoneCarouselComponent {
  readonly milestones = input<MilestoneItem[]>([]);
  readonly chevronLeftUrl = CHEVRON_LEFT;

  @ViewChild('track') trackRef!: ElementRef<HTMLDivElement>;

  private readonly SCROLL_AMOUNT = 220;

  scrollPrev(): void {
    this.trackRef.nativeElement.scrollBy({ left: -this.SCROLL_AMOUNT, behavior: 'smooth' });
  }

  scrollNext(): void {
    this.trackRef.nativeElement.scrollBy({ left: this.SCROLL_AMOUNT, behavior: 'smooth' });
  }
}
