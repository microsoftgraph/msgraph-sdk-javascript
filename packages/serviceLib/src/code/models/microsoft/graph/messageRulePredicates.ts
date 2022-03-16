import {createRecipientFromDiscriminatorValue} from './createRecipientFromDiscriminatorValue';
import {createSizeRangeFromDiscriminatorValue} from './createSizeRangeFromDiscriminatorValue';
import {Importance} from './importance';
import {Recipient, SizeRange} from './index';
import {MessageActionFlag} from './messageActionFlag';
import {Sensitivity} from './sensitivity';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MessageRulePredicates implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** Represents the strings that should appear in the body of an incoming message in order for the condition or exception to apply.  */
    private _bodyContains?: string[] | undefined;
    /** Represents the strings that should appear in the body or subject of an incoming message in order for the condition or exception to apply.  */
    private _bodyOrSubjectContains?: string[] | undefined;
    /** Represents the categories that an incoming message should be labeled with in order for the condition or exception to apply.  */
    private _categories?: string[] | undefined;
    /** Represents the specific sender email addresses of an incoming message in order for the condition or exception to apply.  */
    private _fromAddresses?: Recipient[] | undefined;
    /** Indicates whether an incoming message must have attachments in order for the condition or exception to apply.  */
    private _hasAttachments?: boolean | undefined;
    /** Represents the strings that appear in the headers of an incoming message in order for the condition or exception to apply.  */
    private _headerContains?: string[] | undefined;
    /** The importance that is stamped on an incoming message in order for the condition or exception to apply: low, normal, high.  */
    private _importance?: Importance | undefined;
    /** Indicates whether an incoming message must be an approval request in order for the condition or exception to apply.  */
    private _isApprovalRequest?: boolean | undefined;
    /** Indicates whether an incoming message must be automatically forwarded in order for the condition or exception to apply.  */
    private _isAutomaticForward?: boolean | undefined;
    /** Indicates whether an incoming message must be an auto reply in order for the condition or exception to apply.  */
    private _isAutomaticReply?: boolean | undefined;
    /** Indicates whether an incoming message must be encrypted in order for the condition or exception to apply.  */
    private _isEncrypted?: boolean | undefined;
    /** Indicates whether an incoming message must be a meeting request in order for the condition or exception to apply.  */
    private _isMeetingRequest?: boolean | undefined;
    /** Indicates whether an incoming message must be a meeting response in order for the condition or exception to apply.  */
    private _isMeetingResponse?: boolean | undefined;
    /** Indicates whether an incoming message must be a non-delivery report in order for the condition or exception to apply.  */
    private _isNonDeliveryReport?: boolean | undefined;
    /** Indicates whether an incoming message must be permission controlled (RMS-protected) in order for the condition or exception to apply.  */
    private _isPermissionControlled?: boolean | undefined;
    /** Indicates whether an incoming message must be a read receipt in order for the condition or exception to apply.  */
    private _isReadReceipt?: boolean | undefined;
    /** Indicates whether an incoming message must be S/MIME-signed in order for the condition or exception to apply.  */
    private _isSigned?: boolean | undefined;
    /** Indicates whether an incoming message must be a voice mail in order for the condition or exception to apply.  */
    private _isVoicemail?: boolean | undefined;
    /** Represents the flag-for-action value that appears on an incoming message in order for the condition or exception to apply. The possible values are: any, call, doNotForward, followUp, fyi, forward, noResponseNecessary, read, reply, replyToAll, review.  */
    private _messageActionFlag?: MessageActionFlag | undefined;
    /** Indicates whether the owner of the mailbox must not be a recipient of an incoming message in order for the condition or exception to apply.  */
    private _notSentToMe?: boolean | undefined;
    /** Represents the strings that appear in either the toRecipients or ccRecipients properties of an incoming message in order for the condition or exception to apply.  */
    private _recipientContains?: string[] | undefined;
    /** Represents the strings that appear in the from property of an incoming message in order for the condition or exception to apply.  */
    private _senderContains?: string[] | undefined;
    /** Represents the sensitivity level that must be stamped on an incoming message in order for the condition or exception to apply. The possible values are: normal, personal, private, confidential.  */
    private _sensitivity?: Sensitivity | undefined;
    /** Indicates whether the owner of the mailbox must be in the ccRecipients property of an incoming message in order for the condition or exception to apply.  */
    private _sentCcMe?: boolean | undefined;
    /** Indicates whether the owner of the mailbox must be the only recipient in an incoming message in order for the condition or exception to apply.  */
    private _sentOnlyToMe?: boolean | undefined;
    /** Represents the email addresses that an incoming message must have been sent to in order for the condition or exception to apply.  */
    private _sentToAddresses?: Recipient[] | undefined;
    /** Indicates whether the owner of the mailbox must be in the toRecipients property of an incoming message in order for the condition or exception to apply.  */
    private _sentToMe?: boolean | undefined;
    /** Indicates whether the owner of the mailbox must be in either a toRecipients or ccRecipients property of an incoming message in order for the condition or exception to apply.  */
    private _sentToOrCcMe?: boolean | undefined;
    /** Represents the strings that appear in the subject of an incoming message in order for the condition or exception to apply.  */
    private _subjectContains?: string[] | undefined;
    /** Represents the minimum and maximum sizes (in kilobytes) that an incoming message must fall in between in order for the condition or exception to apply.  */
    private _withinSizeRange?: SizeRange | undefined;
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
     * Gets the bodyContains property value. Represents the strings that should appear in the body of an incoming message in order for the condition or exception to apply.
     * @returns a string
     */
    public get bodyContains() {
        return this._bodyContains;
    };
    /**
     * Sets the bodyContains property value. Represents the strings that should appear in the body of an incoming message in order for the condition or exception to apply.
     * @param value Value to set for the bodyContains property.
     */
    public set bodyContains(value: string[] | undefined) {
        this._bodyContains = value;
    };
    /**
     * Gets the bodyOrSubjectContains property value. Represents the strings that should appear in the body or subject of an incoming message in order for the condition or exception to apply.
     * @returns a string
     */
    public get bodyOrSubjectContains() {
        return this._bodyOrSubjectContains;
    };
    /**
     * Sets the bodyOrSubjectContains property value. Represents the strings that should appear in the body or subject of an incoming message in order for the condition or exception to apply.
     * @param value Value to set for the bodyOrSubjectContains property.
     */
    public set bodyOrSubjectContains(value: string[] | undefined) {
        this._bodyOrSubjectContains = value;
    };
    /**
     * Gets the categories property value. Represents the categories that an incoming message should be labeled with in order for the condition or exception to apply.
     * @returns a string
     */
    public get categories() {
        return this._categories;
    };
    /**
     * Sets the categories property value. Represents the categories that an incoming message should be labeled with in order for the condition or exception to apply.
     * @param value Value to set for the categories property.
     */
    public set categories(value: string[] | undefined) {
        this._categories = value;
    };
    /**
     * Instantiates a new messageRulePredicates and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the fromAddresses property value. Represents the specific sender email addresses of an incoming message in order for the condition or exception to apply.
     * @returns a recipient
     */
    public get fromAddresses() {
        return this._fromAddresses;
    };
    /**
     * Sets the fromAddresses property value. Represents the specific sender email addresses of an incoming message in order for the condition or exception to apply.
     * @param value Value to set for the fromAddresses property.
     */
    public set fromAddresses(value: Recipient[] | undefined) {
        this._fromAddresses = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["bodyContains", (o, n) => { (o as unknown as MessageRulePredicates).bodyContains = n.getCollectionOfPrimitiveValues<string>(); }],
            ["bodyOrSubjectContains", (o, n) => { (o as unknown as MessageRulePredicates).bodyOrSubjectContains = n.getCollectionOfPrimitiveValues<string>(); }],
            ["categories", (o, n) => { (o as unknown as MessageRulePredicates).categories = n.getCollectionOfPrimitiveValues<string>(); }],
            ["fromAddresses", (o, n) => { (o as unknown as MessageRulePredicates).fromAddresses = n.getCollectionOfObjectValues<Recipient>(createRecipientFromDiscriminatorValue); }],
            ["hasAttachments", (o, n) => { (o as unknown as MessageRulePredicates).hasAttachments = n.getBooleanValue(); }],
            ["headerContains", (o, n) => { (o as unknown as MessageRulePredicates).headerContains = n.getCollectionOfPrimitiveValues<string>(); }],
            ["importance", (o, n) => { (o as unknown as MessageRulePredicates).importance = n.getEnumValue<Importance>(Importance); }],
            ["isApprovalRequest", (o, n) => { (o as unknown as MessageRulePredicates).isApprovalRequest = n.getBooleanValue(); }],
            ["isAutomaticForward", (o, n) => { (o as unknown as MessageRulePredicates).isAutomaticForward = n.getBooleanValue(); }],
            ["isAutomaticReply", (o, n) => { (o as unknown as MessageRulePredicates).isAutomaticReply = n.getBooleanValue(); }],
            ["isEncrypted", (o, n) => { (o as unknown as MessageRulePredicates).isEncrypted = n.getBooleanValue(); }],
            ["isMeetingRequest", (o, n) => { (o as unknown as MessageRulePredicates).isMeetingRequest = n.getBooleanValue(); }],
            ["isMeetingResponse", (o, n) => { (o as unknown as MessageRulePredicates).isMeetingResponse = n.getBooleanValue(); }],
            ["isNonDeliveryReport", (o, n) => { (o as unknown as MessageRulePredicates).isNonDeliveryReport = n.getBooleanValue(); }],
            ["isPermissionControlled", (o, n) => { (o as unknown as MessageRulePredicates).isPermissionControlled = n.getBooleanValue(); }],
            ["isReadReceipt", (o, n) => { (o as unknown as MessageRulePredicates).isReadReceipt = n.getBooleanValue(); }],
            ["isSigned", (o, n) => { (o as unknown as MessageRulePredicates).isSigned = n.getBooleanValue(); }],
            ["isVoicemail", (o, n) => { (o as unknown as MessageRulePredicates).isVoicemail = n.getBooleanValue(); }],
            ["messageActionFlag", (o, n) => { (o as unknown as MessageRulePredicates).messageActionFlag = n.getEnumValue<MessageActionFlag>(MessageActionFlag); }],
            ["notSentToMe", (o, n) => { (o as unknown as MessageRulePredicates).notSentToMe = n.getBooleanValue(); }],
            ["recipientContains", (o, n) => { (o as unknown as MessageRulePredicates).recipientContains = n.getCollectionOfPrimitiveValues<string>(); }],
            ["senderContains", (o, n) => { (o as unknown as MessageRulePredicates).senderContains = n.getCollectionOfPrimitiveValues<string>(); }],
            ["sensitivity", (o, n) => { (o as unknown as MessageRulePredicates).sensitivity = n.getEnumValue<Sensitivity>(Sensitivity); }],
            ["sentCcMe", (o, n) => { (o as unknown as MessageRulePredicates).sentCcMe = n.getBooleanValue(); }],
            ["sentOnlyToMe", (o, n) => { (o as unknown as MessageRulePredicates).sentOnlyToMe = n.getBooleanValue(); }],
            ["sentToAddresses", (o, n) => { (o as unknown as MessageRulePredicates).sentToAddresses = n.getCollectionOfObjectValues<Recipient>(createRecipientFromDiscriminatorValue); }],
            ["sentToMe", (o, n) => { (o as unknown as MessageRulePredicates).sentToMe = n.getBooleanValue(); }],
            ["sentToOrCcMe", (o, n) => { (o as unknown as MessageRulePredicates).sentToOrCcMe = n.getBooleanValue(); }],
            ["subjectContains", (o, n) => { (o as unknown as MessageRulePredicates).subjectContains = n.getCollectionOfPrimitiveValues<string>(); }],
            ["withinSizeRange", (o, n) => { (o as unknown as MessageRulePredicates).withinSizeRange = n.getObjectValue<SizeRange>(createSizeRangeFromDiscriminatorValue); }],
        ]);
    };
    /**
     * Gets the hasAttachments property value. Indicates whether an incoming message must have attachments in order for the condition or exception to apply.
     * @returns a boolean
     */
    public get hasAttachments() {
        return this._hasAttachments;
    };
    /**
     * Sets the hasAttachments property value. Indicates whether an incoming message must have attachments in order for the condition or exception to apply.
     * @param value Value to set for the hasAttachments property.
     */
    public set hasAttachments(value: boolean | undefined) {
        this._hasAttachments = value;
    };
    /**
     * Gets the headerContains property value. Represents the strings that appear in the headers of an incoming message in order for the condition or exception to apply.
     * @returns a string
     */
    public get headerContains() {
        return this._headerContains;
    };
    /**
     * Sets the headerContains property value. Represents the strings that appear in the headers of an incoming message in order for the condition or exception to apply.
     * @param value Value to set for the headerContains property.
     */
    public set headerContains(value: string[] | undefined) {
        this._headerContains = value;
    };
    /**
     * Gets the importance property value. The importance that is stamped on an incoming message in order for the condition or exception to apply: low, normal, high.
     * @returns a importance
     */
    public get importance() {
        return this._importance;
    };
    /**
     * Sets the importance property value. The importance that is stamped on an incoming message in order for the condition or exception to apply: low, normal, high.
     * @param value Value to set for the importance property.
     */
    public set importance(value: Importance | undefined) {
        this._importance = value;
    };
    /**
     * Gets the isApprovalRequest property value. Indicates whether an incoming message must be an approval request in order for the condition or exception to apply.
     * @returns a boolean
     */
    public get isApprovalRequest() {
        return this._isApprovalRequest;
    };
    /**
     * Sets the isApprovalRequest property value. Indicates whether an incoming message must be an approval request in order for the condition or exception to apply.
     * @param value Value to set for the isApprovalRequest property.
     */
    public set isApprovalRequest(value: boolean | undefined) {
        this._isApprovalRequest = value;
    };
    /**
     * Gets the isAutomaticForward property value. Indicates whether an incoming message must be automatically forwarded in order for the condition or exception to apply.
     * @returns a boolean
     */
    public get isAutomaticForward() {
        return this._isAutomaticForward;
    };
    /**
     * Sets the isAutomaticForward property value. Indicates whether an incoming message must be automatically forwarded in order for the condition or exception to apply.
     * @param value Value to set for the isAutomaticForward property.
     */
    public set isAutomaticForward(value: boolean | undefined) {
        this._isAutomaticForward = value;
    };
    /**
     * Gets the isAutomaticReply property value. Indicates whether an incoming message must be an auto reply in order for the condition or exception to apply.
     * @returns a boolean
     */
    public get isAutomaticReply() {
        return this._isAutomaticReply;
    };
    /**
     * Sets the isAutomaticReply property value. Indicates whether an incoming message must be an auto reply in order for the condition or exception to apply.
     * @param value Value to set for the isAutomaticReply property.
     */
    public set isAutomaticReply(value: boolean | undefined) {
        this._isAutomaticReply = value;
    };
    /**
     * Gets the isEncrypted property value. Indicates whether an incoming message must be encrypted in order for the condition or exception to apply.
     * @returns a boolean
     */
    public get isEncrypted() {
        return this._isEncrypted;
    };
    /**
     * Sets the isEncrypted property value. Indicates whether an incoming message must be encrypted in order for the condition or exception to apply.
     * @param value Value to set for the isEncrypted property.
     */
    public set isEncrypted(value: boolean | undefined) {
        this._isEncrypted = value;
    };
    /**
     * Gets the isMeetingRequest property value. Indicates whether an incoming message must be a meeting request in order for the condition or exception to apply.
     * @returns a boolean
     */
    public get isMeetingRequest() {
        return this._isMeetingRequest;
    };
    /**
     * Sets the isMeetingRequest property value. Indicates whether an incoming message must be a meeting request in order for the condition or exception to apply.
     * @param value Value to set for the isMeetingRequest property.
     */
    public set isMeetingRequest(value: boolean | undefined) {
        this._isMeetingRequest = value;
    };
    /**
     * Gets the isMeetingResponse property value. Indicates whether an incoming message must be a meeting response in order for the condition or exception to apply.
     * @returns a boolean
     */
    public get isMeetingResponse() {
        return this._isMeetingResponse;
    };
    /**
     * Sets the isMeetingResponse property value. Indicates whether an incoming message must be a meeting response in order for the condition or exception to apply.
     * @param value Value to set for the isMeetingResponse property.
     */
    public set isMeetingResponse(value: boolean | undefined) {
        this._isMeetingResponse = value;
    };
    /**
     * Gets the isNonDeliveryReport property value. Indicates whether an incoming message must be a non-delivery report in order for the condition or exception to apply.
     * @returns a boolean
     */
    public get isNonDeliveryReport() {
        return this._isNonDeliveryReport;
    };
    /**
     * Sets the isNonDeliveryReport property value. Indicates whether an incoming message must be a non-delivery report in order for the condition or exception to apply.
     * @param value Value to set for the isNonDeliveryReport property.
     */
    public set isNonDeliveryReport(value: boolean | undefined) {
        this._isNonDeliveryReport = value;
    };
    /**
     * Gets the isPermissionControlled property value. Indicates whether an incoming message must be permission controlled (RMS-protected) in order for the condition or exception to apply.
     * @returns a boolean
     */
    public get isPermissionControlled() {
        return this._isPermissionControlled;
    };
    /**
     * Sets the isPermissionControlled property value. Indicates whether an incoming message must be permission controlled (RMS-protected) in order for the condition or exception to apply.
     * @param value Value to set for the isPermissionControlled property.
     */
    public set isPermissionControlled(value: boolean | undefined) {
        this._isPermissionControlled = value;
    };
    /**
     * Gets the isReadReceipt property value. Indicates whether an incoming message must be a read receipt in order for the condition or exception to apply.
     * @returns a boolean
     */
    public get isReadReceipt() {
        return this._isReadReceipt;
    };
    /**
     * Sets the isReadReceipt property value. Indicates whether an incoming message must be a read receipt in order for the condition or exception to apply.
     * @param value Value to set for the isReadReceipt property.
     */
    public set isReadReceipt(value: boolean | undefined) {
        this._isReadReceipt = value;
    };
    /**
     * Gets the isSigned property value. Indicates whether an incoming message must be S/MIME-signed in order for the condition or exception to apply.
     * @returns a boolean
     */
    public get isSigned() {
        return this._isSigned;
    };
    /**
     * Sets the isSigned property value. Indicates whether an incoming message must be S/MIME-signed in order for the condition or exception to apply.
     * @param value Value to set for the isSigned property.
     */
    public set isSigned(value: boolean | undefined) {
        this._isSigned = value;
    };
    /**
     * Gets the isVoicemail property value. Indicates whether an incoming message must be a voice mail in order for the condition or exception to apply.
     * @returns a boolean
     */
    public get isVoicemail() {
        return this._isVoicemail;
    };
    /**
     * Sets the isVoicemail property value. Indicates whether an incoming message must be a voice mail in order for the condition or exception to apply.
     * @param value Value to set for the isVoicemail property.
     */
    public set isVoicemail(value: boolean | undefined) {
        this._isVoicemail = value;
    };
    /**
     * Gets the messageActionFlag property value. Represents the flag-for-action value that appears on an incoming message in order for the condition or exception to apply. The possible values are: any, call, doNotForward, followUp, fyi, forward, noResponseNecessary, read, reply, replyToAll, review.
     * @returns a messageActionFlag
     */
    public get messageActionFlag() {
        return this._messageActionFlag;
    };
    /**
     * Sets the messageActionFlag property value. Represents the flag-for-action value that appears on an incoming message in order for the condition or exception to apply. The possible values are: any, call, doNotForward, followUp, fyi, forward, noResponseNecessary, read, reply, replyToAll, review.
     * @param value Value to set for the messageActionFlag property.
     */
    public set messageActionFlag(value: MessageActionFlag | undefined) {
        this._messageActionFlag = value;
    };
    /**
     * Gets the notSentToMe property value. Indicates whether the owner of the mailbox must not be a recipient of an incoming message in order for the condition or exception to apply.
     * @returns a boolean
     */
    public get notSentToMe() {
        return this._notSentToMe;
    };
    /**
     * Sets the notSentToMe property value. Indicates whether the owner of the mailbox must not be a recipient of an incoming message in order for the condition or exception to apply.
     * @param value Value to set for the notSentToMe property.
     */
    public set notSentToMe(value: boolean | undefined) {
        this._notSentToMe = value;
    };
    /**
     * Gets the recipientContains property value. Represents the strings that appear in either the toRecipients or ccRecipients properties of an incoming message in order for the condition or exception to apply.
     * @returns a string
     */
    public get recipientContains() {
        return this._recipientContains;
    };
    /**
     * Sets the recipientContains property value. Represents the strings that appear in either the toRecipients or ccRecipients properties of an incoming message in order for the condition or exception to apply.
     * @param value Value to set for the recipientContains property.
     */
    public set recipientContains(value: string[] | undefined) {
        this._recipientContains = value;
    };
    /**
     * Gets the senderContains property value. Represents the strings that appear in the from property of an incoming message in order for the condition or exception to apply.
     * @returns a string
     */
    public get senderContains() {
        return this._senderContains;
    };
    /**
     * Sets the senderContains property value. Represents the strings that appear in the from property of an incoming message in order for the condition or exception to apply.
     * @param value Value to set for the senderContains property.
     */
    public set senderContains(value: string[] | undefined) {
        this._senderContains = value;
    };
    /**
     * Gets the sensitivity property value. Represents the sensitivity level that must be stamped on an incoming message in order for the condition or exception to apply. The possible values are: normal, personal, private, confidential.
     * @returns a sensitivity
     */
    public get sensitivity() {
        return this._sensitivity;
    };
    /**
     * Sets the sensitivity property value. Represents the sensitivity level that must be stamped on an incoming message in order for the condition or exception to apply. The possible values are: normal, personal, private, confidential.
     * @param value Value to set for the sensitivity property.
     */
    public set sensitivity(value: Sensitivity | undefined) {
        this._sensitivity = value;
    };
    /**
     * Gets the sentCcMe property value. Indicates whether the owner of the mailbox must be in the ccRecipients property of an incoming message in order for the condition or exception to apply.
     * @returns a boolean
     */
    public get sentCcMe() {
        return this._sentCcMe;
    };
    /**
     * Sets the sentCcMe property value. Indicates whether the owner of the mailbox must be in the ccRecipients property of an incoming message in order for the condition or exception to apply.
     * @param value Value to set for the sentCcMe property.
     */
    public set sentCcMe(value: boolean | undefined) {
        this._sentCcMe = value;
    };
    /**
     * Gets the sentOnlyToMe property value. Indicates whether the owner of the mailbox must be the only recipient in an incoming message in order for the condition or exception to apply.
     * @returns a boolean
     */
    public get sentOnlyToMe() {
        return this._sentOnlyToMe;
    };
    /**
     * Sets the sentOnlyToMe property value. Indicates whether the owner of the mailbox must be the only recipient in an incoming message in order for the condition or exception to apply.
     * @param value Value to set for the sentOnlyToMe property.
     */
    public set sentOnlyToMe(value: boolean | undefined) {
        this._sentOnlyToMe = value;
    };
    /**
     * Gets the sentToAddresses property value. Represents the email addresses that an incoming message must have been sent to in order for the condition or exception to apply.
     * @returns a recipient
     */
    public get sentToAddresses() {
        return this._sentToAddresses;
    };
    /**
     * Sets the sentToAddresses property value. Represents the email addresses that an incoming message must have been sent to in order for the condition or exception to apply.
     * @param value Value to set for the sentToAddresses property.
     */
    public set sentToAddresses(value: Recipient[] | undefined) {
        this._sentToAddresses = value;
    };
    /**
     * Gets the sentToMe property value. Indicates whether the owner of the mailbox must be in the toRecipients property of an incoming message in order for the condition or exception to apply.
     * @returns a boolean
     */
    public get sentToMe() {
        return this._sentToMe;
    };
    /**
     * Sets the sentToMe property value. Indicates whether the owner of the mailbox must be in the toRecipients property of an incoming message in order for the condition or exception to apply.
     * @param value Value to set for the sentToMe property.
     */
    public set sentToMe(value: boolean | undefined) {
        this._sentToMe = value;
    };
    /**
     * Gets the sentToOrCcMe property value. Indicates whether the owner of the mailbox must be in either a toRecipients or ccRecipients property of an incoming message in order for the condition or exception to apply.
     * @returns a boolean
     */
    public get sentToOrCcMe() {
        return this._sentToOrCcMe;
    };
    /**
     * Sets the sentToOrCcMe property value. Indicates whether the owner of the mailbox must be in either a toRecipients or ccRecipients property of an incoming message in order for the condition or exception to apply.
     * @param value Value to set for the sentToOrCcMe property.
     */
    public set sentToOrCcMe(value: boolean | undefined) {
        this._sentToOrCcMe = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfPrimitiveValues<string>("bodyContains", this.bodyContains);
        writer.writeCollectionOfPrimitiveValues<string>("bodyOrSubjectContains", this.bodyOrSubjectContains);
        writer.writeCollectionOfPrimitiveValues<string>("categories", this.categories);
        writer.writeCollectionOfObjectValues<Recipient>("fromAddresses", this.fromAddresses);
        writer.writeBooleanValue("hasAttachments", this.hasAttachments);
        writer.writeCollectionOfPrimitiveValues<string>("headerContains", this.headerContains);
        writer.writeEnumValue<Importance>("importance", this.importance);
        writer.writeBooleanValue("isApprovalRequest", this.isApprovalRequest);
        writer.writeBooleanValue("isAutomaticForward", this.isAutomaticForward);
        writer.writeBooleanValue("isAutomaticReply", this.isAutomaticReply);
        writer.writeBooleanValue("isEncrypted", this.isEncrypted);
        writer.writeBooleanValue("isMeetingRequest", this.isMeetingRequest);
        writer.writeBooleanValue("isMeetingResponse", this.isMeetingResponse);
        writer.writeBooleanValue("isNonDeliveryReport", this.isNonDeliveryReport);
        writer.writeBooleanValue("isPermissionControlled", this.isPermissionControlled);
        writer.writeBooleanValue("isReadReceipt", this.isReadReceipt);
        writer.writeBooleanValue("isSigned", this.isSigned);
        writer.writeBooleanValue("isVoicemail", this.isVoicemail);
        writer.writeEnumValue<MessageActionFlag>("messageActionFlag", this.messageActionFlag);
        writer.writeBooleanValue("notSentToMe", this.notSentToMe);
        writer.writeCollectionOfPrimitiveValues<string>("recipientContains", this.recipientContains);
        writer.writeCollectionOfPrimitiveValues<string>("senderContains", this.senderContains);
        writer.writeEnumValue<Sensitivity>("sensitivity", this.sensitivity);
        writer.writeBooleanValue("sentCcMe", this.sentCcMe);
        writer.writeBooleanValue("sentOnlyToMe", this.sentOnlyToMe);
        writer.writeCollectionOfObjectValues<Recipient>("sentToAddresses", this.sentToAddresses);
        writer.writeBooleanValue("sentToMe", this.sentToMe);
        writer.writeBooleanValue("sentToOrCcMe", this.sentToOrCcMe);
        writer.writeCollectionOfPrimitiveValues<string>("subjectContains", this.subjectContains);
        writer.writeObjectValue<SizeRange>("withinSizeRange", this.withinSizeRange);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the subjectContains property value. Represents the strings that appear in the subject of an incoming message in order for the condition or exception to apply.
     * @returns a string
     */
    public get subjectContains() {
        return this._subjectContains;
    };
    /**
     * Sets the subjectContains property value. Represents the strings that appear in the subject of an incoming message in order for the condition or exception to apply.
     * @param value Value to set for the subjectContains property.
     */
    public set subjectContains(value: string[] | undefined) {
        this._subjectContains = value;
    };
    /**
     * Gets the withinSizeRange property value. Represents the minimum and maximum sizes (in kilobytes) that an incoming message must fall in between in order for the condition or exception to apply.
     * @returns a sizeRange
     */
    public get withinSizeRange() {
        return this._withinSizeRange;
    };
    /**
     * Sets the withinSizeRange property value. Represents the minimum and maximum sizes (in kilobytes) that an incoming message must fall in between in order for the condition or exception to apply.
     * @param value Value to set for the withinSizeRange property.
     */
    public set withinSizeRange(value: SizeRange | undefined) {
        this._withinSizeRange = value;
    };
}
