import {Entity, WorkforceIntegration} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Teamwork extends Entity implements Parsable {
    /** A workforce integration with shifts.  */
    private _workforceIntegrations?: WorkforceIntegration[] | undefined;
    /**
     * Instantiates a new teamwork and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the workforceIntegrations property value. A workforce integration with shifts.
     * @returns a workforceIntegration
     */
    public get workforceIntegrations() {
        return this._workforceIntegrations;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["workforceIntegrations", (o, n) => { (o as unknown as Teamwork).workforceIntegrations = n.getCollectionOfObjectValues<WorkforceIntegration>(WorkforceIntegration); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<WorkforceIntegration>("workforceIntegrations", this.workforceIntegrations);
    };
    /**
     * Sets the workforceIntegrations property value. A workforce integration with shifts.
     * @param value Value to set for the workforceIntegrations property.
     */
    public set workforceIntegrations(value: WorkforceIntegration[] | undefined) {
        this._workforceIntegrations = value;
    };
}
