export class UploadResult {
    private _location: string;
    private _body: unknown;

    public get location(): string {
        return this._location;
    }

    public set location(location: string) {
        this._location = location;
    }

    public get body() {
        return this._body;
    }

    public set body(body: unknown) {
        // Body can be undefined. Empty body is expected.
        this._body = body;
    }

    public constructor(body:unknown, location:string){
        this._location = location;
        this._body = body;
    }
    
    public static CreateUploadResult(responsebody?:unknown, responseHeaders?:Headers){
        return new UploadResult(responsebody, (responseHeaders.get("Location") || responseHeaders.get("headers")));
    }
}