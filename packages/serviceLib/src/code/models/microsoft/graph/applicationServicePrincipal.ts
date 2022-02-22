import {Application, ServicePrincipal} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ApplicationServicePrincipal implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _application?: Application | undefined;
    private _servicePrincipal?: ServicePrincipal | undefined;
    /**
     * Instantiates a new applicationServicePrincipal and sets the default values.
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
     * Gets the application property value. 
     * @returns a application
     */
    public get application() {
        return this._application;
    };
    /**
     * Gets the servicePrincipal property value. 
     * @returns a servicePrincipal
     */
    public get servicePrincipal() {
        return this._servicePrincipal;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["application", (o, n) => { (o as unknown as ApplicationServicePrincipal).application = n.getObjectValue<Application>(Application); }],
            ["servicePrincipal", (o, n) => { (o as unknown as ApplicationServicePrincipal).servicePrincipal = n.getObjectValue<ServicePrincipal>(ServicePrincipal); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Application>("application", this.application);
        writer.writeObjectValue<ServicePrincipal>("servicePrincipal", this.servicePrincipal);
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
     * Sets the application property value. 
     * @param value Value to set for the application property.
     */
    public set application(value: Application | undefined) {
        this._application = value;
    };
    /**
     * Sets the servicePrincipal property value. 
     * @param value Value to set for the servicePrincipal property.
     */
    public set servicePrincipal(value: ServicePrincipal | undefined) {
        this._servicePrincipal = value;
    };
}
