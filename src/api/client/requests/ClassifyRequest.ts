/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Cohere from "../..";

/**
 * @example
 *     {
 *         inputs: ["Confirm your email address", "hey i need u to send some $"],
 *         examples: [{
 *                 text: "Dermatologists don't like her!",
 *                 label: "Spam"
 *             }, {
 *                 text: "Hello, open to this?",
 *                 label: "Spam"
 *             }, {
 *                 text: "I need help please wire me $1000 right now",
 *                 label: "Spam"
 *             }, {
 *                 text: "Nice to know you ;)",
 *                 label: "Spam"
 *             }, {
 *                 text: "Please help me?",
 *                 label: "Spam"
 *             }, {
 *                 text: "Your parcel will be delivered today",
 *                 label: "Not spam"
 *             }, {
 *                 text: "Review changes to our Terms and Conditions",
 *                 label: "Not spam"
 *             }, {
 *                 text: "Weekly sync notes",
 *                 label: "Not spam"
 *             }, {
 *                 text: "Re: Follow up from today\u2019s meeting",
 *                 label: "Not spam"
 *             }, {
 *                 text: "Pre-read for tomorrow",
 *                 label: "Not spam"
 *             }],
 *         preset: "my-preset-a58sbd"
 *     }
 */
export interface ClassifyRequest {
    /**
     * A list of up to 96 texts to be classified. Each one must be a non-empty string.
     * There is, however, no consistent, universal limit to the length a particular input can be. We perform classification on the first `x` tokens of each input, and `x` varies depending on which underlying model is powering classification. The maximum token length for each model is listed in the "max tokens" column [here](https://docs.cohere.com/docs/models).
     * Note: by default the `truncate` parameter is set to `END`, so tokens exceeding the limit will be automatically dropped. This behavior can be disabled by setting `truncate` to `NONE`, which will result in validation errors for longer texts.
     */
    inputs: string[];
    /**
     * An array of examples to provide context to the model. Each example is a text string and its associated label/class. Each unique label requires at least 2 examples associated with it; the maximum number of examples is 2500, and each example has a maximum length of 512 tokens. The values should be structured as `{text: "...",label: "..."}`.
     * Note: [Fine-tuned Models](https://docs.cohere.com/docs/classify-fine-tuning) trained on classification examples don't require the `examples` parameter to be passed in explicitly.
     */
    examples: Cohere.ClassifyExample[];
    /** The identifier of the model. Currently available models are `embed-multilingual-v2.0`, `embed-english-light-v2.0`, and `embed-english-v2.0` (default). Smaller "light" models are faster, while larger models will perform better. [Fine-tuned models](https://docs.cohere.com/docs/fine-tuning) can also be supplied with their full ID. */
    model?: string;
    /** The ID of a custom playground preset. You can create presets in the [playground](https://dashboard.cohere.ai/playground/classify?model=large). If you use a preset, all other parameters become optional, and any included parameters will override the preset's parameters. */
    preset?: string;
    /**
     * One of `NONE|START|END` to specify how the API will handle inputs longer than the maximum token length.
     * Passing `START` will discard the start of the input. `END` will discard the end of the input. In both cases, input is discarded until the remaining input is exactly the maximum input token length for the model.
     * If `NONE` is selected, when the input exceeds the maximum input token length an error will be returned.
     */
    truncate?: Cohere.ClassifyRequestTruncate;
}
