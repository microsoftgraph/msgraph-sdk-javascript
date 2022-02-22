import {Entity, WorkbookChartTitleFormat} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WorkbookChartTitle extends Entity implements Parsable {
    /** Represents the formatting of a chart title, which includes fill and font formatting. Read-only.  */
    private _format?: WorkbookChartTitleFormat | undefined;
    /** Boolean value representing if the chart title will overlay the chart or not.  */
    private _overlay?: boolean | undefined;
    /** Represents the title text of a chart.  */
    private _text?: string | undefined;
    /** A boolean value the represents the visibility of a chart title object.  */
    private _visible?: boolean | undefined;
    /**
     * Instantiates a new workbookChartTitle and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the format property value. Represents the formatting of a chart title, which includes fill and font formatting. Read-only.
     * @returns a workbookChartTitleFormat
     */
    public get format() {
        return this._format;
    };
    /**
     * Gets the overlay property value. Boolean value representing if the chart title will overlay the chart or not.
     * @returns a boolean
     */
    public get overlay() {
        return this._overlay;
    };
    /**
     * Gets the text property value. Represents the title text of a chart.
     * @returns a string
     */
    public get text() {
        return this._text;
    };
    /**
     * Gets the visible property value. A boolean value the represents the visibility of a chart title object.
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
            ["format", (o, n) => { (o as unknown as WorkbookChartTitle).format = n.getObjectValue<WorkbookChartTitleFormat>(WorkbookChartTitleFormat); }],
            ["overlay", (o, n) => { (o as unknown as WorkbookChartTitle).overlay = n.getBooleanValue(); }],
            ["text", (o, n) => { (o as unknown as WorkbookChartTitle).text = n.getStringValue(); }],
            ["visible", (o, n) => { (o as unknown as WorkbookChartTitle).visible = n.getBooleanValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<WorkbookChartTitleFormat>("format", this.format);
        writer.writeBooleanValue("overlay", this.overlay);
        writer.writeStringValue("text", this.text);
        writer.writeBooleanValue("visible", this.visible);
    };
    /**
     * Sets the format property value. Represents the formatting of a chart title, which includes fill and font formatting. Read-only.
     * @param value Value to set for the format property.
     */
    public set format(value: WorkbookChartTitleFormat | undefined) {
        this._format = value;
    };
    /**
     * Sets the overlay property value. Boolean value representing if the chart title will overlay the chart or not.
     * @param value Value to set for the overlay property.
     */
    public set overlay(value: boolean | undefined) {
        this._overlay = value;
    };
    /**
     * Sets the text property value. Represents the title text of a chart.
     * @param value Value to set for the text property.
     */
    public set text(value: string | undefined) {
        this._text = value;
    };
    /**
     * Sets the visible property value. A boolean value the represents the visibility of a chart title object.
     * @param value Value to set for the visible property.
     */
    public set visible(value: boolean | undefined) {
        this._visible = value;
    };
}
