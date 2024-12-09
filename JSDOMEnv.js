import { TestEnvironment } from "jest-environment-jsdom";

export default class JSDOMEnvironmentPatch extends TestEnvironment{
    constructor(...args){
        super(...args);
        this.global.structuredClone=structuredClone;
    }
}