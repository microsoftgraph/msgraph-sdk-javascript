import {Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WorkbookChartLineFormat extends Entity implements Parsable {
    /** HTML color code representing the color of lines in the chart.  */
    private _color?: string | undefined;
    /**
     * Gets the color property value. HTML color code representing the color of lines in the chart.
     * @returns a string
     */
    public get color() {
        return this._color;
    };
    /**
     * Sets the color property value. HTML color code representing the color of lines in the chart.
     * @param value Value to set for the color property.
     */
    public set color(value: string | undefined) {
        this._color = value;
    };
    /**
     * Instantiates a new workbookChartLineFormat and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["color", (o, n) => { (o as unknown as WorkbookChartLineFormat).color = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("color", this.color);
    };
}
