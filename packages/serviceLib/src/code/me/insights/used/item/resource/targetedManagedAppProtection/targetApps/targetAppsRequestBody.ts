import {ManagedMobileApp, TargetedManagedAppGroupType} from '../../../../../../../models/microsoft/graph/';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TargetAppsRequestBody implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _appGroupType?: TargetedManagedAppGroupType | undefined;
    private _apps?: ManagedMobileApp[] | undefined;
    /**
     * Instantiates a new targetAppsRequestBody and sets the default values.
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
     * Gets the appGroupType property value. 
     * @returns a targetedManagedAppGroupType
     */
    public get appGroupType() {
        return this._appGroupType;
    };
    /**
     * Gets the apps property value. 
     * @returns a managedMobileApp
     */
    public get apps() {
        return this._apps;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["appGroupType", (o, n) => { (o as unknown as TargetAppsRequestBody).appGroupType = n.getEnumValue<TargetedManagedAppGroupType>(TargetedManagedAppGroupType); }],
            ["apps", (o, n) => { (o as unknown as TargetAppsRequestBody).apps = n.getCollectionOfObjectValues<ManagedMobileApp>(ManagedMobileApp); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeEnumValue<TargetedManagedAppGroupType>("appGroupType", this.appGroupType);
        writer.writeCollectionOfObjectValues<ManagedMobileApp>("apps", this.apps);
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
     * Sets the appGroupType property value. 
     * @param value Value to set for the appGroupType property.
     */
    public set appGroupType(value: TargetedManagedAppGroupType | undefined) {
        this._appGroupType = value;
    };
    /**
     * Sets the apps property value. 
     * @param value Value to set for the apps property.
     */
    public set apps(value: ManagedMobileApp[] | undefined) {
        this._apps = value;
    };
}
