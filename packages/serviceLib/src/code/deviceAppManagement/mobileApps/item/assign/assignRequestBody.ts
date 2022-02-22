import {MobileAppAssignment} from '../../../../models/microsoft/graph/';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AssignRequestBody implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _mobileAppAssignments?: MobileAppAssignment[] | undefined;
    /**
     * Instantiates a new assignRequestBody and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Map<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Gets the mobileAppAssignments property value. 
     * @returns a mobileAppAssignment
     */
    public get mobileAppAssignments() {
        return this._mobileAppAssignments;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["mobileAppAssignments", (o, n) => { (o as unknown as AssignRequestBody).mobileAppAssignments = n.getCollectionOfObjectValues<MobileAppAssignment>(MobileAppAssignment); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfObjectValues<MobileAppAssignment>("mobileAppAssignments", this.mobileAppAssignments);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Map<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Sets the mobileAppAssignments property value. 
     * @param value Value to set for the mobileAppAssignments property.
     */
    public set mobileAppAssignments(value: MobileAppAssignment[] | undefined) {
        this._mobileAppAssignments = value;
    };
}
