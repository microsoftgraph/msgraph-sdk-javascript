import {createUserScopeTeamsAppInstallationFromDiscriminatorValue} from './createUserScopeTeamsAppInstallationFromDiscriminatorValue';
import {Entity, UserScopeTeamsAppInstallation} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UserTeamwork extends Entity implements Parsable {
    /** The apps installed in the personal scope of this user.  */
    private _installedApps?: UserScopeTeamsAppInstallation[] | undefined;
    /**
     * Instantiates a new userTeamwork and sets the default values.
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
            ["installedApps", (o, n) => { (o as unknown as UserTeamwork).installedApps = n.getCollectionOfObjectValues<UserScopeTeamsAppInstallation>(createUserScopeTeamsAppInstallationFromDiscriminatorValue); }],
        ]);
    };
    /**
     * Gets the installedApps property value. The apps installed in the personal scope of this user.
     * @returns a userScopeTeamsAppInstallation
     */
    public get installedApps() {
        return this._installedApps;
    };
    /**
     * Sets the installedApps property value. The apps installed in the personal scope of this user.
     * @param value Value to set for the installedApps property.
     */
    public set installedApps(value: UserScopeTeamsAppInstallation[] | undefined) {
        this._installedApps = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<UserScopeTeamsAppInstallation>("installedApps", this.installedApps);
    };
}
