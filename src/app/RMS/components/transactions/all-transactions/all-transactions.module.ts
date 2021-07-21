import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "src/module/shared.module";
import { AllTransFilterComponent } from "./all-trans-filter/all-trans-filter.component";
import { AllTransTblComponent } from "./all-trans-tbl/all-trans-tbl.component";
import { AllTransactionsComponent } from "./all-transactions.component";
import { TransHelper } from "./classes/trans-helper";

@NgModule({
    declarations: [
        AllTransactionsComponent,
        AllTransTblComponent,
        AllTransFilterComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
    ],
    providers: [
        TransHelper
    ]
})

export class AllTransModule {}