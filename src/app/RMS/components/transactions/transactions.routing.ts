import { Routes } from "@angular/router";
import { AllTransactionsComponent } from "./all-transactions/all-transactions.component";
import { AllTransResolver } from "./all-transactions/services/all-trans.resolver";

export const TransRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'all-trans',
                component: AllTransactionsComponent,
                data: {
                    title: 'تفاصيل التحويلات',
                },                
                resolve: {
                    trans: AllTransResolver
                }                
            }
        ]
    }
]