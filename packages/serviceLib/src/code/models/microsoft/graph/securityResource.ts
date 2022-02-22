import {SecurityResourceType} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SecurityResource implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** Name of the resource that is related to current alert. Required.  */
    private _resource?: string | undefined;
    /** Represents type of security resources related to an alert. Possible values are: attacked, related.  */
    private _resourceType?: SecurityResourceType | undefined;
    /**
     * Instantiates a new securityResource and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Map<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Gets the resource property value. Name of the resource that is related to current alert. Required.
     * @returns a string
     */
    public get resource() {
        return this._resource;
    };
    /**
     * Gets the resourceType property value. Represents type of security resources related to an alert. Possible values are: attacked, related.
     * @returns a securityResourceType
     */
    public get resourceType() {
        return this._resourceType;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["resource", (o, n) => { (o as unknown as SecurityResource).resource = n.getStringValue(); }],
            ["resourceType", (o, n) => { (o as unknown as SecurityResource).resourceType = n.getEnumValue<SecurityResourceType>(SecurityResourceType); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("resource", this.resource);
        writer.writeEnumValue<SecurityResourceType>("resourceType", this.resourceType);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Map<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Sets the resource property value. Name of the resource that is related to current alert. Required.
     * @param value Value to set for the resource property.
     */
    public set resource(value: string | undefined) {
        this._resource = value;
    };
    /**
     * Sets the resourceType property value. Represents type of security resources related to an alert. Possible values are: attacked, related.
     * @param value Value to set for the resourceType property.
     */
    public set resourceType(value: SecurityResourceType | undefined) {
        this._resourceType = value;
    };
}
