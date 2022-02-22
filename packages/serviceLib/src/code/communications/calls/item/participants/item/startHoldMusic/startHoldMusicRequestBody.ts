import {Prompt} from '../../../../../../models/microsoft/graph/';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class StartHoldMusicRequestBody implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _clientContext?: string | undefined;
    private _customPrompt?: Prompt | undefined;
    /**
     * Instantiates a new startHoldMusicRequestBody and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Map<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Gets the clientContext property value. 
     * @returns a string
     */
    public get clientContext() {
        return this._clientContext;
    };
    /**
     * Gets the customPrompt property value. 
     * @returns a prompt
     */
    public get customPrompt() {
        return this._customPrompt;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["clientContext", (o, n) => { (o as unknown as StartHoldMusicRequestBody).clientContext = n.getStringValue(); }],
            ["customPrompt", (o, n) => { (o as unknown as StartHoldMusicRequestBody).customPrompt = n.getObjectValue<Prompt>(Prompt); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("clientContext", this.clientContext);
        writer.writeObjectValue<Prompt>("customPrompt", this.customPrompt);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Map<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Sets the clientContext property value. 
     * @param value Value to set for the clientContext property.
     */
    public set clientContext(value: string | undefined) {
        this._clientContext = value;
    };
    /**
     * Sets the customPrompt property value. 
     * @param value Value to set for the customPrompt property.
     */
    public set customPrompt(value: Prompt | undefined) {
        this._customPrompt = value;
    };
}
