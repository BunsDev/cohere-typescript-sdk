/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Cohere from "../../../index";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization/index";
import * as errors from "../../../../errors/index";

export declare namespace Models {
    interface Options {
        environment?: core.Supplier<environments.CohereEnvironment | string>;
        token?: core.Supplier<core.BearerToken | undefined>;
        clientName?: core.Supplier<string | undefined>;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
        maxRetries?: number;
    }
}

export class Models {
    constructor(protected readonly _options: Models.Options = {}) {}

    /**
     * Returns the details of a model, provided its name.
     *
     * @param {string} model
     * @param {Models.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Cohere.BadRequestError}
     * @throws {@link Cohere.TooManyRequestsError}
     * @throws {@link Cohere.InternalServerError}
     *
     * @example
     *     await cohere.models.get("model")
     */
    public async get(model: string, requestOptions?: Models.RequestOptions): Promise<Cohere.GetModelResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CohereEnvironment.Production,
                `models/${encodeURIComponent(model)}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Client-Name":
                    (await core.Supplier.get(this._options.clientName)) != null
                        ? await core.Supplier.get(this._options.clientName)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "cohere-ai",
                "X-Fern-SDK-Version": "7.10.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 300000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.GetModelResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Cohere.BadRequestError(_response.error.body);
                case 429:
                    throw new Cohere.TooManyRequestsError(
                        await serializers.TooManyRequestsErrorBody.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 500:
                    throw new Cohere.InternalServerError(_response.error.body);
                default:
                    throw new errors.CohereError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.CohereError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.CohereTimeoutError();
            case "unknown":
                throw new errors.CohereError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Returns a list of models available for use. The list contains models from Cohere as well as your fine-tuned models.
     *
     * @param {Cohere.ModelsListRequest} request
     * @param {Models.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Cohere.TooManyRequestsError}
     *
     * @example
     *     await cohere.models.list()
     */
    public async list(
        request: Cohere.ModelsListRequest = {},
        requestOptions?: Models.RequestOptions
    ): Promise<Cohere.ListModelsResponse> {
        const { pageSize, pageToken, endpoint, defaultOnly } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (pageSize != null) {
            _queryParams["page_size"] = pageSize.toString();
        }

        if (pageToken != null) {
            _queryParams["page_token"] = pageToken;
        }

        if (endpoint != null) {
            _queryParams["endpoint"] = endpoint;
        }

        if (defaultOnly != null) {
            _queryParams["default_only"] = defaultOnly.toString();
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CohereEnvironment.Production,
                "models"
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Client-Name":
                    (await core.Supplier.get(this._options.clientName)) != null
                        ? await core.Supplier.get(this._options.clientName)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "cohere-ai",
                "X-Fern-SDK-Version": "7.10.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 300000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.ListModelsResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 429:
                    throw new Cohere.TooManyRequestsError(
                        await serializers.TooManyRequestsErrorBody.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.CohereError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.CohereError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.CohereTimeoutError();
            case "unknown":
                throw new errors.CohereError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected async _getAuthorizationHeader(): Promise<string> {
        const bearer = (await core.Supplier.get(this._options.token)) ?? process?.env["CO_API_KEY"];
        if (bearer == null) {
            throw new errors.CohereError({
                message: "Please specify CO_API_KEY when instantiating the client.",
            });
        }

        return `Bearer ${bearer}`;
    }
}
