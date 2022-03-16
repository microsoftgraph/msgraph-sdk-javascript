import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ChatMessagePolicyViolationPolicyTip implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** The URL a user can visit to read about the data loss prevention policies for the organization. (ie, policies about what users shouldn't say in chats)  */
    private _complianceUrl?: string | undefined;
    /** Explanatory text shown to the sender of the message.  */
    private _generalText?: string | undefined;
    /** The list of improper data in the message that was detected by the data loss prevention app. Each DLP app defines its own conditions, examples include 'Credit Card Number' and 'Social Security Number'.  */
    private _matchedConditionDescriptions?: string[] | undefined;
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
     * Gets the complianceUrl property value. The URL a user can visit to read about the data loss prevention policies for the organization. (ie, policies about what users shouldn't say in chats)
     * @returns a string
     */
    public get complianceUrl() {
        return this._complianceUrl;
    };
    /**
     * Sets the complianceUrl property value. The URL a user can visit to read about the data loss prevention policies for the organization. (ie, policies about what users shouldn't say in chats)
     * @param value Value to set for the complianceUrl property.
     */
    public set complianceUrl(value: string | undefined) {
        this._complianceUrl = value;
    };
    /**
     * Instantiates a new chatMessagePolicyViolationPolicyTip and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the generalText property value. Explanatory text shown to the sender of the message.
     * @returns a string
     */
    public get generalText() {
        return this._generalText;
    };
    /**
     * Sets the generalText property value. Explanatory text shown to the sender of the message.
     * @param value Value to set for the generalText property.
     */
    public set generalText(value: string | undefined) {
        this._generalText = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["complianceUrl", (o, n) => { (o as unknown as ChatMessagePolicyViolationPolicyTip).complianceUrl = n.getStringValue(); }],
            ["generalText", (o, n) => { (o as unknown as ChatMessagePolicyViolationPolicyTip).generalText = n.getStringValue(); }],
            ["matchedConditionDescriptions", (o, n) => { (o as unknown as ChatMessagePolicyViolationPolicyTip).matchedConditionDescriptions = n.getCollectionOfPrimitiveValues<string>(); }],
        ]);
    };
    /**
     * Gets the matchedConditionDescriptions property value. The list of improper data in the message that was detected by the data loss prevention app. Each DLP app defines its own conditions, examples include 'Credit Card Number' and 'Social Security Number'.
     * @returns a string
     */
    public get matchedConditionDescriptions() {
        return this._matchedConditionDescriptions;
    };
    /**
     * Sets the matchedConditionDescriptions property value. The list of improper data in the message that was detected by the data loss prevention app. Each DLP app defines its own conditions, examples include 'Credit Card Number' and 'Social Security Number'.
     * @param value Value to set for the matchedConditionDescriptions property.
     */
    public set matchedConditionDescriptions(value: string[] | undefined) {
        this._matchedConditionDescriptions = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("complianceUrl", this.complianceUrl);
        writer.writeStringValue("generalText", this.generalText);
        writer.writeCollectionOfPrimitiveValues<string>("matchedConditionDescriptions", this.matchedConditionDescriptions);
        writer.writeAdditionalData(this.additionalData);
    };
}
