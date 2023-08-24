import { ResizeObserver } from '@juggle/resize-observer';
import { Observable, timer, of, merge, fromEvent, BehaviorSubject, Subject, forkJoin, interval } from 'rxjs';
import { debounceTime, tap, finalize, switchMap, take, takeUntil, filter, map, bufferCount } from 'rxjs/operators';
import * as i0 from '@angular/core';
import { Directive, EventEmitter, PLATFORM_ID, ElementRef, forwardRef, Component, ViewEncapsulation, ChangeDetectionStrategy, Inject, Input, Output, ViewChild, ViewChildren, ContentChildren, ContentChild, NgModule } from '@angular/core';
import * as i1 from '@angular/common';
import { isPlatformBrowser, DOCUMENT, CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';

/**
 * An observable creator for element resize.
 * @param elm the watch element.
 * @param cb when resize complete, call back function.
 * @param time resize emit time, default is 200
 */
function resizeObservable(elm, cb, time = 200) {
    let elmObserve$;
    return new Observable((observer) => {
        elmObserve$ = new ResizeObserver((entries, obs) => {
            observer.next(elmObserve$);
        });
        elmObserve$.observe(elm);
    }).pipe(debounceTime(time), tap(() => {
        cb();
    }), finalize(() => {
        elmObserve$.unobserve(elm);
        elmObserve$.disconnect();
    }));
}

class NgxAdvancedCarouselItemDirective {
    constructor() { }
}
/** @nocollapse */ NgxAdvancedCarouselItemDirective.ɵfac = function NgxAdvancedCarouselItemDirective_Factory(t) { return new (t || NgxAdvancedCarouselItemDirective)(); };
/** @nocollapse */ NgxAdvancedCarouselItemDirective.ɵdir = /** @pureOrBreakMyCode */ i0.ɵɵdefineDirective({ type: NgxAdvancedCarouselItemDirective, selectors: [["", "ngx-advanced-carousel-item", ""]] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgxAdvancedCarouselItemDirective, [{
            type: Directive,
            args: [{
                    selector: '[ngx-advanced-carousel-item]',
                }]
        }], function () { return []; }, null);
})();

