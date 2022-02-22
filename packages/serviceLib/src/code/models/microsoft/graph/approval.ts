import {ApprovalStage, Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Approval extends Entity implements Parsable {
    /** A collection of stages in the approval decision.  */
    private _stages?: ApprovalStage[] | undefined;
    /**
     * Instantiates a new approval and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the stages property value. A collection of stages in the approval decision.
     * @returns a approvalStage
     */
    public get stages() {
        return this._stages;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["stages", (o, n) => { (o as unknown as Approval).stages = n.getCollectionOfObjectValues<ApprovalStage>(ApprovalStage); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<ApprovalStage>("stages", this.stages);
    };
    /**
     * Sets the stages property value. A collection of stages in the approval decision.
     * @param value Value to set for the stages property.
     */
    public set stages(value: ApprovalStage[] | undefined) {
        this._stages = value;
    };
}
