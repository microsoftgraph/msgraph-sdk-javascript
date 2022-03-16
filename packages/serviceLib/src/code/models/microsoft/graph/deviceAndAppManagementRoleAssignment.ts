import {RoleAssignment} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DeviceAndAppManagementRoleAssignment extends RoleAssignment implements Parsable {
    /** The list of ids of role member security groups. These are IDs from Azure Active Directory.  */
    private _members?: string[] | undefined;
    /**
     * Instantiates a new deviceAndAppManagementRoleAssignment and sets the default values.
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
            ["members", (o, n) => { (o as unknown as DeviceAndAppManagementRoleAssignment).members = n.getCollectionOfPrimitiveValues<string>(); }],
        ]);
    };
    /**
     * Gets the members property value. The list of ids of role member security groups. These are IDs from Azure Active Directory.
     * @returns a string
     */
    public get members() {
        return this._members;
    };
    /**
     * Sets the members property value. The list of ids of role member security groups. These are IDs from Azure Active Directory.
     * @param value Value to set for the members property.
     */
    public set members(value: string[] | undefined) {
        this._members = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfPrimitiveValues<string>("members", this.members);
    };
}
