import {Entity} from './index';
import {UserFlowType} from './userFlowType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class IdentityUserFlow extends Entity implements Parsable {
    private _userFlowType?: UserFlowType | undefined;
    private _userFlowTypeVersion?: number | undefined;
    /**
     * Instantiates a new identityUserFlow and sets the default values.
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
            ["userFlowType", (o, n) => { (o as unknown as IdentityUserFlow).userFlowType = n.getEnumValue<UserFlowType>(UserFlowType); }],
            ["userFlowTypeVersion", (o, n) => { (o as unknown as IdentityUserFlow).userFlowTypeVersion = n.getNumberValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeEnumValue<UserFlowType>("userFlowType", this.userFlowType);
        writer.writeNumberValue("userFlowTypeVersion", this.userFlowTypeVersion);
    };
    /**
     * Gets the userFlowType property value. 
     * @returns a userFlowType
     */
    public get userFlowType() {
        return this._userFlowType;
    };
    /**
     * Sets the userFlowType property value. 
     * @param value Value to set for the userFlowType property.
     */
    public set userFlowType(value: UserFlowType | undefined) {
        this._userFlowType = value;
    };
    /**
     * Gets the userFlowTypeVersion property value. 
     * @returns a float
     */
    public get userFlowTypeVersion() {
        return this._userFlowTypeVersion;
    };
    /**
     * Sets the userFlowTypeVersion property value. 
     * @param value Value to set for the userFlowTypeVersion property.
     */
    public set userFlowTypeVersion(value: number | undefined) {
        this._userFlowTypeVersion = value;
    };
}
