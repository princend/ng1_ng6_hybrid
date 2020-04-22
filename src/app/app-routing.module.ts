// import { NewAppComponent } from './new-app/new-app.component';
import { EmptyComponent } from './empty/empty.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';


const routes: Routes = [{
    path: 'new/test',
    component: TestComponent
},
{
    path: '**',
    component: EmptyComponent
},
// {
//     path: '',
//     redirectTo: 'new/test',
//     pathMatch: 'full'

// }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
