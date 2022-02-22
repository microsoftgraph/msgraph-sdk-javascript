import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SortProperty implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** True if the sort order is descending. Default is false, with the sort order as ascending. Optional.  */
    private _isDescending?: boolean | undefined;
    /** The name of the property to sort on. Required.  */
    private _name?: string | undefined;
    /**
     * Instantiates a new sortProperty and sets the default values.
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
     * Gets the isDescending property value. True if the sort order is descending. Default is false, with the sort order as ascending. Optional.
     * @returns a boolean
     */
    public get isDescending() {
        return this._isDescending;
    };
    /**
     * Gets the name property value. The name of the property to sort on. Required.
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
            ["isDescending", (o, n) => { (o as unknown as SortProperty).isDescending = n.getBooleanValue(); }],
            ["name", (o, n) => { (o as unknown as SortProperty).name = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeBooleanValue("isDescending", this.isDescending);
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
     * Sets the isDescending property value. True if the sort order is descending. Default is false, with the sort order as ascending. Optional.
     * @param value Value to set for the isDescending property.
     */
    public set isDescending(value: boolean | undefined) {
        this._isDescending = value;
    };
    /**
     * Sets the name property value. The name of the property to sort on. Required.
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
}
