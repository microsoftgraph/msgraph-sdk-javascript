import {createWorkbookSortFieldFromDiscriminatorValue} from './createWorkbookSortFieldFromDiscriminatorValue';
import {Entity, WorkbookSortField} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WorkbookTableSort extends Entity implements Parsable {
    /** Represents the current conditions used to last sort the table. Read-only.  */
    private _fields?: WorkbookSortField[] | undefined;
    /** Represents whether the casing impacted the last sort of the table. Read-only.  */
    private _matchCase?: boolean | undefined;
    /** Represents Chinese character ordering method last used to sort the table. The possible values are: PinYin, StrokeCount. Read-only.  */
    private _method?: string | undefined;
    /**
     * Instantiates a new workbookTableSort and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the fields property value. Represents the current conditions used to last sort the table. Read-only.
     * @returns a workbookSortField
     */
    public get fields() {
        return this._fields;
    };
    /**
     * Sets the fields property value. Represents the current conditions used to last sort the table. Read-only.
     * @param value Value to set for the fields property.
     */
    public set fields(value: WorkbookSortField[] | undefined) {
        this._fields = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["fields", (o, n) => { (o as unknown as WorkbookTableSort).fields = n.getCollectionOfObjectValues<WorkbookSortField>(createWorkbookSortFieldFromDiscriminatorValue); }],
            ["matchCase", (o, n) => { (o as unknown as WorkbookTableSort).matchCase = n.getBooleanValue(); }],
            ["method", (o, n) => { (o as unknown as WorkbookTableSort).method = n.getStringValue(); }],
        ]);
    };
    /**
     * Gets the matchCase property value. Represents whether the casing impacted the last sort of the table. Read-only.
     * @returns a boolean
     */
    public get matchCase() {
        return this._matchCase;
    };
    /**
     * Sets the matchCase property value. Represents whether the casing impacted the last sort of the table. Read-only.
     * @param value Value to set for the matchCase property.
     */
    public set matchCase(value: boolean | undefined) {
        this._matchCase = value;
    };
    /**
     * Gets the method property value. Represents Chinese character ordering method last used to sort the table. The possible values are: PinYin, StrokeCount. Read-only.
     * @returns a string
     */
    public get method() {
        return this._method;
    };
    /**
     * Sets the method property value. Represents Chinese character ordering method last used to sort the table. The possible values are: PinYin, StrokeCount. Read-only.
     * @param value Value to set for the method property.
     */
    public set method(value: string | undefined) {
        this._method = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<WorkbookSortField>("fields", this.fields);
        writer.writeBooleanValue("matchCase", this.matchCase);
        writer.writeStringValue("method", this.method);
    };
}
