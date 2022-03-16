import {createBitlockerFromDiscriminatorValue} from './createBitlockerFromDiscriminatorValue';
import {createThreatAssessmentRequestFromDiscriminatorValue} from './createThreatAssessmentRequestFromDiscriminatorValue';
import {Bitlocker, Entity, ThreatAssessmentRequest} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the informationProtection singleton.  */
export class InformationProtection extends Entity implements Parsable {
    private _bitlocker?: Bitlocker | undefined;
    private _threatAssessmentRequests?: ThreatAssessmentRequest[] | undefined;
    /**
     * Gets the bitlocker property value. 
     * @returns a bitlocker
     */
    public get bitlocker() {
        return this._bitlocker;
    };
    /**
     * Sets the bitlocker property value. 
     * @param value Value to set for the bitlocker property.
     */
    public set bitlocker(value: Bitlocker | undefined) {
        this._bitlocker = value;
    };
    /**
     * Instantiates a new informationProtection and sets the default values.
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
            ["bitlocker", (o, n) => { (o as unknown as InformationProtection).bitlocker = n.getObjectValue<Bitlocker>(createBitlockerFromDiscriminatorValue); }],
            ["threatAssessmentRequests", (o, n) => { (o as unknown as InformationProtection).threatAssessmentRequests = n.getCollectionOfObjectValues<ThreatAssessmentRequest>(createThreatAssessmentRequestFromDiscriminatorValue); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<Bitlocker>("bitlocker", this.bitlocker);
        writer.writeCollectionOfObjectValues<ThreatAssessmentRequest>("threatAssessmentRequests", this.threatAssessmentRequests);
    };
    /**
     * Gets the threatAssessmentRequests property value. 
     * @returns a threatAssessmentRequest
     */
    public get threatAssessmentRequests() {
        return this._threatAssessmentRequests;
    };
    /**
     * Sets the threatAssessmentRequests property value. 
     * @param value Value to set for the threatAssessmentRequests property.
     */
    public set threatAssessmentRequests(value: ThreatAssessmentRequest[] | undefined) {
        this._threatAssessmentRequests = value;
    };
}
