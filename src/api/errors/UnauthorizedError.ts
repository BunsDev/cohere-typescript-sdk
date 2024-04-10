/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as errors from "../../errors";
import * as Cohere from "..";

export class UnauthorizedError extends errors.CohereError {
    constructor(body: Cohere.finetuning.Error_) {
        super({
            message: "UnauthorizedError",
            statusCode: 401,
            body: body,
        });
        Object.setPrototypeOf(this, UnauthorizedError.prototype);
    }
}