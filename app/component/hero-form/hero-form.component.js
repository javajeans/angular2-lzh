"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by Jonathan on 2016/10/31.
 */
var core_1 = require('@angular/core');
var HeroForm_1 = require("../../domain/HeroForm");
var HeroFormComponent = (function () {
    function HeroFormComponent() {
        this.powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];
        this.model = new HeroForm_1.HeroForm(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
        this.submitted = false;
        this.active = true;
    }
    HeroFormComponent.prototype.onSubmit = function () { this.submitted = true; };
    HeroFormComponent.prototype.newHero = function () {
        var _this = this;
        this.model = new HeroForm_1.HeroForm(42, '', '');
        this.active = false;
        setTimeout(function () { return _this.active = true; }, 0);
    };
    Object.defineProperty(HeroFormComponent.prototype, "diagnostic", {
        // TODO: Remove this when we're done
        get: function () { return JSON.stringify(this.model); } //我们在最后增加一个 diagnostic 属性，它返回这个模型的 JSON 形式。 它会帮我们看清开发过程中发生的事，等最后做清理时我们会丢弃它。
        ,
        enumerable: true,
        configurable: true
    });
    HeroFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'hero-form',
            templateUrl: 'hero-form.component.html',
            styleUrls: ['hero-form.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], HeroFormComponent);
    return HeroFormComponent;
}());
exports.HeroFormComponent = HeroFormComponent;
//# sourceMappingURL=hero-form.component.js.map