import { Injectable } from '@angular/core';
import { IPatient } from 'src/interface/patient.interface';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
    providedIn: 'root'
})
export class WindowService {
    constructor() { }

    public target: "" | "ERROR" | "SUCCESS" = "";
    public message: string = "";
    public isEdit: boolean = false;

    patient: IPatient = {
        id: uuidv4(),
        petName: "",
        owner: "",
        phone: "",
        date: "",
        time: "",
        symptoms: ""
    };
    
    patients: IPatient[] = [];
      
    newPatient(): void{
        if ( Object.values(this.patient).some( p => p === "") ) {
            return this.visibleTarget("Todos los campos son obligatorios", "ERROR");
        };

        this.patients.push(this.patient);
        this.visibleTarget("Se agrego correctamente", "SUCCESS");

        this.patient = {
            id: uuidv4(),
            petName: "",
            owner: "",
            phone: "",
            date: "",
            time: "",
            symptoms: ""
        }
    }

    visibleTarget(message: string, target: "ERROR" | "SUCCESS"): void {
        this.target = target;
        this.message = message;

        setTimeout(() => {
            this.target = "";
        }, 3000);
    }

    removeDate(id: string) {
        this.patients = this.patients.filter(p => p.id !== id);
        
        this.visibleTarget("Se elimino correctamente", "SUCCESS");
    }

    editTarget(id: string) {
        const patientEdit = this.patients.filter(p => p.id === id)[0];

        this.isEdit = true;
        this.patient = {
            ...patientEdit
        }
    }

    confirmEditTarget(id: string): void {
        if ( Object.values(this.patient).some( p => p === "") ) {
            return this.visibleTarget("Todos los campos son obligatorios", "ERROR");
        };

        const patients = this.patients.filter(p => p.id !== id);
        this.patients = [
            ...patients,
            this.patient
        ]
        this.isEdit = false;
        this.patient = {
            id: uuidv4(),
            petName: "",
            owner: "",
            phone: "",
            date: "",
            time: "",
            symptoms: ""
        }

        this.visibleTarget("Editado correctamente", "SUCCESS");
    }
}