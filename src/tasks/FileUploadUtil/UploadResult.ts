
import { GraphResponseHandler } from "../../GraphResponseHandler";
export class UploadResult {
    private _location: string;
    private _body: unknown;
    private _uploadSuccess: boolean;

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

    public async setUploadResult(response: Response) {
        this._location = response.headers.get("Location");
        this._body = await GraphResponseHandler.getResponse(response);
        this._uploadSuccess = 
    }

}