var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "@angular/core"], function (require, exports, core_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Hero = /** @class */ (function () {
        function Hero() {
        }
        return Hero;
    }());
    exports.Hero = Hero;
    var AppComponent = /** @class */ (function () {
        function AppComponent() {
            this.title = 'Tour of Heroes';
            this.hero = {
                id: 1,
                name: 'Windowstorm'
            };
        }
        AppComponent = __decorate([
            core_1.Component({
                selector: 'my-app',
                template: "\n    <h1>{{title}}</h1>\n    <h2>{{hero.name}} details!</h2>\n    <div><label>id: </label>{{hero.id}}</div>\n    <div>\n      <label>name: </label>\n      <input [(ngModel)]=\"hero.name\" placeholder=\"name\">\n    </div>\n    "
            })
        ], AppComponent);
        return AppComponent;
    }());
    exports.AppComponent = AppComponent;
});
//# sourceMappingURL=033_decorator_example_angular.js.map