import {EducationResource, Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EducationSubmissionResource extends Entity implements Parsable {
    /** Pointer to the assignment from which this resource was copied. If this is null, the student uploaded the resource.  */
    private _assignmentResourceUrl?: string | undefined;
    /** Resource object.  */
    private _resource?: EducationResource | undefined;
    /**
     * Instantiates a new educationSubmissionResource and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the assignmentResourceUrl property value. Pointer to the assignment from which this resource was copied. If this is null, the student uploaded the resource.
     * @returns a string
     */
    public get assignmentResourceUrl() {
        return this._assignmentResourceUrl;
    };
    /**
     * Gets the resource property value. Resource object.
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
            ["assignmentResourceUrl", (o, n) => { (o as unknown as EducationSubmissionResource).assignmentResourceUrl = n.getStringValue(); }],
            ["resource", (o, n) => { (o as unknown as EducationSubmissionResource).resource = n.getObjectValue<EducationResource>(EducationResource); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("assignmentResourceUrl", this.assignmentResourceUrl);
        writer.writeObjectValue<EducationResource>("resource", this.resource);
    };
    /**
     * Sets the assignmentResourceUrl property value. Pointer to the assignment from which this resource was copied. If this is null, the student uploaded the resource.
     * @param value Value to set for the assignmentResourceUrl property.
     */
    public set assignmentResourceUrl(value: string | undefined) {
        this._assignmentResourceUrl = value;
    };
    /**
     * Sets the resource property value. Resource object.
     * @param value Value to set for the resource property.
     */
    public set resource(value: EducationResource | undefined) {
        this._resource = value;
    };
}
