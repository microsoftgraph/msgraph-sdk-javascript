import {createJsonFromDiscriminatorValue} from './createJsonFromDiscriminatorValue';
import {createWorkbookWorksheetFromDiscriminatorValue} from './createWorkbookWorksheetFromDiscriminatorValue';
import {Entity, Json, WorkbookWorksheet} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WorkbookNamedItem extends Entity implements Parsable {
    /** Represents the comment associated with this name.  */
    private _comment?: string | undefined;
    /** The name of the object. Read-only.  */
    private _name?: string | undefined;
    /** Indicates whether the name is scoped to the workbook or to a specific worksheet. Read-only.  */
    private _scope?: string | undefined;
    /** Indicates what type of reference is associated with the name. The possible values are: String, Integer, Double, Boolean, Range. Read-only.  */
    private _type?: string | undefined;
    /** Represents the formula that the name is defined to refer to. E.g. =Sheet14!$B$2:$H$12, =4.75, etc. Read-only.  */
    private _value?: Json | undefined;
    /** Specifies whether the object is visible or not.  */
    private _visible?: boolean | undefined;
    /** Returns the worksheet on which the named item is scoped to. Available only if the item is scoped to the worksheet. Read-only.  */
    private _worksheet?: WorkbookWorksheet | undefined;
    /**
     * Gets the comment property value. Represents the comment associated with this name.
     * @returns a string
     */
    public get comment() {
        return this._comment;
    };
    /**
     * Sets the comment property value. Represents the comment associated with this name.
     * @param value Value to set for the comment property.
     */
    public set comment(value: string | undefined) {
        this._comment = value;
    };
    /**
     * Instantiates a new workbookNamedItem and sets the default values.
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
            ["comment", (o, n) => { (o as unknown as WorkbookNamedItem).comment = n.getStringValue(); }],
            ["name", (o, n) => { (o as unknown as WorkbookNamedItem).name = n.getStringValue(); }],
            ["scope", (o, n) => { (o as unknown as WorkbookNamedItem).scope = n.getStringValue(); }],
            ["type", (o, n) => { (o as unknown as WorkbookNamedItem).type = n.getStringValue(); }],
            ["value", (o, n) => { (o as unknown as WorkbookNamedItem).value = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); }],
            ["visible", (o, n) => { (o as unknown as WorkbookNamedItem).visible = n.getBooleanValue(); }],
            ["worksheet", (o, n) => { (o as unknown as WorkbookNamedItem).worksheet = n.getObjectValue<WorkbookWorksheet>(createWorkbookWorksheetFromDiscriminatorValue); }],
        ]);
    };
    /**
     * Gets the name property value. The name of the object. Read-only.
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. The name of the object. Read-only.
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
    /**
     * Gets the scope property value. Indicates whether the name is scoped to the workbook or to a specific worksheet. Read-only.
     * @returns a string
     */
    public get scope() {
        return this._scope;
    };
    /**
     * Sets the scope property value. Indicates whether the name is scoped to the workbook or to a specific worksheet. Read-only.
     * @param value Value to set for the scope property.
     */
    public set scope(value: string | undefined) {
        this._scope = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("comment", this.comment);
        writer.writeStringValue("name", this.name);
        writer.writeStringValue("scope", this.scope);
        writer.writeStringValue("type", this.type);
        writer.writeObjectValue<Json>("value", this.value);
        writer.writeBooleanValue("visible", this.visible);
        writer.writeObjectValue<WorkbookWorksheet>("worksheet", this.worksheet);
    };
    /**
     * Gets the type property value. Indicates what type of reference is associated with the name. The possible values are: String, Integer, Double, Boolean, Range. Read-only.
     * @returns a string
     */
    public get type() {
        return this._type;
    };
    /**
     * Sets the type property value. Indicates what type of reference is associated with the name. The possible values are: String, Integer, Double, Boolean, Range. Read-only.
     * @param value Value to set for the type property.
     */
    public set type(value: string | undefined) {
        this._type = value;
    };
    /**
     * Gets the value property value. Represents the formula that the name is defined to refer to. E.g. =Sheet14!$B$2:$H$12, =4.75, etc. Read-only.
     * @returns a Json
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. Represents the formula that the name is defined to refer to. E.g. =Sheet14!$B$2:$H$12, =4.75, etc. Read-only.
     * @param value Value to set for the value property.
     */
    public set value(value: Json | undefined) {
        this._value = value;
    };
    /**
     * Gets the visible property value. Specifies whether the object is visible or not.
     * @returns a boolean
     */
    public get visible() {
        return this._visible;
    };
    /**
     * Sets the visible property value. Specifies whether the object is visible or not.
     * @param value Value to set for the visible property.
     */
    public set visible(value: boolean | undefined) {
        this._visible = value;
    };
    /**
     * Gets the worksheet property value. Returns the worksheet on which the named item is scoped to. Available only if the item is scoped to the worksheet. Read-only.
     * @returns a workbookWorksheet
     */
    public get worksheet() {
        return this._worksheet;
    };
    /**
     * Sets the worksheet property value. Returns the worksheet on which the named item is scoped to. Available only if the item is scoped to the worksheet. Read-only.
     * @param value Value to set for the worksheet property.
     */
    public set worksheet(value: WorkbookWorksheet | undefined) {
        this._worksheet = value;
    };
}
