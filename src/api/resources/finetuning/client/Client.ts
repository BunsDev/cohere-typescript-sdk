/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Cohere from "../../../index";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization/index";
import * as errors from "../../../../errors/index";

export declare namespace Finetuning {
    interface Options {
        environment?: core.Supplier<environments.CohereEnvironment | string>;
        token?: core.Supplier<core.BearerToken | undefined>;
        /** Override the X-Client-Name header */
        clientName?: core.Supplier<string | undefined>;
        fetcher?: core.FetchFunction;
    }

    interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
        /** Override the X-Client-Name header */
        clientName?: string | undefined;
    }
}

/**
 * Finetuning API (Beta)
 */
export class Finetuning {
    constructor(protected readonly _options: Finetuning.Options = {}) {}

    /**
     * @param {Cohere.FinetuningListFinetunedModelsRequest} request
     * @param {Finetuning.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Cohere.BadRequestError}
     * @throws {@link Cohere.UnauthorizedError}
     * @throws {@link Cohere.ForbiddenError}
     * @throws {@link Cohere.NotFoundError}
     * @throws {@link Cohere.InternalServerError}
     * @throws {@link Cohere.ServiceUnavailableError}
     *
     * @example
     *     await client.finetuning.listFinetunedModels()
     */
    public async listFinetunedModels(
        request: Cohere.FinetuningListFinetunedModelsRequest = {},
        requestOptions?: Finetuning.RequestOptions
    ): Promise<Cohere.finetuning.ListFinetunedModelsResponse> {
        const { pageSize, pageToken, orderBy } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (pageSize != null) {
            _queryParams["page_size"] = pageSize.toString();
        }

        if (pageToken != null) {
            _queryParams["page_token"] = pageToken;
        }

        if (orderBy != null) {
            _queryParams["order_by"] = orderBy;
        }

        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CohereEnvironment.Production,
                "finetuning/finetuned-models"
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
                "X-Fern-SDK-Version": "7.11.2",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 300000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.finetuning.ListFinetunedModelsResponse.parseOrThrow(_response.body, {
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
                case 401:
                    throw new Cohere.UnauthorizedError(_response.error.body);
                case 403:
                    throw new Cohere.ForbiddenError(_response.error.body);
                case 404:
                    throw new Cohere.NotFoundError(_response.error.body);
                case 500:
                    throw new Cohere.InternalServerError(_response.error.body);
                case 503:
                    throw new Cohere.ServiceUnavailableError(_response.error.body);
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
     * @param {Cohere.finetuning.FinetunedModel} request
     * @param {Finetuning.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Cohere.BadRequestError}
     * @throws {@link Cohere.UnauthorizedError}
     * @throws {@link Cohere.ForbiddenError}
     * @throws {@link Cohere.NotFoundError}
     * @throws {@link Cohere.InternalServerError}
     * @throws {@link Cohere.ServiceUnavailableError}
     *
     * @example
     *     await client.finetuning.createFinetunedModel({
     *         name: "api-test",
     *         settings: {
     *             baseModel: {
     *                 baseType: Cohere.finetuning.BaseType.BaseTypeGenerative
     *             },
     *             datasetId: "my-dataset-id"
     *         }
     *     })
     */
    public async createFinetunedModel(
        request: Cohere.finetuning.FinetunedModel,
        requestOptions?: Finetuning.RequestOptions
    ): Promise<Cohere.finetuning.CreateFinetunedModelResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CohereEnvironment.Production,
                "finetuning/finetuned-models"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Client-Name":
                    (await core.Supplier.get(this._options.clientName)) != null
                        ? await core.Supplier.get(this._options.clientName)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "cohere-ai",
                "X-Fern-SDK-Version": "7.11.2",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.finetuning.FinetunedModel.jsonOrThrow(request, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 300000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.finetuning.CreateFinetunedModelResponse.parseOrThrow(_response.body, {
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
                case 401:
                    throw new Cohere.UnauthorizedError(_response.error.body);
                case 403:
                    throw new Cohere.ForbiddenError(_response.error.body);
                case 404:
                    throw new Cohere.NotFoundError(_response.error.body);
                case 500:
                    throw new Cohere.InternalServerError(_response.error.body);
                case 503:
                    throw new Cohere.ServiceUnavailableError(_response.error.body);
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
     * @param {string} id - The fine-tuned model ID.
     * @param {Finetuning.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Cohere.BadRequestError}
     * @throws {@link Cohere.UnauthorizedError}
     * @throws {@link Cohere.ForbiddenError}
     * @throws {@link Cohere.NotFoundError}
     * @throws {@link Cohere.InternalServerError}
     * @throws {@link Cohere.ServiceUnavailableError}
     *
     * @example
     *     await client.finetuning.getFinetunedModel("id")
     */
    public async getFinetunedModel(
        id: string,
        requestOptions?: Finetuning.RequestOptions
    ): Promise<Cohere.finetuning.GetFinetunedModelResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CohereEnvironment.Production,
                `finetuning/finetuned-models/${encodeURIComponent(id)}`
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
                "X-Fern-SDK-Version": "7.11.2",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 300000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.finetuning.GetFinetunedModelResponse.parseOrThrow(_response.body, {
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
                case 401:
                    throw new Cohere.UnauthorizedError(_response.error.body);
                case 403:
                    throw new Cohere.ForbiddenError(_response.error.body);
                case 404:
                    throw new Cohere.NotFoundError(_response.error.body);
                case 500:
                    throw new Cohere.InternalServerError(_response.error.body);
                case 503:
                    throw new Cohere.ServiceUnavailableError(_response.error.body);
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
     * @param {string} id - The fine-tuned model ID.
     * @param {Finetuning.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Cohere.BadRequestError}
     * @throws {@link Cohere.UnauthorizedError}
     * @throws {@link Cohere.ForbiddenError}
     * @throws {@link Cohere.NotFoundError}
     * @throws {@link Cohere.InternalServerError}
     * @throws {@link Cohere.ServiceUnavailableError}
     *
     * @example
     *     await client.finetuning.deleteFinetunedModel("id")
     */
    public async deleteFinetunedModel(
        id: string,
        requestOptions?: Finetuning.RequestOptions
    ): Promise<Cohere.finetuning.DeleteFinetunedModelResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CohereEnvironment.Production,
                `finetuning/finetuned-models/${encodeURIComponent(id)}`
            ),
            method: "DELETE",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Client-Name":
                    (await core.Supplier.get(this._options.clientName)) != null
                        ? await core.Supplier.get(this._options.clientName)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "cohere-ai",
                "X-Fern-SDK-Version": "7.11.2",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 300000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.finetuning.DeleteFinetunedModelResponse.parseOrThrow(_response.body, {
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
                case 401:
                    throw new Cohere.UnauthorizedError(_response.error.body);
                case 403:
                    throw new Cohere.ForbiddenError(_response.error.body);
                case 404:
                    throw new Cohere.NotFoundError(_response.error.body);
                case 500:
                    throw new Cohere.InternalServerError(_response.error.body);
                case 503:
                    throw new Cohere.ServiceUnavailableError(_response.error.body);
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
     * @param {string} id - FinetunedModel ID.
     * @param {Cohere.FinetuningUpdateFinetunedModelRequest} request
     * @param {Finetuning.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Cohere.BadRequestError}
     * @throws {@link Cohere.UnauthorizedError}
     * @throws {@link Cohere.ForbiddenError}
     * @throws {@link Cohere.NotFoundError}
     * @throws {@link Cohere.InternalServerError}
     * @throws {@link Cohere.ServiceUnavailableError}
     *
     * @example
     *     await client.finetuning.updateFinetunedModel("id", {
     *         name: "name",
     *         settings: {
     *             baseModel: {
     *                 baseType: Cohere.finetuning.BaseType.BaseTypeUnspecified
     *             },
     *             datasetId: "dataset_id"
     *         }
     *     })
     */
    public async updateFinetunedModel(
        id: string,
        request: Cohere.FinetuningUpdateFinetunedModelRequest,
        requestOptions?: Finetuning.RequestOptions
    ): Promise<Cohere.finetuning.UpdateFinetunedModelResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CohereEnvironment.Production,
                `finetuning/finetuned-models/${encodeURIComponent(id)}`
            ),
            method: "PATCH",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Client-Name":
                    (await core.Supplier.get(this._options.clientName)) != null
                        ? await core.Supplier.get(this._options.clientName)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "cohere-ai",
                "X-Fern-SDK-Version": "7.11.2",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.FinetuningUpdateFinetunedModelRequest.jsonOrThrow(request, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 300000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.finetuning.UpdateFinetunedModelResponse.parseOrThrow(_response.body, {
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
                case 401:
                    throw new Cohere.UnauthorizedError(_response.error.body);
                case 403:
                    throw new Cohere.ForbiddenError(_response.error.body);
                case 404:
                    throw new Cohere.NotFoundError(_response.error.body);
                case 500:
                    throw new Cohere.InternalServerError(_response.error.body);
                case 503:
                    throw new Cohere.ServiceUnavailableError(_response.error.body);
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
     * @param {string} finetunedModelId - The parent fine-tuned model ID.
     * @param {Cohere.FinetuningListEventsRequest} request
     * @param {Finetuning.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Cohere.BadRequestError}
     * @throws {@link Cohere.UnauthorizedError}
     * @throws {@link Cohere.ForbiddenError}
     * @throws {@link Cohere.NotFoundError}
     * @throws {@link Cohere.InternalServerError}
     * @throws {@link Cohere.ServiceUnavailableError}
     *
     * @example
     *     await client.finetuning.listEvents("finetuned_model_id")
     */
    public async listEvents(
        finetunedModelId: string,
        request: Cohere.FinetuningListEventsRequest = {},
        requestOptions?: Finetuning.RequestOptions
    ): Promise<Cohere.finetuning.ListEventsResponse> {
        const { pageSize, pageToken, orderBy } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (pageSize != null) {
            _queryParams["page_size"] = pageSize.toString();
        }

        if (pageToken != null) {
            _queryParams["page_token"] = pageToken;
        }

        if (orderBy != null) {
            _queryParams["order_by"] = orderBy;
        }

        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CohereEnvironment.Production,
                `finetuning/finetuned-models/${encodeURIComponent(finetunedModelId)}/events`
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
                "X-Fern-SDK-Version": "7.11.2",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 300000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.finetuning.ListEventsResponse.parseOrThrow(_response.body, {
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
                case 401:
                    throw new Cohere.UnauthorizedError(_response.error.body);
                case 403:
                    throw new Cohere.ForbiddenError(_response.error.body);
                case 404:
                    throw new Cohere.NotFoundError(_response.error.body);
                case 500:
                    throw new Cohere.InternalServerError(_response.error.body);
                case 503:
                    throw new Cohere.ServiceUnavailableError(_response.error.body);
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
     * @param {string} finetunedModelId - The parent fine-tuned model ID.
     * @param {Cohere.FinetuningListTrainingStepMetricsRequest} request
     * @param {Finetuning.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Cohere.BadRequestError}
     * @throws {@link Cohere.UnauthorizedError}
     * @throws {@link Cohere.ForbiddenError}
     * @throws {@link Cohere.NotFoundError}
     * @throws {@link Cohere.InternalServerError}
     * @throws {@link Cohere.ServiceUnavailableError}
     *
     * @example
     *     await client.finetuning.listTrainingStepMetrics("finetuned_model_id")
     */
    public async listTrainingStepMetrics(
        finetunedModelId: string,
        request: Cohere.FinetuningListTrainingStepMetricsRequest = {},
        requestOptions?: Finetuning.RequestOptions
    ): Promise<Cohere.finetuning.ListTrainingStepMetricsResponse> {
        const { pageSize, pageToken } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (pageSize != null) {
            _queryParams["page_size"] = pageSize.toString();
        }

        if (pageToken != null) {
            _queryParams["page_token"] = pageToken;
        }

        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CohereEnvironment.Production,
                `finetuning/finetuned-models/${encodeURIComponent(finetunedModelId)}/training-step-metrics`
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
                "X-Fern-SDK-Version": "7.11.2",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 300000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.finetuning.ListTrainingStepMetricsResponse.parseOrThrow(_response.body, {
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
                case 401:
                    throw new Cohere.UnauthorizedError(_response.error.body);
                case 403:
                    throw new Cohere.ForbiddenError(_response.error.body);
                case 404:
                    throw new Cohere.NotFoundError(_response.error.body);
                case 500:
                    throw new Cohere.InternalServerError(_response.error.body);
                case 503:
                    throw new Cohere.ServiceUnavailableError(_response.error.body);
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
