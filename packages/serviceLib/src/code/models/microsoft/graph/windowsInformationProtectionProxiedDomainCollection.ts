import {ProxiedDomain} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WindowsInformationProtectionProxiedDomainCollection implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** Display name  */
    private _displayName?: string | undefined;
    /** Collection of proxied domains  */
    private _proxiedDomains?: ProxiedDomain[] | undefined;
    /**
     * Instantiates a new windowsInformationProtectionProxiedDomainCollection and sets the default values.
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
     * Gets the displayName property value. Display name
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Gets the proxiedDomains property value. Collection of proxied domains
     * @returns a proxiedDomain
     */
    public get proxiedDomains() {
        return this._proxiedDomains;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["displayName", (o, n) => { (o as unknown as WindowsInformationProtectionProxiedDomainCollection).displayName = n.getStringValue(); }],
            ["proxiedDomains", (o, n) => { (o as unknown as WindowsInformationProtectionProxiedDomainCollection).proxiedDomains = n.getCollectionOfObjectValues<ProxiedDomain>(ProxiedDomain); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("displayName", this.displayName);
        writer.writeCollectionOfObjectValues<ProxiedDomain>("proxiedDomains", this.proxiedDomains);
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
     * Sets the displayName property value. Display name
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * Sets the proxiedDomains property value. Collection of proxied domains
     * @param value Value to set for the proxiedDomains property.
     */
    public set proxiedDomains(value: ProxiedDomain[] | undefined) {
        this._proxiedDomains = value;
    };
}
