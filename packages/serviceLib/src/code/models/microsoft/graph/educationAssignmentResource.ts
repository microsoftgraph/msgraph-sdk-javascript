import {EducationResource, Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EducationAssignmentResource extends Entity implements Parsable {
    /** Indicates whether this resource should be copied to each student submission for modification and submission. Required  */
    private _distributeForStudentWork?: boolean | undefined;
    /** Resource object that has been associated with this assignment.  */
    private _resource?: EducationResource | undefined;
    /**
     * Instantiates a new educationAssignmentResource and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the distributeForStudentWork property value. Indicates whether this resource should be copied to each student submission for modification and submission. Required
     * @returns a boolean
     */
    public get distributeForStudentWork() {
        return this._distributeForStudentWork;
    };
    /**
     * Gets the resource property value. Resource object that has been associated with this assignment.
     * @returns a educationResource
     */
    public get resource() {
        return this._resource;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["distributeForStudentWork", (o, n) => { (o as unknown as EducationAssignmentResource).distributeForStudentWork = n.getBooleanValue(); }],
            ["resource", (o, n) => { (o as unknown as EducationAssignmentResource).resource = n.getObjectValue<EducationResource>(EducationResource); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeBooleanValue("distributeForStudentWork", this.distributeForStudentWork);
        writer.writeObjectValue<EducationResource>("resource", this.resource);
    };
    /**
     * Sets the distributeForStudentWork property value. Indicates whether this resource should be copied to each student submission for modification and submission. Required
     * @param value Value to set for the distributeForStudentWork property.
     */
    public set distributeForStudentWork(value: boolean | undefined) {
        this._distributeForStudentWork = value;
    };
    /**
     * Sets the resource property value. Resource object that has been associated with this assignment.
     * @param value Value to set for the resource property.
     */
    public set resource(value: EducationResource | undefined) {
        this._resource = value;
    };
}
