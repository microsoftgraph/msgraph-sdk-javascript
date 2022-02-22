import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PersonType implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** The type of data source, such as Person.  */
    private _class_escaped?: string | undefined;
    /** The secondary type of data source, such as OrganizationUser.  */
    private _subclass?: string | undefined;
    /**
     * Instantiates a new personType and sets the default values.
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
     * Gets the class property value. The type of data source, such as Person.
     * @returns a string
     */
    public get class_escaped() {
        return this._class_escaped;
    };
    /**
     * Gets the subclass property value. The secondary type of data source, such as OrganizationUser.
     * @returns a string
     */
    public get subclass() {
        return this._subclass;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["class", (o, n) => { (o as unknown as PersonType).class_escaped = n.getStringValue(); }],
            ["subclass", (o, n) => { (o as unknown as PersonType).subclass = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("class", this.class_escaped);
        writer.writeStringValue("subclass", this.subclass);
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
     * Sets the class property value. The type of data source, such as Person.
     * @param value Value to set for the class_escaped property.
     */
    public set class_escaped(value: string | undefined) {
        this._class_escaped = value;
    };
    /**
     * Sets the subclass property value. The secondary type of data source, such as OrganizationUser.
     * @param value Value to set for the subclass property.
     */
    public set subclass(value: string | undefined) {
        this._subclass = value;
    };
}
