import {ResourceAction} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class RolePermission implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** Resource Actions each containing a set of allowed and not allowed permissions.  */
    private _resourceActions?: ResourceAction[] | undefined;
    /**
     * Instantiates a new rolePermission and sets the default values.
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
     * Gets the resourceActions property value. Resource Actions each containing a set of allowed and not allowed permissions.
     * @returns a resourceAction
     */
    public get resourceActions() {
        return this._resourceActions;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["resourceActions", (o, n) => { (o as unknown as RolePermission).resourceActions = n.getCollectionOfObjectValues<ResourceAction>(ResourceAction); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfObjectValues<ResourceAction>("resourceActions", this.resourceActions);
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
     * Sets the resourceActions property value. Resource Actions each containing a set of allowed and not allowed permissions.
     * @param value Value to set for the resourceActions property.
     */
    public set resourceActions(value: ResourceAction[] | undefined) {
        this._resourceActions = value;
    };
}
