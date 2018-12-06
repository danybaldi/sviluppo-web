"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Lesson = /** @class */ (function () {
    function Lesson(len) {
        this.length = len;
    }
    return Lesson;
}());
exports.Lesson = Lesson;
var VideoLesson = /** @class */ (function (_super) {
    __extends(VideoLesson, _super);
    function VideoLesson(len, type) {
        var _this = _super.call(this, len) || this;
        _this.typeVideo = type;
        return _this;
    }
    return VideoLesson;
}(Lesson));
exports.VideoLesson = VideoLesson;
