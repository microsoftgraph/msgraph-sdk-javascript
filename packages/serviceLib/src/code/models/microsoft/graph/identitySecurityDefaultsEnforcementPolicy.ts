import {PolicyBase} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class IdentitySecurityDefaultsEnforcementPolicy extends PolicyBase implements Parsable {
    /** If set to true, Azure Active Directory security defaults is enabled for the tenant.  */
    private _isEnabled?: boolean | undefined;
    /**
     * Instantiates a new identitySecurityDefaultsEnforcementPolicy and sets the default values.
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
            ["isEnabled", (o, n) => { (o as unknown as IdentitySecurityDefaultsEnforcementPolicy).isEnabled = n.getBooleanValue(); }],
        ]);
    };
    /**
     * Gets the isEnabled property value. If set to true, Azure Active Directory security defaults is enabled for the tenant.
     * @returns a boolean
     */
    public get isEnabled() {
        return this._isEnabled;
    };
    /**
     * Sets the isEnabled property value. If set to true, Azure Active Directory security defaults is enabled for the tenant.
     * @param value Value to set for the isEnabled property.
     */
    public set isEnabled(value: boolean | undefined) {
        this._isEnabled = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeBooleanValue("isEnabled", this.isEnabled);
    };
}
