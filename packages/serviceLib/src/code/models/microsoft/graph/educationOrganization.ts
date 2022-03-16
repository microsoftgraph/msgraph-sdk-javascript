import {EducationExternalSource} from './educationExternalSource';
import {Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EducationOrganization extends Entity implements Parsable {
    /** Organization description.  */
    private _description?: string | undefined;
    /** Organization display name.  */
    private _displayName?: string | undefined;
    /** Source where this organization was created from. Possible values are: sis, manual.  */
    private _externalSource?: EducationExternalSource | undefined;
    /** The name of the external source this resources was generated from.  */
    private _externalSourceDetail?: string | undefined;
    /**
     * Instantiates a new educationOrganization and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the description property value. Organization description.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. Organization description.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * Gets the displayName property value. Organization display name.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. Organization display name.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * Gets the externalSource property value. Source where this organization was created from. Possible values are: sis, manual.
     * @returns a educationExternalSource
     */
    public get externalSource() {
        return this._externalSource;
    };
    /**
     * Sets the externalSource property value. Source where this organization was created from. Possible values are: sis, manual.
     * @param value Value to set for the externalSource property.
     */
    public set externalSource(value: EducationExternalSource | undefined) {
        this._externalSource = value;
    };
    /**
     * Gets the externalSourceDetail property value. The name of the external source this resources was generated from.
     * @returns a string
     */
    public get externalSourceDetail() {
        return this._externalSourceDetail;
    };
    /**
     * Sets the externalSourceDetail property value. The name of the external source this resources was generated from.
     * @param value Value to set for the externalSourceDetail property.
     */
    public set externalSourceDetail(value: string | undefined) {
        this._externalSourceDetail = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["description", (o, n) => { (o as unknown as EducationOrganization).description = n.getStringValue(); }],
            ["displayName", (o, n) => { (o as unknown as EducationOrganization).displayName = n.getStringValue(); }],
            ["externalSource", (o, n) => { (o as unknown as EducationOrganization).externalSource = n.getEnumValue<EducationExternalSource>(EducationExternalSource); }],
            ["externalSourceDetail", (o, n) => { (o as unknown as EducationOrganization).externalSourceDetail = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeEnumValue<EducationExternalSource>("externalSource", this.externalSource);
        writer.writeStringValue("externalSourceDetail", this.externalSourceDetail);
    };
}