const _c0 = ["carouselPrev"];
const _c1 = ["carouselNext"];
const _c2 = ["carouselDot"];
const _c3 = ["carouselItemTemplate"];
const _c4 = ["carouselProgress"];
const _c5 = ["containerElm"];
const _c6 = ["prev"];
const _c7 = ["next"];
const _c8 = ["progress"];
const _c9 = ["viewArea"];
function NgxAdvancedCarouselComponent_div_4_div_1_ng_container_2_ng_container_1_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementContainer(0);
    }
}
const _c10 = function (a0) { return { $implicit: a0 }; };
function NgxAdvancedCarouselComponent_div_4_div_1_ng_container_2_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementContainerStart(0);
        i0.ɵɵtemplate(1, NgxAdvancedCarouselComponent_div_4_div_1_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 15);
        i0.ɵɵelementContainerEnd();
    }
    if (rf & 2) {
        const item_r12 = ctx.$implicit;
        const ctx_r11 = i0.ɵɵnextContext(3);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngTemplateOutlet", ctx_r11.carouselItemTemplate)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c10, item_r12));
    }
}
function NgxAdvancedCarouselComponent_div_4_div_1_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 12, 13);
        i0.ɵɵtemplate(2, NgxAdvancedCarouselComponent_div_4_div_1_ng_container_2_Template, 2, 4, "ng-container", 14);
        i0.ɵɵpipe(3, "slice");
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const i_r8 = i0.ɵɵnextContext().index;
        const ctx_r9 = i0.ɵɵnextContext();
        i0.ɵɵproperty("ngClass", ctx_r9.gridBy.col != 1 || ctx_r9.gridBy.row != 1 ? "flex-wrap" : "");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind3(3, 2, ctx_r9.data, i_r8, i_r8 + ctx_r9.scrollNum * ctx_r9.gridBy.row));
    }
}
const _c11 = function (a0) { return { display: a0 }; };
function NgxAdvancedCarouselComponent_div_4_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 10);
        i0.ɵɵtemplate(1, NgxAdvancedCarouselComponent_div_4_div_1_Template, 4, 6, "div", 11);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const i_r8 = ctx.index;
        const ctx_r1 = i0.ɵɵnextContext();
        i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c11, i_r8 % (ctx_r1.scrollNum * ctx_r1.gridBy.row) === 0 ? "" : "none"));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", i_r8 % (ctx_r1.scrollNum * ctx_r1.gridBy.row) === 0);
    }
}
function NgxAdvancedCarouselComponent_div_5_ng_container_2_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementContainer(0);
    }
}
const _c12 = function (a0, a1) { return [a0, a1]; };
function NgxAdvancedCarouselComponent_div_5_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 16, 17);
        i0.ɵɵtemplate(2, NgxAdvancedCarouselComponent_div_5_ng_container_2_Template, 1, 0, "ng-container", 18);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r2 = i0.ɵɵnextContext();
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(2, _c12, ctx_r2.showButtonsMethod !== "auto-hide" || ctx_r2.showButtonsMethod === "auto-hide" && ctx_r2.currentIndex > 0 || ctx_r2.infinite ? "visible" : "invisible", ctx_r2.showButtonsMethod !== "auto-disable" || ctx_r2.showButtonsMethod === "auto-disable" && ctx_r2.currentIndex > 0 || ctx_r2.infinite ? "" : "disabled"));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngTemplateOutlet", ctx_r2.contentPrev);
    }
}
function NgxAdvancedCarouselComponent_div_6_ng_container_2_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementContainer(0);
    }
}
function NgxAdvancedCarouselComponent_div_6_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 19, 20);
        i0.ɵɵtemplate(2, NgxAdvancedCarouselComponent_div_6_ng_container_2_Template, 1, 0, "ng-container", 18);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r3 = i0.ɵɵnextContext();
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(2, _c12, ctx_r3.showButtonsMethod !== "auto-hide" || ctx_r3.showButtonsMethod === "auto-hide" && ctx_r3.realIndex < ctx_r3.data.length && ctx_r3._showNum < ctx_r3.data.length || ctx_r3.infinite ? "visible" : "invisible", ctx_r3.showButtonsMethod !== "auto-disable" || ctx_r3.showButtonsMethod === "auto-disable" && ctx_r3.realIndex < ctx_r3.data.length - 1 && ctx_r3._showNum < ctx_r3.data.length - 1 || ctx_r3.infinite ? "" : "disabled"));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngTemplateOutlet", ctx_r3.contentNext);
    }
}
function NgxAdvancedCarouselComponent_ul_7_ng_container_1_li_1_ng_container_1_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementContainer(0);
    }
}
const _c13 = function (a0, a1) { return { index: a0, currentIndex: a1 }; };
function NgxAdvancedCarouselComponent_ul_7_ng_container_1_li_1_Template(rf, ctx) {
    if (rf & 1) {
        const _r26 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "li", 23);
        i0.ɵɵlistener("click", function NgxAdvancedCarouselComponent_ul_7_ng_container_1_li_1_Template_li_click_0_listener() { i0.ɵɵrestoreView(_r26); const i_r22 = i0.ɵɵnextContext().index; const ctx_r25 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r25.currentIndex = i_r22); });
        i0.ɵɵtemplate(1, NgxAdvancedCarouselComponent_ul_7_ng_container_1_li_1_ng_container_1_Template, 1, 0, "ng-container", 15);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const i_r22 = i0.ɵɵnextContext().index;
        const ctx_r23 = i0.ɵɵnextContext(2);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngTemplateOutlet", ctx_r23.dotElm)("ngTemplateOutletContext", i0.ɵɵpureFunction1(5, _c10, i0.ɵɵpureFunction2(2, _c13, i_r22, ctx_r23.currentIndex)));
    }
}
function NgxAdvancedCarouselComponent_ul_7_ng_container_1_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementContainerStart(0);
        i0.ɵɵtemplate(1, NgxAdvancedCarouselComponent_ul_7_ng_container_1_li_1_Template, 2, 7, "li", 22);
        i0.ɵɵelementContainerEnd();
    }
    if (rf & 2) {
        const i_r22 = ctx.index;
        const ctx_r20 = i0.ɵɵnextContext(2);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", (i_r22 + ctx_r20.gridBy.col * ctx_r20.gridBy.row) % (ctx_r20.scrollNum * ctx_r20.gridBy.row) === 0 && (ctx_r20.infinite ? i_r22 >= ctx_r20._showNum * 2 && i_r22 + ctx_r20._showNum * 2 < ctx_r20.itemElms.length : !ctx_r20.infinite));
    }
}
function NgxAdvancedCarouselComponent_ul_7_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "ul", 21);
        i0.ɵɵtemplate(1, NgxAdvancedCarouselComponent_ul_7_ng_container_1_Template, 2, 1, "ng-container", 14);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r4 = i0.ɵɵnextContext();
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx_r4.itemElms);
    }
}
function NgxAdvancedCarouselComponent_div_8_ng_container_2_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementContainer(0);
    }
}
function NgxAdvancedCarouselComponent_div_8_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "div", null, 24);
        i0.ɵɵtemplate(2, NgxAdvancedCarouselComponent_div_8_ng_container_2_Template, 1, 0, "ng-container", 18);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r5 = i0.ɵɵnextContext();
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngTemplateOutlet", ctx_r5.progressElm);
    }
}
function NgxAdvancedCarouselComponent_div_9_ng_container_1_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementContainer(0);
    }
}
function NgxAdvancedCarouselComponent_div_9_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 25);
        i0.ɵɵtemplate(1, NgxAdvancedCarouselComponent_div_9_ng_container_1_Template, 1, 0, "ng-container", 8);
        i0.ɵɵpipe(2, "async");
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r6 = i0.ɵɵnextContext();
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(2, 1, ctx_r6.leaveObs$));
    }
}
class NgxAdvancedCarouselComponent {
    get data() {
        return this._data;
    }
    set data(value) {
        this._data = value;
    }
    /** disable drag event with touch and mouse pan moving, default is `false` */
    get disableDrag() {
        return this._disableDrag;
    }
    set disableDrag(value) {
        if (this.rootElm) {
            if (this._disableDrag !== value) {
                if (value) {
                    this.destoryHammer();
                }
                else {
                    this.hammer = this.bindHammer();
                }
            }
        }
        this._disableDrag = value;
    }
    /** is the carousel can move infinite */
    get infinite() {
        return this._infinite;
    }
    set infinite(value) {
        this._infinite = value;
        /* this.infiniteElmRefs.forEach((ref) => {
          this.addStyle(ref.rootNodes[0], {
            visibility: this.runLoop ? 'visible' : 'hidden',
          });
        }); */
    }
    /** auto play speed */
    get speed() {
        return this.speedChange.value;
    }
    set speed(value) {
        this._zone.runOutsideAngular(() => {
            this.speedChange.next(value);
        });
    }
    /**
     * how many number items to show once, default is `1`
     * set `auto` to using `[breakpoint]` set value.
     */
    get showNum() {
        return this._showNum;
    }
    set showNum(value) {
        if (value === "auto") {
            this.isAutoNum = true;
        }
        else {
            this._showNum = +value;
            this.realIndex = this._showNum;
            if (this.rootElm) {
                if (!this.verticalModeEnabled) {
                    this.setViewWidth();
                }
                else {
                    this.setViewHeight();
                }
                this.reSetAlignDistance();
            }
            this.currentIndex = this.startIndex;
        }
    }
    /** carousel auto play confing */
    get autoplay() {
        return this._autoplay;
    }
    set autoplay(value) {
        this._autoplay =
            this.data && this.data.length > this.showNum ? value : false;
        if (isPlatformBrowser(this.platformId)) {
            if (this.elms) {
                this.progressWidth = 0;
                if (value) {
                    this._zone.runOutsideAngular(() => {
                        this.doNextSub$ = this.doNext.subscribe();
                    });
                }
                else {
                    if (this.doNextSub$) {
                        this.doNextSub$.unsubscribe();
                    }
                }
            }
        }
        // if set autoplay, then the infinite is true
        if (value) {
            this.infinite =
                this.data && this.data.length > this.showNum ? value : false;
        }
    }
    get currentIndex() {
        return this._currentIndex;
    }
    set currentIndex(value) {
        // if now index if not equale to save index, do someting
        if (this.currentIndex !== value) {
            // if the value is not contain with the boundary not handlerw
            if (value < 0) {
                value = 0;
            }
            if (!this.itemElms ||
                (!this.runLoop && !(0 <= value && value <= this.itemElms.length - 1)) ||
                (this.data && this.data.length < this._showNum)) {
                this.drawView(this.currentIndex);
                return;
            }
            const dir = this._currentIndex > value ? -1 : 1;
            this._currentIndex = value;
            if (this.elms) {
                if (this.autoplay && !this.isFromAuto) {
                    this._zone.runOutsideAngular(() => {
                        this.stopEvent.next();
                        this.callRestart();
                    });
                }
                this.realIndex =
                    this.gridBy.col * this.gridBy.row > 1
                        ? this.currentIndex +
                            this._showNum +
                            this.scrollNum * this.gridBy.col
                        : this.currentIndex + this._showNum;
                if (!this.infinite && this.realIndex > this.elms.length) {
                    if (this.gridBy.col * this.gridBy.row > 1) {
                        this._currentIndex =
                            this.realIndex -
                                this._showNum -
                                this.scrollNum * this.gridBy.col <
                                0
                                ? 0
                                : this.realIndex -
                                    this._showNum -
                                    this.scrollNum * this.gridBy.col;
                    }
                    else {
                        this._currentIndex =
                            this.elms.length - this._showNum < 0
                                ? 0
                                : this.elms.length - this._showNum;
                    }
                    this.realIndex =
                        dir > 0
                            ? Math.ceil(this.currentIndex / this._showNum +
                                (this.currentIndex % this._showNum ? 0 : 1)) >= Math.ceil(this.elms.length / this._showNum)
                                ? this.elms.length
                                : this.currentIndex
                            : this.currentIndex;
                }
                this._currentIndex =
                    this.currentIndex < 0 && !this.infinite ? 0 : this.currentIndex;
                this.drawView(this.currentIndex, true);
                if (this.infinite) {
                    if (this.currentIndex < this.initialIndex) {
                        this._currentIndex = this.currentIndex + this._showNum * 2;
                    }
                    if (this.currentIndex > this.data.length - this._showNum * 2 - 1) {
                        this._currentIndex =
                            this.currentIndex - this.data.length + this._showNum * 4;
                    }
                    this._zone.runOutsideAngular(() => {
                        timer(this.aniTime - this.aniTime / 8)
                            .pipe(switchMap(() => {
                            this.drawView(this.currentIndex, false);
                            return of(null);
                        }), take(1))
                            .subscribe();
                    });
                }
                /* if (this.realIndex > this.elms.length) {
                  const count = (this.realIndex - this.elms.length) % this._showNum;
                  for (let i = 0; i < count; i++) {
                    this.data.shift();
                  }
                  this._currentIndex -= count;
                  this.realIndex =
                    this.gridBy.col * this.gridBy.row > 1
                      ? this.currentIndex +
                        this._showNum +
                        this.scrollNum * this.gridBy.col
                      : this.currentIndex + this._showNum;
                } */
            }
            if (0 <= this.currentIndex &&
                this.currentIndex <= this.itemElms.length - 1) {
                this._zone.run(() => {
                    this.onChange(this.currentIndex);
                    this._cd.detectChanges();
                });
            }
        }
        this.indexChanged.emit({
            realIndex: this.realIndex,
            currentIndex: this.currentIndex,
            viewSize: this._showNum,
        });
        this.isFromAuto = false;
    }
    get progressWidth() {
        return this._porgressWidth;
    }
    set progressWidth(value) {
        if (this.progressElm !== undefined && this.autoplay) {
            this._porgressWidth = value;
            this._renderer.setStyle(this.progressContainerElm.nativeElement.children[0], "width", `${this.progressWidth}%`);
        }
    }
    get grabbing() {
        return this._grabbing;
    }
    set grabbing(value) {
        if (this._grabbing !== value) {
            this._zone.run(() => {
                this._grabbing = value;
                if (value) {
                    this._renderer.addClass(this.containerElm, "grabbing");
                }
                else {
                    this.panCount = 0;
                    this.callRestart();
                    this._renderer.removeClass(this.containerElm, "grabbing");
                }
                this._cd.detectChanges();
            });
        }
    }
    set left(value) {
        if (!this.verticalModeEnabled) {
            if (isPlatformBrowser(this.platformId)) {
                this._renderer.setStyle(this.containerElm, "transform", `translateX(${(value + (this.currentIndex !== 0 ? this.padding : 0)) *
                    (this.align === "right" ? -1 : 1)}px)`);
            }
            else {
                this._renderer.setStyle(this.containerElm, "transform", `translateX(${value}%)`);
            }
        }
        else {
            if (isPlatformBrowser(this.platformId)) {
                this._renderer.setStyle(this.containerElm, "transform", `translateY(${value + (this.currentIndex !== 0 ? this.padding : 0)}px)`);
            }
            else {
                this._renderer.setStyle(this.containerElm, "transform", `translateY(${value}%)`);
            }
        }
    }
    get maxRightIndex() {
        let addIndex = 0;
        switch (this.align) {
            case "left":
                addIndex = 0;
                break;
            case "center":
                addIndex = this.showNum - 1;
                break;
            case "right":
                addIndex = 0;
                break;
            default:
                addIndex = 0;
                break;
        }
        return this.itemElms.length - 1 - this._showNum + 1 + addIndex;
    }
    get runLoop() {
        return this.autoplay || this.infinite;
    }
    get lengthOne() {
        return this.itemElms.length === 1;
    }
    get rootElmWidth() {
        return isPlatformBrowser(this.platformId)
            ? this.rootElm.getBoundingClientRect().width
            : 100;
    }
    get rootElmHeight() {
        return isPlatformBrowser(this.platformId)
            ? this.rootElm.getBoundingClientRect().height
            : 100;
    }
    set containerElmWidth(value) {
        if (!this.verticalModeEnabled) {
            this.setStyle(this.containerElm, "width", value);
        }
        else {
            this.containerElmHeight = value;
        }
    }
    set containerElmHeight(value) {
        this.setStyle(this.containerElm, "height", value);
    }
    get startIndex() {
        return this._startIndex;
    }
    set startIndex(val) {
        this._startIndex = val;
        this.currentIndex = this._startIndex;
    }
    constructor(platformId, _document, _renderer, _zone, _cd) {
        this.platformId = platformId;
        this._document = _document;
        this._renderer = _renderer;
        this._zone = _zone;
        this._cd = _cd;
        this.verticalModeEnabled = false;
        this.indexChanged = new EventEmitter();
        this._startIndex = 0;
        this.mappedData = new EventEmitter();
        /** when infinite is true, the animation time with item, default is 400. */
        this.aniTime = 400;
        /** this class will add in #containerElm when model change */
        this.aniClass = "transition";
        /** this class will add when carousel auto play,
         * this default autoplay animation is same as aniClass
         */
        this.aniClassAuto = this.aniClass;
        // tslint:disable-next-line: no-input-rename
        this.showButtonsMethod = "always";
        /**
         * user move picture with the container width rate,
         * when more than that rate, it will go to next or prev,
         * set false will never move with distance rate,
         * default is `0.15`
         */
        this.panBoundary = 0.15;
        /** when show-num is bigger than 1, the first item align, defaulte is `center` */
        this.align = "center";
        /**
         * disable when drag occur the child element will follow touch point.
         * default is `false`
         */
        this.notDrag = false;
        this.trackByKey = "code";
        /**
         * the event binding state for stop auto play when mourse moveover
         */
        this.mourseEnable = false;
        /** each auto play between time */
        this.delay = 8000;
        /** auto play direction, default is `right`. */
        this.direction = "right";
        /** how many number with each scroll, default is `1`. */
        this.scrollNum = 1;
        /** Could user scroll many item once, simulate with scrollbar, default is `false` */
        this.isDragMany = false;
        /** Minimal velocity required before recognizing, unit is in px per ms, default `0.3` */
        this.swipeVelocity = 0.3;
        this.isRtl = false;
        /**
         * switch show number with custom logic like css @media (min-width: `number`px)
         */
        this.breakpoint = [];
        this.screenSizeMap = {
            xxl: 1440,
            // tslint:disable-next-line: object-literal-sort-keys
            xl: 1200,
            lg: 992,
            md: 768,
            sm: 576,
            xs: 0,
        };
        this.padding = 0;
        this.leaveObs$ = merge(fromEvent(this._document, "mouseup"), fromEvent(this._document, "touchend")).pipe(tap((e) => {
            this.grabbing = false;
            e.stopPropagation();
            e.preventDefault();
        }));
        this.isFromAuto = true;
        this.isAutoNum = false;
        this.mouseOnContainer = false;
        this.alignDistance = 0;
        this.elmWidth = 0;
        this.elmHeight = 0;
        this.restart = new BehaviorSubject(null);
        this.speedChange = new BehaviorSubject(5000);
        this.stopEvent = new Subject();
        this.destroy$ = new Subject();
        this._porgressWidth = 0;
        this._currentIndex = 0;
        this._showNum = 1;
        this._autoplay = false;
        this._infinite = false;
        this._grabbing = false;
        this._disableDrag = false;
        this.gridBy = { col: 1, row: 1 };
        this.panCount = 0;
        // this variable use for check the init value is write with ngModel,
        // when init first, not set with animation
        this.realIndex = this._currentIndex;
        this.singleTimeRun = true;
        this.initialIndex = 0;
        this.originalData = [];
        this._infineDataCount = 0;
        this.onChange = (_) => { };
        this.onTouched = () => { };
    }
    ngAfterViewInit() {
        this.rootElm = this.container.nativeElement;
        this.containerElm = this.rootElm.children[0];
        this.init();
        forkJoin([
            ...this.bindClick(),
            // when item changed, remove old hammer binding, and reset width
            this.itemElms.changes.pipe(
            // detectChanges to change view dots
            tap(() => {
                this.destroy();
                this.init();
                this.progressWidth = 0;
            }), tap(() => this._cd.detectChanges())),
            resizeObservable(this.rootElm, () => this.containerResize()),
        ])
            .pipe(takeUntil(this.destroy$))
            .subscribe();
    }
    ngOnDestroy() {
        this.destroy();
        this.destroy$.next();
        this.destroy$.unsubscribe();
    }
    writeValue(value) {
        if (value || value === 0) {
            this.currentIndex = value;
        }
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    init() {
        this.initVariable();
        this.setViewWidth(true);
        this.reSetAlignDistance();
        if (!this.disableDrag) {
            this.hammer = this.bindHammer();
        }
        this.drawView(this.currentIndex, false);
        this.currentIndex = this.startIndex;
        /* if (isPlatformBrowser(this.platformId) && this.runLoop) {
          this.addInfiniteElm();
        } */
    }
    destroy() {
        this.destoryHammer();
        if (this.autoplay) {
            this.doNextSub$.unsubscribe();
        }
    }
    destoryHammer() {
        if (this.hammer) {
            this.hammer.destroy();
        }
    }
    containerResize() {
        this.setViewWidth();
        this.reSetAlignDistance();
        this.currentIndex = this.startIndex || this.initialIndex;
        this.drawView(this.currentIndex, false);
    }
    initVariable() {
        this._zone.runOutsideAngular(() => {
            this.elms = this.itemElms.toArray().map((x) => x.nativeElement);
            let startEvent = this.restart.asObservable();
            let stopEvent = this.stopEvent.asObservable();
            if (this.mourseEnable) {
                startEvent = merge(startEvent, fromEvent(this.containerElm, "mouseleave").pipe(filter(() => !this.grabbing), tap(() => (this.mouseOnContainer = false))));
                stopEvent = merge(stopEvent, fromEvent(this.containerElm, "mouseover").pipe(tap(() => (this.mouseOnContainer = true))));
            }
            this.doNext = startEvent.pipe(switchMap(() => this.speedChange), switchMap(() => timer(this.delay).pipe(switchMap(() => this.runProgress(20)), tap(() => {
                this.isFromAuto = true;
                if (this.direction === "left") {
                    this.currentIndex -= this.scrollNum;
                }
                else {
                    this.currentIndex += this.scrollNum;
                }
            }), takeUntil(stopEvent.pipe(tap(() => (this.progressWidth = 0)))))));
            if (this.autoplay) {
                this.doNextSub$ = this.doNext.subscribe();
            }
        });
    }
    reSetAlignDistance() {
        switch (this.align) {
            case "center":
                this.alignDistance = (this.rootElmWidth - this.elmWidth) / 2;
                break;
            case "left":
                this.alignDistance = 0;
                break;
            case "right":
                this.alignDistance = 0;
                break;
            case "top":
                this.alignDistance = 0;
                break;
            case "bottom":
                this.alignDistance = 0;
        }
    }
    setViewWidth(isInit) {
        if (!this.verticalModeEnabled) {
            if (this.isAutoNum) {
                this._showNum = this.getAutoNum();
                this.realIndex = this._showNum;
                this.currentIndex = this.startIndex;
            }
            this._infineDataCount = this._showNum * 2;
            this.infinite =
                this.data && this.data.length > this._showNum ? this.infinite : false;
            this._renderer.addClass(this.containerElm, "grab");
            if (isInit) {
                // remain one elm height
                this.originalData = [];
                this.initData(this._infineDataCount);
                this._renderer.addClass(this.containerElm, "ngx-advanced-carousel-display-nowrap");
            }
            this.elmWidth =
                this.rootElmWidth / (this._showNum / this.gridBy.row) -
                    (this.padding * 2) /
                        (this.gridBy.col > 1
                            ? this.gridBy.col
                            : this._showNum / this.gridBy.row);
            this._renderer.removeClass(this.containerElm, "ngx-advanced-carousel-display-nowrap");
            this.containerElmWidth =
                (this.rootElmWidth - this.padding * 2) *
                    (this.elms.length / this._showNum);
            this._renderer.setStyle(this.containerElm, "position", "relative");
            this.viewArea.forEach((element) => {
                element.nativeElement.setAttribute("style", `width:${this.rootElmWidth - this.padding * 2}px`);
            });
            this.elms.forEach((elm) => {
                this.setStyle(elm, "width", this.elmWidth);
            });
        }
        else {
            this.setViewHeight(isInit);
        }
        this._cd.detectChanges();
    }
    setViewHeight(isInit) {
        if (this.isAutoNum) {
            this._showNum = this.getAutoNum();
            this.realIndex = this._showNum;
            this.currentIndex = this.startIndex;
        }
        this._infineDataCount = this._showNum * 2;
        this.infinite =
            this.data && this.data.length > this._showNum ? this.infinite : false;
        this._renderer.addClass(this.containerElm, "grab");
        if (isInit) {
            // remain one elm height
            this.initData(this._infineDataCount);
            this._renderer.addClass(this.containerElm, "ngx-advanced-carousel-display-nowrap");
        }
        this.elmWidth =
            this.rootElmHeight / (this._showNum / this.gridBy.row) -
                (this.padding * 2) /
                    (this.gridBy.col > 1
                        ? this.gridBy.col
                        : this._showNum / this.gridBy.row);
        this._renderer.removeClass(this.containerElm, "ngx-advanced-carousel-display-nowrap");
        this.containerElmWidth =
            (this.rootElmHeight - this.padding * 2) *
                (this.elms.length / this._showNum);
        this._renderer.setStyle(this.containerElm, "position", "relative");
        this.viewArea.forEach((element) => {
            element.nativeElement.setAttribute("style", `height:${this.rootElmHeight - this.padding * 2}px`);
        });
        this.elms.forEach((elm) => {
            this.setStyle(elm, "height", this.elmWidth);
        });
    }
    bindHammer() {
        if (!isPlatformBrowser(this.platformId)) {
            return null;
        }
        return this._zone.runOutsideAngular(() => {
            const hm = new Hammer.Manager(this.containerElm);
            const pan = new Hammer.Pan({
                direction: Hammer.DIRECTION_HORIZONTAL,
                threshold: 0,
            });
            hm.add(pan);
            hm.on("panleft panright panend pancancel", (e) => {
                if (this.lengthOne) {
                    return;
                }
                this.removeContainerTransition();
                if (this.autoplay) {
                    this._zone.runOutsideAngular(() => {
                        this.stopEvent.next();
                    });
                }
                switch (e.type) {
                    case "panleft":
                    case "panright":
                        this.panCount++;
                        if (this.panCount < 2) {
                            return;
                        }
                        this.grabbing = true;
                        if (this.align !== "center" && this.showNum >= this.elms.length) {
                            this.hammer.stop(true);
                            return;
                        }
                        if (!this.runLoop && this.outOfBound(e.type)) {
                            this.verticalModeEnabled ? e.deltaY : (e.deltaX *= 0.2);
                        }
                        if (!this.notDrag) {
                            this.left =
                                -this.currentIndex * this.elmWidth +
                                    this.alignDistance +
                                    (this.verticalModeEnabled
                                        ? e.deltaY
                                        : this.align === "right"
                                            ? -e.deltaX
                                            : e.deltaX);
                        }
                        if (!this.isDragMany) {
                            if (Math.abs(this.verticalModeEnabled ? e.deltaY : e.deltaX) >
                                this.elmWidth * 0.5) {
                                if ((this.verticalModeEnabled ? e.deltaY : e.deltaX) > 0) {
                                    if (this.align === "right") {
                                        this.currentIndex += this.scrollNum;
                                    }
                                    else {
                                        this.currentIndex -= this.scrollNum;
                                    }
                                }
                                else {
                                    if (this.align === "right") {
                                        this.currentIndex -= this.scrollNum;
                                    }
                                    else {
                                        this.currentIndex += this.scrollNum;
                                    }
                                }
                                this.hammer.stop(true);
                                return;
                            }
                        }
                        break;
                    case "pancancel":
                        this.drawView(this.currentIndex);
                        break;
                    case "panend":
                        if (this.panBoundary !== false &&
                            Math.abs(this.verticalModeEnabled ? e.deltaY : e.deltaX) >
                                this.elmWidth * this.panBoundary) {
                            const moveNum = this.isDragMany
                                ? Math.ceil(Math.abs(this.verticalModeEnabled ? e.deltaY : e.deltaX) /
                                    this.elmWidth)
                                : this.scrollNum;
                            const prevIndex = this.currentIndex - moveNum;
                            const nextIndex = this.currentIndex + moveNum;
                            if ((this.verticalModeEnabled ? e.deltaY : e.deltaX) > 0) {
                                this.align === "right"
                                    ? this.goNext(nextIndex)
                                    : this.goPrev(prevIndex);
                            }
                            else {
                                this.align === "right"
                                    ? this.goPrev(prevIndex)
                                    : this.goNext(nextIndex);
                            }
                            break;
                        }
                        else if (e.velocityX < -this.swipeVelocity && e.distance > 10) {
                            this.align === "right"
                                ? this.goPrev(this.currentIndex - this.scrollNum)
                                : this.goNext(this.currentIndex + this.scrollNum);
                        }
                        else if (e.velocityX > this.swipeVelocity && e.distance > 10) {
                            this.align === "right"
                                ? this.goNext(this.currentIndex + this.scrollNum)
                                : this.goPrev(this.currentIndex - this.scrollNum);
                        }
                        else {
                            this.drawView(this.currentIndex);
                        }
                        break;
                }
            });
            return hm;
        });
    }
    goPrev(prevIndex) {
        if (!this.runLoop && prevIndex < 0) {
            prevIndex = 0;
            this.drawView(0);
        }
        this.currentIndex = prevIndex;
    }
    goNext(nextIndex) {
        if (!this.runLoop && nextIndex > this.maxRightIndex) {
            nextIndex = this.maxRightIndex;
            this.drawView(nextIndex);
        }
        this.currentIndex = nextIndex;
    }
    bindClick() {
        if (this.btnNext && this.btnPrev) {
            return [
                fromEvent(this.btnNext.nativeElement, "click").pipe(map(() => (this.currentIndex += this.scrollNum))),
                fromEvent(this.btnPrev.nativeElement, "click").pipe(map(() => {
                    return (this.currentIndex = this.currentIndex - this.scrollNum);
                })),
            ];
        }
        return [];
    }
    callRestart() {
        if (this.autoplay && !this.mouseOnContainer && !this.grabbing) {
            this._zone.runOutsideAngular(() => {
                this.restart.next(null);
            });
        }
    }
    drawView(index, isAnimation = true, isFromAuto = this.isFromAuto) {
        if (this.elms.length > 1 && this.elms.length > this._showNum) {
            this.removeContainerTransition();
            this.left = -index * this.elmWidth + this.alignDistance;
            if (isAnimation) {
                if (isFromAuto) {
                    this._renderer.addClass(this.containerElm, this.aniClassAuto);
                }
                else {
                    this._renderer.addClass(this.containerElm, this.aniClass);
                }
            }
        }
        else {
            this.left = this.alignDistance;
        }
    }
    removeContainerTransition() {
        this._renderer.removeClass(this.containerElm, this.aniClass);
        this._renderer.removeClass(this.containerElm, this.aniClassAuto);
    }
    outOfBound(type) {
        switch (type) {
            case "panleft":
                return this.currentIndex >= this.maxRightIndex;
            case "panright":
                return this.currentIndex <= 0;
        }
    }
    runProgress(betweenTime) {
        return this._zone.runOutsideAngular(() => {
            const howTimes = this.speed / betweenTime;
            const everyIncrease = (100 / this.speed) * betweenTime;
            return interval(betweenTime).pipe(tap((t) => {
                this.progressWidth = (t % howTimes) * everyIncrease;
            }), bufferCount(Math.round(howTimes), 0));
        });
    }
    initData(showNum) {
        if (!this.originalData.length) {
            this.originalData = [...this.data];
        }
        if (this.infinite) {
            this.singleTimeRun = false;
            this.data = this.arrayCreator(this.originalData, showNum);
            this._currentIndex = showNum;
            this.initialIndex = this.currentIndex;
        }
    }
    getAutoNum() {
        const currWidth = this.rootElmWidth;
        if (this.breakpoint.length > 0) {
            const now = this.breakpoint.find((b) => {
                return this.screenSizeMap[b.screenSize] <= currWidth;
            });
            if (now) {
                this.padding = now.padding || this.padding;
                if (now.gridBy) {
                    this.scrollNum = now.gridBy.col || now.scrollNum || now.number;
                    this.gridBy = now.gridBy;
                    const showNum = now.gridBy.col * now.gridBy.row || now.number;
                    return showNum;
                }
                else {
                    this.scrollNum = now.scrollNum || now.number;
                    this.gridBy = { col: now.number, row: 1 };
                    return now.number;
                }
            }
            this.padding =
                this.breakpoint[this.breakpoint.length - 1].padding || this.padding;
            if (this.breakpoint[this.breakpoint.length - 1].gridBy) {
                this.scrollNum =
                    this.breakpoint[this.breakpoint.length - 1].gridBy.col ||
                        this.breakpoint[this.breakpoint.length - 1].scrollNum ||
                        this.breakpoint[this.breakpoint.length - 1].number;
                this.gridBy = this.breakpoint[this.breakpoint.length - 1].gridBy;
                const showNum = this.breakpoint[this.breakpoint.length - 1].gridBy.col *
                    this.breakpoint[this.breakpoint.length - 1].gridBy.row ||
                    this.breakpoint[this.breakpoint.length - 1].number;
                return showNum;
            }
            else {
                this.scrollNum =
                    this.breakpoint[this.breakpoint.length - 1].scrollNum ||
                        this.breakpoint[this.breakpoint.length - 1].number;
                this.gridBy = { col: 1, row: 1 };
                return this.breakpoint[this.breakpoint.length - 1].number;
            }
        }
        const initNum = 3;
        if (currWidth > 200) {
            return Math.floor(initNum + currWidth / 100);
        }
        return initNum;
    }
    setStyle(elm, style, value) {
        if (isPlatformBrowser(this.platformId)) {
            this._renderer.setStyle(elm, style, `${value}px`);
        }
        else {
            this._renderer.setStyle(elm, style, `${value}%`);
        }
    }
    trackByFcn(index, item) {
        if (!item || item[this.trackByKey]) {
            return null;
        }
        return item[this.trackByKey];
    }
    arrayCreator(arr, count) {
        const data = [...arr];
        for (let i = 0; i < count; i++) {
            data.unshift(arr[arr.length - 1 - (i % arr.length)]);
            data.push(arr[i % arr.length]);
        }
        return data;
    }
}
/** @nocollapse */ NgxAdvancedCarouselComponent.ɵfac = function NgxAdvancedCarouselComponent_Factory(t) { return new (t || NgxAdvancedCarouselComponent)(i0.ɵɵdirectiveInject(PLATFORM_ID), i0.ɵɵdirectiveInject(DOCUMENT), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
/** @nocollapse */ NgxAdvancedCarouselComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: NgxAdvancedCarouselComponent, selectors: [["ngx-advanced-carousel"]], contentQueries: function NgxAdvancedCarouselComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, _c0, 5);
            i0.ɵɵcontentQuery(dirIndex, _c1, 5);
            i0.ɵɵcontentQuery(dirIndex, _c2, 5);
            i0.ɵɵcontentQuery(dirIndex, _c3, 5);
            i0.ɵɵcontentQuery(dirIndex, _c4, 5);
            i0.ɵɵcontentQuery(dirIndex, NgxAdvancedCarouselItemDirective, 5, ElementRef);
        }
        if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.contentPrev = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.contentNext = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.dotElm = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.carouselItemTemplate = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.progressElm = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.itemElms = _t);
        }
    }, viewQuery: function NgxAdvancedCarouselComponent_Query(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵviewQuery(_c5, 5);
            i0.ɵɵviewQuery(_c6, 5);
            i0.ɵɵviewQuery(_c7, 5);
            i0.ɵɵviewQuery(_c8, 5);
            i0.ɵɵviewQuery(_c9, 5);
        }
        if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.container = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.btnPrev = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.btnNext = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.progressContainerElm = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.viewArea = _t);
        }
    }, inputs: { data: "data", disableDrag: ["disable-drag", "disableDrag"], infinite: "infinite", speed: ["autoplay-speed", "speed"], showNum: ["show-num", "showNum"], autoplay: "autoplay", verticalModeEnabled: "verticalModeEnabled", startIndex: "startIndex", aniTime: "aniTime", aniClass: "aniClass", aniClassAuto: "aniClassAuto", showButtonsMethod: ["show-next-prev-buttons", "showButtonsMethod"], panBoundary: ["pan-boundary", "panBoundary"], align: "align", notDrag: ["not-follow-pan", "notDrag"], trackByKey: "trackByKey", mourseEnable: ["mourse-enable", "mourseEnable"], delay: ["between-delay", "delay"], direction: ["autoplay-direction", "direction"], scrollNum: ["scroll-num", "scrollNum"], isDragMany: ["drag-many", "isDragMany"], swipeVelocity: ["swipe-velocity", "swipeVelocity"], isRtl: "isRtl", breakpoint: "breakpoint", screenSizeMap: "screenSizeMap", padding: "padding" }, outputs: { indexChanged: "indexChanged", mappedData: "mappedData" }, features: [i0.ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef((() => NgxAdvancedCarouselComponent)),
                multi: true,
            },
        ])], decls: 10, vars: 7, consts: [[1, "carousel-container"], [1, "carousel"], ["containerElm", ""], ["ngx-advanced-carousel-container", "", 1, "content"], ["class", "item cursor-pointer visible_important", "ngx-advanced-carousel-item", "", 3, "ngStyle", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "direction left", 3, "ngClass", 4, "ngIf"], ["class", "direction right", 3, "ngClass", 4, "ngIf"], ["class", "indicators", 4, "ngIf"], [4, "ngIf"], ["class", "mask", 4, "ngIf"], ["ngx-advanced-carousel-item", "", 1, "item", "cursor-pointer", "visible_important", 3, "ngStyle"], ["class", "slide", 3, "ngClass", 4, "ngIf"], [1, "slide", 3, "ngClass"], ["viewArea", ""], [4, "ngFor", "ngForOf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "direction", "left", 3, "ngClass"], ["prev", ""], [4, "ngTemplateOutlet"], [1, "direction", "right", 3, "ngClass"], ["next", ""], [1, "indicators"], [3, "click", 4, "ngIf"], [3, "click"], ["progress", ""], [1, "mask"]], template: function NgxAdvancedCarouselComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1, 2)(3, "div", 3);
            i0.ɵɵtemplate(4, NgxAdvancedCarouselComponent_div_4_Template, 2, 4, "div", 4);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(5, NgxAdvancedCarouselComponent_div_5_Template, 3, 5, "div", 5);
            i0.ɵɵtemplate(6, NgxAdvancedCarouselComponent_div_6_Template, 3, 5, "div", 6);
            i0.ɵɵtemplate(7, NgxAdvancedCarouselComponent_ul_7_Template, 2, 1, "ul", 7);
            i0.ɵɵtemplate(8, NgxAdvancedCarouselComponent_div_8_Template, 3, 1, "div", 8);
            i0.ɵɵtemplate(9, NgxAdvancedCarouselComponent_div_9_Template, 3, 3, "div", 9);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngForOf", ctx.data)("ngForTrackBy", ctx.trackByFcn);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.contentPrev);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.contentNext);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.dotElm);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.progressElm && ctx.autoplay);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.grabbing);
        }
    }, dependencies: [i1.NgClass, i1.NgForOf, i1.NgIf, i1.NgTemplateOutlet, i1.NgStyle, NgxAdvancedCarouselItemDirective, i1.AsyncPipe, i1.SlicePipe], styles: [":host{display:block;height:100%}.invisible{visibility:hidden}.leo-carousel-display-nowrap{display:flex!important;flex-direction:row!important;flex-wrap:nowrap!important;overflow:hidden!important}.carousel-container{position:relative}.carousel-container .carousel{height:100%;overflow:hidden;position:relative;width:100%}.carousel-container .carousel .slide{display:flex;flex-direction:row}.carousel-container .carousel .transition{transition:all .5s ease-in-out}.carousel-container .carousel .content{display:flex}.carousel-container .carousel .content .item{display:block;opacity:0;width:100%}.carousel-container .carousel .content .item.fade_animation{transition:opacity .295s linear .5s}.carousel-container .carousel .content .item.fade_animation_0{transition:opacity .295s linear}.carousel-container .carousel .content .item.visible{opacity:1}.carousel-container .carousel .content .item:last-child,.carousel-container .carousel .content .item:first-child{opacity:0}.carousel-container .carousel .content .item.visible_important{opacity:1}.carousel-container ul.indicators{bottom:1rem;left:0;list-style:none;margin:0;padding:0;position:absolute;text-align:center;width:100%}.carousel-container ul.indicators li{cursor:pointer;display:inline-block;padding:.5rem;position:relative}.carousel-container .direction{align-items:center;cursor:pointer;display:flex;height:100%;justify-content:center;position:absolute;top:0}.carousel-container .direction.left{left:0}.carousel-container .direction.right{position:absolute;right:0}.carousel-container .direction.disabled{opacity:.6;pointer-events:none}.grab{cursor:grab}.grabbing{cursor:grabbing}.mask{inset:0;position:absolute}\n"], encapsulation: 2, changeDetection: 0 });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgxAdvancedCarouselComponent, [{
            type: Component,
            args: [{ encapsulation: ViewEncapsulation.None, selector: "ngx-advanced-carousel", providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((() => NgxAdvancedCarouselComponent)),
                            multi: true,
                        },
                    ], changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"carousel-container\">\n  <!-- main content -->\n  <div #containerElm class=\"carousel\">\n    <div ngx-advanced-carousel-container class=\"content\">\n      <div\n        class=\"item cursor-pointer visible_important\"\n        [ngStyle]=\"{\n          display: i % (scrollNum * gridBy.row) === 0 ? '' : 'none'\n        }\"\n        ngx-advanced-carousel-item\n        *ngFor=\"let _x of data; let i = index; trackBy: trackByFcn\"\n      >\n        <div\n          class=\"slide\"\n          [ngClass]=\"gridBy.col != 1 || gridBy.row != 1 ? 'flex-wrap' : ''\"\n          #viewArea\n          *ngIf=\"i % (scrollNum * gridBy.row) === 0\"\n        >\n          <ng-container\n            *ngFor=\"\n              let item of data | slice: i:i + scrollNum * gridBy.row;\n              let j = index\n            \"\n          >\n            <ng-container\n              *ngTemplateOutlet=\"\n                carouselItemTemplate;\n                context: {\n                  $implicit: item\n                }\n              \"\n            >\n            </ng-container>\n          </ng-container>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- left -->\n  <div\n    #prev\n    *ngIf=\"contentPrev\"\n    class=\"direction left\"\n    [ngClass]=\"[\n      showButtonsMethod !== 'auto-hide' ||\n      (showButtonsMethod === 'auto-hide' && currentIndex > 0) ||\n      infinite\n        ? 'visible'\n        : 'invisible',\n      showButtonsMethod !== 'auto-disable' ||\n      (showButtonsMethod === 'auto-disable' && currentIndex > 0) ||\n      infinite\n        ? ''\n        : 'disabled'\n    ]\"\n  >\n    <ng-container *ngTemplateOutlet=\"contentPrev\"></ng-container>\n  </div>\n  <!--  right -->\n  <div\n    #next\n    *ngIf=\"contentNext\"\n    class=\"direction right\"\n    [ngClass]=\"[\n      showButtonsMethod !== 'auto-hide' ||\n      (showButtonsMethod === 'auto-hide' &&\n        realIndex < data.length &&\n        _showNum < data.length) ||\n      infinite\n        ? 'visible'\n        : 'invisible',\n      showButtonsMethod !== 'auto-disable' ||\n      (showButtonsMethod === 'auto-disable' &&\n        realIndex < data.length - 1 &&\n        _showNum < data.length - 1) ||\n      infinite\n        ? ''\n        : 'disabled'\n    ]\"\n  >\n    <ng-container *ngTemplateOutlet=\"contentNext\"></ng-container>\n  </div>\n  <!-- indicators -->\n  <ul class=\"indicators\" *ngIf=\"dotElm\">\n    <ng-container *ngFor=\"let dot of itemElms; let i = index\">\n      <li\n        *ngIf=\"\n          (i + gridBy.col * gridBy.row) % (scrollNum * gridBy.row) === 0 &&\n          (infinite ? (i >= _showNum * 2 &&\n          i + _showNum * 2 < itemElms.length) : !infinite)\n        \"\n        (click)=\"currentIndex = i\"\n      >\n        <ng-container\n          *ngTemplateOutlet=\"\n            dotElm;\n            context: {\n              $implicit: {\n                index: i,\n                currentIndex: currentIndex\n              }\n            }\n          \"\n        >\n        </ng-container>\n      </li>\n    </ng-container>\n  </ul>\n  <!-- progress -->\n  <div *ngIf=\"progressElm && autoplay\" #progress>\n    <ng-container *ngTemplateOutlet=\"progressElm\"> </ng-container>\n  </div>\n\n  <div class=\"mask\" *ngIf=\"grabbing\">\n    <ng-container *ngIf=\"leaveObs$ | async\"></ng-container>\n  </div>\n</div>\n", styles: [":host{display:block;height:100%}.invisible{visibility:hidden}.leo-carousel-display-nowrap{display:flex!important;flex-direction:row!important;flex-wrap:nowrap!important;overflow:hidden!important}.carousel-container{position:relative}.carousel-container .carousel{height:100%;overflow:hidden;position:relative;width:100%}.carousel-container .carousel .slide{display:flex;flex-direction:row}.carousel-container .carousel .transition{transition:all .5s ease-in-out}.carousel-container .carousel .content{display:flex}.carousel-container .carousel .content .item{display:block;opacity:0;width:100%}.carousel-container .carousel .content .item.fade_animation{transition:opacity .295s linear .5s}.carousel-container .carousel .content .item.fade_animation_0{transition:opacity .295s linear}.carousel-container .carousel .content .item.visible{opacity:1}.carousel-container .carousel .content .item:last-child,.carousel-container .carousel .content .item:first-child{opacity:0}.carousel-container .carousel .content .item.visible_important{opacity:1}.carousel-container ul.indicators{bottom:1rem;left:0;list-style:none;margin:0;padding:0;position:absolute;text-align:center;width:100%}.carousel-container ul.indicators li{cursor:pointer;display:inline-block;padding:.5rem;position:relative}.carousel-container .direction{align-items:center;cursor:pointer;display:flex;height:100%;justify-content:center;position:absolute;top:0}.carousel-container .direction.left{left:0}.carousel-container .direction.right{position:absolute;right:0}.carousel-container .direction.disabled{opacity:.6;pointer-events:none}.grab{cursor:grab}.grabbing{cursor:grabbing}.mask{inset:0;position:absolute}\n"] }]
        }], function () {
        return [{ type: undefined, decorators: [{
                        type: Inject,
                        args: [PLATFORM_ID]
                    }] }, { type: undefined, decorators: [{
                        type: Inject,
                        args: [DOCUMENT]
                    }] }, { type: i0.Renderer2 }, { type: i0.NgZone }, { type: i0.ChangeDetectorRef }];
    }, { data: [{
                type: Input
            }], disableDrag: [{
                type: Input,
                args: ["disable-drag"]
            }], infinite: [{
                type: Input,
                args: ["infinite"]
            }], speed: [{
                type: Input,
                args: ["autoplay-speed"]
            }], showNum: [{
                type: Input,
                args: ["show-num"]
            }], autoplay: [{
                type: Input,
                args: ["autoplay"]
            }], verticalModeEnabled: [{
                type: Input
            }], indexChanged: [{
                type: Output
            }], startIndex: [{
                type: Input
            }], container: [{
                type: ViewChild,
                args: ["containerElm", { static: false }]
            }], viewArea: [{
                type: ViewChildren,
                args: ["viewArea"]
            }], btnPrev: [{
                type: ViewChild,
                args: ["prev", { static: false }]
            }], btnNext: [{
                type: ViewChild,
                args: ["next", { static: false }]
            }], progressContainerElm: [{
                type: ViewChild,
                args: ["progress", { static: false }]
            }], itemElms: [{
                type: ContentChildren,
                args: [NgxAdvancedCarouselItemDirective, {
                        descendants: true,
                        read: ElementRef,
                    }]
            }], contentPrev: [{
                type: ContentChild,
                args: ["carouselPrev", { static: false }]
            }], contentNext: [{
                type: ContentChild,
                args: ["carouselNext", { static: false }]
            }], dotElm: [{
                type: ContentChild,
                args: ["carouselDot", { static: false }]
            }], carouselItemTemplate: [{
                type: ContentChild,
                args: ["carouselItemTemplate", { static: false }]
            }], progressElm: [{
                type: ContentChild,
                args: ["carouselProgress", { static: false }]
            }], mappedData: [{
                type: Output
            }], aniTime: [{
                type: Input
            }], aniClass: [{
                type: Input
            }], aniClassAuto: [{
                type: Input
            }], showButtonsMethod: [{
                type: Input,
                args: ["show-next-prev-buttons"]
            }], panBoundary: [{
                type: Input,
                args: ["pan-boundary"]
            }], align: [{
                type: Input
            }], notDrag: [{
                type: Input,
                args: ["not-follow-pan"]
            }], trackByKey: [{
                type: Input
            }], mourseEnable: [{
                type: Input,
                args: ["mourse-enable"]
            }], delay: [{
                type: Input,
                args: ["between-delay"]
            }], direction: [{
                type: Input,
                args: ["autoplay-direction"]
            }], scrollNum: [{
                type: Input,
                args: ["scroll-num"]
            }], isDragMany: [{
                type: Input,
                args: ["drag-many"]
            }], swipeVelocity: [{
                type: Input,
                args: ["swipe-velocity"]
            }], isRtl: [{
                type: Input
            }], breakpoint: [{
                type: Input
            }], screenSizeMap: [{
                type: Input
            }], padding: [{
                type: Input
            }] });
})();

