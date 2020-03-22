import {Component, OnInit} from "@angular/core";
import {AngajatService} from "../../../../services/angajat.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    templateUrl: './detalii-angajat.component.html',
    styleUrls: ['./detalii-angajat.component.css']
})

export class DetaliiAngajatComponent implements OnInit {
    angajatDetalii;
    angajatId;

    constructor(private angajatService: AngajatService, private route: ActivatedRoute, private router:Router){}

    ngOnInit(): void {
        this.route.paramMap.subscribe((params) => {
            this.angajatId = params.get('id');
        });

        this.angajatService.getAngajatDetailedById(this.angajatId).subscribe(data => {
            console.log(data);
            this.angajatDetalii = data;
        }, error => {
            console.log(error);
        });
    }



}
