import {EnrollmentConfigurationAssignment} from '../../../../models/microsoft/graph/';
import {createEnrollmentConfigurationAssignmentFromDiscriminatorValue} from '../../../../models/microsoft/graph/createEnrollmentConfigurationAssignmentFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the assign method.  */
export class AssignRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _enrollmentConfigurationAssignments?: EnrollmentConfigurationAssignment[] | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Map<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Map<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Instantiates a new assignRequestBody and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the enrollmentConfigurationAssignments property value. 
     * @returns a enrollmentConfigurationAssignment
     */
    public get enrollmentConfigurationAssignments() {
        return this._enrollmentConfigurationAssignments;
    };
    /**
     * Sets the enrollmentConfigurationAssignments property value. 
     * @param value Value to set for the enrollmentConfigurationAssignments property.
     */
    public set enrollmentConfigurationAssignments(value: EnrollmentConfigurationAssignment[] | undefined) {
        this._enrollmentConfigurationAssignments = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["enrollmentConfigurationAssignments", (o, n) => { (o as unknown as AssignRequestBody).enrollmentConfigurationAssignments = n.getCollectionOfObjectValues<EnrollmentConfigurationAssignment>(createEnrollmentConfigurationAssignmentFromDiscriminatorValue); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfObjectValues<EnrollmentConfigurationAssignment>("enrollmentConfigurationAssignments", this.enrollmentConfigurationAssignments);
        writer.writeAdditionalData(this.additionalData);
    };
}
