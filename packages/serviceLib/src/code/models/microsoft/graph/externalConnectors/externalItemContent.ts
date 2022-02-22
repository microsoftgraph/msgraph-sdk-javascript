import {ExternalItemContentType} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ExternalItemContent implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** The type of content in the value property. Possible values are: text, html, unknownFutureValue.  */
    private _type?: ExternalItemContentType | undefined;
    /** The content for the externalItem. Required.  */
    private _value?: string | undefined;
    /**
     * Instantiates a new externalItemContent and sets the default values.
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
     * Gets the type property value. The type of content in the value property. Possible values are: text, html, unknownFutureValue.
     * @returns a externalItemContentType
     */
    public get type() {
        return this._type;
    };
    /**
     * Gets the value property value. The content for the externalItem. Required.
     * @returns a string
     */
    public get value() {
        return this._value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["type", (o, n) => { (o as unknown as ExternalItemContent).type = n.getEnumValue<ExternalItemContentType>(ExternalItemContentType); }],
            ["value", (o, n) => { (o as unknown as ExternalItemContent).value = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeEnumValue<ExternalItemContentType>("type", this.type);
        writer.writeStringValue("value", this.value);
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
     * Sets the type property value. The type of content in the value property. Possible values are: text, html, unknownFutureValue.
     * @param value Value to set for the type property.
     */
    public set type(value: ExternalItemContentType | undefined) {
        this._type = value;
    };
    /**
     * Sets the value property value. The content for the externalItem. Required.
     * @param value Value to set for the value property.
     */
    public set value(value: string | undefined) {
        this._value = value;
    };
}
