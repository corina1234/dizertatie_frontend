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
    departament;

    constructor(private angajatService: AngajatService, private route: ActivatedRoute, private router:Router){}

    ngOnInit(): void {
        this.route.paramMap.subscribe((params) => {
            this.angajatId = params.get('id');
            if(params.get('departament')){
                this.departament = params.get('departament');
            }
        });

        this.angajatService.getAngajatDetailedById(this.angajatId).subscribe(data => {
            this.angajatDetalii = data;
        }, error => {
            console.log(error);
        });
    }

    vizualizareHarta(){
        let etaj = this.angajatDetalii.department.officesRoom.floor.id;
        let office = this.angajatDetalii.office.id
        this.router.navigate(['/plan-cladire/angajat/', etaj, office]);
    }


}
