import {CalendarRoleType, EmailAddress, Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CalendarPermission extends Entity implements Parsable {
    /** List of allowed sharing or delegating permission levels for the calendar. Possible values are: none, freeBusyRead, limitedRead, read, write, delegateWithoutPrivateEventAccess, delegateWithPrivateEventAccess, custom.  */
    private _allowedRoles?: CalendarRoleType[] | undefined;
    /** Represents a sharee or delegate who has access to the calendar. For the 'My Organization' sharee, the address property is null. Read-only.  */
    private _emailAddress?: EmailAddress | undefined;
    /** True if the user in context (sharee or delegate) is inside the same organization as the calendar owner.  */
    private _isInsideOrganization?: boolean | undefined;
    /** True if the user can be removed from the list of sharees or delegates for the specified calendar, false otherwise. The 'My organization' user determines the permissions other people within your organization have to the given calendar. You cannot remove 'My organization' as a sharee to a calendar.  */
    private _isRemovable?: boolean | undefined;
    /** Current permission level of the calendar sharee or delegate.  */
    private _role?: CalendarRoleType | undefined;
    /**
     * Instantiates a new calendarPermission and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the allowedRoles property value. List of allowed sharing or delegating permission levels for the calendar. Possible values are: none, freeBusyRead, limitedRead, read, write, delegateWithoutPrivateEventAccess, delegateWithPrivateEventAccess, custom.
     * @returns a calendarRoleType
     */
    public get allowedRoles() {
        return this._allowedRoles;
    };
    /**
     * Gets the emailAddress property value. Represents a sharee or delegate who has access to the calendar. For the 'My Organization' sharee, the address property is null. Read-only.
     * @returns a emailAddress
     */
    public get emailAddress() {
        return this._emailAddress;
    };
    /**
     * Gets the isInsideOrganization property value. True if the user in context (sharee or delegate) is inside the same organization as the calendar owner.
     * @returns a boolean
     */
    public get isInsideOrganization() {
        return this._isInsideOrganization;
    };
    /**
     * Gets the isRemovable property value. True if the user can be removed from the list of sharees or delegates for the specified calendar, false otherwise. The 'My organization' user determines the permissions other people within your organization have to the given calendar. You cannot remove 'My organization' as a sharee to a calendar.
     * @returns a boolean
     */
    public get isRemovable() {
        return this._isRemovable;
    };
    /**
     * Gets the role property value. Current permission level of the calendar sharee or delegate.
     * @returns a calendarRoleType
     */
    public get role() {
        return this._role;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["allowedRoles", (o, n) => { (o as unknown as CalendarPermission).allowedRoles = n.getEnumValues<CalendarRoleType>(CalendarRoleType); }],
            ["emailAddress", (o, n) => { (o as unknown as CalendarPermission).emailAddress = n.getObjectValue<EmailAddress>(EmailAddress); }],
            ["isInsideOrganization", (o, n) => { (o as unknown as CalendarPermission).isInsideOrganization = n.getBooleanValue(); }],
            ["isRemovable", (o, n) => { (o as unknown as CalendarPermission).isRemovable = n.getBooleanValue(); }],
            ["role", (o, n) => { (o as unknown as CalendarPermission).role = n.getEnumValue<CalendarRoleType>(CalendarRoleType); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        this.allowedRoles && writer.writeEnumValue<CalendarRoleType>("allowedRoles", ...this.allowedRoles);
        writer.writeObjectValue<EmailAddress>("emailAddress", this.emailAddress);
        writer.writeBooleanValue("isInsideOrganization", this.isInsideOrganization);
        writer.writeBooleanValue("isRemovable", this.isRemovable);
        writer.writeEnumValue<CalendarRoleType>("role", this.role);
    };
    /**
     * Sets the allowedRoles property value. List of allowed sharing or delegating permission levels for the calendar. Possible values are: none, freeBusyRead, limitedRead, read, write, delegateWithoutPrivateEventAccess, delegateWithPrivateEventAccess, custom.
     * @param value Value to set for the allowedRoles property.
     */
    public set allowedRoles(value: CalendarRoleType[] | undefined) {
        this._allowedRoles = value;
    };
    /**
     * Sets the emailAddress property value. Represents a sharee or delegate who has access to the calendar. For the 'My Organization' sharee, the address property is null. Read-only.
     * @param value Value to set for the emailAddress property.
     */
    public set emailAddress(value: EmailAddress | undefined) {
        this._emailAddress = value;
    };
    /**
     * Sets the isInsideOrganization property value. True if the user in context (sharee or delegate) is inside the same organization as the calendar owner.
     * @param value Value to set for the isInsideOrganization property.
     */
    public set isInsideOrganization(value: boolean | undefined) {
        this._isInsideOrganization = value;
    };
    /**
     * Sets the isRemovable property value. True if the user can be removed from the list of sharees or delegates for the specified calendar, false otherwise. The 'My organization' user determines the permissions other people within your organization have to the given calendar. You cannot remove 'My organization' as a sharee to a calendar.
     * @param value Value to set for the isRemovable property.
     */
    public set isRemovable(value: boolean | undefined) {
        this._isRemovable = value;
    };
    /**
     * Sets the role property value. Current permission level of the calendar sharee or delegate.
     * @param value Value to set for the role property.
     */
    public set role(value: CalendarRoleType | undefined) {
        this._role = value;
    };
}
