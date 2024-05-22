/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Cohere from "../../index";

/**
 * @example
 *     {
 *         prompt: "string",
 *         model: "string",
 *         numGenerations: 1,
 *         stream: true,
 *         maxTokens: 1,
 *         truncate: Cohere.GenerateStreamRequestTruncate.None,
 *         temperature: 1.1,
 *         seed: 1.1,
 *         preset: "string",
 *         endSequences: ["string"],
 *         stopSequences: ["string"],
 *         k: 1,
 *         p: 1.1,
 *         frequencyPenalty: 1.1,
 *         presencePenalty: 1.1,
 *         returnLikelihoods: Cohere.GenerateStreamRequestReturnLikelihoods.Generation,
 *         rawPrompting: true
 *     }
 */
export interface GenerateStreamRequest {
    /**
     * The input text that serves as the starting point for generating the response.
     * Note: The prompt will be pre-processed and modified before reaching the model.
     *
     */
    prompt: string;
    /**
     * The identifier of the model to generate with. Currently available models are `command` (default), `command-nightly` (experimental), `command-light`, and `command-light-nightly` (experimental).
     * Smaller, "light" models are faster, while larger models will perform better. [Custom models](/docs/training-custom-models) can also be supplied with their full ID.
     */
    model?: string;
    /**
     * The maximum number of generations that will be returned. Defaults to `1`, min value of `1`, max value of `5`.
     *
     */
    numGenerations?: number;
    /**
     * The maximum number of tokens the model will generate as part of the response. Note: Setting a low value may result in incomplete generations.
     *
     * This parameter is off by default, and if it's not specified, the model will continue generating until it emits an EOS completion token. See [BPE Tokens](/bpe-tokens-wiki) for more details.
     *
     * Can only be set to `0` if `return_likelihoods` is set to `ALL` to get the likelihood of the prompt.
     *
     */
    maxTokens?: number;
    /**
     * One of `NONE|START|END` to specify how the API will handle inputs longer than the maximum token length.
     *
     * Passing `START` will discard the start of the input. `END` will discard the end of the input. In both cases, input is discarded until the remaining input is exactly the maximum input token length for the model.
     *
     * If `NONE` is selected, when the input exceeds the maximum input token length an error will be returned.
     */
    truncate?: Cohere.GenerateStreamRequestTruncate;
    /**
     * A non-negative float that tunes the degree of randomness in generation. Lower temperatures mean less random generations. See [Temperature](/temperature-wiki) for more details.
     * Defaults to `0.75`, min value of `0.0`, max value of `5.0`.
     *
     */
    temperature?: number;
    /** If specified, the backend will make a best effort to sample tokens deterministically, such that repeated requests with the same seed and parameters should return the same result. However, determinsim cannot be totally guaranteed. */
    seed?: number;
    /**
     * Identifier of a custom preset. A preset is a combination of parameters, such as prompt, temperature etc. You can create presets in the [playground](https://dashboard.cohere.com/playground/generate).
     * When a preset is specified, the `prompt` parameter becomes optional, and any included parameters will override the preset's parameters.
     *
     */
    preset?: string;
    /** The generated text will be cut at the beginning of the earliest occurrence of an end sequence. The sequence will be excluded from the text. */
    endSequences?: string[];
    /** The generated text will be cut at the end of the earliest occurrence of a stop sequence. The sequence will be included the text. */
    stopSequences?: string[];
    /**
     * Ensures only the top `k` most likely tokens are considered for generation at each step.
     * Defaults to `0`, min value of `0`, max value of `500`.
     *
     */
    k?: number;
    /**
     * Ensures that only the most likely tokens, with total probability mass of `p`, are considered for generation at each step. If both `k` and `p` are enabled, `p` acts after `k`.
     * Defaults to `0.75`. min value of `0.01`, max value of `0.99`.
     *
     */
    p?: number;
    /**
     * Used to reduce repetitiveness of generated tokens. The higher the value, the stronger a penalty is applied to previously present tokens, proportional to how many times they have already appeared in the prompt or prior generation.
     *
     * Using `frequency_penalty` in combination with `presence_penalty` is not supported on newer models.
     *
     */
    frequencyPenalty?: number;
    /**
     * Defaults to `0.0`, min value of `0.0`, max value of `1.0`.
     *
     * Can be used to reduce repetitiveness of generated tokens. Similar to `frequency_penalty`, except that this penalty is applied equally to all tokens that have already appeared, regardless of their exact frequencies.
     *
     * Using `frequency_penalty` in combination with `presence_penalty` is not supported on newer models.
     *
     */
    presencePenalty?: number;
    /**
     * One of `GENERATION|ALL|NONE` to specify how and if the token likelihoods are returned with the response. Defaults to `NONE`.
     *
     * If `GENERATION` is selected, the token likelihoods will only be provided for generated text.
     *
     * If `ALL` is selected, the token likelihoods will be provided both for the prompt and the generated text.
     */
    returnLikelihoods?: Cohere.GenerateStreamRequestReturnLikelihoods;
    /** When enabled, the user's prompt will be sent to the model without any pre-processing. */
    rawPrompting?: boolean;
}
