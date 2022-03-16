import {createFolderViewFromDiscriminatorValue} from './createFolderViewFromDiscriminatorValue';
import {FolderView} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Folder implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** Number of children contained immediately within this container.  */
    private _childCount?: number | undefined;
    /** A collection of properties defining the recommended view for the folder.  */
    private _view?: FolderView | undefined;
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
     * Gets the childCount property value. Number of children contained immediately within this container.
     * @returns a integer
     */
    public get childCount() {
        return this._childCount;
    };
    /**
     * Sets the childCount property value. Number of children contained immediately within this container.
     * @param value Value to set for the childCount property.
     */
    public set childCount(value: number | undefined) {
        this._childCount = value;
    };
    /**
     * Instantiates a new folder and sets the default values.
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
            ["childCount", (o, n) => { (o as unknown as Folder).childCount = n.getNumberValue(); }],
            ["view", (o, n) => { (o as unknown as Folder).view = n.getObjectValue<FolderView>(createFolderViewFromDiscriminatorValue); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeNumberValue("childCount", this.childCount);
        writer.writeObjectValue<FolderView>("view", this.view);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the view property value. A collection of properties defining the recommended view for the folder.
     * @returns a folderView
     */
    public get view() {
        return this._view;
    };
    /**
     * Sets the view property value. A collection of properties defining the recommended view for the folder.
     * @param value Value to set for the view property.
     */
    public set view(value: FolderView | undefined) {
        this._view = value;
    };
}
