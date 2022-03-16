import {createAccessPackageApprovalStageFromDiscriminatorValue} from './createAccessPackageApprovalStageFromDiscriminatorValue';
import {AccessPackageApprovalStage} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AccessPackageAssignmentApprovalSettings implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _isApprovalRequiredForAdd?: boolean | undefined;
    private _isApprovalRequiredForUpdate?: boolean | undefined;
    private _stages?: AccessPackageApprovalStage[] | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Map<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Map<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Instantiates a new accessPackageAssignmentApprovalSettings and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["isApprovalRequiredForAdd", (o, n) => { (o as unknown as AccessPackageAssignmentApprovalSettings).isApprovalRequiredForAdd = n.getBooleanValue(); }],
            ["isApprovalRequiredForUpdate", (o, n) => { (o as unknown as AccessPackageAssignmentApprovalSettings).isApprovalRequiredForUpdate = n.getBooleanValue(); }],
            ["stages", (o, n) => { (o as unknown as AccessPackageAssignmentApprovalSettings).stages = n.getCollectionOfObjectValues<AccessPackageApprovalStage>(createAccessPackageApprovalStageFromDiscriminatorValue); }],
        ]);
    };
    /**
     * Gets the isApprovalRequiredForAdd property value. 
     * @returns a boolean
     */
    public get isApprovalRequiredForAdd() {
        return this._isApprovalRequiredForAdd;
    };
    /**
     * Sets the isApprovalRequiredForAdd property value. 
     * @param value Value to set for the isApprovalRequiredForAdd property.
     */
    public set isApprovalRequiredForAdd(value: boolean | undefined) {
        this._isApprovalRequiredForAdd = value;
    };
    /**
     * Gets the isApprovalRequiredForUpdate property value. 
     * @returns a boolean
     */
    public get isApprovalRequiredForUpdate() {
        return this._isApprovalRequiredForUpdate;
    };
    /**
     * Sets the isApprovalRequiredForUpdate property value. 
     * @param value Value to set for the isApprovalRequiredForUpdate property.
     */
    public set isApprovalRequiredForUpdate(value: boolean | undefined) {
        this._isApprovalRequiredForUpdate = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeBooleanValue("isApprovalRequiredForAdd", this.isApprovalRequiredForAdd);
        writer.writeBooleanValue("isApprovalRequiredForUpdate", this.isApprovalRequiredForUpdate);
        writer.writeCollectionOfObjectValues<AccessPackageApprovalStage>("stages", this.stages);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the stages property value. 
     * @returns a accessPackageApprovalStage
     */
    public get stages() {
        return this._stages;
    };
    /**
     * Sets the stages property value. 
     * @param value Value to set for the stages property.
     */
    public set stages(value: AccessPackageApprovalStage[] | undefined) {
        this._stages = value;
    };
}
