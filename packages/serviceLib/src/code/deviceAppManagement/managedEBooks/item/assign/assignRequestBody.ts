import {ManagedEBookAssignment} from '../../../../models/microsoft/graph/';
import {createManagedEBookAssignmentFromDiscriminatorValue} from '../../../../models/microsoft/graph/createManagedEBookAssignmentFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the assign method.  */
export class AssignRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _managedEBookAssignments?: ManagedEBookAssignment[] | undefined;
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
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["managedEBookAssignments", (o, n) => { (o as unknown as AssignRequestBody).managedEBookAssignments = n.getCollectionOfObjectValues<ManagedEBookAssignment>(createManagedEBookAssignmentFromDiscriminatorValue); }],
        ]);
    };
    /**
     * Gets the managedEBookAssignments property value. 
     * @returns a managedEBookAssignment
     */
    public get managedEBookAssignments() {
        return this._managedEBookAssignments;
    };
    /**
     * Sets the managedEBookAssignments property value. 
     * @param value Value to set for the managedEBookAssignments property.
     */
    public set managedEBookAssignments(value: ManagedEBookAssignment[] | undefined) {
        this._managedEBookAssignments = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfObjectValues<ManagedEBookAssignment>("managedEBookAssignments", this.managedEBookAssignments);
        writer.writeAdditionalData(this.additionalData);
    };
}
