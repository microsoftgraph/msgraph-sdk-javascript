import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CallOptions implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _hideBotAfterEscalation?: boolean | undefined;
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
     * Instantiates a new callOptions and sets the default values.
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
            ["hideBotAfterEscalation", (o, n) => { (o as unknown as CallOptions).hideBotAfterEscalation = n.getBooleanValue(); }],
        ]);
    };
    /**
     * Gets the hideBotAfterEscalation property value. 
     * @returns a boolean
     */
    public get hideBotAfterEscalation() {
        return this._hideBotAfterEscalation;
    };
    /**
     * Sets the hideBotAfterEscalation property value. 
     * @param value Value to set for the hideBotAfterEscalation property.
     */
    public set hideBotAfterEscalation(value: boolean | undefined) {
        this._hideBotAfterEscalation = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeBooleanValue("hideBotAfterEscalation", this.hideBotAfterEscalation);
        writer.writeAdditionalData(this.additionalData);
    };
}
