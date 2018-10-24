import { NgModule } from '@angular/core';

import { GestionErroresSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [GestionErroresSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [GestionErroresSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class GestionErroresSharedCommonModule {}
