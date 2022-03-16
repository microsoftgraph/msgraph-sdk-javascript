import {createSubjectSetFromDiscriminatorValue} from './createSubjectSetFromDiscriminatorValue';
import {SubjectSet} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AccessPackageAssignmentRequestorSettings implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _allowCustomAssignmentSchedule?: boolean | undefined;
    private _enableOnBehalfRequestorsToAddAccess?: boolean | undefined;
    private _enableOnBehalfRequestorsToRemoveAccess?: boolean | undefined;
    private _enableOnBehalfRequestorsToUpdateAccess?: boolean | undefined;
    private _enableTargetsToSelfAddAccess?: boolean | undefined;
    private _enableTargetsToSelfRemoveAccess?: boolean | undefined;
    private _enableTargetsToSelfUpdateAccess?: boolean | undefined;
    private _onBehalfRequestors?: SubjectSet[] | undefined;
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
     * Gets the allowCustomAssignmentSchedule property value. 
     * @returns a boolean
     */
    public get allowCustomAssignmentSchedule() {
        return this._allowCustomAssignmentSchedule;
    };
    /**
     * Sets the allowCustomAssignmentSchedule property value. 
     * @param value Value to set for the allowCustomAssignmentSchedule property.
     */
    public set allowCustomAssignmentSchedule(value: boolean | undefined) {
        this._allowCustomAssignmentSchedule = value;
    };
    /**
     * Instantiates a new accessPackageAssignmentRequestorSettings and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the enableOnBehalfRequestorsToAddAccess property value. 
     * @returns a boolean
     */
    public get enableOnBehalfRequestorsToAddAccess() {
        return this._enableOnBehalfRequestorsToAddAccess;
    };
    /**
     * Sets the enableOnBehalfRequestorsToAddAccess property value. 
     * @param value Value to set for the enableOnBehalfRequestorsToAddAccess property.
     */
    public set enableOnBehalfRequestorsToAddAccess(value: boolean | undefined) {
        this._enableOnBehalfRequestorsToAddAccess = value;
    };
    /**
     * Gets the enableOnBehalfRequestorsToRemoveAccess property value. 
     * @returns a boolean
     */
    public get enableOnBehalfRequestorsToRemoveAccess() {
        return this._enableOnBehalfRequestorsToRemoveAccess;
    };
    /**
     * Sets the enableOnBehalfRequestorsToRemoveAccess property value. 
     * @param value Value to set for the enableOnBehalfRequestorsToRemoveAccess property.
     */
    public set enableOnBehalfRequestorsToRemoveAccess(value: boolean | undefined) {
        this._enableOnBehalfRequestorsToRemoveAccess = value;
    };
    /**
     * Gets the enableOnBehalfRequestorsToUpdateAccess property value. 
     * @returns a boolean
     */
    public get enableOnBehalfRequestorsToUpdateAccess() {
        return this._enableOnBehalfRequestorsToUpdateAccess;
    };
    /**
     * Sets the enableOnBehalfRequestorsToUpdateAccess property value. 
     * @param value Value to set for the enableOnBehalfRequestorsToUpdateAccess property.
     */
    public set enableOnBehalfRequestorsToUpdateAccess(value: boolean | undefined) {
        this._enableOnBehalfRequestorsToUpdateAccess = value;
    };
    /**
     * Gets the enableTargetsToSelfAddAccess property value. 
     * @returns a boolean
     */
    public get enableTargetsToSelfAddAccess() {
        return this._enableTargetsToSelfAddAccess;
    };
    /**
     * Sets the enableTargetsToSelfAddAccess property value. 
     * @param value Value to set for the enableTargetsToSelfAddAccess property.
     */
    public set enableTargetsToSelfAddAccess(value: boolean | undefined) {
        this._enableTargetsToSelfAddAccess = value;
    };
    /**
     * Gets the enableTargetsToSelfRemoveAccess property value. 
     * @returns a boolean
     */
    public get enableTargetsToSelfRemoveAccess() {
        return this._enableTargetsToSelfRemoveAccess;
    };
    /**
     * Sets the enableTargetsToSelfRemoveAccess property value. 
     * @param value Value to set for the enableTargetsToSelfRemoveAccess property.
     */
    public set enableTargetsToSelfRemoveAccess(value: boolean | undefined) {
        this._enableTargetsToSelfRemoveAccess = value;
    };
    /**
     * Gets the enableTargetsToSelfUpdateAccess property value. 
     * @returns a boolean
     */
    public get enableTargetsToSelfUpdateAccess() {
        return this._enableTargetsToSelfUpdateAccess;
    };
    /**
     * Sets the enableTargetsToSelfUpdateAccess property value. 
     * @param value Value to set for the enableTargetsToSelfUpdateAccess property.
     */
    public set enableTargetsToSelfUpdateAccess(value: boolean | undefined) {
        this._enableTargetsToSelfUpdateAccess = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["allowCustomAssignmentSchedule", (o, n) => { (o as unknown as AccessPackageAssignmentRequestorSettings).allowCustomAssignmentSchedule = n.getBooleanValue(); }],
            ["enableOnBehalfRequestorsToAddAccess", (o, n) => { (o as unknown as AccessPackageAssignmentRequestorSettings).enableOnBehalfRequestorsToAddAccess = n.getBooleanValue(); }],
            ["enableOnBehalfRequestorsToRemoveAccess", (o, n) => { (o as unknown as AccessPackageAssignmentRequestorSettings).enableOnBehalfRequestorsToRemoveAccess = n.getBooleanValue(); }],
            ["enableOnBehalfRequestorsToUpdateAccess", (o, n) => { (o as unknown as AccessPackageAssignmentRequestorSettings).enableOnBehalfRequestorsToUpdateAccess = n.getBooleanValue(); }],
            ["enableTargetsToSelfAddAccess", (o, n) => { (o as unknown as AccessPackageAssignmentRequestorSettings).enableTargetsToSelfAddAccess = n.getBooleanValue(); }],
            ["enableTargetsToSelfRemoveAccess", (o, n) => { (o as unknown as AccessPackageAssignmentRequestorSettings).enableTargetsToSelfRemoveAccess = n.getBooleanValue(); }],
            ["enableTargetsToSelfUpdateAccess", (o, n) => { (o as unknown as AccessPackageAssignmentRequestorSettings).enableTargetsToSelfUpdateAccess = n.getBooleanValue(); }],
            ["onBehalfRequestors", (o, n) => { (o as unknown as AccessPackageAssignmentRequestorSettings).onBehalfRequestors = n.getCollectionOfObjectValues<SubjectSet>(createSubjectSetFromDiscriminatorValue); }],
        ]);
    };
    /**
     * Gets the onBehalfRequestors property value. 
     * @returns a subjectSet
     */
    public get onBehalfRequestors() {
        return this._onBehalfRequestors;
    };
    /**
     * Sets the onBehalfRequestors property value. 
     * @param value Value to set for the onBehalfRequestors property.
     */
    public set onBehalfRequestors(value: SubjectSet[] | undefined) {
        this._onBehalfRequestors = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeBooleanValue("allowCustomAssignmentSchedule", this.allowCustomAssignmentSchedule);
        writer.writeBooleanValue("enableOnBehalfRequestorsToAddAccess", this.enableOnBehalfRequestorsToAddAccess);
        writer.writeBooleanValue("enableOnBehalfRequestorsToRemoveAccess", this.enableOnBehalfRequestorsToRemoveAccess);
        writer.writeBooleanValue("enableOnBehalfRequestorsToUpdateAccess", this.enableOnBehalfRequestorsToUpdateAccess);
        writer.writeBooleanValue("enableTargetsToSelfAddAccess", this.enableTargetsToSelfAddAccess);
        writer.writeBooleanValue("enableTargetsToSelfRemoveAccess", this.enableTargetsToSelfRemoveAccess);
        writer.writeBooleanValue("enableTargetsToSelfUpdateAccess", this.enableTargetsToSelfUpdateAccess);
        writer.writeCollectionOfObjectValues<SubjectSet>("onBehalfRequestors", this.onBehalfRequestors);
        writer.writeAdditionalData(this.additionalData);
    };
}
