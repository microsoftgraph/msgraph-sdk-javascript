import {Entity, WorkbookChartFont, WorkbookChartLineFormat} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WorkbookChartAxisFormat extends Entity implements Parsable {
    /** Represents the font attributes (font name, font size, color, etc.) for a chart axis element. Read-only.  */
    private _font?: WorkbookChartFont | undefined;
    /** Represents chart line formatting. Read-only.  */
    private _line?: WorkbookChartLineFormat | undefined;
    /**
     * Instantiates a new workbookChartAxisFormat and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the font property value. Represents the font attributes (font name, font size, color, etc.) for a chart axis element. Read-only.
     * @returns a workbookChartFont
     */
    public get font() {
        return this._font;
    };
    /**
     * Gets the line property value. Represents chart line formatting. Read-only.
     * @returns a workbookChartLineFormat
     */
    public get line() {
        return this._line;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["font", (o, n) => { (o as unknown as WorkbookChartAxisFormat).font = n.getObjectValue<WorkbookChartFont>(WorkbookChartFont); }],
            ["line", (o, n) => { (o as unknown as WorkbookChartAxisFormat).line = n.getObjectValue<WorkbookChartLineFormat>(WorkbookChartLineFormat); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<WorkbookChartFont>("font", this.font);
        writer.writeObjectValue<WorkbookChartLineFormat>("line", this.line);
    };
    /**
     * Sets the font property value. Represents the font attributes (font name, font size, color, etc.) for a chart axis element. Read-only.
     * @param value Value to set for the font property.
     */
    public set font(value: WorkbookChartFont | undefined) {
        this._font = value;
    };
    /**
     * Sets the line property value. Represents chart line formatting. Read-only.
     * @param value Value to set for the line property.
     */
    public set line(value: WorkbookChartLineFormat | undefined) {
        this._line = value;
    };
}
