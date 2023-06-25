import { Injectable } from '@angular/core';
import { IPatient } from 'src/interface/patient.interface';

@Injectable({
    providedIn: 'root'
})
export class WindowService {
    constructor() { }

    public target: "" | "ERROR" | "SUCCESS" = "";
    public message: string = "";

    patient: IPatient = {
      petName: "",
      owner: "",
      phone: "",
      date: "",
      time: "",
      symptoms: ""
    };
    
    patients: IPatient[] = []
      
    newPatient(): void{
        if ( Object.values(this.patient).some( p => p === "") ) {
            return this.visibleTarget("Todos los campos son obligatorios", "ERROR");
        };

        this.patients.push(this.patient);
        this.visibleTarget("Se agrego correctamente", "SUCCESS");
    }

    visibleTarget(message: string, target: "ERROR" | "SUCCESS"): void {
        this.target = target;
        this.message = message;

        setTimeout(() => {
            this.target = "";
        }, 3000);
    }
}