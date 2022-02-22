import {OfferShiftRequest} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SwapShiftsChangeRequest extends OfferShiftRequest implements Parsable {
    /** ShiftId for the recipient user with whom the request is to swap.  */
    private _recipientShiftId?: string | undefined;
    /**
     * Instantiates a new swapShiftsChangeRequest and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the recipientShiftId property value. ShiftId for the recipient user with whom the request is to swap.
     * @returns a string
     */
    public get recipientShiftId() {
        return this._recipientShiftId;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["recipientShiftId", (o, n) => { (o as unknown as SwapShiftsChangeRequest).recipientShiftId = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("recipientShiftId", this.recipientShiftId);
    };
    /**
     * Sets the recipientShiftId property value. ShiftId for the recipient user with whom the request is to swap.
     * @param value Value to set for the recipientShiftId property.
     */
    public set recipientShiftId(value: string | undefined) {
        this._recipientShiftId = value;
    };
}
