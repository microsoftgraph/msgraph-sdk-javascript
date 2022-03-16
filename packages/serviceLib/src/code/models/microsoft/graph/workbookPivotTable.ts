import {createWorkbookWorksheetFromDiscriminatorValue} from './createWorkbookWorksheetFromDiscriminatorValue';
import {Entity, WorkbookWorksheet} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WorkbookPivotTable extends Entity implements Parsable {
    /** Name of the PivotTable.  */
    private _name?: string | undefined;
    /** The worksheet containing the current PivotTable. Read-only.  */
    private _worksheet?: WorkbookWorksheet | undefined;
    /**
     * Instantiates a new workbookPivotTable and sets the default values.
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
            ["name", (o, n) => { (o as unknown as WorkbookPivotTable).name = n.getStringValue(); }],
            ["worksheet", (o, n) => { (o as unknown as WorkbookPivotTable).worksheet = n.getObjectValue<WorkbookWorksheet>(createWorkbookWorksheetFromDiscriminatorValue); }],
        ]);
    };
    /**
     * Gets the name property value. Name of the PivotTable.
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. Name of the PivotTable.
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("name", this.name);
        writer.writeObjectValue<WorkbookWorksheet>("worksheet", this.worksheet);
    };
    /**
     * Gets the worksheet property value. The worksheet containing the current PivotTable. Read-only.
     * @returns a workbookWorksheet
     */
    public get worksheet() {
        return this._worksheet;
    };
    /**
     * Sets the worksheet property value. The worksheet containing the current PivotTable. Read-only.
     * @param value Value to set for the worksheet property.
     */
    public set worksheet(value: WorkbookWorksheet | undefined) {
        this._worksheet = value;
    };
}
