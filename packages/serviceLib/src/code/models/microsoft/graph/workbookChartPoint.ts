import {createJsonFromDiscriminatorValue} from './createJsonFromDiscriminatorValue';
import {createWorkbookChartPointFormatFromDiscriminatorValue} from './createWorkbookChartPointFormatFromDiscriminatorValue';
import {Entity, Json, WorkbookChartPointFormat} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WorkbookChartPoint extends Entity implements Parsable {
    /** Encapsulates the format properties chart point. Read-only.  */
    private _format?: WorkbookChartPointFormat | undefined;
    /** Returns the value of a chart point. Read-only.  */
    private _value?: Json | undefined;
    /**
     * Instantiates a new workbookChartPoint and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the format property value. Encapsulates the format properties chart point. Read-only.
     * @returns a workbookChartPointFormat
     */
    public get format() {
        return this._format;
    };
    /**
     * Sets the format property value. Encapsulates the format properties chart point. Read-only.
     * @param value Value to set for the format property.
     */
    public set format(value: WorkbookChartPointFormat | undefined) {
        this._format = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["format", (o, n) => { (o as unknown as WorkbookChartPoint).format = n.getObjectValue<WorkbookChartPointFormat>(createWorkbookChartPointFormatFromDiscriminatorValue); }],
            ["value", (o, n) => { (o as unknown as WorkbookChartPoint).value = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<WorkbookChartPointFormat>("format", this.format);
        writer.writeObjectValue<Json>("value", this.value);
    };
    /**
     * Gets the value property value. Returns the value of a chart point. Read-only.
     * @returns a Json
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. Returns the value of a chart point. Read-only.
     * @param value Value to set for the value property.
     */
    public set value(value: Json | undefined) {
        this._value = value;
    };
}
