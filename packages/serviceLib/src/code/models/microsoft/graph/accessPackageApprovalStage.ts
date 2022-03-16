import {createSubjectSetFromDiscriminatorValue} from './createSubjectSetFromDiscriminatorValue';
import {SubjectSet} from './index';
import {AdditionalDataHolder, Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AccessPackageApprovalStage implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _durationBeforeAutomaticDenial?: Duration | undefined;
    private _durationBeforeEscalation?: Duration | undefined;
    private _escalationApprovers?: SubjectSet[] | undefined;
    private _fallbackEscalationApprovers?: SubjectSet[] | undefined;
    private _fallbackPrimaryApprovers?: SubjectSet[] | undefined;
    private _isApproverJustificationRequired?: boolean | undefined;
    private _isEscalationEnabled?: boolean | undefined;
    private _primaryApprovers?: SubjectSet[] | undefined;
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
     * Instantiates a new accessPackageApprovalStage and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the durationBeforeAutomaticDenial property value. 
     * @returns a Duration
     */
    public get durationBeforeAutomaticDenial() {
        return this._durationBeforeAutomaticDenial;
    };
    /**
     * Sets the durationBeforeAutomaticDenial property value. 
     * @param value Value to set for the durationBeforeAutomaticDenial property.
     */
    public set durationBeforeAutomaticDenial(value: Duration | undefined) {
        this._durationBeforeAutomaticDenial = value;
    };
    /**
     * Gets the durationBeforeEscalation property value. 
     * @returns a Duration
     */
    public get durationBeforeEscalation() {
        return this._durationBeforeEscalation;
    };
    /**
     * Sets the durationBeforeEscalation property value. 
     * @param value Value to set for the durationBeforeEscalation property.
     */
    public set durationBeforeEscalation(value: Duration | undefined) {
        this._durationBeforeEscalation = value;
    };
    /**
     * Gets the escalationApprovers property value. 
     * @returns a subjectSet
     */
    public get escalationApprovers() {
        return this._escalationApprovers;
    };
    /**
     * Sets the escalationApprovers property value. 
     * @param value Value to set for the escalationApprovers property.
     */
    public set escalationApprovers(value: SubjectSet[] | undefined) {
        this._escalationApprovers = value;
    };
    /**
     * Gets the fallbackEscalationApprovers property value. 
     * @returns a subjectSet
     */
    public get fallbackEscalationApprovers() {
        return this._fallbackEscalationApprovers;
    };
    /**
     * Sets the fallbackEscalationApprovers property value. 
     * @param value Value to set for the fallbackEscalationApprovers property.
     */
    public set fallbackEscalationApprovers(value: SubjectSet[] | undefined) {
        this._fallbackEscalationApprovers = value;
    };
    /**
     * Gets the fallbackPrimaryApprovers property value. 
     * @returns a subjectSet
     */
    public get fallbackPrimaryApprovers() {
        return this._fallbackPrimaryApprovers;
    };
    /**
     * Sets the fallbackPrimaryApprovers property value. 
     * @param value Value to set for the fallbackPrimaryApprovers property.
     */
    public set fallbackPrimaryApprovers(value: SubjectSet[] | undefined) {
        this._fallbackPrimaryApprovers = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["durationBeforeAutomaticDenial", (o, n) => { (o as unknown as AccessPackageApprovalStage).durationBeforeAutomaticDenial = n.getDurationValue(); }],
            ["durationBeforeEscalation", (o, n) => { (o as unknown as AccessPackageApprovalStage).durationBeforeEscalation = n.getDurationValue(); }],
            ["escalationApprovers", (o, n) => { (o as unknown as AccessPackageApprovalStage).escalationApprovers = n.getCollectionOfObjectValues<SubjectSet>(createSubjectSetFromDiscriminatorValue); }],
            ["fallbackEscalationApprovers", (o, n) => { (o as unknown as AccessPackageApprovalStage).fallbackEscalationApprovers = n.getCollectionOfObjectValues<SubjectSet>(createSubjectSetFromDiscriminatorValue); }],
            ["fallbackPrimaryApprovers", (o, n) => { (o as unknown as AccessPackageApprovalStage).fallbackPrimaryApprovers = n.getCollectionOfObjectValues<SubjectSet>(createSubjectSetFromDiscriminatorValue); }],
            ["isApproverJustificationRequired", (o, n) => { (o as unknown as AccessPackageApprovalStage).isApproverJustificationRequired = n.getBooleanValue(); }],
            ["isEscalationEnabled", (o, n) => { (o as unknown as AccessPackageApprovalStage).isEscalationEnabled = n.getBooleanValue(); }],
            ["primaryApprovers", (o, n) => { (o as unknown as AccessPackageApprovalStage).primaryApprovers = n.getCollectionOfObjectValues<SubjectSet>(createSubjectSetFromDiscriminatorValue); }],
        ]);
    };
    /**
     * Gets the isApproverJustificationRequired property value. 
     * @returns a boolean
     */
    public get isApproverJustificationRequired() {
        return this._isApproverJustificationRequired;
    };
    /**
     * Sets the isApproverJustificationRequired property value. 
     * @param value Value to set for the isApproverJustificationRequired property.
     */
    public set isApproverJustificationRequired(value: boolean | undefined) {
        this._isApproverJustificationRequired = value;
    };
    /**
     * Gets the isEscalationEnabled property value. 
     * @returns a boolean
     */
    public get isEscalationEnabled() {
        return this._isEscalationEnabled;
    };
    /**
     * Sets the isEscalationEnabled property value. 
     * @param value Value to set for the isEscalationEnabled property.
     */
    public set isEscalationEnabled(value: boolean | undefined) {
        this._isEscalationEnabled = value;
    };
    /**
     * Gets the primaryApprovers property value. 
     * @returns a subjectSet
     */
    public get primaryApprovers() {
        return this._primaryApprovers;
    };
    /**
     * Sets the primaryApprovers property value. 
     * @param value Value to set for the primaryApprovers property.
     */
    public set primaryApprovers(value: SubjectSet[] | undefined) {
        this._primaryApprovers = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeDurationValue("durationBeforeAutomaticDenial", this.durationBeforeAutomaticDenial);
        writer.writeDurationValue("durationBeforeEscalation", this.durationBeforeEscalation);
        writer.writeCollectionOfObjectValues<SubjectSet>("escalationApprovers", this.escalationApprovers);
        writer.writeCollectionOfObjectValues<SubjectSet>("fallbackEscalationApprovers", this.fallbackEscalationApprovers);
        writer.writeCollectionOfObjectValues<SubjectSet>("fallbackPrimaryApprovers", this.fallbackPrimaryApprovers);
        writer.writeBooleanValue("isApproverJustificationRequired", this.isApproverJustificationRequired);
        writer.writeBooleanValue("isEscalationEnabled", this.isEscalationEnabled);
        writer.writeCollectionOfObjectValues<SubjectSet>("primaryApprovers", this.primaryApprovers);
        writer.writeAdditionalData(this.additionalData);
    };
}
