import {Entity, WorkbookWorksheetProtectionOptions} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WorkbookWorksheetProtection extends Entity implements Parsable {
    /** Sheet protection options. Read-only.  */
    private _options?: WorkbookWorksheetProtectionOptions | undefined;
    /** Indicates if the worksheet is protected.  Read-only.  */
    private _protected?: boolean | undefined;
    /**
     * Instantiates a new workbookWorksheetProtection and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the options property value. Sheet protection options. Read-only.
     * @returns a workbookWorksheetProtectionOptions
     */
    public get options() {
        return this._options;
    };
    /**
     * Gets the protected property value. Indicates if the worksheet is protected.  Read-only.
     * @returns a boolean
     */
    public get protected() {
        return this._protected;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["options", (o, n) => { (o as unknown as WorkbookWorksheetProtection).options = n.getObjectValue<WorkbookWorksheetProtectionOptions>(WorkbookWorksheetProtectionOptions); }],
            ["protected", (o, n) => { (o as unknown as WorkbookWorksheetProtection).protected = n.getBooleanValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<WorkbookWorksheetProtectionOptions>("options", this.options);
        writer.writeBooleanValue("protected", this.protected);
    };
    /**
     * Sets the options property value. Sheet protection options. Read-only.
     * @param value Value to set for the options property.
     */
    public set options(value: WorkbookWorksheetProtectionOptions | undefined) {
        this._options = value;
    };
    /**
     * Sets the protected property value. Indicates if the worksheet is protected.  Read-only.
     * @param value Value to set for the protected property.
     */
    public set protected(value: boolean | undefined) {
        this._protected = value;
    };
}
