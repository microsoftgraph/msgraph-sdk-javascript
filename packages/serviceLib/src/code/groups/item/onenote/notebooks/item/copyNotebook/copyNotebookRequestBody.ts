import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the copyNotebook method.  */
export class CopyNotebookRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _groupId?: string | undefined;
    private _notebookFolder?: string | undefined;
    private _renameAs?: string | undefined;
    private _siteCollectionId?: string | undefined;
    private _siteId?: string | undefined;
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
     * Instantiates a new copyNotebookRequestBody and sets the default values.
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
            ["groupId", (o, n) => { (o as unknown as CopyNotebookRequestBody).groupId = n.getStringValue(); }],
            ["notebookFolder", (o, n) => { (o as unknown as CopyNotebookRequestBody).notebookFolder = n.getStringValue(); }],
            ["renameAs", (o, n) => { (o as unknown as CopyNotebookRequestBody).renameAs = n.getStringValue(); }],
            ["siteCollectionId", (o, n) => { (o as unknown as CopyNotebookRequestBody).siteCollectionId = n.getStringValue(); }],
            ["siteId", (o, n) => { (o as unknown as CopyNotebookRequestBody).siteId = n.getStringValue(); }],
        ]);
    };
    /**
     * Gets the groupId property value. 
     * @returns a string
     */
    public get groupId() {
        return this._groupId;
    };
    /**
     * Sets the groupId property value. 
     * @param value Value to set for the groupId property.
     */
    public set groupId(value: string | undefined) {
        this._groupId = value;
    };
    /**
     * Gets the notebookFolder property value. 
     * @returns a string
     */
    public get notebookFolder() {
        return this._notebookFolder;
    };
    /**
     * Sets the notebookFolder property value. 
     * @param value Value to set for the notebookFolder property.
     */
    public set notebookFolder(value: string | undefined) {
        this._notebookFolder = value;
    };
    /**
     * Gets the renameAs property value. 
     * @returns a string
     */
    public get renameAs() {
        return this._renameAs;
    };
    /**
     * Sets the renameAs property value. 
     * @param value Value to set for the renameAs property.
     */
    public set renameAs(value: string | undefined) {
        this._renameAs = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("groupId", this.groupId);
        writer.writeStringValue("notebookFolder", this.notebookFolder);
        writer.writeStringValue("renameAs", this.renameAs);
        writer.writeStringValue("siteCollectionId", this.siteCollectionId);
        writer.writeStringValue("siteId", this.siteId);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the siteCollectionId property value. 
     * @returns a string
     */
    public get siteCollectionId() {
        return this._siteCollectionId;
    };
    /**
     * Sets the siteCollectionId property value. 
     * @param value Value to set for the siteCollectionId property.
     */
    public set siteCollectionId(value: string | undefined) {
        this._siteCollectionId = value;
    };
    /**
     * Gets the siteId property value. 
     * @returns a string
     */
    public get siteId() {
        return this._siteId;
    };
    /**
     * Sets the siteId property value. 
     * @param value Value to set for the siteId property.
     */
    public set siteId(value: string | undefined) {
        this._siteId = value;
    };
}
