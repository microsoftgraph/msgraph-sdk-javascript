import {Entity} from './index';
import {PermissionClassificationType} from './permissionClassificationType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DelegatedPermissionClassification extends Entity implements Parsable {
    /** The classification value being given. Possible value: low. Does not support $filter.  */
    private _classification?: PermissionClassificationType | undefined;
    /** The unique identifier (id) for the delegated permission listed in the oauth2PermissionScopes collection of the servicePrincipal. Required on create. Does not support $filter.  */
    private _permissionId?: string | undefined;
    /** The claim value (value) for the delegated permission listed in the oauth2PermissionScopes collection of the servicePrincipal. Does not support $filter.  */
    private _permissionName?: string | undefined;
    /**
     * Gets the classification property value. The classification value being given. Possible value: low. Does not support $filter.
     * @returns a permissionClassificationType
     */
    public get classification() {
        return this._classification;
    };
    /**
     * Sets the classification property value. The classification value being given. Possible value: low. Does not support $filter.
     * @param value Value to set for the classification property.
     */
    public set classification(value: PermissionClassificationType | undefined) {
        this._classification = value;
    };
    /**
     * Instantiates a new delegatedPermissionClassification and sets the default values.
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
            ["classification", (o, n) => { (o as unknown as DelegatedPermissionClassification).classification = n.getEnumValue<PermissionClassificationType>(PermissionClassificationType); }],
            ["permissionId", (o, n) => { (o as unknown as DelegatedPermissionClassification).permissionId = n.getStringValue(); }],
            ["permissionName", (o, n) => { (o as unknown as DelegatedPermissionClassification).permissionName = n.getStringValue(); }],
        ]);
    };
    /**
     * Gets the permissionId property value. The unique identifier (id) for the delegated permission listed in the oauth2PermissionScopes collection of the servicePrincipal. Required on create. Does not support $filter.
     * @returns a string
     */
    public get permissionId() {
        return this._permissionId;
    };
    /**
     * Sets the permissionId property value. The unique identifier (id) for the delegated permission listed in the oauth2PermissionScopes collection of the servicePrincipal. Required on create. Does not support $filter.
     * @param value Value to set for the permissionId property.
     */
    public set permissionId(value: string | undefined) {
        this._permissionId = value;
    };
    /**
     * Gets the permissionName property value. The claim value (value) for the delegated permission listed in the oauth2PermissionScopes collection of the servicePrincipal. Does not support $filter.
     * @returns a string
     */
    public get permissionName() {
        return this._permissionName;
    };
    /**
     * Sets the permissionName property value. The claim value (value) for the delegated permission listed in the oauth2PermissionScopes collection of the servicePrincipal. Does not support $filter.
     * @param value Value to set for the permissionName property.
     */
    public set permissionName(value: string | undefined) {
        this._permissionName = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeEnumValue<PermissionClassificationType>("classification", this.classification);
        writer.writeStringValue("permissionId", this.permissionId);
        writer.writeStringValue("permissionName", this.permissionName);
    };
}
