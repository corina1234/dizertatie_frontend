import {Component, ElementRef, OnInit, Renderer2, ViewChild} from "@angular/core";
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";
import {ActivatedRoute} from "@angular/router";
import {isOpenSpaceSelectedStyle, mouseEnter, mouseLeave} from "./utils";

@Component({
    templateUrl: './plan-cladire.component.html',
    styleUrls: ['plan-cladire.component.css']
})

export class PlanCladireComponent implements OnInit{
    @ViewChild('detailsAmenities', {static: false}) detailsAmenities: ElementRef;
    svg:SafeHtml;
    filtruEtaj;
    camera;
    salaSedinte;
    office;
    etajChecked = ["true", "false", "false"];

    constructor(private sanitizer: DomSanitizer, private renderer: Renderer2, private route:ActivatedRoute) {
    }


    ngOnInit(): void {
        this.route.paramMap.subscribe((params) => {
            this.filtruEtaj = params.get('nivel');
            this.camera = params.get('camera');
            this.salaSedinte = params.get('salaSedinte');
            this.office = params.get('office');
        });
        if(this.filtruEtaj){
            this.mutareEtaj();
        }
    }

    public mutareEtaj(){
        if(this.filtruEtaj == 1){
            this.checkUncheckEtaj(["true", "false", "false"]);
        } else if(this.filtruEtaj == 2){
            this.checkUncheckEtaj(["false", "true", "false"]);
        } else {
            this.checkUncheckEtaj(["false", "false", "true"]);
        }
    }

    public checkUncheckEtaj(values){
        for(let i = 0; i < this.etajChecked.length; i++){
            this.etajChecked[i] = values[i];
        }
    }

    showTooltip($event, data){
        mouseEnter($event, this.renderer, this.detailsAmenities, data);
    }

    hideTooltip($event){
        mouseLeave($event, this.renderer, this.detailsAmenities);
    }



}
