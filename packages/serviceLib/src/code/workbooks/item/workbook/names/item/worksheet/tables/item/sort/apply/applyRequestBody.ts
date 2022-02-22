import {WorkbookSortField} from '../../../../../../../../../../models/microsoft/graph/';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ApplyRequestBody implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _fields?: WorkbookSortField[] | undefined;
    private _matchCase?: boolean | undefined;
    private _method?: string | undefined;
    /**
     * Instantiates a new applyRequestBody and sets the default values.
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
     * Gets the fields property value. 
     * @returns a workbookSortField
     */
    public get fields() {
        return this._fields;
    };
    /**
     * Gets the matchCase property value. 
     * @returns a boolean
     */
    public get matchCase() {
        return this._matchCase;
    };
    /**
     * Gets the method property value. 
     * @returns a string
     */
    public get method() {
        return this._method;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["fields", (o, n) => { (o as unknown as ApplyRequestBody).fields = n.getCollectionOfObjectValues<WorkbookSortField>(WorkbookSortField); }],
            ["matchCase", (o, n) => { (o as unknown as ApplyRequestBody).matchCase = n.getBooleanValue(); }],
            ["method", (o, n) => { (o as unknown as ApplyRequestBody).method = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfObjectValues<WorkbookSortField>("fields", this.fields);
        writer.writeBooleanValue("matchCase", this.matchCase);
        writer.writeStringValue("method", this.method);
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
     * Sets the fields property value. 
     * @param value Value to set for the fields property.
     */
    public set fields(value: WorkbookSortField[] | undefined) {
        this._fields = value;
    };
    /**
     * Sets the matchCase property value. 
     * @param value Value to set for the matchCase property.
     */
    public set matchCase(value: boolean | undefined) {
        this._matchCase = value;
    };
    /**
     * Sets the method property value. 
     * @param value Value to set for the method property.
     */
    public set method(value: string | undefined) {
        this._method = value;
    };
}
