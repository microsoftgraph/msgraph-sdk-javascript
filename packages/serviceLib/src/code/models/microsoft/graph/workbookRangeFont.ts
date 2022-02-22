import {Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WorkbookRangeFont extends Entity implements Parsable {
    /** Represents the bold status of font.  */
    private _bold?: boolean | undefined;
    /** HTML color code representation of the text color. E.g. #FF0000 represents Red.  */
    private _color?: string | undefined;
    /** Represents the italic status of the font.  */
    private _italic?: boolean | undefined;
    /** Font name (e.g. 'Calibri')  */
    private _name?: string | undefined;
    /** Font size.  */
    private _size?: number | undefined;
    /** Type of underline applied to the font. The possible values are: None, Single, Double, SingleAccountant, DoubleAccountant.  */
    private _underline?: string | undefined;
    /**
     * Instantiates a new workbookRangeFont and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the bold property value. Represents the bold status of font.
     * @returns a boolean
     */
    public get bold() {
        return this._bold;
    };
    /**
     * Gets the color property value. HTML color code representation of the text color. E.g. #FF0000 represents Red.
     * @returns a string
     */
    public get color() {
        return this._color;
    };
    /**
     * Gets the italic property value. Represents the italic status of the font.
     * @returns a boolean
     */
    public get italic() {
        return this._italic;
    };
    /**
     * Gets the name property value. Font name (e.g. 'Calibri')
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Gets the size property value. Font size.
     * @returns a double
     */
    public get size() {
        return this._size;
    };
    /**
     * Gets the underline property value. Type of underline applied to the font. The possible values are: None, Single, Double, SingleAccountant, DoubleAccountant.
     * @returns a string
     */
    public get underline() {
        return this._underline;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["bold", (o, n) => { (o as unknown as WorkbookRangeFont).bold = n.getBooleanValue(); }],
            ["color", (o, n) => { (o as unknown as WorkbookRangeFont).color = n.getStringValue(); }],
            ["italic", (o, n) => { (o as unknown as WorkbookRangeFont).italic = n.getBooleanValue(); }],
            ["name", (o, n) => { (o as unknown as WorkbookRangeFont).name = n.getStringValue(); }],
            ["size", (o, n) => { (o as unknown as WorkbookRangeFont).size = n.getNumberValue(); }],
            ["underline", (o, n) => { (o as unknown as WorkbookRangeFont).underline = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeBooleanValue("bold", this.bold);
        writer.writeStringValue("color", this.color);
        writer.writeBooleanValue("italic", this.italic);
        writer.writeStringValue("name", this.name);
        writer.writeNumberValue("size", this.size);
        writer.writeStringValue("underline", this.underline);
    };
    /**
     * Sets the bold property value. Represents the bold status of font.
     * @param value Value to set for the bold property.
     */
    public set bold(value: boolean | undefined) {
        this._bold = value;
    };
    /**
     * Sets the color property value. HTML color code representation of the text color. E.g. #FF0000 represents Red.
     * @param value Value to set for the color property.
     */
    public set color(value: string | undefined) {
        this._color = value;
    };
    /**
     * Sets the italic property value. Represents the italic status of the font.
     * @param value Value to set for the italic property.
     */
    public set italic(value: boolean | undefined) {
        this._italic = value;
    };
    /**
     * Sets the name property value. Font name (e.g. 'Calibri')
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
    /**
     * Sets the size property value. Font size.
     * @param value Value to set for the size property.
     */
    public set size(value: number | undefined) {
        this._size = value;
    };
    /**
     * Sets the underline property value. Type of underline applied to the font. The possible values are: None, Single, Double, SingleAccountant, DoubleAccountant.
     * @param value Value to set for the underline property.
     */
    public set underline(value: string | undefined) {
        this._underline = value;
    };
}
