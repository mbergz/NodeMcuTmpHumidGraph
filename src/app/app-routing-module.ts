import { NgModule } from '@angular/core';
import { Routes, RouterModule, RouteReuseStrategy, DetachedRouteHandle, ActivatedRouteSnapshot } from '@angular/router';
import { GraphComponent } from './graph/graph.component';
import { LogViewerComponent } from './log-viewer/log-viewer.component';

const routes: Routes = [
    { path: '', redirectTo: '/graph', pathMatch: 'full' },
    { path: 'graph', component: GraphComponent },
    { path: 'log', component: LogViewerComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true} )],
    exports: [RouterModule]
})
export class AppRoutingModule {}

export class CustomReuseStrategy implements RouteReuseStrategy {
    routesToCache: string[] = ['graph'];
    storedRouteHandles = new Map<string, DetachedRouteHandle>();

    // Decides if the route should be stored
    shouldDetach(route: ActivatedRouteSnapshot): boolean {
       return this.routesToCache.indexOf(route.routeConfig.path) > -1;
    }

    // Store the information for the route we're destructing
    store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
       this.storedRouteHandles.set(route.routeConfig.path, handle);
    }

   // Return true if we have a stored route object for the next route
    shouldAttach(route: ActivatedRouteSnapshot): boolean {
       return this.storedRouteHandles.has(route.routeConfig.path);
    }

    // If we returned true in shouldAttach(), now return the actual route data for restoration
    retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
       return this.storedRouteHandles.get(route.routeConfig.path);
    }

    // Reuse the route if we're going to and from the same route
    shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
       return future.routeConfig === curr.routeConfig;
    }
}
