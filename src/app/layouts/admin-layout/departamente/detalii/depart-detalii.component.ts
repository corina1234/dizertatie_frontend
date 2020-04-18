import {Component, OnInit} from "@angular/core";
import {AngajatService} from "../../../../services/angajat.service";
import {ActivatedRoute, Router} from "@angular/router";
import {DepartmentService} from "../../../../services/department.service";

@Component({
    templateUrl: './depart-detalii.component.html',
    styleUrls: ['./depart-detalii.component.css']
})

export class DepartDetaliiComponent implements OnInit {
    departamentDetalii;
    departamentId;

    constructor(private departmentService: DepartmentService, private route: ActivatedRoute, private router:Router){}

    ngOnInit(): void {
        this.route.paramMap.subscribe((params) => {
            this.departamentId = params.get('id');
        });

        this.departmentService.getDepartmentDetailsById(this.departamentId).subscribe(data => {
            console.log(data);
            this.departamentDetalii = data;
        }, error => {
            console.log(error);
        });
    }

    vizualizareAngajati(){
        this.router.navigate(['/angajati/departament/', this.departamentId]);
    }

    vizualizareHarta(){
        let etaj = this.departamentDetalii.officesRoom.floor.id;
        let camera = this.departamentDetalii.officesRoom.id
        this.router.navigate(['/plan-cladire/departament/', etaj, camera]);
    }


}
