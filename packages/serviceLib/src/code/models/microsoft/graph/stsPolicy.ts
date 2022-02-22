import {DirectoryObject, PolicyBase} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class StsPolicy extends PolicyBase implements Parsable {
    private _appliesTo?: DirectoryObject[] | undefined;
    /** A string collection containing a JSON string that defines the rules and settings for a policy. The syntax for the definition differs for each derived policy type. Required.  */
    private _definition?: string[] | undefined;
    /** If set to true, activates this policy. There can be many policies for the same policy type, but only one can be activated as the organization default. Optional, default value is false.  */
    private _isOrganizationDefault?: boolean | undefined;
    /**
     * Instantiates a new stsPolicy and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the appliesTo property value. 
     * @returns a directoryObject
     */
    public get appliesTo() {
        return this._appliesTo;
    };
    /**
     * Gets the definition property value. A string collection containing a JSON string that defines the rules and settings for a policy. The syntax for the definition differs for each derived policy type. Required.
     * @returns a string
     */
    public get definition() {
        return this._definition;
    };
    /**
     * Gets the isOrganizationDefault property value. If set to true, activates this policy. There can be many policies for the same policy type, but only one can be activated as the organization default. Optional, default value is false.
     * @returns a boolean
     */
    public get isOrganizationDefault() {
        return this._isOrganizationDefault;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["appliesTo", (o, n) => { (o as unknown as StsPolicy).appliesTo = n.getCollectionOfObjectValues<DirectoryObject>(DirectoryObject); }],
            ["definition", (o, n) => { (o as unknown as StsPolicy).definition = n.getCollectionOfPrimitiveValues<string>(); }],
            ["isOrganizationDefault", (o, n) => { (o as unknown as StsPolicy).isOrganizationDefault = n.getBooleanValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<DirectoryObject>("appliesTo", this.appliesTo);
        writer.writeCollectionOfPrimitiveValues<string>("definition", this.definition);
        writer.writeBooleanValue("isOrganizationDefault", this.isOrganizationDefault);
    };
    /**
     * Sets the appliesTo property value. 
     * @param value Value to set for the appliesTo property.
     */
    public set appliesTo(value: DirectoryObject[] | undefined) {
        this._appliesTo = value;
    };
    /**
     * Sets the definition property value. A string collection containing a JSON string that defines the rules and settings for a policy. The syntax for the definition differs for each derived policy type. Required.
     * @param value Value to set for the definition property.
     */
    public set definition(value: string[] | undefined) {
        this._definition = value;
    };
    /**
     * Sets the isOrganizationDefault property value. If set to true, activates this policy. There can be many policies for the same policy type, but only one can be activated as the organization default. Optional, default value is false.
     * @param value Value to set for the isOrganizationDefault property.
     */
    public set isOrganizationDefault(value: boolean | undefined) {
        this._isOrganizationDefault = value;
    };
}
