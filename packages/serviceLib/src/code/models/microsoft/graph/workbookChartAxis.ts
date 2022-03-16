import {createJsonFromDiscriminatorValue} from './createJsonFromDiscriminatorValue';
import {createWorkbookChartAxisFormatFromDiscriminatorValue} from './createWorkbookChartAxisFormatFromDiscriminatorValue';
import {createWorkbookChartAxisTitleFromDiscriminatorValue} from './createWorkbookChartAxisTitleFromDiscriminatorValue';
import {createWorkbookChartGridlinesFromDiscriminatorValue} from './createWorkbookChartGridlinesFromDiscriminatorValue';
import {Entity, Json, WorkbookChartAxisFormat, WorkbookChartAxisTitle, WorkbookChartGridlines} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WorkbookChartAxis extends Entity implements Parsable {
    /** Represents the formatting of a chart object, which includes line and font formatting. Read-only.  */
    private _format?: WorkbookChartAxisFormat | undefined;
    /** Returns a gridlines object that represents the major gridlines for the specified axis. Read-only.  */
    private _majorGridlines?: WorkbookChartGridlines | undefined;
    /** Represents the interval between two major tick marks. Can be set to a numeric value or an empty string.  The returned value is always a number.  */
    private _majorUnit?: Json | undefined;
    /** Represents the maximum value on the value axis.  Can be set to a numeric value or an empty string (for automatic axis values).  The returned value is always a number.  */
    private _maximum?: Json | undefined;
    /** Represents the minimum value on the value axis. Can be set to a numeric value or an empty string (for automatic axis values).  The returned value is always a number.  */
    private _minimum?: Json | undefined;
    /** Returns a Gridlines object that represents the minor gridlines for the specified axis. Read-only.  */
    private _minorGridlines?: WorkbookChartGridlines | undefined;
    /** Represents the interval between two minor tick marks. 'Can be set to a numeric value or an empty string (for automatic axis values). The returned value is always a number.  */
    private _minorUnit?: Json | undefined;
    /** Represents the axis title. Read-only.  */
    private _title?: WorkbookChartAxisTitle | undefined;
    /**
     * Instantiates a new workbookChartAxis and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the format property value. Represents the formatting of a chart object, which includes line and font formatting. Read-only.
     * @returns a workbookChartAxisFormat
     */
    public get format() {
        return this._format;
    };
    /**
     * Sets the format property value. Represents the formatting of a chart object, which includes line and font formatting. Read-only.
     * @param value Value to set for the format property.
     */
    public set format(value: WorkbookChartAxisFormat | undefined) {
        this._format = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["format", (o, n) => { (o as unknown as WorkbookChartAxis).format = n.getObjectValue<WorkbookChartAxisFormat>(createWorkbookChartAxisFormatFromDiscriminatorValue); }],
            ["majorGridlines", (o, n) => { (o as unknown as WorkbookChartAxis).majorGridlines = n.getObjectValue<WorkbookChartGridlines>(createWorkbookChartGridlinesFromDiscriminatorValue); }],
            ["majorUnit", (o, n) => { (o as unknown as WorkbookChartAxis).majorUnit = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); }],
            ["maximum", (o, n) => { (o as unknown as WorkbookChartAxis).maximum = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); }],
            ["minimum", (o, n) => { (o as unknown as WorkbookChartAxis).minimum = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); }],
            ["minorGridlines", (o, n) => { (o as unknown as WorkbookChartAxis).minorGridlines = n.getObjectValue<WorkbookChartGridlines>(createWorkbookChartGridlinesFromDiscriminatorValue); }],
            ["minorUnit", (o, n) => { (o as unknown as WorkbookChartAxis).minorUnit = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); }],
            ["title", (o, n) => { (o as unknown as WorkbookChartAxis).title = n.getObjectValue<WorkbookChartAxisTitle>(createWorkbookChartAxisTitleFromDiscriminatorValue); }],
        ]);
    };
    /**
     * Gets the majorGridlines property value. Returns a gridlines object that represents the major gridlines for the specified axis. Read-only.
     * @returns a workbookChartGridlines
     */
    public get majorGridlines() {
        return this._majorGridlines;
    };
    /**
     * Sets the majorGridlines property value. Returns a gridlines object that represents the major gridlines for the specified axis. Read-only.
     * @param value Value to set for the majorGridlines property.
     */
    public set majorGridlines(value: WorkbookChartGridlines | undefined) {
        this._majorGridlines = value;
    };
    /**
     * Gets the majorUnit property value. Represents the interval between two major tick marks. Can be set to a numeric value or an empty string.  The returned value is always a number.
     * @returns a Json
     */
    public get majorUnit() {
        return this._majorUnit;
    };
    /**
     * Sets the majorUnit property value. Represents the interval between two major tick marks. Can be set to a numeric value or an empty string.  The returned value is always a number.
     * @param value Value to set for the majorUnit property.
     */
    public set majorUnit(value: Json | undefined) {
        this._majorUnit = value;
    };
    /**
     * Gets the maximum property value. Represents the maximum value on the value axis.  Can be set to a numeric value or an empty string (for automatic axis values).  The returned value is always a number.
     * @returns a Json
     */
    public get maximum() {
        return this._maximum;
    };
    /**
     * Sets the maximum property value. Represents the maximum value on the value axis.  Can be set to a numeric value or an empty string (for automatic axis values).  The returned value is always a number.
     * @param value Value to set for the maximum property.
     */
    public set maximum(value: Json | undefined) {
        this._maximum = value;
    };
    /**
     * Gets the minimum property value. Represents the minimum value on the value axis. Can be set to a numeric value or an empty string (for automatic axis values).  The returned value is always a number.
     * @returns a Json
     */
    public get minimum() {
        return this._minimum;
    };
    /**
     * Sets the minimum property value. Represents the minimum value on the value axis. Can be set to a numeric value or an empty string (for automatic axis values).  The returned value is always a number.
     * @param value Value to set for the minimum property.
     */
    public set minimum(value: Json | undefined) {
        this._minimum = value;
    };
    /**
     * Gets the minorGridlines property value. Returns a Gridlines object that represents the minor gridlines for the specified axis. Read-only.
     * @returns a workbookChartGridlines
     */
    public get minorGridlines() {
        return this._minorGridlines;
    };
    /**
     * Sets the minorGridlines property value. Returns a Gridlines object that represents the minor gridlines for the specified axis. Read-only.
     * @param value Value to set for the minorGridlines property.
     */
    public set minorGridlines(value: WorkbookChartGridlines | undefined) {
        this._minorGridlines = value;
    };
    /**
     * Gets the minorUnit property value. Represents the interval between two minor tick marks. 'Can be set to a numeric value or an empty string (for automatic axis values). The returned value is always a number.
     * @returns a Json
     */
    public get minorUnit() {
        return this._minorUnit;
    };
    /**
     * Sets the minorUnit property value. Represents the interval between two minor tick marks. 'Can be set to a numeric value or an empty string (for automatic axis values). The returned value is always a number.
     * @param value Value to set for the minorUnit property.
     */
    public set minorUnit(value: Json | undefined) {
        this._minorUnit = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<WorkbookChartAxisFormat>("format", this.format);
        writer.writeObjectValue<WorkbookChartGridlines>("majorGridlines", this.majorGridlines);
        writer.writeObjectValue<Json>("majorUnit", this.majorUnit);
        writer.writeObjectValue<Json>("maximum", this.maximum);
        writer.writeObjectValue<Json>("minimum", this.minimum);
        writer.writeObjectValue<WorkbookChartGridlines>("minorGridlines", this.minorGridlines);
        writer.writeObjectValue<Json>("minorUnit", this.minorUnit);
        writer.writeObjectValue<WorkbookChartAxisTitle>("title", this.title);
    };
    /**
     * Gets the title property value. Represents the axis title. Read-only.
     * @returns a workbookChartAxisTitle
     */
    public get title() {
        return this._title;
    };
    /**
     * Sets the title property value. Represents the axis title. Read-only.
     * @param value Value to set for the title property.
     */
    public set title(value: WorkbookChartAxisTitle | undefined) {
        this._title = value;
    };
}
