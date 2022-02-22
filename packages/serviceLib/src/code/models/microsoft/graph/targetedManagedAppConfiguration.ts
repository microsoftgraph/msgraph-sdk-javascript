import {ManagedAppConfiguration, ManagedAppPolicyDeploymentSummary, ManagedMobileApp, TargetedManagedAppPolicyAssignment} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TargetedManagedAppConfiguration extends ManagedAppConfiguration implements Parsable {
    /** List of apps to which the policy is deployed.  */
    private _apps?: ManagedMobileApp[] | undefined;
    /** Navigation property to list of inclusion and exclusion groups to which the policy is deployed.  */
    private _assignments?: TargetedManagedAppPolicyAssignment[] | undefined;
    /** Count of apps to which the current policy is deployed.  */
    private _deployedAppCount?: number | undefined;
    /** Navigation property to deployment summary of the configuration.  */
    private _deploymentSummary?: ManagedAppPolicyDeploymentSummary | undefined;
    /** Indicates if the policy is deployed to any inclusion groups or not.  */
    private _isAssigned?: boolean | undefined;
    /**
     * Instantiates a new targetedManagedAppConfiguration and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the apps property value. List of apps to which the policy is deployed.
     * @returns a managedMobileApp
     */
    public get apps() {
        return this._apps;
    };
    /**
     * Gets the assignments property value. Navigation property to list of inclusion and exclusion groups to which the policy is deployed.
     * @returns a targetedManagedAppPolicyAssignment
     */
    public get assignments() {
        return this._assignments;
    };
    /**
     * Gets the deployedAppCount property value. Count of apps to which the current policy is deployed.
     * @returns a integer
     */
    public get deployedAppCount() {
        return this._deployedAppCount;
    };
    /**
     * Gets the deploymentSummary property value. Navigation property to deployment summary of the configuration.
     * @returns a managedAppPolicyDeploymentSummary
     */
    public get deploymentSummary() {
        return this._deploymentSummary;
    };
    /**
     * Gets the isAssigned property value. Indicates if the policy is deployed to any inclusion groups or not.
     * @returns a boolean
     */
    public get isAssigned() {
        return this._isAssigned;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["apps", (o, n) => { (o as unknown as TargetedManagedAppConfiguration).apps = n.getCollectionOfObjectValues<ManagedMobileApp>(ManagedMobileApp); }],
            ["assignments", (o, n) => { (o as unknown as TargetedManagedAppConfiguration).assignments = n.getCollectionOfObjectValues<TargetedManagedAppPolicyAssignment>(TargetedManagedAppPolicyAssignment); }],
            ["deployedAppCount", (o, n) => { (o as unknown as TargetedManagedAppConfiguration).deployedAppCount = n.getNumberValue(); }],
            ["deploymentSummary", (o, n) => { (o as unknown as TargetedManagedAppConfiguration).deploymentSummary = n.getObjectValue<ManagedAppPolicyDeploymentSummary>(ManagedAppPolicyDeploymentSummary); }],
            ["isAssigned", (o, n) => { (o as unknown as TargetedManagedAppConfiguration).isAssigned = n.getBooleanValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<ManagedMobileApp>("apps", this.apps);
        writer.writeCollectionOfObjectValues<TargetedManagedAppPolicyAssignment>("assignments", this.assignments);
        writer.writeNumberValue("deployedAppCount", this.deployedAppCount);
        writer.writeObjectValue<ManagedAppPolicyDeploymentSummary>("deploymentSummary", this.deploymentSummary);
        writer.writeBooleanValue("isAssigned", this.isAssigned);
    };
    /**
     * Sets the apps property value. List of apps to which the policy is deployed.
     * @param value Value to set for the apps property.
     */
    public set apps(value: ManagedMobileApp[] | undefined) {
        this._apps = value;
    };
    /**
     * Sets the assignments property value. Navigation property to list of inclusion and exclusion groups to which the policy is deployed.
     * @param value Value to set for the assignments property.
     */
    public set assignments(value: TargetedManagedAppPolicyAssignment[] | undefined) {
        this._assignments = value;
    };
    /**
     * Sets the deployedAppCount property value. Count of apps to which the current policy is deployed.
     * @param value Value to set for the deployedAppCount property.
     */
    public set deployedAppCount(value: number | undefined) {
        this._deployedAppCount = value;
    };
    /**
     * Sets the deploymentSummary property value. Navigation property to deployment summary of the configuration.
     * @param value Value to set for the deploymentSummary property.
     */
    public set deploymentSummary(value: ManagedAppPolicyDeploymentSummary | undefined) {
        this._deploymentSummary = value;
    };
    /**
     * Sets the isAssigned property value. Indicates if the policy is deployed to any inclusion groups or not.
     * @param value Value to set for the isAssigned property.
     */
    public set isAssigned(value: boolean | undefined) {
        this._isAssigned = value;
    };
}
