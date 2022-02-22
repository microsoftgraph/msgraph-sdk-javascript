import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AlertTrigger implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** Name of the property serving as a detection trigger.  */
    private _name?: string | undefined;
    /** Type of the property in the key:value pair for interpretation. For example, String, Boolean etc.  */
    private _type?: string | undefined;
    /** Value of the property serving as a detection trigger.  */
    private _value?: string | undefined;
    /**
     * Instantiates a new alertTrigger and sets the default values.
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
     * Gets the name property value. Name of the property serving as a detection trigger.
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Gets the type property value. Type of the property in the key:value pair for interpretation. For example, String, Boolean etc.
     * @returns a string
     */
    public get type() {
        return this._type;
    };
    /**
     * Gets the value property value. Value of the property serving as a detection trigger.
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
            ["name", (o, n) => { (o as unknown as AlertTrigger).name = n.getStringValue(); }],
            ["type", (o, n) => { (o as unknown as AlertTrigger).type = n.getStringValue(); }],
            ["value", (o, n) => { (o as unknown as AlertTrigger).value = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("name", this.name);
        writer.writeStringValue("type", this.type);
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
     * Sets the name property value. Name of the property serving as a detection trigger.
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
    /**
     * Sets the type property value. Type of the property in the key:value pair for interpretation. For example, String, Boolean etc.
     * @param value Value to set for the type property.
     */
    public set type(value: string | undefined) {
        this._type = value;
    };
    /**
     * Sets the value property value. Value of the property serving as a detection trigger.
     * @param value Value to set for the value property.
     */
    public set value(value: string | undefined) {
        this._value = value;
    };
}
