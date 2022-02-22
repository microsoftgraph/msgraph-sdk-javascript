import {Entity, WorkbookChartFill, WorkbookChartLineFormat} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WorkbookChartSeriesFormat extends Entity implements Parsable {
    /** Represents the fill format of a chart series, which includes background formating information. Read-only.  */
    private _fill?: WorkbookChartFill | undefined;
    /** Represents line formatting. Read-only.  */
    private _line?: WorkbookChartLineFormat | undefined;
    /**
     * Instantiates a new workbookChartSeriesFormat and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the fill property value. Represents the fill format of a chart series, which includes background formating information. Read-only.
     * @returns a workbookChartFill
     */
    public get fill() {
        return this._fill;
    };
    /**
     * Gets the line property value. Represents line formatting. Read-only.
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
            ["fill", (o, n) => { (o as unknown as WorkbookChartSeriesFormat).fill = n.getObjectValue<WorkbookChartFill>(WorkbookChartFill); }],
            ["line", (o, n) => { (o as unknown as WorkbookChartSeriesFormat).line = n.getObjectValue<WorkbookChartLineFormat>(WorkbookChartLineFormat); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<WorkbookChartFill>("fill", this.fill);
        writer.writeObjectValue<WorkbookChartLineFormat>("line", this.line);
    };
    /**
     * Sets the fill property value. Represents the fill format of a chart series, which includes background formating information. Read-only.
     * @param value Value to set for the fill property.
     */
    public set fill(value: WorkbookChartFill | undefined) {
        this._fill = value;
    };
    /**
     * Sets the line property value. Represents line formatting. Read-only.
     * @param value Value to set for the line property.
     */
    public set line(value: WorkbookChartLineFormat | undefined) {
        this._line = value;
    };
}