class NgxAdvancedCarouselModule {
}
/** @nocollapse */ NgxAdvancedCarouselModule.ɵfac = function NgxAdvancedCarouselModule_Factory(t) { return new (t || NgxAdvancedCarouselModule)(); };
/** @nocollapse */ NgxAdvancedCarouselModule.ɵmod = /** @pureOrBreakMyCode */ i0.ɵɵdefineNgModule({ type: NgxAdvancedCarouselModule });
/** @nocollapse */ NgxAdvancedCarouselModule.ɵinj = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjector({ imports: [CommonModule, FormsModule] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgxAdvancedCarouselModule, [{
            type: NgModule,
            args: [{
                    declarations: [NgxAdvancedCarouselComponent, NgxAdvancedCarouselItemDirective],
                    exports: [NgxAdvancedCarouselComponent, NgxAdvancedCarouselItemDirective],
                    imports: [CommonModule, FormsModule],
                }]
        }], null, null);
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NgxAdvancedCarouselModule, { declarations: [NgxAdvancedCarouselComponent, NgxAdvancedCarouselItemDirective], imports: [CommonModule, FormsModule], exports: [NgxAdvancedCarouselComponent, NgxAdvancedCarouselItemDirective] }); })();

/*
 * Public API Surface of ngx-advanced-carousel
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgxAdvancedCarouselComponent, NgxAdvancedCarouselItemDirective, NgxAdvancedCarouselModule, resizeObservable };
//# sourceMappingURL=ngx-advanced-carousel.mjs.map
