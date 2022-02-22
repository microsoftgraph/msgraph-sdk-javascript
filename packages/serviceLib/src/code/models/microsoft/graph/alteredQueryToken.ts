import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AlteredQueryToken implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** Defines the length of a changed segment.  */
    private _length?: number | undefined;
    /** Defines the offset of a changed segment.  */
    private _offset?: number | undefined;
    /** Represents the corrected segment string.  */
    private _suggestion?: string | undefined;
    /**
     * Instantiates a new alteredQueryToken and sets the default values.
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
     * Gets the length property value. Defines the length of a changed segment.
     * @returns a integer
     */
    public get length() {
        return this._length;
    };
    /**
     * Gets the offset property value. Defines the offset of a changed segment.
     * @returns a integer
     */
    public get offset() {
        return this._offset;
    };
    /**
     * Gets the suggestion property value. Represents the corrected segment string.
     * @returns a string
     */
    public get suggestion() {
        return this._suggestion;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["length", (o, n) => { (o as unknown as AlteredQueryToken).length = n.getNumberValue(); }],
            ["offset", (o, n) => { (o as unknown as AlteredQueryToken).offset = n.getNumberValue(); }],
            ["suggestion", (o, n) => { (o as unknown as AlteredQueryToken).suggestion = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeNumberValue("length", this.length);
        writer.writeNumberValue("offset", this.offset);
        writer.writeStringValue("suggestion", this.suggestion);
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
     * Sets the length property value. Defines the length of a changed segment.
     * @param value Value to set for the length property.
     */
    public set length(value: number | undefined) {
        this._length = value;
    };
    /**
     * Sets the offset property value. Defines the offset of a changed segment.
     * @param value Value to set for the offset property.
     */
    public set offset(value: number | undefined) {
        this._offset = value;
    };
    /**
     * Sets the suggestion property value. Represents the corrected segment string.
     * @param value Value to set for the suggestion property.
     */
    public set suggestion(value: string | undefined) {
        this._suggestion = value;
    };
}
