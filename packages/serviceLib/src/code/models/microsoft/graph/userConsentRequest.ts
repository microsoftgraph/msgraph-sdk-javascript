import {createApprovalFromDiscriminatorValue} from './createApprovalFromDiscriminatorValue';
import {Approval, Request} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UserConsentRequest extends Request implements Parsable {
    /** Approval decisions associated with a request.  */
    private _approval?: Approval | undefined;
    /** The user's justification for requiring access to the app. Supports $filter (eq only) and $orderby.  */
    private _reason?: string | undefined;
    /**
     * Gets the approval property value. Approval decisions associated with a request.
     * @returns a approval
     */
    public get approval() {
        return this._approval;
    };
    /**
     * Sets the approval property value. Approval decisions associated with a request.
     * @param value Value to set for the approval property.
     */
    public set approval(value: Approval | undefined) {
        this._approval = value;
    };
    /**
     * Instantiates a new userConsentRequest and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["approval", (o, n) => { (o as unknown as UserConsentRequest).approval = n.getObjectValue<Approval>(createApprovalFromDiscriminatorValue); }],
            ["reason", (o, n) => { (o as unknown as UserConsentRequest).reason = n.getStringValue(); }],
        ]);
    };
    /**
     * Gets the reason property value. The user's justification for requiring access to the app. Supports $filter (eq only) and $orderby.
     * @returns a string
     */
    public get reason() {
        return this._reason;
    };
    /**
     * Sets the reason property value. The user's justification for requiring access to the app. Supports $filter (eq only) and $orderby.
     * @param value Value to set for the reason property.
     */
    public set reason(value: string | undefined) {
        this._reason = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<Approval>("approval", this.approval);
        writer.writeStringValue("reason", this.reason);
    };
}
