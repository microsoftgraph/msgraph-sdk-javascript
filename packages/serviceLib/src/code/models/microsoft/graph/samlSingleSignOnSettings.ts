import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SamlSingleSignOnSettings implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** The relative URI the service provider would redirect to after completion of the single sign-on flow.  */
    private _relayState?: string | undefined;
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
     * Instantiates a new samlSingleSignOnSettings and sets the default values.
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
            ["relayState", (o, n) => { (o as unknown as SamlSingleSignOnSettings).relayState = n.getStringValue(); }],
        ]);
    };
    /**
     * Gets the relayState property value. The relative URI the service provider would redirect to after completion of the single sign-on flow.
     * @returns a string
     */
    public get relayState() {
        return this._relayState;
    };
    /**
     * Sets the relayState property value. The relative URI the service provider would redirect to after completion of the single sign-on flow.
     * @param value Value to set for the relayState property.
     */
    public set relayState(value: string | undefined) {
        this._relayState = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("relayState", this.relayState);
        writer.writeAdditionalData(this.additionalData);
    };
}
