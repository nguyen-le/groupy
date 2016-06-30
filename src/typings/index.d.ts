/// <reference path="globals/hapi/index.d.ts" />
/// <reference path="globals/node/index.d.ts" />

declare module "inert" {
    let Inert : any
    export {Inert}
}

declare module "require-namespace" {
    export var createSync : (...args) => any
    export var model : any
    export var service : any
}
