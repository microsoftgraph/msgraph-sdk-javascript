import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EmailAddress implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** The email address of an entity instance.  */
    private _address?: string | undefined;
    /** The display name of an entity instance.  */
    private _name?: string | undefined;
    /**
     * Instantiates a new emailAddress and sets the default values.
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
     * Gets the address property value. The email address of an entity instance.
     * @returns a string
     */
    public get address() {
        return this._address;
    };
    /**
     * Gets the name property value. The display name of an entity instance.
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["address", (o, n) => { (o as unknown as EmailAddress).address = n.getStringValue(); }],
            ["name", (o, n) => { (o as unknown as EmailAddress).name = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("address", this.address);
        writer.writeStringValue("name", this.name);
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
     * Sets the address property value. The email address of an entity instance.
     * @param value Value to set for the address property.
     */
    public set address(value: string | undefined) {
        this._address = value;
    };
    /**
     * Sets the name property value. The display name of an entity instance.
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
}
