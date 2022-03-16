import {AssignmentOrder} from '../../../../../models/microsoft/graph/';
import {createAssignmentOrderFromDiscriminatorValue} from '../../../../../models/microsoft/graph/createAssignmentOrderFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the setOrder method.  */
export class SetOrderRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _newAssignmentOrder?: AssignmentOrder | undefined;
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
     * Instantiates a new setOrderRequestBody and sets the default values.
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
            ["newAssignmentOrder", (o, n) => { (o as unknown as SetOrderRequestBody).newAssignmentOrder = n.getObjectValue<AssignmentOrder>(createAssignmentOrderFromDiscriminatorValue); }],
        ]);
    };
    /**
     * Gets the newAssignmentOrder property value. 
     * @returns a assignmentOrder
     */
    public get newAssignmentOrder() {
        return this._newAssignmentOrder;
    };
    /**
     * Sets the newAssignmentOrder property value. 
     * @param value Value to set for the newAssignmentOrder property.
     */
    public set newAssignmentOrder(value: AssignmentOrder | undefined) {
        this._newAssignmentOrder = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<AssignmentOrder>("newAssignmentOrder", this.newAssignmentOrder);
        writer.writeAdditionalData(this.additionalData);
    };
}
