import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { infoService } from '../infoservice';

@Component({
  selector: 'model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {

  constructor(
    public service: infoService,
    public dialogRef: MatDialogRef<ModelComponent>
) { }


ngOnInit(): void {
    this.service.getModels();
}

onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();
}


onClose() {
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.dialogRef.close();
}


onSubmit() {
    if (this.service.form.valid) {
        if (this.service.form.get('$key')) {
            if(!this.service.form.get('$key')?.value)
            this.service.insertModel(this.service.form.value);
        }
        else
        {
            this.service.updateModel(this.service.form.value);
        }
        this.service.form.reset();
        this.service.initializeFormGroup();
        this.dialogRef.close();
    }
}

}
