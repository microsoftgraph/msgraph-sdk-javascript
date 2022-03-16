import {Set, Term} from './termStore/';
import {createSetFromDiscriminatorValue} from './termStore/createSetFromDiscriminatorValue';
import {createTermFromDiscriminatorValue} from './termStore/createTermFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TermColumn implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** Specifies whether the column will allow more than one value.  */
    private _allowMultipleValues?: boolean | undefined;
    private _parentTerm?: Term | undefined;
    /** Specifies whether to display the entire term path or only the term label.  */
    private _showFullyQualifiedName?: boolean | undefined;
    private _termSet?: Set | undefined;
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
     * Gets the allowMultipleValues property value. Specifies whether the column will allow more than one value.
     * @returns a boolean
     */
    public get allowMultipleValues() {
        return this._allowMultipleValues;
    };
    /**
     * Sets the allowMultipleValues property value. Specifies whether the column will allow more than one value.
     * @param value Value to set for the allowMultipleValues property.
     */
    public set allowMultipleValues(value: boolean | undefined) {
        this._allowMultipleValues = value;
    };
    /**
     * Instantiates a new termColumn and sets the default values.
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
            ["allowMultipleValues", (o, n) => { (o as unknown as TermColumn).allowMultipleValues = n.getBooleanValue(); }],
            ["parentTerm", (o, n) => { (o as unknown as TermColumn).parentTerm = n.getObjectValue<Term>(createTermFromDiscriminatorValue); }],
            ["showFullyQualifiedName", (o, n) => { (o as unknown as TermColumn).showFullyQualifiedName = n.getBooleanValue(); }],
            ["termSet", (o, n) => { (o as unknown as TermColumn).termSet = n.getObjectValue<Set>(createSetFromDiscriminatorValue); }],
        ]);
    };
    /**
     * Gets the parentTerm property value. 
     * @returns a term
     */
    public get parentTerm() {
        return this._parentTerm;
    };
    /**
     * Sets the parentTerm property value. 
     * @param value Value to set for the parentTerm property.
     */
    public set parentTerm(value: Term | undefined) {
        this._parentTerm = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeBooleanValue("allowMultipleValues", this.allowMultipleValues);
        writer.writeObjectValue<Term>("parentTerm", this.parentTerm);
        writer.writeBooleanValue("showFullyQualifiedName", this.showFullyQualifiedName);
        writer.writeObjectValue<Set>("termSet", this.termSet);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the showFullyQualifiedName property value. Specifies whether to display the entire term path or only the term label.
     * @returns a boolean
     */
    public get showFullyQualifiedName() {
        return this._showFullyQualifiedName;
    };
    /**
     * Sets the showFullyQualifiedName property value. Specifies whether to display the entire term path or only the term label.
     * @param value Value to set for the showFullyQualifiedName property.
     */
    public set showFullyQualifiedName(value: boolean | undefined) {
        this._showFullyQualifiedName = value;
    };
    /**
     * Gets the termSet property value. 
     * @returns a set
     */
    public get termSet() {
        return this._termSet;
    };
    /**
     * Sets the termSet property value. 
     * @param value Value to set for the termSet property.
     */
    public set termSet(value: Set | undefined) {
        this._termSet = value;
    };
}
