import {IdentitySet} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SharingInvitation implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** The email address provided for the recipient of the sharing invitation. Read-only.  */
    private _email?: string | undefined;
    /** Provides information about who sent the invitation that created this permission, if that information is available. Read-only.  */
    private _invitedBy?: IdentitySet | undefined;
    private _redeemedBy?: string | undefined;
    /** If true the recipient of the invitation needs to sign in in order to access the shared item. Read-only.  */
    private _signInRequired?: boolean | undefined;
    /**
     * Instantiates a new sharingInvitation and sets the default values.
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
     * Gets the email property value. The email address provided for the recipient of the sharing invitation. Read-only.
     * @returns a string
     */
    public get email() {
        return this._email;
    };
    /**
     * Gets the invitedBy property value. Provides information about who sent the invitation that created this permission, if that information is available. Read-only.
     * @returns a identitySet
     */
    public get invitedBy() {
        return this._invitedBy;
    };
    /**
     * Gets the redeemedBy property value. 
     * @returns a string
     */
    public get redeemedBy() {
        return this._redeemedBy;
    };
    /**
     * Gets the signInRequired property value. If true the recipient of the invitation needs to sign in in order to access the shared item. Read-only.
     * @returns a boolean
     */
    public get signInRequired() {
        return this._signInRequired;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["email", (o, n) => { (o as unknown as SharingInvitation).email = n.getStringValue(); }],
            ["invitedBy", (o, n) => { (o as unknown as SharingInvitation).invitedBy = n.getObjectValue<IdentitySet>(IdentitySet); }],
            ["redeemedBy", (o, n) => { (o as unknown as SharingInvitation).redeemedBy = n.getStringValue(); }],
            ["signInRequired", (o, n) => { (o as unknown as SharingInvitation).signInRequired = n.getBooleanValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("email", this.email);
        writer.writeObjectValue<IdentitySet>("invitedBy", this.invitedBy);
        writer.writeStringValue("redeemedBy", this.redeemedBy);
        writer.writeBooleanValue("signInRequired", this.signInRequired);
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
     * Sets the email property value. The email address provided for the recipient of the sharing invitation. Read-only.
     * @param value Value to set for the email property.
     */
    public set email(value: string | undefined) {
        this._email = value;
    };
    /**
     * Sets the invitedBy property value. Provides information about who sent the invitation that created this permission, if that information is available. Read-only.
     * @param value Value to set for the invitedBy property.
     */
    public set invitedBy(value: IdentitySet | undefined) {
        this._invitedBy = value;
    };
    /**
     * Sets the redeemedBy property value. 
     * @param value Value to set for the redeemedBy property.
     */
    public set redeemedBy(value: string | undefined) {
        this._redeemedBy = value;
    };
    /**
     * Sets the signInRequired property value. If true the recipient of the invitation needs to sign in in order to access the shared item. Read-only.
     * @param value Value to set for the signInRequired property.
     */
    public set signInRequired(value: boolean | undefined) {
        this._signInRequired = value;
    };
}
