import {Entity, WorkbookChartFont} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WorkbookChartAxisTitleFormat extends Entity implements Parsable {
    /** Represents the font attributes, such as font name, font size, color, etc. of chart axis title object. Read-only.  */
    private _font?: WorkbookChartFont | undefined;
    /**
     * Instantiates a new workbookChartAxisTitleFormat and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the font property value. Represents the font attributes, such as font name, font size, color, etc. of chart axis title object. Read-only.
     * @returns a workbookChartFont
     */
    public get font() {
        return this._font;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["font", (o, n) => { (o as unknown as WorkbookChartAxisTitleFormat).font = n.getObjectValue<WorkbookChartFont>(WorkbookChartFont); }],
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
    };
    /**
     * Sets the font property value. Represents the font attributes, such as font name, font size, color, etc. of chart axis title object. Read-only.
     * @param value Value to set for the font property.
     */
    public set font(value: WorkbookChartFont | undefined) {
        this._font = value;
    };
}
