import {DirectoryAudit, Entity, ProvisioningObjectSummary, RestrictedSignIn, SignIn} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AuditLogRoot extends Entity implements Parsable {
    /** Read-only. Nullable.  */
    private _directoryAudits?: DirectoryAudit[] | undefined;
    private _provisioning?: ProvisioningObjectSummary[] | undefined;
    private _restrictedSignIns?: RestrictedSignIn[] | undefined;
    /** Read-only. Nullable.  */
    private _signIns?: SignIn[] | undefined;
    /**
     * Instantiates a new auditLogRoot and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the directoryAudits property value. Read-only. Nullable.
     * @returns a directoryAudit
     */
    public get directoryAudits() {
        return this._directoryAudits;
    };
    /**
     * Gets the provisioning property value. 
     * @returns a provisioningObjectSummary
     */
    public get provisioning() {
        return this._provisioning;
    };
    /**
     * Gets the restrictedSignIns property value. 
     * @returns a restrictedSignIn
     */
    public get restrictedSignIns() {
        return this._restrictedSignIns;
    };
    /**
     * Gets the signIns property value. Read-only. Nullable.
     * @returns a signIn
     */
    public get signIns() {
        return this._signIns;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["directoryAudits", (o, n) => { (o as unknown as AuditLogRoot).directoryAudits = n.getCollectionOfObjectValues<DirectoryAudit>(DirectoryAudit); }],
            ["provisioning", (o, n) => { (o as unknown as AuditLogRoot).provisioning = n.getCollectionOfObjectValues<ProvisioningObjectSummary>(ProvisioningObjectSummary); }],
            ["restrictedSignIns", (o, n) => { (o as unknown as AuditLogRoot).restrictedSignIns = n.getCollectionOfObjectValues<RestrictedSignIn>(RestrictedSignIn); }],
            ["signIns", (o, n) => { (o as unknown as AuditLogRoot).signIns = n.getCollectionOfObjectValues<SignIn>(SignIn); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<DirectoryAudit>("directoryAudits", this.directoryAudits);
        writer.writeCollectionOfObjectValues<ProvisioningObjectSummary>("provisioning", this.provisioning);
        writer.writeCollectionOfObjectValues<RestrictedSignIn>("restrictedSignIns", this.restrictedSignIns);
        writer.writeCollectionOfObjectValues<SignIn>("signIns", this.signIns);
    };
    /**
     * Sets the directoryAudits property value. Read-only. Nullable.
     * @param value Value to set for the directoryAudits property.
     */
    public set directoryAudits(value: DirectoryAudit[] | undefined) {
        this._directoryAudits = value;
    };
    /**
     * Sets the provisioning property value. 
     * @param value Value to set for the provisioning property.
     */
    public set provisioning(value: ProvisioningObjectSummary[] | undefined) {
        this._provisioning = value;
    };
    /**
     * Sets the restrictedSignIns property value. 
     * @param value Value to set for the restrictedSignIns property.
     */
    public set restrictedSignIns(value: RestrictedSignIn[] | undefined) {
        this._restrictedSignIns = value;
    };
    /**
     * Sets the signIns property value. Read-only. Nullable.
     * @param value Value to set for the signIns property.
     */
    public set signIns(value: SignIn[] | undefined) {
        this._signIns = value;
    };
}
