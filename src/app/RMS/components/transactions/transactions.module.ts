import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { TransRoutes } from './transactions.routing';
import { AllTransModule } from './all-transactions/all-transactions.module';
import { AllTransResolver } from './all-transactions/services/all-trans.resolver';
import { SharedModule } from 'src/module/shared.module';

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(TransRoutes),
        AllTransModule,
    ],
    exports: [],
    providers: [
        AllTransResolver
    ]
})

export class TransactionsModule {}