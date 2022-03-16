import {Identity} from './index';
import {TeamworkUserIdentityType} from './teamworkUserIdentityType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TeamworkUserIdentity extends Identity implements Parsable {
    /** Type of user. Possible values are: aadUser, onPremiseAadUser, anonymousGuest, federatedUser, personalMicrosoftAccountUser, skypeUser, phoneUser, and unknownFutureValue.  */
    private _userIdentityType?: TeamworkUserIdentityType | undefined;
    /**
     * Instantiates a new teamworkUserIdentity and sets the default values.
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
            ["userIdentityType", (o, n) => { (o as unknown as TeamworkUserIdentity).userIdentityType = n.getEnumValue<TeamworkUserIdentityType>(TeamworkUserIdentityType); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeEnumValue<TeamworkUserIdentityType>("userIdentityType", this.userIdentityType);
    };
    /**
     * Gets the userIdentityType property value. Type of user. Possible values are: aadUser, onPremiseAadUser, anonymousGuest, federatedUser, personalMicrosoftAccountUser, skypeUser, phoneUser, and unknownFutureValue.
     * @returns a teamworkUserIdentityType
     */
    public get userIdentityType() {
        return this._userIdentityType;
    };
    /**
     * Sets the userIdentityType property value. Type of user. Possible values are: aadUser, onPremiseAadUser, anonymousGuest, federatedUser, personalMicrosoftAccountUser, skypeUser, phoneUser, and unknownFutureValue.
     * @param value Value to set for the userIdentityType property.
     */
    public set userIdentityType(value: TeamworkUserIdentityType | undefined) {
        this._userIdentityType = value;
    };
}
