import {createAccessReviewReviewerScopeFromDiscriminatorValue} from './createAccessReviewReviewerScopeFromDiscriminatorValue';
import {AccessReviewReviewerScope, Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AdminConsentRequestPolicy extends Entity implements Parsable {
    /** Specifies whether the admin consent request feature is enabled or disabled. Required.  */
    private _isEnabled?: boolean | undefined;
    /** Specifies whether reviewers will receive notifications. Required.  */
    private _notifyReviewers?: boolean | undefined;
    /** Specifies whether reviewers will receive reminder emails. Required.  */
    private _remindersEnabled?: boolean | undefined;
    /** Specifies the duration the request is active before it automatically expires if no decision is applied.  */
    private _requestDurationInDays?: number | undefined;
    /** The list of reviewers for the admin consent. Required.  */
    private _reviewers?: AccessReviewReviewerScope[] | undefined;
    /** Specifies the version of this policy. When the policy is updated, this version is updated. Read-only.  */
    private _version?: number | undefined;
    /**
     * Instantiates a new adminConsentRequestPolicy and sets the default values.
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
            ["isEnabled", (o, n) => { (o as unknown as AdminConsentRequestPolicy).isEnabled = n.getBooleanValue(); }],
            ["notifyReviewers", (o, n) => { (o as unknown as AdminConsentRequestPolicy).notifyReviewers = n.getBooleanValue(); }],
            ["remindersEnabled", (o, n) => { (o as unknown as AdminConsentRequestPolicy).remindersEnabled = n.getBooleanValue(); }],
            ["requestDurationInDays", (o, n) => { (o as unknown as AdminConsentRequestPolicy).requestDurationInDays = n.getNumberValue(); }],
            ["reviewers", (o, n) => { (o as unknown as AdminConsentRequestPolicy).reviewers = n.getCollectionOfObjectValues<AccessReviewReviewerScope>(createAccessReviewReviewerScopeFromDiscriminatorValue); }],
            ["version", (o, n) => { (o as unknown as AdminConsentRequestPolicy).version = n.getNumberValue(); }],
        ]);
    };
    /**
     * Gets the isEnabled property value. Specifies whether the admin consent request feature is enabled or disabled. Required.
     * @returns a boolean
     */
    public get isEnabled() {
        return this._isEnabled;
    };
    /**
     * Sets the isEnabled property value. Specifies whether the admin consent request feature is enabled or disabled. Required.
     * @param value Value to set for the isEnabled property.
     */
    public set isEnabled(value: boolean | undefined) {
        this._isEnabled = value;
    };
    /**
     * Gets the notifyReviewers property value. Specifies whether reviewers will receive notifications. Required.
     * @returns a boolean
     */
    public get notifyReviewers() {
        return this._notifyReviewers;
    };
    /**
     * Sets the notifyReviewers property value. Specifies whether reviewers will receive notifications. Required.
     * @param value Value to set for the notifyReviewers property.
     */
    public set notifyReviewers(value: boolean | undefined) {
        this._notifyReviewers = value;
    };
    /**
     * Gets the remindersEnabled property value. Specifies whether reviewers will receive reminder emails. Required.
     * @returns a boolean
     */
    public get remindersEnabled() {
        return this._remindersEnabled;
    };
    /**
     * Sets the remindersEnabled property value. Specifies whether reviewers will receive reminder emails. Required.
     * @param value Value to set for the remindersEnabled property.
     */
    public set remindersEnabled(value: boolean | undefined) {
        this._remindersEnabled = value;
    };
    /**
     * Gets the requestDurationInDays property value. Specifies the duration the request is active before it automatically expires if no decision is applied.
     * @returns a integer
     */
    public get requestDurationInDays() {
        return this._requestDurationInDays;
    };
    /**
     * Sets the requestDurationInDays property value. Specifies the duration the request is active before it automatically expires if no decision is applied.
     * @param value Value to set for the requestDurationInDays property.
     */
    public set requestDurationInDays(value: number | undefined) {
        this._requestDurationInDays = value;
    };
    /**
     * Gets the reviewers property value. The list of reviewers for the admin consent. Required.
     * @returns a accessReviewReviewerScope
     */
    public get reviewers() {
        return this._reviewers;
    };
    /**
     * Sets the reviewers property value. The list of reviewers for the admin consent. Required.
     * @param value Value to set for the reviewers property.
     */
    public set reviewers(value: AccessReviewReviewerScope[] | undefined) {
        this._reviewers = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeBooleanValue("isEnabled", this.isEnabled);
        writer.writeBooleanValue("notifyReviewers", this.notifyReviewers);
        writer.writeBooleanValue("remindersEnabled", this.remindersEnabled);
        writer.writeNumberValue("requestDurationInDays", this.requestDurationInDays);
        writer.writeCollectionOfObjectValues<AccessReviewReviewerScope>("reviewers", this.reviewers);
        writer.writeNumberValue("version", this.version);
    };
    /**
     * Gets the version property value. Specifies the version of this policy. When the policy is updated, this version is updated. Read-only.
     * @returns a integer
     */
    public get version() {
        return this._version;
    };
    /**
     * Sets the version property value. Specifies the version of this policy. When the policy is updated, this version is updated. Read-only.
     * @param value Value to set for the version property.
     */
    public set version(value: number | undefined) {
        this._version = value;
    };
}
