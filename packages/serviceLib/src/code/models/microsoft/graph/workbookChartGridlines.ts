import {createWorkbookChartGridlinesFormatFromDiscriminatorValue} from './createWorkbookChartGridlinesFormatFromDiscriminatorValue';
import {Entity, WorkbookChartGridlinesFormat} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WorkbookChartGridlines extends Entity implements Parsable {
    /** Represents the formatting of chart gridlines. Read-only.  */
    private _format?: WorkbookChartGridlinesFormat | undefined;
    /** Boolean value representing if the axis gridlines are visible or not.  */
    private _visible?: boolean | undefined;
    /**
     * Instantiates a new workbookChartGridlines and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the format property value. Represents the formatting of chart gridlines. Read-only.
     * @returns a workbookChartGridlinesFormat
     */
    public get format() {
        return this._format;
    };
    /**
     * Sets the format property value. Represents the formatting of chart gridlines. Read-only.
     * @param value Value to set for the format property.
     */
    public set format(value: WorkbookChartGridlinesFormat | undefined) {
        this._format = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["format", (o, n) => { (o as unknown as WorkbookChartGridlines).format = n.getObjectValue<WorkbookChartGridlinesFormat>(createWorkbookChartGridlinesFormatFromDiscriminatorValue); }],
            ["visible", (o, n) => { (o as unknown as WorkbookChartGridlines).visible = n.getBooleanValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<WorkbookChartGridlinesFormat>("format", this.format);
        writer.writeBooleanValue("visible", this.visible);
    };
    /**
     * Gets the visible property value. Boolean value representing if the axis gridlines are visible or not.
     * @returns a boolean
     */
    public get visible() {
        return this._visible;
    };
    /**
     * Sets the visible property value. Boolean value representing if the axis gridlines are visible or not.
     * @param value Value to set for the visible property.
     */
    public set visible(value: boolean | undefined) {
        this._visible = value;
    };
}
