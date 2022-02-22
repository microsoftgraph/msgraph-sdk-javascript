import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class OnPremisesProvisioningError implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** Category of the provisioning error. Note: Currently, there is only one possible value. Possible value: PropertyConflict - indicates a property value is not unique. Other objects contain the same value for the property.  */
    private _category?: string | undefined;
    /** The date and time at which the error occurred.  */
    private _occurredDateTime?: Date | undefined;
    /** Name of the directory property causing the error. Current possible values: UserPrincipalName or ProxyAddress  */
    private _propertyCausingError?: string | undefined;
    /** Value of the property causing the error.  */
    private _value?: string | undefined;
    /**
     * Instantiates a new onPremisesProvisioningError and sets the default values.
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
     * Gets the category property value. Category of the provisioning error. Note: Currently, there is only one possible value. Possible value: PropertyConflict - indicates a property value is not unique. Other objects contain the same value for the property.
     * @returns a string
     */
    public get category() {
        return this._category;
    };
    /**
     * Gets the occurredDateTime property value. The date and time at which the error occurred.
     * @returns a Date
     */
    public get occurredDateTime() {
        return this._occurredDateTime;
    };
    /**
     * Gets the propertyCausingError property value. Name of the directory property causing the error. Current possible values: UserPrincipalName or ProxyAddress
     * @returns a string
     */
    public get propertyCausingError() {
        return this._propertyCausingError;
    };
    /**
     * Gets the value property value. Value of the property causing the error.
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
            ["category", (o, n) => { (o as unknown as OnPremisesProvisioningError).category = n.getStringValue(); }],
            ["occurredDateTime", (o, n) => { (o as unknown as OnPremisesProvisioningError).occurredDateTime = n.getDateValue(); }],
            ["propertyCausingError", (o, n) => { (o as unknown as OnPremisesProvisioningError).propertyCausingError = n.getStringValue(); }],
            ["value", (o, n) => { (o as unknown as OnPremisesProvisioningError).value = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("category", this.category);
        writer.writeDateValue("occurredDateTime", this.occurredDateTime);
        writer.writeStringValue("propertyCausingError", this.propertyCausingError);
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
     * Sets the category property value. Category of the provisioning error. Note: Currently, there is only one possible value. Possible value: PropertyConflict - indicates a property value is not unique. Other objects contain the same value for the property.
     * @param value Value to set for the category property.
     */
    public set category(value: string | undefined) {
        this._category = value;
    };
    /**
     * Sets the occurredDateTime property value. The date and time at which the error occurred.
     * @param value Value to set for the occurredDateTime property.
     */
    public set occurredDateTime(value: Date | undefined) {
        this._occurredDateTime = value;
    };
    /**
     * Sets the propertyCausingError property value. Name of the directory property causing the error. Current possible values: UserPrincipalName or ProxyAddress
     * @param value Value to set for the propertyCausingError property.
     */
    public set propertyCausingError(value: string | undefined) {
        this._propertyCausingError = value;
    };
    /**
     * Sets the value property value. Value of the property causing the error.
     * @param value Value to set for the value property.
     */
    public set value(value: string | undefined) {
        this._value = value;
    };
}
