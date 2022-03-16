import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ModifiedProperty implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** Indicates the property name of the target attribute that was changed.  */
    private _displayName?: string | undefined;
    /** Indicates the updated value for the propery.  */
    private _newValue?: string | undefined;
    /** Indicates the previous value (before the update) for the property.  */
    private _oldValue?: string | undefined;
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
     * Instantiates a new modifiedProperty and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the displayName property value. Indicates the property name of the target attribute that was changed.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. Indicates the property name of the target attribute that was changed.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["displayName", (o, n) => { (o as unknown as ModifiedProperty).displayName = n.getStringValue(); }],
            ["newValue", (o, n) => { (o as unknown as ModifiedProperty).newValue = n.getStringValue(); }],
            ["oldValue", (o, n) => { (o as unknown as ModifiedProperty).oldValue = n.getStringValue(); }],
        ]);
    };
    /**
     * Gets the newValue property value. Indicates the updated value for the propery.
     * @returns a string
     */
    public get newValue() {
        return this._newValue;
    };
    /**
     * Sets the newValue property value. Indicates the updated value for the propery.
     * @param value Value to set for the newValue property.
     */
    public set newValue(value: string | undefined) {
        this._newValue = value;
    };
    /**
     * Gets the oldValue property value. Indicates the previous value (before the update) for the property.
     * @returns a string
     */
    public get oldValue() {
        return this._oldValue;
    };
    /**
     * Sets the oldValue property value. Indicates the previous value (before the update) for the property.
     * @param value Value to set for the oldValue property.
     */
    public set oldValue(value: string | undefined) {
        this._oldValue = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("displayName", this.displayName);
        writer.writeStringValue("newValue", this.newValue);
        writer.writeStringValue("oldValue", this.oldValue);
        writer.writeAdditionalData(this.additionalData);
    };
}
