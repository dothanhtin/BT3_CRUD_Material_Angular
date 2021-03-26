import { NodeWithI18n } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { model} from './model';
import { formatDate } from "@angular/common";
import { Observable, of } from 'rxjs';
import { DatePipe } from '@angular/common';
@Injectable({
    providedIn: 'root'
})
export class infoService {

    constructor(
        private datePipe: DatePipe
    ) { }
    modelList: model[] = [];

    form: FormGroup = new FormGroup({
        $key: new FormControl(null),
        name: new FormControl('', Validators.required),
        email: new FormControl('', [ Validators.required,Validators.email]),
        code:new FormControl('',[ Validators.required,Validators.pattern('^[a-zA-Z0-9_]*$')]),
        birthDate: new FormControl(''),
        url: new FormControl('')
    });

    initializeFormGroup() {
        this.form.setValue({
            $key: null,
            name: '',
            email: '',
            code: '',
            birthDate: '',
            url: '',
        });
    }

    getModels() : Observable<model[]>{
        const models = of(this.modelList);
        return models;
    }

    insertModel(model : model) {
        
        this.modelList.push({
          name: model.name,
          email: model.email,
          code: model.code,
          birthDate: model.birthDate == "" ? "" : this.datePipe.transform(model.birthDate, 'yyyy-MM-dd'),
          url: model.url
        });
    }

    populateForm(model: any) {
        this.form.setValue({
            name: model.name,
            email: model.email,
            code: model.code,
            birthDate: model.birthDate,
            url: model.url,
            $key:"1"
        });
    }

    updateModel(model: any) {
        let index = this.modelList.findIndex(x => x.code ===model.code);
        console.log(index);
        console.log(this.modelList);
        this.modelList[index].name = model.name;
        this.modelList[index].email = model.email;
        this.modelList[index].code = model.code;
        this.modelList[index].url = model.url;
        this.modelList[index].birthDate = model.birthDate == "" ? "" : this.datePipe.transform(model.birthDate, 'yyyy-MM-dd'),
        console.log(this.modelList);
    }

    deleteModel(code: any){
        let index = this.modelList.findIndex(x => x.code ===code);
        console.log(index);
        let lstmp = this.modelList.filter(item => item.code != code);
        this.modelList = lstmp;
        console.log(this.modelList);
    }
}