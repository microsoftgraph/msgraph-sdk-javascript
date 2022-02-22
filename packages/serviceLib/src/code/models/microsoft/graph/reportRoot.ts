import {Entity, PrintUsageByPrinter, PrintUsageByUser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ReportRoot extends Entity implements Parsable {
    private _dailyPrintUsageByPrinter?: PrintUsageByPrinter[] | undefined;
    private _dailyPrintUsageByUser?: PrintUsageByUser[] | undefined;
    private _monthlyPrintUsageByPrinter?: PrintUsageByPrinter[] | undefined;
    private _monthlyPrintUsageByUser?: PrintUsageByUser[] | undefined;
    /**
     * Instantiates a new reportRoot and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the dailyPrintUsageByPrinter property value. 
     * @returns a printUsageByPrinter
     */
    public get dailyPrintUsageByPrinter() {
        return this._dailyPrintUsageByPrinter;
    };
    /**
     * Gets the dailyPrintUsageByUser property value. 
     * @returns a printUsageByUser
     */
    public get dailyPrintUsageByUser() {
        return this._dailyPrintUsageByUser;
    };
    /**
     * Gets the monthlyPrintUsageByPrinter property value. 
     * @returns a printUsageByPrinter
     */
    public get monthlyPrintUsageByPrinter() {
        return this._monthlyPrintUsageByPrinter;
    };
    /**
     * Gets the monthlyPrintUsageByUser property value. 
     * @returns a printUsageByUser
     */
    public get monthlyPrintUsageByUser() {
        return this._monthlyPrintUsageByUser;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["dailyPrintUsageByPrinter", (o, n) => { (o as unknown as ReportRoot).dailyPrintUsageByPrinter = n.getCollectionOfObjectValues<PrintUsageByPrinter>(PrintUsageByPrinter); }],
            ["dailyPrintUsageByUser", (o, n) => { (o as unknown as ReportRoot).dailyPrintUsageByUser = n.getCollectionOfObjectValues<PrintUsageByUser>(PrintUsageByUser); }],
            ["monthlyPrintUsageByPrinter", (o, n) => { (o as unknown as ReportRoot).monthlyPrintUsageByPrinter = n.getCollectionOfObjectValues<PrintUsageByPrinter>(PrintUsageByPrinter); }],
            ["monthlyPrintUsageByUser", (o, n) => { (o as unknown as ReportRoot).monthlyPrintUsageByUser = n.getCollectionOfObjectValues<PrintUsageByUser>(PrintUsageByUser); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<PrintUsageByPrinter>("dailyPrintUsageByPrinter", this.dailyPrintUsageByPrinter);
        writer.writeCollectionOfObjectValues<PrintUsageByUser>("dailyPrintUsageByUser", this.dailyPrintUsageByUser);
        writer.writeCollectionOfObjectValues<PrintUsageByPrinter>("monthlyPrintUsageByPrinter", this.monthlyPrintUsageByPrinter);
        writer.writeCollectionOfObjectValues<PrintUsageByUser>("monthlyPrintUsageByUser", this.monthlyPrintUsageByUser);
    };
    /**
     * Sets the dailyPrintUsageByPrinter property value. 
     * @param value Value to set for the dailyPrintUsageByPrinter property.
     */
    public set dailyPrintUsageByPrinter(value: PrintUsageByPrinter[] | undefined) {
        this._dailyPrintUsageByPrinter = value;
    };
    /**
     * Sets the dailyPrintUsageByUser property value. 
     * @param value Value to set for the dailyPrintUsageByUser property.
     */
    public set dailyPrintUsageByUser(value: PrintUsageByUser[] | undefined) {
        this._dailyPrintUsageByUser = value;
    };
    /**
     * Sets the monthlyPrintUsageByPrinter property value. 
     * @param value Value to set for the monthlyPrintUsageByPrinter property.
     */
    public set monthlyPrintUsageByPrinter(value: PrintUsageByPrinter[] | undefined) {
        this._monthlyPrintUsageByPrinter = value;
    };
    /**
     * Sets the monthlyPrintUsageByUser property value. 
     * @param value Value to set for the monthlyPrintUsageByUser property.
     */
    public set monthlyPrintUsageByUser(value: PrintUsageByUser[] | undefined) {
        this._monthlyPrintUsageByUser = value;
    };
}
