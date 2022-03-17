import {createEmailAddressFromDiscriminatorValue} from './createEmailAddressFromDiscriminatorValue';
import {EmailAddress, Entity} from './index';
import {InferenceClassificationType} from './inferenceClassificationType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class InferenceClassificationOverride extends Entity implements Parsable {
    private _classifyAs?: InferenceClassificationType | undefined;
    private _senderEmailAddress?: EmailAddress | undefined;
    /**
     * Gets the classifyAs property value. 
     * @returns a inferenceClassificationType
     */
    public get classifyAs() {
        return this._classifyAs;
    };
    /**
     * Sets the classifyAs property value. 
     * @param value Value to set for the classifyAs property.
     */
    public set classifyAs(value: InferenceClassificationType | undefined) {
        this._classifyAs = value;
    };
    /**
     * Instantiates a new inferenceClassificationOverride and sets the default values.
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
            ["classifyAs", (o, n) => { (o as unknown as InferenceClassificationOverride).classifyAs = n.getEnumValue<InferenceClassificationType>(InferenceClassificationType); }],
            ["senderEmailAddress", (o, n) => { (o as unknown as InferenceClassificationOverride).senderEmailAddress = n.getObjectValue<EmailAddress>(createEmailAddressFromDiscriminatorValue); }],
        ]);
    };
    /**
     * Gets the senderEmailAddress property value. 
     * @returns a emailAddress
     */
    public get senderEmailAddress() {
        return this._senderEmailAddress;
    };
    /**
     * Sets the senderEmailAddress property value. 
     * @param value Value to set for the senderEmailAddress property.
     */
    public set senderEmailAddress(value: EmailAddress | undefined) {
        this._senderEmailAddress = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeEnumValue<InferenceClassificationType>("classifyAs", this.classifyAs);
        writer.writeObjectValue<EmailAddress>("senderEmailAddress", this.senderEmailAddress);
    };
}
