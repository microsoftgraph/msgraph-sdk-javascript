import {Entity} from '../';
import {IdentityType} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Identity extends Entity implements Parsable {
    /** The type of identity. Possible values are: user or group for Azure AD identities and externalgroup for groups in an external system.  */
    private _type?: IdentityType | undefined;
    /**
     * Instantiates a new identity and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the type property value. The type of identity. Possible values are: user or group for Azure AD identities and externalgroup for groups in an external system.
     * @returns a identityType
     */
    public get type() {
        return this._type;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["type", (o, n) => { (o as unknown as Identity).type = n.getEnumValue<IdentityType>(IdentityType); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeEnumValue<IdentityType>("type", this.type);
    };
    /**
     * Sets the type property value. The type of identity. Possible values are: user or group for Azure AD identities and externalgroup for groups in an external system.
     * @param value Value to set for the type property.
     */
    public set type(value: IdentityType | undefined) {
        this._type = value;
    };
}
