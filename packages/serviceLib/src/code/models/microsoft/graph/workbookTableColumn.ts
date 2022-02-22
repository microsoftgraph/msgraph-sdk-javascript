import {Entity, Json, WorkbookFilter} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WorkbookTableColumn extends Entity implements Parsable {
    /** Retrieve the filter applied to the column. Read-only.  */
    private _filter?: WorkbookFilter | undefined;
    /** Returns the index number of the column within the columns collection of the table. Zero-indexed. Read-only.  */
    private _index?: number | undefined;
    /** Returns the name of the table column.  */
    private _name?: string | undefined;
    /** Represents the raw values of the specified range. The data returned could be of type string, number, or a boolean. Cell that contain an error will return the error string.  */
    private _values?: Json | undefined;
    /**
     * Instantiates a new workbookTableColumn and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the filter property value. Retrieve the filter applied to the column. Read-only.
     * @returns a workbookFilter
     */
    public get filter() {
        return this._filter;
    };
    /**
     * Gets the index property value. Returns the index number of the column within the columns collection of the table. Zero-indexed. Read-only.
     * @returns a integer
     */
    public get index() {
        return this._index;
    };
    /**
     * Gets the name property value. Returns the name of the table column.
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Gets the values property value. Represents the raw values of the specified range. The data returned could be of type string, number, or a boolean. Cell that contain an error will return the error string.
     * @returns a Json
     */
    public get values() {
        return this._values;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["filter", (o, n) => { (o as unknown as WorkbookTableColumn).filter = n.getObjectValue<WorkbookFilter>(WorkbookFilter); }],
            ["index", (o, n) => { (o as unknown as WorkbookTableColumn).index = n.getNumberValue(); }],
            ["name", (o, n) => { (o as unknown as WorkbookTableColumn).name = n.getStringValue(); }],
            ["values", (o, n) => { (o as unknown as WorkbookTableColumn).values = n.getObjectValue<Json>(Json); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<WorkbookFilter>("filter", this.filter);
        writer.writeNumberValue("index", this.index);
        writer.writeStringValue("name", this.name);
        writer.writeObjectValue<Json>("values", this.values);
    };
    /**
     * Sets the filter property value. Retrieve the filter applied to the column. Read-only.
     * @param value Value to set for the filter property.
     */
    public set filter(value: WorkbookFilter | undefined) {
        this._filter = value;
    };
    /**
     * Sets the index property value. Returns the index number of the column within the columns collection of the table. Zero-indexed. Read-only.
     * @param value Value to set for the index property.
     */
    public set index(value: number | undefined) {
        this._index = value;
    };
    /**
     * Sets the name property value. Returns the name of the table column.
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
    /**
     * Sets the values property value. Represents the raw values of the specified range. The data returned could be of type string, number, or a boolean. Cell that contain an error will return the error string.
     * @param value Value to set for the values property.
     */
    public set values(value: Json | undefined) {
        this._values = value;
    };
}
