import {Entity, WorkbookChartAreaFormat, WorkbookChartAxes, WorkbookChartDataLabels, WorkbookChartLegend, WorkbookChartSeries, WorkbookChartTitle, WorkbookWorksheet} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WorkbookChart extends Entity implements Parsable {
    /** Represents chart axes. Read-only.  */
    private _axes?: WorkbookChartAxes | undefined;
    /** Represents the datalabels on the chart. Read-only.  */
    private _dataLabels?: WorkbookChartDataLabels | undefined;
    /** Encapsulates the format properties for the chart area. Read-only.  */
    private _format?: WorkbookChartAreaFormat | undefined;
    /** Represents the height, in points, of the chart object.  */
    private _height?: number | undefined;
    /** The distance, in points, from the left side of the chart to the worksheet origin.  */
    private _left?: number | undefined;
    /** Represents the legend for the chart. Read-only.  */
    private _legend?: WorkbookChartLegend | undefined;
    /** Represents the name of a chart object.  */
    private _name?: string | undefined;
    /** Represents either a single series or collection of series in the chart. Read-only.  */
    private _series?: WorkbookChartSeries[] | undefined;
    /** Represents the title of the specified chart, including the text, visibility, position and formating of the title. Read-only.  */
    private _title?: WorkbookChartTitle | undefined;
    /** Represents the distance, in points, from the top edge of the object to the top of row 1 (on a worksheet) or the top of the chart area (on a chart).  */
    private _top?: number | undefined;
    /** Represents the width, in points, of the chart object.  */
    private _width?: number | undefined;
    /** The worksheet containing the current chart. Read-only.  */
    private _worksheet?: WorkbookWorksheet | undefined;
    /**
     * Instantiates a new workbookChart and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the axes property value. Represents chart axes. Read-only.
     * @returns a workbookChartAxes
     */
    public get axes() {
        return this._axes;
    };
    /**
     * Gets the dataLabels property value. Represents the datalabels on the chart. Read-only.
     * @returns a workbookChartDataLabels
     */
    public get dataLabels() {
        return this._dataLabels;
    };
    /**
     * Gets the format property value. Encapsulates the format properties for the chart area. Read-only.
     * @returns a workbookChartAreaFormat
     */
    public get format() {
        return this._format;
    };
    /**
     * Gets the height property value. Represents the height, in points, of the chart object.
     * @returns a double
     */
    public get height() {
        return this._height;
    };
    /**
     * Gets the left property value. The distance, in points, from the left side of the chart to the worksheet origin.
     * @returns a double
     */
    public get left() {
        return this._left;
    };
    /**
     * Gets the legend property value. Represents the legend for the chart. Read-only.
     * @returns a workbookChartLegend
     */
    public get legend() {
        return this._legend;
    };
    /**
     * Gets the name property value. Represents the name of a chart object.
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Gets the series property value. Represents either a single series or collection of series in the chart. Read-only.
     * @returns a workbookChartSeries
     */
    public get series() {
        return this._series;
    };
    /**
     * Gets the title property value. Represents the title of the specified chart, including the text, visibility, position and formating of the title. Read-only.
     * @returns a workbookChartTitle
     */
    public get title() {
        return this._title;
    };
    /**
     * Gets the top property value. Represents the distance, in points, from the top edge of the object to the top of row 1 (on a worksheet) or the top of the chart area (on a chart).
     * @returns a double
     */
    public get top() {
        return this._top;
    };
    /**
     * Gets the width property value. Represents the width, in points, of the chart object.
     * @returns a double
     */
    public get width() {
        return this._width;
    };
    /**
     * Gets the worksheet property value. The worksheet containing the current chart. Read-only.
     * @returns a workbookWorksheet
     */
    public get worksheet() {
        return this._worksheet;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["axes", (o, n) => { (o as unknown as WorkbookChart).axes = n.getObjectValue<WorkbookChartAxes>(WorkbookChartAxes); }],
            ["dataLabels", (o, n) => { (o as unknown as WorkbookChart).dataLabels = n.getObjectValue<WorkbookChartDataLabels>(WorkbookChartDataLabels); }],
            ["format", (o, n) => { (o as unknown as WorkbookChart).format = n.getObjectValue<WorkbookChartAreaFormat>(WorkbookChartAreaFormat); }],
            ["height", (o, n) => { (o as unknown as WorkbookChart).height = n.getNumberValue(); }],
            ["left", (o, n) => { (o as unknown as WorkbookChart).left = n.getNumberValue(); }],
            ["legend", (o, n) => { (o as unknown as WorkbookChart).legend = n.getObjectValue<WorkbookChartLegend>(WorkbookChartLegend); }],
            ["name", (o, n) => { (o as unknown as WorkbookChart).name = n.getStringValue(); }],
            ["series", (o, n) => { (o as unknown as WorkbookChart).series = n.getCollectionOfObjectValues<WorkbookChartSeries>(WorkbookChartSeries); }],
            ["title", (o, n) => { (o as unknown as WorkbookChart).title = n.getObjectValue<WorkbookChartTitle>(WorkbookChartTitle); }],
            ["top", (o, n) => { (o as unknown as WorkbookChart).top = n.getNumberValue(); }],
            ["width", (o, n) => { (o as unknown as WorkbookChart).width = n.getNumberValue(); }],
            ["worksheet", (o, n) => { (o as unknown as WorkbookChart).worksheet = n.getObjectValue<WorkbookWorksheet>(WorkbookWorksheet); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<WorkbookChartAxes>("axes", this.axes);
        writer.writeObjectValue<WorkbookChartDataLabels>("dataLabels", this.dataLabels);
        writer.writeObjectValue<WorkbookChartAreaFormat>("format", this.format);
        writer.writeNumberValue("height", this.height);
        writer.writeNumberValue("left", this.left);
        writer.writeObjectValue<WorkbookChartLegend>("legend", this.legend);
        writer.writeStringValue("name", this.name);
        writer.writeCollectionOfObjectValues<WorkbookChartSeries>("series", this.series);
        writer.writeObjectValue<WorkbookChartTitle>("title", this.title);
        writer.writeNumberValue("top", this.top);
        writer.writeNumberValue("width", this.width);
        writer.writeObjectValue<WorkbookWorksheet>("worksheet", this.worksheet);
    };
    /**
     * Sets the axes property value. Represents chart axes. Read-only.
     * @param value Value to set for the axes property.
     */
    public set axes(value: WorkbookChartAxes | undefined) {
        this._axes = value;
    };
    /**
     * Sets the dataLabels property value. Represents the datalabels on the chart. Read-only.
     * @param value Value to set for the dataLabels property.
     */
    public set dataLabels(value: WorkbookChartDataLabels | undefined) {
        this._dataLabels = value;
    };
    /**
     * Sets the format property value. Encapsulates the format properties for the chart area. Read-only.
     * @param value Value to set for the format property.
     */
    public set format(value: WorkbookChartAreaFormat | undefined) {
        this._format = value;
    };
    /**
     * Sets the height property value. Represents the height, in points, of the chart object.
     * @param value Value to set for the height property.
     */
    public set height(value: number | undefined) {
        this._height = value;
    };
    /**
     * Sets the left property value. The distance, in points, from the left side of the chart to the worksheet origin.
     * @param value Value to set for the left property.
     */
    public set left(value: number | undefined) {
        this._left = value;
    };
    /**
     * Sets the legend property value. Represents the legend for the chart. Read-only.
     * @param value Value to set for the legend property.
     */
    public set legend(value: WorkbookChartLegend | undefined) {
        this._legend = value;
    };
    /**
     * Sets the name property value. Represents the name of a chart object.
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
    /**
     * Sets the series property value. Represents either a single series or collection of series in the chart. Read-only.
     * @param value Value to set for the series property.
     */
    public set series(value: WorkbookChartSeries[] | undefined) {
        this._series = value;
    };
    /**
     * Sets the title property value. Represents the title of the specified chart, including the text, visibility, position and formating of the title. Read-only.
     * @param value Value to set for the title property.
     */
    public set title(value: WorkbookChartTitle | undefined) {
        this._title = value;
    };
    /**
     * Sets the top property value. Represents the distance, in points, from the top edge of the object to the top of row 1 (on a worksheet) or the top of the chart area (on a chart).
     * @param value Value to set for the top property.
     */
    public set top(value: number | undefined) {
        this._top = value;
    };
    /**
     * Sets the width property value. Represents the width, in points, of the chart object.
     * @param value Value to set for the width property.
     */
    public set width(value: number | undefined) {
        this._width = value;
    };
    /**
     * Sets the worksheet property value. The worksheet containing the current chart. Read-only.
     * @param value Value to set for the worksheet property.
     */
    public set worksheet(value: WorkbookWorksheet | undefined) {
        this._worksheet = value;
    };
}
