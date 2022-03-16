import {Prompt} from '../../../../models/microsoft/graph/';
import {createPromptFromDiscriminatorValue} from '../../../../models/microsoft/graph/createPromptFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the playPrompt method.  */
export class PlayPromptRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _clientContext?: string | undefined;
    private _prompts?: Prompt[] | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Map<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Map<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Gets the clientContext property value. 
     * @returns a string
     */
    public get clientContext() {
        return this._clientContext;
    };
    /**
     * Sets the clientContext property value. 
     * @param value Value to set for the clientContext property.
     */
    public set clientContext(value: string | undefined) {
        this._clientContext = value;
    };
    /**
     * Instantiates a new playPromptRequestBody and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["clientContext", (o, n) => { (o as unknown as PlayPromptRequestBody).clientContext = n.getStringValue(); }],
            ["prompts", (o, n) => { (o as unknown as PlayPromptRequestBody).prompts = n.getCollectionOfObjectValues<Prompt>(createPromptFromDiscriminatorValue); }],
        ]);
    };
    /**
     * Gets the prompts property value. 
     * @returns a prompt
     */
    public get prompts() {
        return this._prompts;
    };
    /**
     * Sets the prompts property value. 
     * @param value Value to set for the prompts property.
     */
    public set prompts(value: Prompt[] | undefined) {
        this._prompts = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("clientContext", this.clientContext);
        writer.writeCollectionOfObjectValues<Prompt>("prompts", this.prompts);
        writer.writeAdditionalData(this.additionalData);
    };
}
