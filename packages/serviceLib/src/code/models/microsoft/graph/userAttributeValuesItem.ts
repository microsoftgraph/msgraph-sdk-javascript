import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UserAttributeValuesItem implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** Determines whether the value is set as the default.  */
    private _isDefault?: boolean | undefined;
    /** The display name of the property displayed to the user in the user flow.  */
    private _name?: string | undefined;
    /** The value that is set when this item is selected.  */
    private _value?: string | undefined;
    /**
     * Instantiates a new userAttributeValuesItem and sets the default values.
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
     * Gets the isDefault property value. Determines whether the value is set as the default.
     * @returns a boolean
     */
    public get isDefault() {
        return this._isDefault;
    };
    /**
     * Gets the name property value. The display name of the property displayed to the user in the user flow.
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Gets the value property value. The value that is set when this item is selected.
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
            ["isDefault", (o, n) => { (o as unknown as UserAttributeValuesItem).isDefault = n.getBooleanValue(); }],
            ["name", (o, n) => { (o as unknown as UserAttributeValuesItem).name = n.getStringValue(); }],
            ["value", (o, n) => { (o as unknown as UserAttributeValuesItem).value = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeBooleanValue("isDefault", this.isDefault);
        writer.writeStringValue("name", this.name);
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
     * Sets the isDefault property value. Determines whether the value is set as the default.
     * @param value Value to set for the isDefault property.
     */
    public set isDefault(value: boolean | undefined) {
        this._isDefault = value;
    };
    /**
     * Sets the name property value. The display name of the property displayed to the user in the user flow.
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
    /**
     * Sets the value property value. The value that is set when this item is selected.
     * @param value Value to set for the value property.
     */
    public set value(value: string | undefined) {
        this._value = value;
    };
}
