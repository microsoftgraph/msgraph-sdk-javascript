import {ConditionalAccessPolicyState} from './conditionalAccessPolicyState';
import {createConditionalAccessConditionSetFromDiscriminatorValue} from './createConditionalAccessConditionSetFromDiscriminatorValue';
import {createConditionalAccessGrantControlsFromDiscriminatorValue} from './createConditionalAccessGrantControlsFromDiscriminatorValue';
import {createConditionalAccessSessionControlsFromDiscriminatorValue} from './createConditionalAccessSessionControlsFromDiscriminatorValue';
import {ConditionalAccessConditionSet, ConditionalAccessGrantControls, ConditionalAccessSessionControls, Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ConditionalAccessPolicy extends Entity implements Parsable {
    private _conditions?: ConditionalAccessConditionSet | undefined;
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Readonly.  */
    private _createdDateTime?: Date | undefined;
    /** Not used.  */
    private _description?: string | undefined;
    /** Specifies a display name for the conditionalAccessPolicy object.  */
    private _displayName?: string | undefined;
    /** Specifies the grant controls that must be fulfilled to pass the policy.  */
    private _grantControls?: ConditionalAccessGrantControls | undefined;
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Readonly.  */
    private _modifiedDateTime?: Date | undefined;
    /** Specifies the session controls that are enforced after sign-in.  */
    private _sessionControls?: ConditionalAccessSessionControls | undefined;
    /** Specifies the state of the conditionalAccessPolicy object. Possible values are: enabled, disabled, enabledForReportingButNotEnforced. Required.  */
    private _state?: ConditionalAccessPolicyState | undefined;
    /**
     * Gets the conditions property value. 
     * @returns a conditionalAccessConditionSet
     */
    public get conditions() {
        return this._conditions;
    };
    /**
     * Sets the conditions property value. 
     * @param value Value to set for the conditions property.
     */
    public set conditions(value: ConditionalAccessConditionSet | undefined) {
        this._conditions = value;
    };
    /**
     * Instantiates a new conditionalAccessPolicy and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the createdDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Readonly.
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Readonly.
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        this._createdDateTime = value;
    };
    /**
     * Gets the description property value. Not used.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. Not used.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * Gets the displayName property value. Specifies a display name for the conditionalAccessPolicy object.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. Specifies a display name for the conditionalAccessPolicy object.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["conditions", (o, n) => { (o as unknown as ConditionalAccessPolicy).conditions = n.getObjectValue<ConditionalAccessConditionSet>(createConditionalAccessConditionSetFromDiscriminatorValue); }],
            ["createdDateTime", (o, n) => { (o as unknown as ConditionalAccessPolicy).createdDateTime = n.getDateValue(); }],
            ["description", (o, n) => { (o as unknown as ConditionalAccessPolicy).description = n.getStringValue(); }],
            ["displayName", (o, n) => { (o as unknown as ConditionalAccessPolicy).displayName = n.getStringValue(); }],
            ["grantControls", (o, n) => { (o as unknown as ConditionalAccessPolicy).grantControls = n.getObjectValue<ConditionalAccessGrantControls>(createConditionalAccessGrantControlsFromDiscriminatorValue); }],
            ["modifiedDateTime", (o, n) => { (o as unknown as ConditionalAccessPolicy).modifiedDateTime = n.getDateValue(); }],
            ["sessionControls", (o, n) => { (o as unknown as ConditionalAccessPolicy).sessionControls = n.getObjectValue<ConditionalAccessSessionControls>(createConditionalAccessSessionControlsFromDiscriminatorValue); }],
            ["state", (o, n) => { (o as unknown as ConditionalAccessPolicy).state = n.getEnumValue<ConditionalAccessPolicyState>(ConditionalAccessPolicyState); }],
        ]);
    };
    /**
     * Gets the grantControls property value. Specifies the grant controls that must be fulfilled to pass the policy.
     * @returns a conditionalAccessGrantControls
     */
    public get grantControls() {
        return this._grantControls;
    };
    /**
     * Sets the grantControls property value. Specifies the grant controls that must be fulfilled to pass the policy.
     * @param value Value to set for the grantControls property.
     */
    public set grantControls(value: ConditionalAccessGrantControls | undefined) {
        this._grantControls = value;
    };
    /**
     * Gets the modifiedDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Readonly.
     * @returns a Date
     */
    public get modifiedDateTime() {
        return this._modifiedDateTime;
    };
    /**
     * Sets the modifiedDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Readonly.
     * @param value Value to set for the modifiedDateTime property.
     */
    public set modifiedDateTime(value: Date | undefined) {
        this._modifiedDateTime = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<ConditionalAccessConditionSet>("conditions", this.conditions);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeObjectValue<ConditionalAccessGrantControls>("grantControls", this.grantControls);
        writer.writeDateValue("modifiedDateTime", this.modifiedDateTime);
        writer.writeObjectValue<ConditionalAccessSessionControls>("sessionControls", this.sessionControls);
        writer.writeEnumValue<ConditionalAccessPolicyState>("state", this.state);
    };
    /**
     * Gets the sessionControls property value. Specifies the session controls that are enforced after sign-in.
     * @returns a conditionalAccessSessionControls
     */
    public get sessionControls() {
        return this._sessionControls;
    };
    /**
     * Sets the sessionControls property value. Specifies the session controls that are enforced after sign-in.
     * @param value Value to set for the sessionControls property.
     */
    public set sessionControls(value: ConditionalAccessSessionControls | undefined) {
        this._sessionControls = value;
    };
    /**
     * Gets the state property value. Specifies the state of the conditionalAccessPolicy object. Possible values are: enabled, disabled, enabledForReportingButNotEnforced. Required.
     * @returns a conditionalAccessPolicyState
     */
    public get state() {
        return this._state;
    };
    /**
     * Sets the state property value. Specifies the state of the conditionalAccessPolicy object. Possible values are: enabled, disabled, enabledForReportingButNotEnforced. Required.
     * @param value Value to set for the state property.
     */
    public set state(value: ConditionalAccessPolicyState | undefined) {
        this._state = value;
    };
}
