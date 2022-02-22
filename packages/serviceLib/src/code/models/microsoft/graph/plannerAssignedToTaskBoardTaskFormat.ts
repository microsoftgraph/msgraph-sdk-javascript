import {Entity, PlannerOrderHintsByAssignee} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PlannerAssignedToTaskBoardTaskFormat extends Entity implements Parsable {
    /** Dictionary of hints used to order tasks on the AssignedTo view of the Task Board. The key of each entry is one of the users the task is assigned to and the value is the order hint. The format of each value is defined as outlined here.  */
    private _orderHintsByAssignee?: PlannerOrderHintsByAssignee | undefined;
    /** Hint value used to order the task on the AssignedTo view of the Task Board when the task is not assigned to anyone, or if the orderHintsByAssignee dictionary does not provide an order hint for the user the task is assigned to. The format is defined as outlined here.  */
    private _unassignedOrderHint?: string | undefined;
    /**
     * Instantiates a new plannerAssignedToTaskBoardTaskFormat and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the orderHintsByAssignee property value. Dictionary of hints used to order tasks on the AssignedTo view of the Task Board. The key of each entry is one of the users the task is assigned to and the value is the order hint. The format of each value is defined as outlined here.
     * @returns a plannerOrderHintsByAssignee
     */
    public get orderHintsByAssignee() {
        return this._orderHintsByAssignee;
    };
    /**
     * Gets the unassignedOrderHint property value. Hint value used to order the task on the AssignedTo view of the Task Board when the task is not assigned to anyone, or if the orderHintsByAssignee dictionary does not provide an order hint for the user the task is assigned to. The format is defined as outlined here.
     * @returns a string
     */
    public get unassignedOrderHint() {
        return this._unassignedOrderHint;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["orderHintsByAssignee", (o, n) => { (o as unknown as PlannerAssignedToTaskBoardTaskFormat).orderHintsByAssignee = n.getObjectValue<PlannerOrderHintsByAssignee>(PlannerOrderHintsByAssignee); }],
            ["unassignedOrderHint", (o, n) => { (o as unknown as PlannerAssignedToTaskBoardTaskFormat).unassignedOrderHint = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<PlannerOrderHintsByAssignee>("orderHintsByAssignee", this.orderHintsByAssignee);
        writer.writeStringValue("unassignedOrderHint", this.unassignedOrderHint);
    };
    /**
     * Sets the orderHintsByAssignee property value. Dictionary of hints used to order tasks on the AssignedTo view of the Task Board. The key of each entry is one of the users the task is assigned to and the value is the order hint. The format of each value is defined as outlined here.
     * @param value Value to set for the orderHintsByAssignee property.
     */
    public set orderHintsByAssignee(value: PlannerOrderHintsByAssignee | undefined) {
        this._orderHintsByAssignee = value;
    };
    /**
     * Sets the unassignedOrderHint property value. Hint value used to order the task on the AssignedTo view of the Task Board when the task is not assigned to anyone, or if the orderHintsByAssignee dictionary does not provide an order hint for the user the task is assigned to. The format is defined as outlined here.
     * @param value Value to set for the unassignedOrderHint property.
     */
    public set unassignedOrderHint(value: string | undefined) {
        this._unassignedOrderHint = value;
    };
}
