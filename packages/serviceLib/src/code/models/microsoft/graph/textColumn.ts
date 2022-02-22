import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TextColumn implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** Whether to allow multiple lines of text.  */
    private _allowMultipleLines?: boolean | undefined;
    /** Whether updates to this column should replace existing text, or append to it.  */
    private _appendChangesToExistingText?: boolean | undefined;
    /** The size of the text box.  */
    private _linesForEditing?: number | undefined;
    /** The maximum number of characters for the value.  */
    private _maxLength?: number | undefined;
    /** The type of text being stored. Must be one of plain or richText  */
    private _textType?: string | undefined;
    /**
     * Instantiates a new textColumn and sets the default values.
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
     * Gets the allowMultipleLines property value. Whether to allow multiple lines of text.
     * @returns a boolean
     */
    public get allowMultipleLines() {
        return this._allowMultipleLines;
    };
    /**
     * Gets the appendChangesToExistingText property value. Whether updates to this column should replace existing text, or append to it.
     * @returns a boolean
     */
    public get appendChangesToExistingText() {
        return this._appendChangesToExistingText;
    };
    /**
     * Gets the linesForEditing property value. The size of the text box.
     * @returns a integer
     */
    public get linesForEditing() {
        return this._linesForEditing;
    };
    /**
     * Gets the maxLength property value. The maximum number of characters for the value.
     * @returns a integer
     */
    public get maxLength() {
        return this._maxLength;
    };
    /**
     * Gets the textType property value. The type of text being stored. Must be one of plain or richText
     * @returns a string
     */
    public get textType() {
        return this._textType;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["allowMultipleLines", (o, n) => { (o as unknown as TextColumn).allowMultipleLines = n.getBooleanValue(); }],
            ["appendChangesToExistingText", (o, n) => { (o as unknown as TextColumn).appendChangesToExistingText = n.getBooleanValue(); }],
            ["linesForEditing", (o, n) => { (o as unknown as TextColumn).linesForEditing = n.getNumberValue(); }],
            ["maxLength", (o, n) => { (o as unknown as TextColumn).maxLength = n.getNumberValue(); }],
            ["textType", (o, n) => { (o as unknown as TextColumn).textType = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeBooleanValue("allowMultipleLines", this.allowMultipleLines);
        writer.writeBooleanValue("appendChangesToExistingText", this.appendChangesToExistingText);
        writer.writeNumberValue("linesForEditing", this.linesForEditing);
        writer.writeNumberValue("maxLength", this.maxLength);
        writer.writeStringValue("textType", this.textType);
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
     * Sets the allowMultipleLines property value. Whether to allow multiple lines of text.
     * @param value Value to set for the allowMultipleLines property.
     */
    public set allowMultipleLines(value: boolean | undefined) {
        this._allowMultipleLines = value;
    };
    /**
     * Sets the appendChangesToExistingText property value. Whether updates to this column should replace existing text, or append to it.
     * @param value Value to set for the appendChangesToExistingText property.
     */
    public set appendChangesToExistingText(value: boolean | undefined) {
        this._appendChangesToExistingText = value;
    };
    /**
     * Sets the linesForEditing property value. The size of the text box.
     * @param value Value to set for the linesForEditing property.
     */
    public set linesForEditing(value: number | undefined) {
        this._linesForEditing = value;
    };
    /**
     * Sets the maxLength property value. The maximum number of characters for the value.
     * @param value Value to set for the maxLength property.
     */
    public set maxLength(value: number | undefined) {
        this._maxLength = value;
    };
    /**
     * Sets the textType property value. The type of text being stored. Must be one of plain or richText
     * @param value Value to set for the textType property.
     */
    public set textType(value: string | undefined) {
        this._textType = value;
    };
}
