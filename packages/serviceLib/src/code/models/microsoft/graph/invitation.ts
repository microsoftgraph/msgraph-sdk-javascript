import {createInvitedUserMessageInfoFromDiscriminatorValue} from './createInvitedUserMessageInfoFromDiscriminatorValue';
import {createUserFromDiscriminatorValue} from './createUserFromDiscriminatorValue';
import {Entity, InvitedUserMessageInfo, User} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Invitation extends Entity implements Parsable {
    /** The user created as part of the invitation creation. Read-Only  */
    private _invitedUser?: User | undefined;
    /** The display name of the user being invited.  */
    private _invitedUserDisplayName?: string | undefined;
    /** The email address of the user being invited. Required. The following special characters are not permitted in the email address:Tilde (~)Exclamation point (!)Number sign (#)Dollar sign ($)Percent (%)Circumflex (^)Ampersand (&)Asterisk (*)Parentheses (( ))Plus sign (+)Equal sign (=)Brackets ([ ])Braces ({ })Backslash (/)Slash mark (/)Pipe (/|)Semicolon (;)Colon (:)Quotation marks (')Angle brackets (< >)Question mark (?)Comma (,)However, the following exceptions apply:A period (.) or a hyphen (-) is permitted anywhere in the user name, except at the beginning or end of the name.An underscore (_) is permitted anywhere in the user name. This includes at the beginning or end of the name.  */
    private _invitedUserEmailAddress?: string | undefined;
    /** Additional configuration for the message being sent to the invited user, including customizing message text, language and cc recipient list.  */
    private _invitedUserMessageInfo?: InvitedUserMessageInfo | undefined;
    /** The userType of the user being invited. By default, this is Guest. You can invite as Member if you are a company administrator.  */
    private _invitedUserType?: string | undefined;
    /** The URL the user can use to redeem their invitation. Read-only.  */
    private _inviteRedeemUrl?: string | undefined;
    /** The URL the user should be redirected to once the invitation is redeemed. Required.  */
    private _inviteRedirectUrl?: string | undefined;
    /** Indicates whether an email should be sent to the user being invited. The default is false.  */
    private _sendInvitationMessage?: boolean | undefined;
    /** The status of the invitation. Possible values are: PendingAcceptance, Completed, InProgress, and Error.  */
    private _status?: string | undefined;
    /**
     * Instantiates a new invitation and sets the default values.
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
            ["invitedUser", (o, n) => { (o as unknown as Invitation).invitedUser = n.getObjectValue<User>(createUserFromDiscriminatorValue); }],
            ["invitedUserDisplayName", (o, n) => { (o as unknown as Invitation).invitedUserDisplayName = n.getStringValue(); }],
            ["invitedUserEmailAddress", (o, n) => { (o as unknown as Invitation).invitedUserEmailAddress = n.getStringValue(); }],
            ["invitedUserMessageInfo", (o, n) => { (o as unknown as Invitation).invitedUserMessageInfo = n.getObjectValue<InvitedUserMessageInfo>(createInvitedUserMessageInfoFromDiscriminatorValue); }],
            ["invitedUserType", (o, n) => { (o as unknown as Invitation).invitedUserType = n.getStringValue(); }],
            ["inviteRedeemUrl", (o, n) => { (o as unknown as Invitation).inviteRedeemUrl = n.getStringValue(); }],
            ["inviteRedirectUrl", (o, n) => { (o as unknown as Invitation).inviteRedirectUrl = n.getStringValue(); }],
            ["sendInvitationMessage", (o, n) => { (o as unknown as Invitation).sendInvitationMessage = n.getBooleanValue(); }],
            ["status", (o, n) => { (o as unknown as Invitation).status = n.getStringValue(); }],
        ]);
    };
    /**
     * Gets the invitedUser property value. The user created as part of the invitation creation. Read-Only
     * @returns a user
     */
    public get invitedUser() {
        return this._invitedUser;
    };
    /**
     * Sets the invitedUser property value. The user created as part of the invitation creation. Read-Only
     * @param value Value to set for the invitedUser property.
     */
    public set invitedUser(value: User | undefined) {
        this._invitedUser = value;
    };
    /**
     * Gets the invitedUserDisplayName property value. The display name of the user being invited.
     * @returns a string
     */
    public get invitedUserDisplayName() {
        return this._invitedUserDisplayName;
    };
    /**
     * Sets the invitedUserDisplayName property value. The display name of the user being invited.
     * @param value Value to set for the invitedUserDisplayName property.
     */
    public set invitedUserDisplayName(value: string | undefined) {
        this._invitedUserDisplayName = value;
    };
    /**
     * Gets the invitedUserEmailAddress property value. The email address of the user being invited. Required. The following special characters are not permitted in the email address:Tilde (~)Exclamation point (!)Number sign (#)Dollar sign ($)Percent (%)Circumflex (^)Ampersand (&)Asterisk (*)Parentheses (( ))Plus sign (+)Equal sign (=)Brackets ([ ])Braces ({ })Backslash (/)Slash mark (/)Pipe (/|)Semicolon (;)Colon (:)Quotation marks (')Angle brackets (< >)Question mark (?)Comma (,)However, the following exceptions apply:A period (.) or a hyphen (-) is permitted anywhere in the user name, except at the beginning or end of the name.An underscore (_) is permitted anywhere in the user name. This includes at the beginning or end of the name.
     * @returns a string
     */
    public get invitedUserEmailAddress() {
        return this._invitedUserEmailAddress;
    };
    /**
     * Sets the invitedUserEmailAddress property value. The email address of the user being invited. Required. The following special characters are not permitted in the email address:Tilde (~)Exclamation point (!)Number sign (#)Dollar sign ($)Percent (%)Circumflex (^)Ampersand (&)Asterisk (*)Parentheses (( ))Plus sign (+)Equal sign (=)Brackets ([ ])Braces ({ })Backslash (/)Slash mark (/)Pipe (/|)Semicolon (;)Colon (:)Quotation marks (')Angle brackets (< >)Question mark (?)Comma (,)However, the following exceptions apply:A period (.) or a hyphen (-) is permitted anywhere in the user name, except at the beginning or end of the name.An underscore (_) is permitted anywhere in the user name. This includes at the beginning or end of the name.
     * @param value Value to set for the invitedUserEmailAddress property.
     */
    public set invitedUserEmailAddress(value: string | undefined) {
        this._invitedUserEmailAddress = value;
    };
    /**
     * Gets the invitedUserMessageInfo property value. Additional configuration for the message being sent to the invited user, including customizing message text, language and cc recipient list.
     * @returns a invitedUserMessageInfo
     */
    public get invitedUserMessageInfo() {
        return this._invitedUserMessageInfo;
    };
    /**
     * Sets the invitedUserMessageInfo property value. Additional configuration for the message being sent to the invited user, including customizing message text, language and cc recipient list.
     * @param value Value to set for the invitedUserMessageInfo property.
     */
    public set invitedUserMessageInfo(value: InvitedUserMessageInfo | undefined) {
        this._invitedUserMessageInfo = value;
    };
    /**
     * Gets the invitedUserType property value. The userType of the user being invited. By default, this is Guest. You can invite as Member if you are a company administrator.
     * @returns a string
     */
    public get invitedUserType() {
        return this._invitedUserType;
    };
    /**
     * Sets the invitedUserType property value. The userType of the user being invited. By default, this is Guest. You can invite as Member if you are a company administrator.
     * @param value Value to set for the invitedUserType property.
     */
    public set invitedUserType(value: string | undefined) {
        this._invitedUserType = value;
    };
    /**
     * Gets the inviteRedeemUrl property value. The URL the user can use to redeem their invitation. Read-only.
     * @returns a string
     */
    public get inviteRedeemUrl() {
        return this._inviteRedeemUrl;
    };
    /**
     * Sets the inviteRedeemUrl property value. The URL the user can use to redeem their invitation. Read-only.
     * @param value Value to set for the inviteRedeemUrl property.
     */
    public set inviteRedeemUrl(value: string | undefined) {
        this._inviteRedeemUrl = value;
    };
    /**
     * Gets the inviteRedirectUrl property value. The URL the user should be redirected to once the invitation is redeemed. Required.
     * @returns a string
     */
    public get inviteRedirectUrl() {
        return this._inviteRedirectUrl;
    };
    /**
     * Sets the inviteRedirectUrl property value. The URL the user should be redirected to once the invitation is redeemed. Required.
     * @param value Value to set for the inviteRedirectUrl property.
     */
    public set inviteRedirectUrl(value: string | undefined) {
        this._inviteRedirectUrl = value;
    };
    /**
     * Gets the sendInvitationMessage property value. Indicates whether an email should be sent to the user being invited. The default is false.
     * @returns a boolean
     */
    public get sendInvitationMessage() {
        return this._sendInvitationMessage;
    };
    /**
     * Sets the sendInvitationMessage property value. Indicates whether an email should be sent to the user being invited. The default is false.
     * @param value Value to set for the sendInvitationMessage property.
     */
    public set sendInvitationMessage(value: boolean | undefined) {
        this._sendInvitationMessage = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<User>("invitedUser", this.invitedUser);
        writer.writeStringValue("invitedUserDisplayName", this.invitedUserDisplayName);
        writer.writeStringValue("invitedUserEmailAddress", this.invitedUserEmailAddress);
        writer.writeObjectValue<InvitedUserMessageInfo>("invitedUserMessageInfo", this.invitedUserMessageInfo);
        writer.writeStringValue("invitedUserType", this.invitedUserType);
        writer.writeStringValue("inviteRedeemUrl", this.inviteRedeemUrl);
        writer.writeStringValue("inviteRedirectUrl", this.inviteRedirectUrl);
        writer.writeBooleanValue("sendInvitationMessage", this.sendInvitationMessage);
        writer.writeStringValue("status", this.status);
    };
    /**
     * Gets the status property value. The status of the invitation. Possible values are: PendingAcceptance, Completed, InProgress, and Error.
     * @returns a string
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. The status of the invitation. Possible values are: PendingAcceptance, Completed, InProgress, and Error.
     * @param value Value to set for the status property.
     */
    public set status(value: string | undefined) {
        this._status = value;
    };
}
