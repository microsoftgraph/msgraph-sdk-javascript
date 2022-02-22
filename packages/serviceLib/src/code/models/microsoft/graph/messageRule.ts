import {Entity, MessageRuleActions, MessageRulePredicates} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MessageRule extends Entity implements Parsable {
    /** Actions to be taken on a message when the corresponding conditions are fulfilled.  */
    private _actions?: MessageRuleActions | undefined;
    /** Conditions that when fulfilled, will trigger the corresponding actions for that rule.  */
    private _conditions?: MessageRulePredicates | undefined;
    /** The display name of the rule.  */
    private _displayName?: string | undefined;
    /** Exception conditions for the rule.  */
    private _exceptions?: MessageRulePredicates | undefined;
    /** Indicates whether the rule is in an error condition. Read-only.  */
    private _hasError?: boolean | undefined;
    /** Indicates whether the rule is enabled to be applied to messages.  */
    private _isEnabled?: boolean | undefined;
    /** Indicates if the rule is read-only and cannot be modified or deleted by the rules REST API.  */
    private _isReadOnly?: boolean | undefined;
    /** Indicates the order in which the rule is executed, among other rules.  */
    private _sequence?: number | undefined;
    /**
     * Instantiates a new messageRule and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the actions property value. Actions to be taken on a message when the corresponding conditions are fulfilled.
     * @returns a messageRuleActions
     */
    public get actions() {
        return this._actions;
    };
    /**
     * Gets the conditions property value. Conditions that when fulfilled, will trigger the corresponding actions for that rule.
     * @returns a messageRulePredicates
     */
    public get conditions() {
        return this._conditions;
    };
    /**
     * Gets the displayName property value. The display name of the rule.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Gets the exceptions property value. Exception conditions for the rule.
     * @returns a messageRulePredicates
     */
    public get exceptions() {
        return this._exceptions;
    };
    /**
     * Gets the hasError property value. Indicates whether the rule is in an error condition. Read-only.
     * @returns a boolean
     */
    public get hasError() {
        return this._hasError;
    };
    /**
     * Gets the isEnabled property value. Indicates whether the rule is enabled to be applied to messages.
     * @returns a boolean
     */
    public get isEnabled() {
        return this._isEnabled;
    };
    /**
     * Gets the isReadOnly property value. Indicates if the rule is read-only and cannot be modified or deleted by the rules REST API.
     * @returns a boolean
     */
    public get isReadOnly() {
        return this._isReadOnly;
    };
    /**
     * Gets the sequence property value. Indicates the order in which the rule is executed, among other rules.
     * @returns a integer
     */
    public get sequence() {
        return this._sequence;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["actions", (o, n) => { (o as unknown as MessageRule).actions = n.getObjectValue<MessageRuleActions>(MessageRuleActions); }],
            ["conditions", (o, n) => { (o as unknown as MessageRule).conditions = n.getObjectValue<MessageRulePredicates>(MessageRulePredicates); }],
            ["displayName", (o, n) => { (o as unknown as MessageRule).displayName = n.getStringValue(); }],
            ["exceptions", (o, n) => { (o as unknown as MessageRule).exceptions = n.getObjectValue<MessageRulePredicates>(MessageRulePredicates); }],
            ["hasError", (o, n) => { (o as unknown as MessageRule).hasError = n.getBooleanValue(); }],
            ["isEnabled", (o, n) => { (o as unknown as MessageRule).isEnabled = n.getBooleanValue(); }],
            ["isReadOnly", (o, n) => { (o as unknown as MessageRule).isReadOnly = n.getBooleanValue(); }],
            ["sequence", (o, n) => { (o as unknown as MessageRule).sequence = n.getNumberValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<MessageRuleActions>("actions", this.actions);
        writer.writeObjectValue<MessageRulePredicates>("conditions", this.conditions);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeObjectValue<MessageRulePredicates>("exceptions", this.exceptions);
        writer.writeBooleanValue("hasError", this.hasError);
        writer.writeBooleanValue("isEnabled", this.isEnabled);
        writer.writeBooleanValue("isReadOnly", this.isReadOnly);
        writer.writeNumberValue("sequence", this.sequence);
    };
    /**
     * Sets the actions property value. Actions to be taken on a message when the corresponding conditions are fulfilled.
     * @param value Value to set for the actions property.
     */
    public set actions(value: MessageRuleActions | undefined) {
        this._actions = value;
    };
    /**
     * Sets the conditions property value. Conditions that when fulfilled, will trigger the corresponding actions for that rule.
     * @param value Value to set for the conditions property.
     */
    public set conditions(value: MessageRulePredicates | undefined) {
        this._conditions = value;
    };
    /**
     * Sets the displayName property value. The display name of the rule.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * Sets the exceptions property value. Exception conditions for the rule.
     * @param value Value to set for the exceptions property.
     */
    public set exceptions(value: MessageRulePredicates | undefined) {
        this._exceptions = value;
    };
    /**
     * Sets the hasError property value. Indicates whether the rule is in an error condition. Read-only.
     * @param value Value to set for the hasError property.
     */
    public set hasError(value: boolean | undefined) {
        this._hasError = value;
    };
    /**
     * Sets the isEnabled property value. Indicates whether the rule is enabled to be applied to messages.
     * @param value Value to set for the isEnabled property.
     */
    public set isEnabled(value: boolean | undefined) {
        this._isEnabled = value;
    };
    /**
     * Sets the isReadOnly property value. Indicates if the rule is read-only and cannot be modified or deleted by the rules REST API.
     * @param value Value to set for the isReadOnly property.
     */
    public set isReadOnly(value: boolean | undefined) {
        this._isReadOnly = value;
    };
    /**
     * Sets the sequence property value. Indicates the order in which the rule is executed, among other rules.
     * @param value Value to set for the sequence property.
     */
    public set sequence(value: number | undefined) {
        this._sequence = value;
    };
}
