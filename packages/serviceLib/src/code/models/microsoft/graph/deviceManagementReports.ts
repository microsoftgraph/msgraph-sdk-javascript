import {createDeviceManagementExportJobFromDiscriminatorValue} from './createDeviceManagementExportJobFromDiscriminatorValue';
import {DeviceManagementExportJob, Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DeviceManagementReports extends Entity implements Parsable {
    /** Entity representing a job to export a report  */
    private _exportJobs?: DeviceManagementExportJob[] | undefined;
    /**
     * Instantiates a new deviceManagementReports and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the exportJobs property value. Entity representing a job to export a report
     * @returns a deviceManagementExportJob
     */
    public get exportJobs() {
        return this._exportJobs;
    };
    /**
     * Sets the exportJobs property value. Entity representing a job to export a report
     * @param value Value to set for the exportJobs property.
     */
    public set exportJobs(value: DeviceManagementExportJob[] | undefined) {
        this._exportJobs = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["exportJobs", (o, n) => { (o as unknown as DeviceManagementReports).exportJobs = n.getCollectionOfObjectValues<DeviceManagementExportJob>(createDeviceManagementExportJobFromDiscriminatorValue); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<DeviceManagementExportJob>("exportJobs", this.exportJobs);
    };
}
