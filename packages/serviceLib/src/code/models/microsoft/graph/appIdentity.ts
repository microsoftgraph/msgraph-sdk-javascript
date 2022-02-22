import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AppIdentity implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** Refers to the Unique GUID representing Application Id in the Azure Active Directory.  */
    private _appId?: string | undefined;
    /** Refers to the Application Name displayed in the Azure Portal.  */
    private _displayName?: string | undefined;
    /** Refers to the Unique GUID indicating Service Principal Id in Azure Active Directory for the corresponding App.  */
    private _servicePrincipalId?: string | undefined;
    /** Refers to the Service Principal Name is the Application name in the tenant.  */
    private _servicePrincipalName?: string | undefined;
    /**
     * Instantiates a new appIdentity and sets the default values.
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
     * Gets the appId property value. Refers to the Unique GUID representing Application Id in the Azure Active Directory.
     * @returns a string
     */
    public get appId() {
        return this._appId;
    };
    /**
     * Gets the displayName property value. Refers to the Application Name displayed in the Azure Portal.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Gets the servicePrincipalId property value. Refers to the Unique GUID indicating Service Principal Id in Azure Active Directory for the corresponding App.
     * @returns a string
     */
    public get servicePrincipalId() {
        return this._servicePrincipalId;
    };
    /**
     * Gets the servicePrincipalName property value. Refers to the Service Principal Name is the Application name in the tenant.
     * @returns a string
     */
    public get servicePrincipalName() {
        return this._servicePrincipalName;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["appId", (o, n) => { (o as unknown as AppIdentity).appId = n.getStringValue(); }],
            ["displayName", (o, n) => { (o as unknown as AppIdentity).displayName = n.getStringValue(); }],
            ["servicePrincipalId", (o, n) => { (o as unknown as AppIdentity).servicePrincipalId = n.getStringValue(); }],
            ["servicePrincipalName", (o, n) => { (o as unknown as AppIdentity).servicePrincipalName = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("appId", this.appId);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeStringValue("servicePrincipalId", this.servicePrincipalId);
        writer.writeStringValue("servicePrincipalName", this.servicePrincipalName);
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
     * Sets the appId property value. Refers to the Unique GUID representing Application Id in the Azure Active Directory.
     * @param value Value to set for the appId property.
     */
    public set appId(value: string | undefined) {
        this._appId = value;
    };
    /**
     * Sets the displayName property value. Refers to the Application Name displayed in the Azure Portal.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * Sets the servicePrincipalId property value. Refers to the Unique GUID indicating Service Principal Id in Azure Active Directory for the corresponding App.
     * @param value Value to set for the servicePrincipalId property.
     */
    public set servicePrincipalId(value: string | undefined) {
        this._servicePrincipalId = value;
    };
    /**
     * Sets the servicePrincipalName property value. Refers to the Service Principal Name is the Application name in the tenant.
     * @param value Value to set for the servicePrincipalName property.
     */
    public set servicePrincipalName(value: string | undefined) {
        this._servicePrincipalName = value;
    };
}
