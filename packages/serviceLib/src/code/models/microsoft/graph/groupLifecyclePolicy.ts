import {Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class GroupLifecyclePolicy extends Entity implements Parsable {
    /** List of email address to send notifications for groups without owners. Multiple email address can be defined by separating email address with a semicolon.  */
    private _alternateNotificationEmails?: string | undefined;
    /** Number of days before a group expires and needs to be renewed. Once renewed, the group expiration is extended by the number of days defined.  */
    private _groupLifetimeInDays?: number | undefined;
    /** The group type for which the expiration policy applies. Possible values are All, Selected or None.  */
    private _managedGroupTypes?: string | undefined;
    /**
     * Instantiates a new groupLifecyclePolicy and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the alternateNotificationEmails property value. List of email address to send notifications for groups without owners. Multiple email address can be defined by separating email address with a semicolon.
     * @returns a string
     */
    public get alternateNotificationEmails() {
        return this._alternateNotificationEmails;
    };
    /**
     * Gets the groupLifetimeInDays property value. Number of days before a group expires and needs to be renewed. Once renewed, the group expiration is extended by the number of days defined.
     * @returns a integer
     */
    public get groupLifetimeInDays() {
        return this._groupLifetimeInDays;
    };
    /**
     * Gets the managedGroupTypes property value. The group type for which the expiration policy applies. Possible values are All, Selected or None.
     * @returns a string
     */
    public get managedGroupTypes() {
        return this._managedGroupTypes;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["alternateNotificationEmails", (o, n) => { (o as unknown as GroupLifecyclePolicy).alternateNotificationEmails = n.getStringValue(); }],
            ["groupLifetimeInDays", (o, n) => { (o as unknown as GroupLifecyclePolicy).groupLifetimeInDays = n.getNumberValue(); }],
            ["managedGroupTypes", (o, n) => { (o as unknown as GroupLifecyclePolicy).managedGroupTypes = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("alternateNotificationEmails", this.alternateNotificationEmails);
        writer.writeNumberValue("groupLifetimeInDays", this.groupLifetimeInDays);
        writer.writeStringValue("managedGroupTypes", this.managedGroupTypes);
    };
    /**
     * Sets the alternateNotificationEmails property value. List of email address to send notifications for groups without owners. Multiple email address can be defined by separating email address with a semicolon.
     * @param value Value to set for the alternateNotificationEmails property.
     */
    public set alternateNotificationEmails(value: string | undefined) {
        this._alternateNotificationEmails = value;
    };
    /**
     * Sets the groupLifetimeInDays property value. Number of days before a group expires and needs to be renewed. Once renewed, the group expiration is extended by the number of days defined.
     * @param value Value to set for the groupLifetimeInDays property.
     */
    public set groupLifetimeInDays(value: number | undefined) {
        this._groupLifetimeInDays = value;
    };
    /**
     * Sets the managedGroupTypes property value. The group type for which the expiration policy applies. Possible values are All, Selected or None.
     * @param value Value to set for the managedGroupTypes property.
     */
    public set managedGroupTypes(value: string | undefined) {
        this._managedGroupTypes = value;
    };
}
