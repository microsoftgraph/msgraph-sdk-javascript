import {SignIn} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class RestrictedSignIn extends SignIn implements Parsable {
    private _targetTenantId?: string | undefined;
    /**
     * Instantiates a new restrictedSignIn and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["targetTenantId", (o, n) => { (o as unknown as RestrictedSignIn).targetTenantId = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("targetTenantId", this.targetTenantId);
    };
    /**
     * Gets the targetTenantId property value. 
     * @returns a string
     */
    public get targetTenantId() {
        return this._targetTenantId;
    };
    /**
     * Sets the targetTenantId property value. 
     * @param value Value to set for the targetTenantId property.
     */
    public set targetTenantId(value: string | undefined) {
        this._targetTenantId = value;
    };
}
