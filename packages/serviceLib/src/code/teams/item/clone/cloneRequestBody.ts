import {ClonableTeamParts} from '../../../models/microsoft/graph/clonableTeamParts';
import {TeamVisibilityType} from '../../../models/microsoft/graph/teamVisibilityType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the clone method.  */
export class CloneRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _classification?: string | undefined;
    private _description?: string | undefined;
    private _displayName?: string | undefined;
    private _mailNickname?: string | undefined;
    private _partsToClone?: ClonableTeamParts | undefined;
    private _visibility?: TeamVisibilityType | undefined;
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
     * Gets the classification property value. 
     * @returns a string
     */
    public get classification() {
        return this._classification;
    };
    /**
     * Sets the classification property value. 
     * @param value Value to set for the classification property.
     */
    public set classification(value: string | undefined) {
        this._classification = value;
    };
    /**
     * Instantiates a new cloneRequestBody and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the description property value. 
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. 
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * Gets the displayName property value. 
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. 
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
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["classification", (o, n) => { (o as unknown as CloneRequestBody).classification = n.getStringValue(); }],
            ["description", (o, n) => { (o as unknown as CloneRequestBody).description = n.getStringValue(); }],
            ["displayName", (o, n) => { (o as unknown as CloneRequestBody).displayName = n.getStringValue(); }],
            ["mailNickname", (o, n) => { (o as unknown as CloneRequestBody).mailNickname = n.getStringValue(); }],
            ["partsToClone", (o, n) => { (o as unknown as CloneRequestBody).partsToClone = n.getEnumValue<ClonableTeamParts>(ClonableTeamParts); }],
            ["visibility", (o, n) => { (o as unknown as CloneRequestBody).visibility = n.getEnumValue<TeamVisibilityType>(TeamVisibilityType); }],
        ]);
    };
    /**
     * Gets the mailNickname property value. 
     * @returns a string
     */
    public get mailNickname() {
        return this._mailNickname;
    };
    /**
     * Sets the mailNickname property value. 
     * @param value Value to set for the mailNickname property.
     */
    public set mailNickname(value: string | undefined) {
        this._mailNickname = value;
    };
    /**
     * Gets the partsToClone property value. 
     * @returns a clonableTeamParts
     */
    public get partsToClone() {
        return this._partsToClone;
    };
    /**
     * Sets the partsToClone property value. 
     * @param value Value to set for the partsToClone property.
     */
    public set partsToClone(value: ClonableTeamParts | undefined) {
        this._partsToClone = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("classification", this.classification);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeStringValue("mailNickname", this.mailNickname);
        writer.writeEnumValue<ClonableTeamParts>("partsToClone", this.partsToClone);
        writer.writeEnumValue<TeamVisibilityType>("visibility", this.visibility);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the visibility property value. 
     * @returns a teamVisibilityType
     */
    public get visibility() {
        return this._visibility;
    };
    /**
     * Sets the visibility property value. 
     * @param value Value to set for the visibility property.
     */
    public set visibility(value: TeamVisibilityType | undefined) {
        this._visibility = value;
    };
}
