import {createWorkbookFilterCriteriaFromDiscriminatorValue} from './createWorkbookFilterCriteriaFromDiscriminatorValue';
import {Entity, WorkbookFilterCriteria} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WorkbookFilter extends Entity implements Parsable {
    /** The currently applied filter on the given column. Read-only.  */
    private _criteria?: WorkbookFilterCriteria | undefined;
    /**
     * Instantiates a new workbookFilter and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the criteria property value. The currently applied filter on the given column. Read-only.
     * @returns a workbookFilterCriteria
     */
    public get criteria() {
        return this._criteria;
    };
    /**
     * Sets the criteria property value. The currently applied filter on the given column. Read-only.
     * @param value Value to set for the criteria property.
     */
    public set criteria(value: WorkbookFilterCriteria | undefined) {
        this._criteria = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["criteria", (o, n) => { (o as unknown as WorkbookFilter).criteria = n.getObjectValue<WorkbookFilterCriteria>(createWorkbookFilterCriteriaFromDiscriminatorValue); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<WorkbookFilterCriteria>("criteria", this.criteria);
    };
}
