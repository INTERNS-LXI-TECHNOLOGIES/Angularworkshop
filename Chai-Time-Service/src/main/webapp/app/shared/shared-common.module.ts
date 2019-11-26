import { NgModule } from '@angular/core';

import { ChaiTimeSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [ChaiTimeSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [ChaiTimeSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class ChaiTimeSharedCommonModule {}
