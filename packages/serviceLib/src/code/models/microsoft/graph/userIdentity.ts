import {Identity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UserIdentity extends Identity implements Parsable {
    /** Indicates the client IP address used by user performing the activity (audit log only).  */
    private _ipAddress?: string | undefined;
    /** The userPrincipalName attribute of the user.  */
    private _userPrincipalName?: string | undefined;
    /**
     * Instantiates a new userIdentity and sets the default values.
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
            ["ipAddress", (o, n) => { (o as unknown as UserIdentity).ipAddress = n.getStringValue(); }],
            ["userPrincipalName", (o, n) => { (o as unknown as UserIdentity).userPrincipalName = n.getStringValue(); }],
        ]);
    };
    /**
     * Gets the ipAddress property value. Indicates the client IP address used by user performing the activity (audit log only).
     * @returns a string
     */
    public get ipAddress() {
        return this._ipAddress;
    };
    /**
     * Sets the ipAddress property value. Indicates the client IP address used by user performing the activity (audit log only).
     * @param value Value to set for the ipAddress property.
     */
    public set ipAddress(value: string | undefined) {
        this._ipAddress = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("ipAddress", this.ipAddress);
        writer.writeStringValue("userPrincipalName", this.userPrincipalName);
    };
    /**
     * Gets the userPrincipalName property value. The userPrincipalName attribute of the user.
     * @returns a string
     */
    public get userPrincipalName() {
        return this._userPrincipalName;
    };
    /**
     * Sets the userPrincipalName property value. The userPrincipalName attribute of the user.
     * @param value Value to set for the userPrincipalName property.
     */
    public set userPrincipalName(value: string | undefined) {
        this._userPrincipalName = value;
    };
}
