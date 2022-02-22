import {AutomaticRepliesMailTips} from '../../models/microsoft/graph/automaticRepliesMailTips';
import {EmailAddress} from '../../models/microsoft/graph/emailAddress';
import {MailTipsError} from '../../models/microsoft/graph/mailTipsError';
import {Recipient} from '../../models/microsoft/graph/recipient';
import {RecipientScopeType} from '../../models/microsoft/graph/recipientScopeType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class GetMailTips implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** Mail tips for automatic reply if it has been set up by the recipient.  */
    private _automaticReplies?: AutomaticRepliesMailTips | undefined;
    /** A custom mail tip that can be set on the recipient's mailbox.  */
    private _customMailTip?: string | undefined;
    /** Whether the recipient's mailbox is restricted, for example, accepting messages from only a predefined list of senders, rejecting messages from a predefined list of senders, or accepting messages from only authenticated senders.  */
    private _deliveryRestricted?: boolean | undefined;
    /** The email address of the recipient to get mailtips for.  */
    private _emailAddress?: EmailAddress | undefined;
    /** Errors that occur during the getMailTips action.  */
    private _error?: MailTipsError | undefined;
    /** The number of external members if the recipient is a distribution list.  */
    private _externalMemberCount?: number | undefined;
    /** Whether sending messages to the recipient requires approval. For example, if the recipient is a large distribution list and a moderator has been set up to approve messages sent to that distribution list, or if sending messages to a recipient requires approval of the recipient's manager.  */
    private _isModerated?: boolean | undefined;
    /** The mailbox full status of the recipient.  */
    private _mailboxFull?: boolean | undefined;
    /** The maximum message size that has been configured for the recipient's organization or mailbox.  */
    private _maxMessageSize?: number | undefined;
    /** The scope of the recipient. Possible values are: none, internal, external, externalPartner, externalNonParther. For example, an administrator can set another organization to be its 'partner'. The scope is useful if an administrator wants certain mailtips to be accessible to certain scopes. It's also useful to senders to inform them that their message may leave the organization, helping them make the correct decisions about wording, tone and content.  */
    private _recipientScope?: RecipientScopeType | undefined;
    /** Recipients suggested based on previous contexts where they appear in the same message.  */
    private _recipientSuggestions?: Recipient[] | undefined;
    /** The number of members if the recipient is a distribution list.  */
    private _totalMemberCount?: number | undefined;
    /**
     * Instantiates a new getMailTips and sets the default values.
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
     * Gets the automaticReplies property value. Mail tips for automatic reply if it has been set up by the recipient.
     * @returns a automaticRepliesMailTips
     */
    public get automaticReplies() {
        return this._automaticReplies;
    };
    /**
     * Gets the customMailTip property value. A custom mail tip that can be set on the recipient's mailbox.
     * @returns a string
     */
    public get customMailTip() {
        return this._customMailTip;
    };
    /**
     * Gets the deliveryRestricted property value. Whether the recipient's mailbox is restricted, for example, accepting messages from only a predefined list of senders, rejecting messages from a predefined list of senders, or accepting messages from only authenticated senders.
     * @returns a boolean
     */
    public get deliveryRestricted() {
        return this._deliveryRestricted;
    };
    /**
     * Gets the emailAddress property value. The email address of the recipient to get mailtips for.
     * @returns a emailAddress
     */
    public get emailAddress() {
        return this._emailAddress;
    };
    /**
     * Gets the error property value. Errors that occur during the getMailTips action.
     * @returns a mailTipsError
     */
    public get error() {
        return this._error;
    };
    /**
     * Gets the externalMemberCount property value. The number of external members if the recipient is a distribution list.
     * @returns a integer
     */
    public get externalMemberCount() {
        return this._externalMemberCount;
    };
    /**
     * Gets the isModerated property value. Whether sending messages to the recipient requires approval. For example, if the recipient is a large distribution list and a moderator has been set up to approve messages sent to that distribution list, or if sending messages to a recipient requires approval of the recipient's manager.
     * @returns a boolean
     */
    public get isModerated() {
        return this._isModerated;
    };
    /**
     * Gets the mailboxFull property value. The mailbox full status of the recipient.
     * @returns a boolean
     */
    public get mailboxFull() {
        return this._mailboxFull;
    };
    /**
     * Gets the maxMessageSize property value. The maximum message size that has been configured for the recipient's organization or mailbox.
     * @returns a integer
     */
    public get maxMessageSize() {
        return this._maxMessageSize;
    };
    /**
     * Gets the recipientScope property value. The scope of the recipient. Possible values are: none, internal, external, externalPartner, externalNonParther. For example, an administrator can set another organization to be its 'partner'. The scope is useful if an administrator wants certain mailtips to be accessible to certain scopes. It's also useful to senders to inform them that their message may leave the organization, helping them make the correct decisions about wording, tone and content.
     * @returns a recipientScopeType
     */
    public get recipientScope() {
        return this._recipientScope;
    };
    /**
     * Gets the recipientSuggestions property value. Recipients suggested based on previous contexts where they appear in the same message.
     * @returns a recipient
     */
    public get recipientSuggestions() {
        return this._recipientSuggestions;
    };
    /**
     * Gets the totalMemberCount property value. The number of members if the recipient is a distribution list.
     * @returns a integer
     */
    public get totalMemberCount() {
        return this._totalMemberCount;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["automaticReplies", (o, n) => { (o as unknown as GetMailTips).automaticReplies = n.getObjectValue<AutomaticRepliesMailTips>(AutomaticRepliesMailTips); }],
            ["customMailTip", (o, n) => { (o as unknown as GetMailTips).customMailTip = n.getStringValue(); }],
            ["deliveryRestricted", (o, n) => { (o as unknown as GetMailTips).deliveryRestricted = n.getBooleanValue(); }],
            ["emailAddress", (o, n) => { (o as unknown as GetMailTips).emailAddress = n.getObjectValue<EmailAddress>(EmailAddress); }],
            ["error", (o, n) => { (o as unknown as GetMailTips).error = n.getObjectValue<MailTipsError>(MailTipsError); }],
            ["externalMemberCount", (o, n) => { (o as unknown as GetMailTips).externalMemberCount = n.getNumberValue(); }],
            ["isModerated", (o, n) => { (o as unknown as GetMailTips).isModerated = n.getBooleanValue(); }],
            ["mailboxFull", (o, n) => { (o as unknown as GetMailTips).mailboxFull = n.getBooleanValue(); }],
            ["maxMessageSize", (o, n) => { (o as unknown as GetMailTips).maxMessageSize = n.getNumberValue(); }],
            ["recipientScope", (o, n) => { (o as unknown as GetMailTips).recipientScope = n.getEnumValue<RecipientScopeType>(RecipientScopeType); }],
            ["recipientSuggestions", (o, n) => { (o as unknown as GetMailTips).recipientSuggestions = n.getCollectionOfObjectValues<Recipient>(Recipient); }],
            ["totalMemberCount", (o, n) => { (o as unknown as GetMailTips).totalMemberCount = n.getNumberValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<AutomaticRepliesMailTips>("automaticReplies", this.automaticReplies);
        writer.writeStringValue("customMailTip", this.customMailTip);
        writer.writeBooleanValue("deliveryRestricted", this.deliveryRestricted);
        writer.writeObjectValue<EmailAddress>("emailAddress", this.emailAddress);
        writer.writeObjectValue<MailTipsError>("error", this.error);
        writer.writeNumberValue("externalMemberCount", this.externalMemberCount);
        writer.writeBooleanValue("isModerated", this.isModerated);
        writer.writeBooleanValue("mailboxFull", this.mailboxFull);
        writer.writeNumberValue("maxMessageSize", this.maxMessageSize);
        writer.writeEnumValue<RecipientScopeType>("recipientScope", this.recipientScope);
        writer.writeCollectionOfObjectValues<Recipient>("recipientSuggestions", this.recipientSuggestions);
        writer.writeNumberValue("totalMemberCount", this.totalMemberCount);
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
     * Sets the automaticReplies property value. Mail tips for automatic reply if it has been set up by the recipient.
     * @param value Value to set for the automaticReplies property.
     */
    public set automaticReplies(value: AutomaticRepliesMailTips | undefined) {
        this._automaticReplies = value;
    };
    /**
     * Sets the customMailTip property value. A custom mail tip that can be set on the recipient's mailbox.
     * @param value Value to set for the customMailTip property.
     */
    public set customMailTip(value: string | undefined) {
        this._customMailTip = value;
    };
    /**
     * Sets the deliveryRestricted property value. Whether the recipient's mailbox is restricted, for example, accepting messages from only a predefined list of senders, rejecting messages from a predefined list of senders, or accepting messages from only authenticated senders.
     * @param value Value to set for the deliveryRestricted property.
     */
    public set deliveryRestricted(value: boolean | undefined) {
        this._deliveryRestricted = value;
    };
    /**
     * Sets the emailAddress property value. The email address of the recipient to get mailtips for.
     * @param value Value to set for the emailAddress property.
     */
    public set emailAddress(value: EmailAddress | undefined) {
        this._emailAddress = value;
    };
    /**
     * Sets the error property value. Errors that occur during the getMailTips action.
     * @param value Value to set for the error property.
     */
    public set error(value: MailTipsError | undefined) {
        this._error = value;
    };
    /**
     * Sets the externalMemberCount property value. The number of external members if the recipient is a distribution list.
     * @param value Value to set for the externalMemberCount property.
     */
    public set externalMemberCount(value: number | undefined) {
        this._externalMemberCount = value;
    };
    /**
     * Sets the isModerated property value. Whether sending messages to the recipient requires approval. For example, if the recipient is a large distribution list and a moderator has been set up to approve messages sent to that distribution list, or if sending messages to a recipient requires approval of the recipient's manager.
     * @param value Value to set for the isModerated property.
     */
    public set isModerated(value: boolean | undefined) {
        this._isModerated = value;
    };
    /**
     * Sets the mailboxFull property value. The mailbox full status of the recipient.
     * @param value Value to set for the mailboxFull property.
     */
    public set mailboxFull(value: boolean | undefined) {
        this._mailboxFull = value;
    };
    /**
     * Sets the maxMessageSize property value. The maximum message size that has been configured for the recipient's organization or mailbox.
     * @param value Value to set for the maxMessageSize property.
     */
    public set maxMessageSize(value: number | undefined) {
        this._maxMessageSize = value;
    };
    /**
     * Sets the recipientScope property value. The scope of the recipient. Possible values are: none, internal, external, externalPartner, externalNonParther. For example, an administrator can set another organization to be its 'partner'. The scope is useful if an administrator wants certain mailtips to be accessible to certain scopes. It's also useful to senders to inform them that their message may leave the organization, helping them make the correct decisions about wording, tone and content.
     * @param value Value to set for the recipientScope property.
     */
    public set recipientScope(value: RecipientScopeType | undefined) {
        this._recipientScope = value;
    };
    /**
     * Sets the recipientSuggestions property value. Recipients suggested based on previous contexts where they appear in the same message.
     * @param value Value to set for the recipientSuggestions property.
     */
    public set recipientSuggestions(value: Recipient[] | undefined) {
        this._recipientSuggestions = value;
    };
    /**
     * Sets the totalMemberCount property value. The number of members if the recipient is a distribution list.
     * @param value Value to set for the totalMemberCount property.
     */
    public set totalMemberCount(value: number | undefined) {
        this._totalMemberCount = value;
    };
}
