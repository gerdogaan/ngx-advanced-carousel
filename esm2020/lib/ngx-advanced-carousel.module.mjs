import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxAdvancedCarouselItemDirective } from './ngx-advanced-carousel-item.directive';
import { NgxAdvancedCarouselComponent } from './ngx-advanced-carousel.component';
import * as i0 from "@angular/core";
export class NgxAdvancedCarouselModule {
}
/** @nocollapse */ NgxAdvancedCarouselModule.ɵfac = function NgxAdvancedCarouselModule_Factory(t) { return new (t || NgxAdvancedCarouselModule)(); };
/** @nocollapse */ NgxAdvancedCarouselModule.ɵmod = /** @pureOrBreakMyCode */ i0.ɵɵdefineNgModule({ type: NgxAdvancedCarouselModule });
/** @nocollapse */ NgxAdvancedCarouselModule.ɵinj = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjector({ imports: [CommonModule, FormsModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgxAdvancedCarouselModule, [{
        type: NgModule,
        args: [{
                declarations: [NgxAdvancedCarouselComponent, NgxAdvancedCarouselItemDirective],
                exports: [NgxAdvancedCarouselComponent, NgxAdvancedCarouselItemDirective],
                imports: [CommonModule, FormsModule],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NgxAdvancedCarouselModule, { declarations: [NgxAdvancedCarouselComponent, NgxAdvancedCarouselItemDirective], imports: [CommonModule, FormsModule], exports: [NgxAdvancedCarouselComponent, NgxAdvancedCarouselItemDirective] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWFkdmFuY2VkLWNhcm91c2VsLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Byb2plY3RzL25neC1hZHZhbmNlZC1jYXJvdXNlbC9zcmMvbGliL25neC1hZHZhbmNlZC1jYXJvdXNlbC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzFGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDOztBQU9qRixNQUFNLE9BQU8seUJBQXlCOztxSEFBekIseUJBQXlCOzBHQUF6Qix5QkFBeUI7OEdBRjFCLFlBQVksRUFBRSxXQUFXO3VGQUV4Qix5QkFBeUI7Y0FMckMsUUFBUTtlQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLDRCQUE0QixFQUFFLGdDQUFnQyxDQUFDO2dCQUM5RSxPQUFPLEVBQUUsQ0FBQyw0QkFBNEIsRUFBRSxnQ0FBZ0MsQ0FBQztnQkFDekUsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFdBQVcsQ0FBQzthQUNyQzs7d0ZBQ1kseUJBQXlCLG1CQUpyQiw0QkFBNEIsRUFBRSxnQ0FBZ0MsYUFFbkUsWUFBWSxFQUFFLFdBQVcsYUFEekIsNEJBQTRCLEVBQUUsZ0NBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE5neEFkdmFuY2VkQ2Fyb3VzZWxJdGVtRGlyZWN0aXZlIH0gZnJvbSAnLi9uZ3gtYWR2YW5jZWQtY2Fyb3VzZWwtaXRlbS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTmd4QWR2YW5jZWRDYXJvdXNlbENvbXBvbmVudCB9IGZyb20gJy4vbmd4LWFkdmFuY2VkLWNhcm91c2VsLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW05neEFkdmFuY2VkQ2Fyb3VzZWxDb21wb25lbnQsIE5neEFkdmFuY2VkQ2Fyb3VzZWxJdGVtRGlyZWN0aXZlXSxcbiAgZXhwb3J0czogW05neEFkdmFuY2VkQ2Fyb3VzZWxDb21wb25lbnQsIE5neEFkdmFuY2VkQ2Fyb3VzZWxJdGVtRGlyZWN0aXZlXSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBOZ3hBZHZhbmNlZENhcm91c2VsTW9kdWxlIHt9XG4iXX0=