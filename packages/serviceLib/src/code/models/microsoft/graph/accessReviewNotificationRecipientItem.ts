import {AccessReviewNotificationRecipientScope} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AccessReviewNotificationRecipientItem implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** Determines the recipient of the notification email.  */
    private _notificationRecipientScope?: AccessReviewNotificationRecipientScope | undefined;
    /** Indicates the type of access review email to be sent. Supported template type is CompletedAdditionalRecipients, which sends review completion notifications to the recipients.  */
    private _notificationTemplateType?: string | undefined;
    /**
     * Instantiates a new accessReviewNotificationRecipientItem and sets the default values.
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
     * Gets the notificationRecipientScope property value. Determines the recipient of the notification email.
     * @returns a accessReviewNotificationRecipientScope
     */
    public get notificationRecipientScope() {
        return this._notificationRecipientScope;
    };
    /**
     * Gets the notificationTemplateType property value. Indicates the type of access review email to be sent. Supported template type is CompletedAdditionalRecipients, which sends review completion notifications to the recipients.
     * @returns a string
     */
    public get notificationTemplateType() {
        return this._notificationTemplateType;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["notificationRecipientScope", (o, n) => { (o as unknown as AccessReviewNotificationRecipientItem).notificationRecipientScope = n.getObjectValue<AccessReviewNotificationRecipientScope>(AccessReviewNotificationRecipientScope); }],
            ["notificationTemplateType", (o, n) => { (o as unknown as AccessReviewNotificationRecipientItem).notificationTemplateType = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<AccessReviewNotificationRecipientScope>("notificationRecipientScope", this.notificationRecipientScope);
        writer.writeStringValue("notificationTemplateType", this.notificationTemplateType);
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
     * Sets the notificationRecipientScope property value. Determines the recipient of the notification email.
     * @param value Value to set for the notificationRecipientScope property.
     */
    public set notificationRecipientScope(value: AccessReviewNotificationRecipientScope | undefined) {
        this._notificationRecipientScope = value;
    };
    /**
     * Sets the notificationTemplateType property value. Indicates the type of access review email to be sent. Supported template type is CompletedAdditionalRecipients, which sends review completion notifications to the recipients.
     * @param value Value to set for the notificationTemplateType property.
     */
    public set notificationTemplateType(value: string | undefined) {
        this._notificationTemplateType = value;
    };
}
