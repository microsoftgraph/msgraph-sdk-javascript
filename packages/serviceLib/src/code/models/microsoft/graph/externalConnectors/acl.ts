import {AccessType, AclType} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Acl implements Parsable {
    /** The access granted to the identity. Possible values are: grant, deny, unknownFutureValue.  */
    private _accessType?: AccessType | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** The type of identity. Possible values are: user, group, everyone, everyoneExceptGuests, externalGroup, unknownFutureValue.  */
    private _type?: AclType | undefined;
    /** The unique identifer of the identity. In case of Azure Active Directory identities, value is set to the object identifier of the user, group or tenant for types user, group and everyone (and everyoneExceptGuests) respectively. In case of external groups value is set to the ID of the externalGroup  */
    private _value?: string | undefined;
    /**
     * Instantiates a new acl and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the accessType property value. The access granted to the identity. Possible values are: grant, deny, unknownFutureValue.
     * @returns a accessType
     */
    public get accessType() {
        return this._accessType;
    };
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Map<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Gets the type property value. The type of identity. Possible values are: user, group, everyone, everyoneExceptGuests, externalGroup, unknownFutureValue.
     * @returns a aclType
     */
    public get type() {
        return this._type;
    };
    /**
     * Gets the value property value. The unique identifer of the identity. In case of Azure Active Directory identities, value is set to the object identifier of the user, group or tenant for types user, group and everyone (and everyoneExceptGuests) respectively. In case of external groups value is set to the ID of the externalGroup
     * @returns a string
     */
    public get value() {
        return this._value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["accessType", (o, n) => { (o as unknown as Acl).accessType = n.getEnumValue<AccessType>(AccessType); }],
            ["type", (o, n) => { (o as unknown as Acl).type = n.getEnumValue<AclType>(AclType); }],
            ["value", (o, n) => { (o as unknown as Acl).value = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeEnumValue<AccessType>("accessType", this.accessType);
        writer.writeEnumValue<AclType>("type", this.type);
        writer.writeStringValue("value", this.value);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Sets the accessType property value. The access granted to the identity. Possible values are: grant, deny, unknownFutureValue.
     * @param value Value to set for the accessType property.
     */
    public set accessType(value: AccessType | undefined) {
        this._accessType = value;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Map<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Sets the type property value. The type of identity. Possible values are: user, group, everyone, everyoneExceptGuests, externalGroup, unknownFutureValue.
     * @param value Value to set for the type property.
     */
    public set type(value: AclType | undefined) {
        this._type = value;
    };
    /**
     * Sets the value property value. The unique identifer of the identity. In case of Azure Active Directory identities, value is set to the object identifier of the user, group or tenant for types user, group and everyone (and everyoneExceptGuests) respectively. In case of external groups value is set to the ID of the externalGroup
     * @param value Value to set for the value property.
     */
    public set value(value: string | undefined) {
        this._value = value;
    };
}
