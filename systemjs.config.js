(function (global) {
    System.config({
        transpiler: 'ts',
        typescriptOptions: {
            tsconfig: true
        },
        meta: {
            'typescript': {
              "exports": "ts"
            },
            '*.css': { loader: 'css' }
        },
        paths: {
            // paths serve as alias
            'npm:': 'node_modules/'
        },
        // map tells the System loader where to look for things
        map: {
            'core-js': 'npm:core-js/client/shim.min.js',
            'zone': 'npm:zone.js/dist/zone.min.js',
            'rxjs': 'npm:rxjs/bundles/rxjs.umd.min.js',
            'map' : 'npm:rxjs/add/operator/map.js',
            '@angular/core': 'npm:@angular/core/bundles/core.umd.min.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.min.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.min.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.min.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.min.js',
            '@angular/http': 'npm:@angular/http/bundles/http.umd.min.js',
            '@angular/common/http': 'npm:@angular/common/bundles/common-http.umd.min.js',
            '@angular/router': 'npm:@angular/router/bundles/router.umd.min.js',
            '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.min.js',
            '@grapecity/wijmo': 'npm:@grapecity/wijmo/index.js',
            '@grapecity/wijmo.input': 'npm:@grapecity/wijmo.input/index.js',
            '@grapecity/wijmo.styles': 'npm:@grapecity/wijmo.styles',
            "@grapecity/wijmo.angular2.core": "npm:@grapecity/wijmo.angular2.core/index.js",
            "@grapecity/wijmo.angular2.input": "npm:@grapecity/wijmo.angular2.input/index.js",
            "@grapecity/wijmo.angular2.directivebase": "npm:@grapecity/wijmo.angular2.directivebase/index.js",
        
            'bootstrap.css': 'npm:bootstrap/dist/css/bootstrap.min.css',
            'typescript': 'npm:typescript/lib/typescript.js',
            'ts': 'npm:plugin-typescript/lib/plugin.js',
            'css': 'npm:systemjs-plugin-css/css.js'
        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            src: {
                defaultExtension: 'ts'
            },
            rxjs: {
                defaultExtension: 'js'
              },
            "node_modules": {
                defaultExtension: 'js'
            },
            wijmo: {
                defaultExtension: 'js',
            }
        }
    });
})(this);
