import {Entity, WorkbookChartDataLabelFormat} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WorkbookChartDataLabels extends Entity implements Parsable {
    /** Represents the format of chart data labels, which includes fill and font formatting. Read-only.  */
    private _format?: WorkbookChartDataLabelFormat | undefined;
    /** DataLabelPosition value that represents the position of the data label. The possible values are: None, Center, InsideEnd, InsideBase, OutsideEnd, Left, Right, Top, Bottom, BestFit, Callout.  */
    private _position?: string | undefined;
    /** String representing the separator used for the data labels on a chart.  */
    private _separator?: string | undefined;
    /** Boolean value representing if the data label bubble size is visible or not.  */
    private _showBubbleSize?: boolean | undefined;
    /** Boolean value representing if the data label category name is visible or not.  */
    private _showCategoryName?: boolean | undefined;
    /** Boolean value representing if the data label legend key is visible or not.  */
    private _showLegendKey?: boolean | undefined;
    /** Boolean value representing if the data label percentage is visible or not.  */
    private _showPercentage?: boolean | undefined;
    /** Boolean value representing if the data label series name is visible or not.  */
    private _showSeriesName?: boolean | undefined;
    /** Boolean value representing if the data label value is visible or not.  */
    private _showValue?: boolean | undefined;
    /**
     * Instantiates a new workbookChartDataLabels and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the format property value. Represents the format of chart data labels, which includes fill and font formatting. Read-only.
     * @returns a workbookChartDataLabelFormat
     */
    public get format() {
        return this._format;
    };
    /**
     * Gets the position property value. DataLabelPosition value that represents the position of the data label. The possible values are: None, Center, InsideEnd, InsideBase, OutsideEnd, Left, Right, Top, Bottom, BestFit, Callout.
     * @returns a string
     */
    public get position() {
        return this._position;
    };
    /**
     * Gets the separator property value. String representing the separator used for the data labels on a chart.
     * @returns a string
     */
    public get separator() {
        return this._separator;
    };
    /**
     * Gets the showBubbleSize property value. Boolean value representing if the data label bubble size is visible or not.
     * @returns a boolean
     */
    public get showBubbleSize() {
        return this._showBubbleSize;
    };
    /**
     * Gets the showCategoryName property value. Boolean value representing if the data label category name is visible or not.
     * @returns a boolean
     */
    public get showCategoryName() {
        return this._showCategoryName;
    };
    /**
     * Gets the showLegendKey property value. Boolean value representing if the data label legend key is visible or not.
     * @returns a boolean
     */
    public get showLegendKey() {
        return this._showLegendKey;
    };
    /**
     * Gets the showPercentage property value. Boolean value representing if the data label percentage is visible or not.
     * @returns a boolean
     */
    public get showPercentage() {
        return this._showPercentage;
    };
    /**
     * Gets the showSeriesName property value. Boolean value representing if the data label series name is visible or not.
     * @returns a boolean
     */
    public get showSeriesName() {
        return this._showSeriesName;
    };
    /**
     * Gets the showValue property value. Boolean value representing if the data label value is visible or not.
     * @returns a boolean
     */
    public get showValue() {
        return this._showValue;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["format", (o, n) => { (o as unknown as WorkbookChartDataLabels).format = n.getObjectValue<WorkbookChartDataLabelFormat>(WorkbookChartDataLabelFormat); }],
            ["position", (o, n) => { (o as unknown as WorkbookChartDataLabels).position = n.getStringValue(); }],
            ["separator", (o, n) => { (o as unknown as WorkbookChartDataLabels).separator = n.getStringValue(); }],
            ["showBubbleSize", (o, n) => { (o as unknown as WorkbookChartDataLabels).showBubbleSize = n.getBooleanValue(); }],
            ["showCategoryName", (o, n) => { (o as unknown as WorkbookChartDataLabels).showCategoryName = n.getBooleanValue(); }],
            ["showLegendKey", (o, n) => { (o as unknown as WorkbookChartDataLabels).showLegendKey = n.getBooleanValue(); }],
            ["showPercentage", (o, n) => { (o as unknown as WorkbookChartDataLabels).showPercentage = n.getBooleanValue(); }],
            ["showSeriesName", (o, n) => { (o as unknown as WorkbookChartDataLabels).showSeriesName = n.getBooleanValue(); }],
            ["showValue", (o, n) => { (o as unknown as WorkbookChartDataLabels).showValue = n.getBooleanValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<WorkbookChartDataLabelFormat>("format", this.format);
        writer.writeStringValue("position", this.position);
        writer.writeStringValue("separator", this.separator);
        writer.writeBooleanValue("showBubbleSize", this.showBubbleSize);
        writer.writeBooleanValue("showCategoryName", this.showCategoryName);
        writer.writeBooleanValue("showLegendKey", this.showLegendKey);
        writer.writeBooleanValue("showPercentage", this.showPercentage);
        writer.writeBooleanValue("showSeriesName", this.showSeriesName);
        writer.writeBooleanValue("showValue", this.showValue);
    };
    /**
     * Sets the format property value. Represents the format of chart data labels, which includes fill and font formatting. Read-only.
     * @param value Value to set for the format property.
     */
    public set format(value: WorkbookChartDataLabelFormat | undefined) {
        this._format = value;
    };
    /**
     * Sets the position property value. DataLabelPosition value that represents the position of the data label. The possible values are: None, Center, InsideEnd, InsideBase, OutsideEnd, Left, Right, Top, Bottom, BestFit, Callout.
     * @param value Value to set for the position property.
     */
    public set position(value: string | undefined) {
        this._position = value;
    };
    /**
     * Sets the separator property value. String representing the separator used for the data labels on a chart.
     * @param value Value to set for the separator property.
     */
    public set separator(value: string | undefined) {
        this._separator = value;
    };
    /**
     * Sets the showBubbleSize property value. Boolean value representing if the data label bubble size is visible or not.
     * @param value Value to set for the showBubbleSize property.
     */
    public set showBubbleSize(value: boolean | undefined) {
        this._showBubbleSize = value;
    };
    /**
     * Sets the showCategoryName property value. Boolean value representing if the data label category name is visible or not.
     * @param value Value to set for the showCategoryName property.
     */
    public set showCategoryName(value: boolean | undefined) {
        this._showCategoryName = value;
    };
    /**
     * Sets the showLegendKey property value. Boolean value representing if the data label legend key is visible or not.
     * @param value Value to set for the showLegendKey property.
     */
    public set showLegendKey(value: boolean | undefined) {
        this._showLegendKey = value;
    };
    /**
     * Sets the showPercentage property value. Boolean value representing if the data label percentage is visible or not.
     * @param value Value to set for the showPercentage property.
     */
    public set showPercentage(value: boolean | undefined) {
        this._showPercentage = value;
    };
    /**
     * Sets the showSeriesName property value. Boolean value representing if the data label series name is visible or not.
     * @param value Value to set for the showSeriesName property.
     */
    public set showSeriesName(value: boolean | undefined) {
        this._showSeriesName = value;
    };
    /**
     * Sets the showValue property value. Boolean value representing if the data label value is visible or not.
     * @param value Value to set for the showValue property.
     */
    public set showValue(value: boolean | undefined) {
        this._showValue = value;
    };
}
