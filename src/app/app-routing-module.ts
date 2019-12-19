import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GraphComponent } from './graph/graph.component';
import { LogViewerComponent } from './log-viewer/log-viewer.component';

const routes: Routes = [
    { path: '', redirectTo: '/graph', pathMatch: 'full' },
    { path: 'graph', component: GraphComponent },
    { path: 'log', component: LogViewerComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
