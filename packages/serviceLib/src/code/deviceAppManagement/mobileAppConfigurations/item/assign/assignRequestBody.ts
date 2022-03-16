import {ManagedDeviceMobileAppConfigurationAssignment} from '../../../../models/microsoft/graph/';
import {createManagedDeviceMobileAppConfigurationAssignmentFromDiscriminatorValue} from '../../../../models/microsoft/graph/createManagedDeviceMobileAppConfigurationAssignmentFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the assign method.  */
export class AssignRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _assignments?: ManagedDeviceMobileAppConfigurationAssignment[] | undefined;
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
     * Gets the assignments property value. 
     * @returns a managedDeviceMobileAppConfigurationAssignment
     */
    public get assignments() {
        return this._assignments;
    };
    /**
     * Sets the assignments property value. 
     * @param value Value to set for the assignments property.
     */
    public set assignments(value: ManagedDeviceMobileAppConfigurationAssignment[] | undefined) {
        this._assignments = value;
    };
    /**
     * Instantiates a new assignRequestBody and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["assignments", (o, n) => { (o as unknown as AssignRequestBody).assignments = n.getCollectionOfObjectValues<ManagedDeviceMobileAppConfigurationAssignment>(createManagedDeviceMobileAppConfigurationAssignmentFromDiscriminatorValue); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfObjectValues<ManagedDeviceMobileAppConfigurationAssignment>("assignments", this.assignments);
        writer.writeAdditionalData(this.additionalData);
    };
}
