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
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
var subscription_component_1 = require('./subscription.component');
var AppComponent = (function () {
    function AppComponent() {
        this.pusher = new Pusher('9fd1b33fcb36d968145f');
        this.channels = [];
    }
    AppComponent.prototype.newSubscription = function () {
        this.channels.push({ term: this.newSearchTerm, active: true });
        this.newSearchTerm = '';
    };
    AppComponent.prototype.clearSearch = function (channel) {
        var _this = this;
        this.channels = this.channels.filter(function (ch) {
            if (ch.term === channel.term) {
                _this.toggleSearch(channel);
            }
            return ch.term !== channel.term;
        });
    };
    AppComponent.prototype.toggleSearch = function (channel) {
        for (var _i = 0, _a = this.channels; _i < _a.length; _i++) {
            var ch = _a[_i];
            if (ch.term === channel.term) {
                ch.active = !ch.active;
                break;
            }
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            templateUrl: 'app.component.html',
            directives: [subscription_component_1.default],
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
platform_browser_dynamic_1.bootstrap(AppComponent);
//# sourceMappingURL=app.component.js.map