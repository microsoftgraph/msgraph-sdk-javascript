import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AverageComparativeScore implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** Average score within specified basis.  */
    private _averageScore?: number | undefined;
    /** Scope type. The possible values are: AllTenants, TotalSeats, IndustryTypes.  */
    private _basis?: string | undefined;
    /**
     * Instantiates a new averageComparativeScore and sets the default values.
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
     * Gets the averageScore property value. Average score within specified basis.
     * @returns a double
     */
    public get averageScore() {
        return this._averageScore;
    };
    /**
     * Gets the basis property value. Scope type. The possible values are: AllTenants, TotalSeats, IndustryTypes.
     * @returns a string
     */
    public get basis() {
        return this._basis;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["averageScore", (o, n) => { (o as unknown as AverageComparativeScore).averageScore = n.getNumberValue(); }],
            ["basis", (o, n) => { (o as unknown as AverageComparativeScore).basis = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeNumberValue("averageScore", this.averageScore);
        writer.writeStringValue("basis", this.basis);
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
     * Sets the averageScore property value. Average score within specified basis.
     * @param value Value to set for the averageScore property.
     */
    public set averageScore(value: number | undefined) {
        this._averageScore = value;
    };
    /**
     * Sets the basis property value. Scope type. The possible values are: AllTenants, TotalSeats, IndustryTypes.
     * @param value Value to set for the basis property.
     */
    public set basis(value: string | undefined) {
        this._basis = value;
    };
}
