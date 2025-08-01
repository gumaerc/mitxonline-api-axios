/* tslint:disable */
/* eslint-disable */
/**
 * MITx Online API
 * MIT public API
 *
 * The version of the OpenAPI document: 0.0.1 (v2)
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import globalAxios from 'axios';
export const BASE_PATH = "http://localhost".replace(/\/+$/, "");
/**
 *
 * @export
 */
export const COLLECTION_FORMATS = {
    csv: ",",
    ssv: " ",
    tsv: "\t",
    pipes: "|",
};
/**
 *
 * @export
 * @class BaseAPI
 */
export class BaseAPI {
    constructor(configuration, basePath = BASE_PATH, axios = globalAxios) {
        var _a;
        this.basePath = basePath;
        this.axios = axios;
        if (configuration) {
            this.configuration = configuration;
            this.basePath = (_a = configuration.basePath) !== null && _a !== void 0 ? _a : basePath;
        }
    }
}
;
/**
 *
 * @export
 * @class RequiredError
 * @extends {Error}
 */
export class RequiredError extends Error {
    constructor(field, msg) {
        super(msg);
        this.field = field;
        this.name = "RequiredError";
    }
}
/**
 *
 * @export
 */
export const operationServerMap = {};
//# sourceMappingURL=base.js.map