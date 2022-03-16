import {createJsonFromDiscriminatorValue} from './createJsonFromDiscriminatorValue';
import {Entity, Json} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WorkbookTableRow extends Entity implements Parsable {
    /** Returns the index number of the row within the rows collection of the table. Zero-indexed. Read-only.  */
    private _index?: number | undefined;
    /** Represents the raw values of the specified range. The data returned could be of type string, number, or a boolean. Cell that contain an error will return the error string.  */
    private _values?: Json | undefined;
    /**
     * Instantiates a new workbookTableRow and sets the default values.
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
            ["index", (o, n) => { (o as unknown as WorkbookTableRow).index = n.getNumberValue(); }],
            ["values", (o, n) => { (o as unknown as WorkbookTableRow).values = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); }],
        ]);
    };
    /**
     * Gets the index property value. Returns the index number of the row within the rows collection of the table. Zero-indexed. Read-only.
     * @returns a integer
     */
    public get index() {
        return this._index;
    };
    /**
     * Sets the index property value. Returns the index number of the row within the rows collection of the table. Zero-indexed. Read-only.
     * @param value Value to set for the index property.
     */
    public set index(value: number | undefined) {
        this._index = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeNumberValue("index", this.index);
        writer.writeObjectValue<Json>("values", this.values);
    };
    /**
     * Gets the values property value. Represents the raw values of the specified range. The data returned could be of type string, number, or a boolean. Cell that contain an error will return the error string.
     * @returns a Json
     */
    public get values() {
        return this._values;
    };
    /**
     * Sets the values property value. Represents the raw values of the specified range. The data returned could be of type string, number, or a boolean. Cell that contain an error will return the error string.
     * @param value Value to set for the values property.
     */
    public set values(value: Json | undefined) {
        this._values = value;
    };
}
