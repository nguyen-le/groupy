'use strict';
var GulpConfig = (function () {
    function gulpConfig() {
        this.source = './';
        this.sourceApp = this.source;

        this.tsOutputPath = this.source + '/compiled';
        this.allJavaScript = [this.source + '/compiled/**/*.js'];
        this.allTypeScript = this.sourceApp + '/**/*.ts';

        this.typings = './typings/';
        this.libraryTypeScriptDefinitions = './typings/main/**/*.ts';
    }
    return gulpConfig;
})();
module.exports = GulpConfig;
