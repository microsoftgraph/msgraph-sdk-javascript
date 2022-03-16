import {createDirectoryObjectFromDiscriminatorValue} from './createDirectoryObjectFromDiscriminatorValue';
import {DirectoryObject, Entity} from './index';
import {StagedFeatureName} from './stagedFeatureName';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class FeatureRolloutPolicy extends Entity implements Parsable {
    /** Nullable. Specifies a list of directoryObjects that feature is enabled for.  */
    private _appliesTo?: DirectoryObject[] | undefined;
    /** A description for this feature rollout policy.  */
    private _description?: string | undefined;
    /** The display name for this  feature rollout policy.  */
    private _displayName?: string | undefined;
    /** Possible values are: passthroughAuthentication, seamlessSso, passwordHashSync, emailAsAlternateId, unknownFutureValue.  */
    private _feature?: StagedFeatureName | undefined;
    /** Indicates whether this feature rollout policy should be applied to the entire organization.  */
    private _isAppliedToOrganization?: boolean | undefined;
    /** Indicates whether the feature rollout is enabled.  */
    private _isEnabled?: boolean | undefined;
    /**
     * Gets the appliesTo property value. Nullable. Specifies a list of directoryObjects that feature is enabled for.
     * @returns a directoryObject
     */
    public get appliesTo() {
        return this._appliesTo;
    };
    /**
     * Sets the appliesTo property value. Nullable. Specifies a list of directoryObjects that feature is enabled for.
     * @param value Value to set for the appliesTo property.
     */
    public set appliesTo(value: DirectoryObject[] | undefined) {
        this._appliesTo = value;
    };
    /**
     * Instantiates a new featureRolloutPolicy and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the description property value. A description for this feature rollout policy.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. A description for this feature rollout policy.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * Gets the displayName property value. The display name for this  feature rollout policy.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The display name for this  feature rollout policy.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * Gets the feature property value. Possible values are: passthroughAuthentication, seamlessSso, passwordHashSync, emailAsAlternateId, unknownFutureValue.
     * @returns a stagedFeatureName
     */
    public get feature() {
        return this._feature;
    };
    /**
     * Sets the feature property value. Possible values are: passthroughAuthentication, seamlessSso, passwordHashSync, emailAsAlternateId, unknownFutureValue.
     * @param value Value to set for the feature property.
     */
    public set feature(value: StagedFeatureName | undefined) {
        this._feature = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["appliesTo", (o, n) => { (o as unknown as FeatureRolloutPolicy).appliesTo = n.getCollectionOfObjectValues<DirectoryObject>(createDirectoryObjectFromDiscriminatorValue); }],
            ["description", (o, n) => { (o as unknown as FeatureRolloutPolicy).description = n.getStringValue(); }],
            ["displayName", (o, n) => { (o as unknown as FeatureRolloutPolicy).displayName = n.getStringValue(); }],
            ["feature", (o, n) => { (o as unknown as FeatureRolloutPolicy).feature = n.getEnumValue<StagedFeatureName>(StagedFeatureName); }],
            ["isAppliedToOrganization", (o, n) => { (o as unknown as FeatureRolloutPolicy).isAppliedToOrganization = n.getBooleanValue(); }],
            ["isEnabled", (o, n) => { (o as unknown as FeatureRolloutPolicy).isEnabled = n.getBooleanValue(); }],
        ]);
    };
    /**
     * Gets the isAppliedToOrganization property value. Indicates whether this feature rollout policy should be applied to the entire organization.
     * @returns a boolean
     */
    public get isAppliedToOrganization() {
        return this._isAppliedToOrganization;
    };
    /**
     * Sets the isAppliedToOrganization property value. Indicates whether this feature rollout policy should be applied to the entire organization.
     * @param value Value to set for the isAppliedToOrganization property.
     */
    public set isAppliedToOrganization(value: boolean | undefined) {
        this._isAppliedToOrganization = value;
    };
    /**
     * Gets the isEnabled property value. Indicates whether the feature rollout is enabled.
     * @returns a boolean
     */
    public get isEnabled() {
        return this._isEnabled;
    };
    /**
     * Sets the isEnabled property value. Indicates whether the feature rollout is enabled.
     * @param value Value to set for the isEnabled property.
     */
    public set isEnabled(value: boolean | undefined) {
        this._isEnabled = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<DirectoryObject>("appliesTo", this.appliesTo);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeEnumValue<StagedFeatureName>("feature", this.feature);
        writer.writeBooleanValue("isAppliedToOrganization", this.isAppliedToOrganization);
        writer.writeBooleanValue("isEnabled", this.isEnabled);
    };
}
