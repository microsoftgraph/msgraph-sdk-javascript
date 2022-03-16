import {CalendarColor} from './calendarColor';
import {createCalendarPermissionFromDiscriminatorValue} from './createCalendarPermissionFromDiscriminatorValue';
import {createEmailAddressFromDiscriminatorValue} from './createEmailAddressFromDiscriminatorValue';
import {createEventFromDiscriminatorValue} from './createEventFromDiscriminatorValue';
import {createMultiValueLegacyExtendedPropertyFromDiscriminatorValue} from './createMultiValueLegacyExtendedPropertyFromDiscriminatorValue';
import {createSingleValueLegacyExtendedPropertyFromDiscriminatorValue} from './createSingleValueLegacyExtendedPropertyFromDiscriminatorValue';
import {CalendarPermission, EmailAddress, Entity, Event, MultiValueLegacyExtendedProperty, SingleValueLegacyExtendedProperty} from './index';
import {OnlineMeetingProviderType} from './onlineMeetingProviderType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Calendar extends Entity implements Parsable {
    /** Represent the online meeting service providers that can be used to create online meetings in this calendar. Possible values are: unknown, skypeForBusiness, skypeForConsumer, teamsForBusiness.  */
    private _allowedOnlineMeetingProviders?: OnlineMeetingProviderType[] | undefined;
    /** The permissions of the users with whom the calendar is shared.  */
    private _calendarPermissions?: CalendarPermission[] | undefined;
    /** The calendar view for the calendar. Navigation property. Read-only.  */
    private _calendarView?: Event[] | undefined;
    /** true if the user can write to the calendar, false otherwise. This property is true for the user who created the calendar. This property is also true for a user who has been shared a calendar and granted write access.  */
    private _canEdit?: boolean | undefined;
    /** true if the user has the permission to share the calendar, false otherwise. Only the user who created the calendar can share it.  */
    private _canShare?: boolean | undefined;
    /** true if the user can read calendar items that have been marked private, false otherwise.  */
    private _canViewPrivateItems?: boolean | undefined;
    /** Identifies the version of the calendar object. Every time the calendar is changed, changeKey changes as well. This allows Exchange to apply changes to the correct version of the object. Read-only.  */
    private _changeKey?: string | undefined;
    /** Specifies the color theme to distinguish the calendar from other calendars in a UI. The property values are: auto, lightBlue, lightGreen, lightOrange, lightGray, lightYellow, lightTeal, lightPink, lightBrown, lightRed, maxColor.  */
    private _color?: CalendarColor | undefined;
    /** The default online meeting provider for meetings sent from this calendar. Possible values are: unknown, skypeForBusiness, skypeForConsumer, teamsForBusiness.  */
    private _defaultOnlineMeetingProvider?: OnlineMeetingProviderType | undefined;
    /** The events in the calendar. Navigation property. Read-only.  */
    private _events?: Event[] | undefined;
    /** The calendar color, expressed in a hex color code of three hexadecimal values, each ranging from 00 to FF and representing the red, green, or blue components of the color in the RGB color space. If the user has never explicitly set a color for the calendar, this property is empty. Read-only.  */
    private _hexColor?: string | undefined;
    /** true if this is the default calendar where new events are created by default, false otherwise.  */
    private _isDefaultCalendar?: boolean | undefined;
    /** Indicates whether this user calendar can be deleted from the user mailbox.  */
    private _isRemovable?: boolean | undefined;
    /** Indicates whether this user calendar supports tracking of meeting responses. Only meeting invites sent from users' primary calendars support tracking of meeting responses.  */
    private _isTallyingResponses?: boolean | undefined;
    /** The collection of multi-value extended properties defined for the calendar. Read-only. Nullable.  */
    private _multiValueExtendedProperties?: MultiValueLegacyExtendedProperty[] | undefined;
    /** The calendar name.  */
    private _name?: string | undefined;
    /** If set, this represents the user who created or added the calendar. For a calendar that the user created or added, the owner property is set to the user. For a calendar shared with the user, the owner property is set to the person who shared that calendar with the user.  */
    private _owner?: EmailAddress | undefined;
    /** The collection of single-value extended properties defined for the calendar. Read-only. Nullable.  */
    private _singleValueExtendedProperties?: SingleValueLegacyExtendedProperty[] | undefined;
    /**
     * Gets the allowedOnlineMeetingProviders property value. Represent the online meeting service providers that can be used to create online meetings in this calendar. Possible values are: unknown, skypeForBusiness, skypeForConsumer, teamsForBusiness.
     * @returns a onlineMeetingProviderType
     */
    public get allowedOnlineMeetingProviders() {
        return this._allowedOnlineMeetingProviders;
    };
    /**
     * Sets the allowedOnlineMeetingProviders property value. Represent the online meeting service providers that can be used to create online meetings in this calendar. Possible values are: unknown, skypeForBusiness, skypeForConsumer, teamsForBusiness.
     * @param value Value to set for the allowedOnlineMeetingProviders property.
     */
    public set allowedOnlineMeetingProviders(value: OnlineMeetingProviderType[] | undefined) {
        this._allowedOnlineMeetingProviders = value;
    };
    /**
     * Gets the calendarPermissions property value. The permissions of the users with whom the calendar is shared.
     * @returns a calendarPermission
     */
    public get calendarPermissions() {
        return this._calendarPermissions;
    };
    /**
     * Sets the calendarPermissions property value. The permissions of the users with whom the calendar is shared.
     * @param value Value to set for the calendarPermissions property.
     */
    public set calendarPermissions(value: CalendarPermission[] | undefined) {
        this._calendarPermissions = value;
    };
    /**
     * Gets the calendarView property value. The calendar view for the calendar. Navigation property. Read-only.
     * @returns a event
     */
    public get calendarView() {
        return this._calendarView;
    };
    /**
     * Sets the calendarView property value. The calendar view for the calendar. Navigation property. Read-only.
     * @param value Value to set for the calendarView property.
     */
    public set calendarView(value: Event[] | undefined) {
        this._calendarView = value;
    };
    /**
     * Gets the canEdit property value. true if the user can write to the calendar, false otherwise. This property is true for the user who created the calendar. This property is also true for a user who has been shared a calendar and granted write access.
     * @returns a boolean
     */
    public get canEdit() {
        return this._canEdit;
    };
    /**
     * Sets the canEdit property value. true if the user can write to the calendar, false otherwise. This property is true for the user who created the calendar. This property is also true for a user who has been shared a calendar and granted write access.
     * @param value Value to set for the canEdit property.
     */
    public set canEdit(value: boolean | undefined) {
        this._canEdit = value;
    };
    /**
     * Gets the canShare property value. true if the user has the permission to share the calendar, false otherwise. Only the user who created the calendar can share it.
     * @returns a boolean
     */
    public get canShare() {
        return this._canShare;
    };
    /**
     * Sets the canShare property value. true if the user has the permission to share the calendar, false otherwise. Only the user who created the calendar can share it.
     * @param value Value to set for the canShare property.
     */
    public set canShare(value: boolean | undefined) {
        this._canShare = value;
    };
    /**
     * Gets the canViewPrivateItems property value. true if the user can read calendar items that have been marked private, false otherwise.
     * @returns a boolean
     */
    public get canViewPrivateItems() {
        return this._canViewPrivateItems;
    };
    /**
     * Sets the canViewPrivateItems property value. true if the user can read calendar items that have been marked private, false otherwise.
     * @param value Value to set for the canViewPrivateItems property.
     */
    public set canViewPrivateItems(value: boolean | undefined) {
        this._canViewPrivateItems = value;
    };
    /**
     * Gets the changeKey property value. Identifies the version of the calendar object. Every time the calendar is changed, changeKey changes as well. This allows Exchange to apply changes to the correct version of the object. Read-only.
     * @returns a string
     */
    public get changeKey() {
        return this._changeKey;
    };
    /**
     * Sets the changeKey property value. Identifies the version of the calendar object. Every time the calendar is changed, changeKey changes as well. This allows Exchange to apply changes to the correct version of the object. Read-only.
     * @param value Value to set for the changeKey property.
     */
    public set changeKey(value: string | undefined) {
        this._changeKey = value;
    };
    /**
     * Gets the color property value. Specifies the color theme to distinguish the calendar from other calendars in a UI. The property values are: auto, lightBlue, lightGreen, lightOrange, lightGray, lightYellow, lightTeal, lightPink, lightBrown, lightRed, maxColor.
     * @returns a calendarColor
     */
    public get color() {
        return this._color;
    };
    /**
     * Sets the color property value. Specifies the color theme to distinguish the calendar from other calendars in a UI. The property values are: auto, lightBlue, lightGreen, lightOrange, lightGray, lightYellow, lightTeal, lightPink, lightBrown, lightRed, maxColor.
     * @param value Value to set for the color property.
     */
    public set color(value: CalendarColor | undefined) {
        this._color = value;
    };
    /**
     * Instantiates a new calendar and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the defaultOnlineMeetingProvider property value. The default online meeting provider for meetings sent from this calendar. Possible values are: unknown, skypeForBusiness, skypeForConsumer, teamsForBusiness.
     * @returns a onlineMeetingProviderType
     */
    public get defaultOnlineMeetingProvider() {
        return this._defaultOnlineMeetingProvider;
    };
    /**
     * Sets the defaultOnlineMeetingProvider property value. The default online meeting provider for meetings sent from this calendar. Possible values are: unknown, skypeForBusiness, skypeForConsumer, teamsForBusiness.
     * @param value Value to set for the defaultOnlineMeetingProvider property.
     */
    public set defaultOnlineMeetingProvider(value: OnlineMeetingProviderType | undefined) {
        this._defaultOnlineMeetingProvider = value;
    };
    /**
     * Gets the events property value. The events in the calendar. Navigation property. Read-only.
     * @returns a event
     */
    public get events() {
        return this._events;
    };
    /**
     * Sets the events property value. The events in the calendar. Navigation property. Read-only.
     * @param value Value to set for the events property.
     */
    public set events(value: Event[] | undefined) {
        this._events = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["allowedOnlineMeetingProviders", (o, n) => { (o as unknown as Calendar).allowedOnlineMeetingProviders = n.getEnumValues<OnlineMeetingProviderType>(OnlineMeetingProviderType); }],
            ["calendarPermissions", (o, n) => { (o as unknown as Calendar).calendarPermissions = n.getCollectionOfObjectValues<CalendarPermission>(createCalendarPermissionFromDiscriminatorValue); }],
            ["calendarView", (o, n) => { (o as unknown as Calendar).calendarView = n.getCollectionOfObjectValues<Event>(createEventFromDiscriminatorValue); }],
            ["canEdit", (o, n) => { (o as unknown as Calendar).canEdit = n.getBooleanValue(); }],
            ["canShare", (o, n) => { (o as unknown as Calendar).canShare = n.getBooleanValue(); }],
            ["canViewPrivateItems", (o, n) => { (o as unknown as Calendar).canViewPrivateItems = n.getBooleanValue(); }],
            ["changeKey", (o, n) => { (o as unknown as Calendar).changeKey = n.getStringValue(); }],
            ["color", (o, n) => { (o as unknown as Calendar).color = n.getEnumValue<CalendarColor>(CalendarColor); }],
            ["defaultOnlineMeetingProvider", (o, n) => { (o as unknown as Calendar).defaultOnlineMeetingProvider = n.getEnumValue<OnlineMeetingProviderType>(OnlineMeetingProviderType); }],
            ["events", (o, n) => { (o as unknown as Calendar).events = n.getCollectionOfObjectValues<Event>(createEventFromDiscriminatorValue); }],
            ["hexColor", (o, n) => { (o as unknown as Calendar).hexColor = n.getStringValue(); }],
            ["isDefaultCalendar", (o, n) => { (o as unknown as Calendar).isDefaultCalendar = n.getBooleanValue(); }],
            ["isRemovable", (o, n) => { (o as unknown as Calendar).isRemovable = n.getBooleanValue(); }],
            ["isTallyingResponses", (o, n) => { (o as unknown as Calendar).isTallyingResponses = n.getBooleanValue(); }],
            ["multiValueExtendedProperties", (o, n) => { (o as unknown as Calendar).multiValueExtendedProperties = n.getCollectionOfObjectValues<MultiValueLegacyExtendedProperty>(createMultiValueLegacyExtendedPropertyFromDiscriminatorValue); }],
            ["name", (o, n) => { (o as unknown as Calendar).name = n.getStringValue(); }],
            ["owner", (o, n) => { (o as unknown as Calendar).owner = n.getObjectValue<EmailAddress>(createEmailAddressFromDiscriminatorValue); }],
            ["singleValueExtendedProperties", (o, n) => { (o as unknown as Calendar).singleValueExtendedProperties = n.getCollectionOfObjectValues<SingleValueLegacyExtendedProperty>(createSingleValueLegacyExtendedPropertyFromDiscriminatorValue); }],
        ]);
    };
    /**
     * Gets the hexColor property value. The calendar color, expressed in a hex color code of three hexadecimal values, each ranging from 00 to FF and representing the red, green, or blue components of the color in the RGB color space. If the user has never explicitly set a color for the calendar, this property is empty. Read-only.
     * @returns a string
     */
    public get hexColor() {
        return this._hexColor;
    };
    /**
     * Sets the hexColor property value. The calendar color, expressed in a hex color code of three hexadecimal values, each ranging from 00 to FF and representing the red, green, or blue components of the color in the RGB color space. If the user has never explicitly set a color for the calendar, this property is empty. Read-only.
     * @param value Value to set for the hexColor property.
     */
    public set hexColor(value: string | undefined) {
        this._hexColor = value;
    };
    /**
     * Gets the isDefaultCalendar property value. true if this is the default calendar where new events are created by default, false otherwise.
     * @returns a boolean
     */
    public get isDefaultCalendar() {
        return this._isDefaultCalendar;
    };
    /**
     * Sets the isDefaultCalendar property value. true if this is the default calendar where new events are created by default, false otherwise.
     * @param value Value to set for the isDefaultCalendar property.
     */
    public set isDefaultCalendar(value: boolean | undefined) {
        this._isDefaultCalendar = value;
    };
    /**
     * Gets the isRemovable property value. Indicates whether this user calendar can be deleted from the user mailbox.
     * @returns a boolean
     */
    public get isRemovable() {
        return this._isRemovable;
    };
    /**
     * Sets the isRemovable property value. Indicates whether this user calendar can be deleted from the user mailbox.
     * @param value Value to set for the isRemovable property.
     */
    public set isRemovable(value: boolean | undefined) {
        this._isRemovable = value;
    };
    /**
     * Gets the isTallyingResponses property value. Indicates whether this user calendar supports tracking of meeting responses. Only meeting invites sent from users' primary calendars support tracking of meeting responses.
     * @returns a boolean
     */
    public get isTallyingResponses() {
        return this._isTallyingResponses;
    };
    /**
     * Sets the isTallyingResponses property value. Indicates whether this user calendar supports tracking of meeting responses. Only meeting invites sent from users' primary calendars support tracking of meeting responses.
     * @param value Value to set for the isTallyingResponses property.
     */
    public set isTallyingResponses(value: boolean | undefined) {
        this._isTallyingResponses = value;
    };
    /**
     * Gets the multiValueExtendedProperties property value. The collection of multi-value extended properties defined for the calendar. Read-only. Nullable.
     * @returns a multiValueLegacyExtendedProperty
     */
    public get multiValueExtendedProperties() {
        return this._multiValueExtendedProperties;
    };
    /**
     * Sets the multiValueExtendedProperties property value. The collection of multi-value extended properties defined for the calendar. Read-only. Nullable.
     * @param value Value to set for the multiValueExtendedProperties property.
     */
    public set multiValueExtendedProperties(value: MultiValueLegacyExtendedProperty[] | undefined) {
        this._multiValueExtendedProperties = value;
    };
    /**
     * Gets the name property value. The calendar name.
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. The calendar name.
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
    /**
     * Gets the owner property value. If set, this represents the user who created or added the calendar. For a calendar that the user created or added, the owner property is set to the user. For a calendar shared with the user, the owner property is set to the person who shared that calendar with the user.
     * @returns a emailAddress
     */
    public get owner() {
        return this._owner;
    };
    /**
     * Sets the owner property value. If set, this represents the user who created or added the calendar. For a calendar that the user created or added, the owner property is set to the user. For a calendar shared with the user, the owner property is set to the person who shared that calendar with the user.
     * @param value Value to set for the owner property.
     */
    public set owner(value: EmailAddress | undefined) {
        this._owner = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        this.allowedOnlineMeetingProviders && writer.writeEnumValue<OnlineMeetingProviderType>("allowedOnlineMeetingProviders", ...this.allowedOnlineMeetingProviders);
        writer.writeCollectionOfObjectValues<CalendarPermission>("calendarPermissions", this.calendarPermissions);
        writer.writeCollectionOfObjectValues<Event>("calendarView", this.calendarView);
        writer.writeBooleanValue("canEdit", this.canEdit);
        writer.writeBooleanValue("canShare", this.canShare);
        writer.writeBooleanValue("canViewPrivateItems", this.canViewPrivateItems);
        writer.writeStringValue("changeKey", this.changeKey);
        writer.writeEnumValue<CalendarColor>("color", this.color);
        writer.writeEnumValue<OnlineMeetingProviderType>("defaultOnlineMeetingProvider", this.defaultOnlineMeetingProvider);
        writer.writeCollectionOfObjectValues<Event>("events", this.events);
        writer.writeStringValue("hexColor", this.hexColor);
        writer.writeBooleanValue("isDefaultCalendar", this.isDefaultCalendar);
        writer.writeBooleanValue("isRemovable", this.isRemovable);
        writer.writeBooleanValue("isTallyingResponses", this.isTallyingResponses);
        writer.writeCollectionOfObjectValues<MultiValueLegacyExtendedProperty>("multiValueExtendedProperties", this.multiValueExtendedProperties);
        writer.writeStringValue("name", this.name);
        writer.writeObjectValue<EmailAddress>("owner", this.owner);
        writer.writeCollectionOfObjectValues<SingleValueLegacyExtendedProperty>("singleValueExtendedProperties", this.singleValueExtendedProperties);
    };
    /**
     * Gets the singleValueExtendedProperties property value. The collection of single-value extended properties defined for the calendar. Read-only. Nullable.
     * @returns a singleValueLegacyExtendedProperty
     */
    public get singleValueExtendedProperties() {
        return this._singleValueExtendedProperties;
    };
    /**
     * Sets the singleValueExtendedProperties property value. The collection of single-value extended properties defined for the calendar. Read-only. Nullable.
     * @param value Value to set for the singleValueExtendedProperties property.
     */
    public set singleValueExtendedProperties(value: SingleValueLegacyExtendedProperty[] | undefined) {
        this._singleValueExtendedProperties = value;
    };
}
