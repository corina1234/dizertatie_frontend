import {Component, ElementRef, OnInit, Renderer2, ViewChild} from "@angular/core";
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";

@Component({
    templateUrl: './plan-cladire.component.html',
    styleUrls: ['plan-cladire.component.css']
})

export class PlanCladireComponent implements OnInit{

    svg:SafeHtml;
    x = [false,false,true];
    @ViewChild('baie', {static: false}) detailsAmenities: ElementRef;

    constructor(private sanitizer: DomSanitizer, private renderer: Renderer2) { }


    ngOnInit(): void {
       // let svgContent = `<svg width="100" height="100" #cerc (mouseover)="test()" >
       //                  <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
       //              </svg>`;
       //  this.svg = this.sanitizer.bypassSecurityTrustHtml(svgContent);
    }

    public mouseEnter($event, data): void {
        // var e = $event.target;
        // var dim = e.getBoundingClientRect();
        // var x = $event.clientX - dim.left;
        // var y = $event.clientY - dim.top;
        // console.log($event.clientX)
        // console.log($event.clientY)
        // console.log(dim.left)
        // console.log(dim.top)
        let circle = $event.target as HTMLElement;
        this.detailsAmenities.nativeElement.innerHTML = data;
        // let coordinates = circle.getBoundingClientRect();
        // let x = `${(1050 + coordinates.left)/100}%`;
        // let y = `${coordinates.top}px`;
        // console.log(x)
        // console.log(coordinates.top)
        // this.renderer.setStyle(this.detailsAmenities.nativeElement, 'left', x);
        // this.renderer.setStyle(this.detailsAmenities.nativeElement, 'top', y);
        // this.renderer.setStyle(this.detailsAmenities.nativeElement, 'display', 'block');
        // this.renderer.setProperty(this.detailsAmenities.nativeElement, 'innerHTML', data);
    }

    mouseLeave($event): void {
        this.renderer.setProperty(this.detailsAmenities.nativeElement, 'innerHTML', '');
        this.renderer.setStyle(this.detailsAmenities.nativeElement, 'display', 'none');
    }

}

