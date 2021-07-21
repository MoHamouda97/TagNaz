import { NgModule } from "@angular/core";

import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzModalModule } from 'ng-zorro-antd/modal'
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';

@NgModule({
    declarations: [],
    imports: [
        NzFormModule,
        NzInputModule,
        NzIconModule,
        NzTableModule,
        NzModalModule,
        NzSelectModule,
        NzDatePickerModule
    ],
    exports: [
        NzFormModule,
        NzInputModule,
        NzIconModule,
        NzTableModule,
        NzModalModule,
        NzSelectModule,
        NzDatePickerModule
    ],
    providers: [],
})

export class AntModule {}