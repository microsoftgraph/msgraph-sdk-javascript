import {PasswordCredential} from '../../../models/microsoft/graph/';
import {createPasswordCredentialFromDiscriminatorValue} from '../../../models/microsoft/graph/createPasswordCredentialFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the addPassword method.  */
export class PasswordCredentialRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _passwordCredential?: PasswordCredential | undefined;
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
     * Instantiates a new PasswordCredentialRequestBody and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["passwordCredential", (o, n) => { (o as unknown as PasswordCredentialRequestBody).passwordCredential = n.getObjectValue<PasswordCredential>(createPasswordCredentialFromDiscriminatorValue); }],
        ]);
    };
    /**
     * Gets the passwordCredential property value. 
     * @returns a passwordCredential
     */
    public get passwordCredential() {
        return this._passwordCredential;
    };
    /**
     * Sets the passwordCredential property value. 
     * @param value Value to set for the passwordCredential property.
     */
    public set passwordCredential(value: PasswordCredential | undefined) {
        this._passwordCredential = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<PasswordCredential>("passwordCredential", this.passwordCredential);
        writer.writeAdditionalData(this.additionalData);
    };
}
