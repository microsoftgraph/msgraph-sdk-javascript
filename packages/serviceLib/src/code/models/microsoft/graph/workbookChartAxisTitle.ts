import {Entity, WorkbookChartAxisTitleFormat} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WorkbookChartAxisTitle extends Entity implements Parsable {
    /** Represents the formatting of chart axis title. Read-only.  */
    private _format?: WorkbookChartAxisTitleFormat | undefined;
    /** Represents the axis title.  */
    private _text?: string | undefined;
    /** A boolean that specifies the visibility of an axis title.  */
    private _visible?: boolean | undefined;
    /**
     * Instantiates a new workbookChartAxisTitle and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the format property value. Represents the formatting of chart axis title. Read-only.
     * @returns a workbookChartAxisTitleFormat
     */
    public get format() {
        return this._format;
    };
    /**
     * Gets the text property value. Represents the axis title.
     * @returns a string
     */
    public get text() {
        return this._text;
    };
    /**
     * Gets the visible property value. A boolean that specifies the visibility of an axis title.
     * @returns a boolean
     */
    public get visible() {
        return this._visible;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["format", (o, n) => { (o as unknown as WorkbookChartAxisTitle).format = n.getObjectValue<WorkbookChartAxisTitleFormat>(WorkbookChartAxisTitleFormat); }],
            ["text", (o, n) => { (o as unknown as WorkbookChartAxisTitle).text = n.getStringValue(); }],
            ["visible", (o, n) => { (o as unknown as WorkbookChartAxisTitle).visible = n.getBooleanValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<WorkbookChartAxisTitleFormat>("format", this.format);
        writer.writeStringValue("text", this.text);
        writer.writeBooleanValue("visible", this.visible);
    };
    /**
     * Sets the format property value. Represents the formatting of chart axis title. Read-only.
     * @param value Value to set for the format property.
     */
    public set format(value: WorkbookChartAxisTitleFormat | undefined) {
        this._format = value;
    };
    /**
     * Sets the text property value. Represents the axis title.
     * @param value Value to set for the text property.
     */
    public set text(value: string | undefined) {
        this._text = value;
    };
    /**
     * Sets the visible property value. A boolean that specifies the visibility of an axis title.
     * @param value Value to set for the visible property.
     */
    public set visible(value: boolean | undefined) {
        this._visible = value;
    };
}
