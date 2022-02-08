import { AuthenticationProvider, BaseBearerTokenAuthenticationProvider } from "@microsoft/kiota-abstractions"
import { ClientSecretCredential } from "@azure/identity";

export class Auth extends BaseBearerTokenAuthenticationProvider {



     getAuthorizationToken = async (): Promise<string> => {
        // copy token from GE
        const token = "eyJ0eXAiOiJKV1QiLCJub25jZSI6IjkzNzczT1dia2JVQkRfblF0ZXNUbE44R1hYd0RkMDc0RFdQYnZuQmZOUGMiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1yNS1BVWliZkJpaTdOZDFqQmViYXhib1hXMCIsImtpZCI6Ik1yNS1BVWliZkJpaTdOZDFqQmViYXhib1hXMCJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTAwMDAtYzAwMC0wMDAwMDAwMDAwMDAiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9kNGNjN2E0Mi0zYzQ0LTQ0ZjMtYWFmMy02NjYzMDJhZWFiMDgvIiwiaWF0IjoxNjQzODE2NzY5LCJuYmYiOjE2NDM4MTY3NjksImV4cCI6MTY0MzgyMjIxMywiYWNjdCI6MCwiYWNyIjoiMSIsImFpbyI6IkFTUUEyLzhUQUFBQVlZenJuUklXdGg0dHYzOW5DU0g4ZEx1bTNES1l1ZTIvN0Q3L0lQLzlyczA9IiwiYW1yIjpbInB3ZCJdLCJhcHBfZGlzcGxheW5hbWUiOiJHcmFwaCBFeHBsb3JlciIsImFwcGlkIjoiZGU4YmM4YjUtZDlmOS00OGIxLWE4YWQtYjc0OGRhNzI1MDY0IiwiYXBwaWRhY3IiOiIwIiwiZmFtaWx5X25hbWUiOiJDaGV0dGlhciIsImdpdmVuX25hbWUiOiJlMjM5MWIiLCJpZHR5cCI6InVzZXIiLCJpcGFkZHIiOiI3My4xNjkuMTQ4LjcyIiwibmFtZSI6Ik5pa2l0aGEgVWRheWt1bWFyIENoZXR0aWFyIiwib2lkIjoiODEzOTU2YTMtNGEzMC00NTk2LTkxNGYtYmZkODZhNjU3YTA5IiwicGxhdGYiOiIzIiwicHVpZCI6IjEwMDMyMDAwRDI4NEZBQ0EiLCJwd2RfZXhwIjoiMCIsInB3ZF91cmwiOiJodHRwczovL3BvcnRhbC5taWNyb3NvZnRvbmxpbmUuY29tL0NoYW5nZVBhc3N3b3JkLmFzcHgiLCJyaCI6IjAuQVZrQVFuck0xRVE4ODBTcTgyWmpBcTZyQ0FNQUFBQUFBQUFBd0FBQUFBQUFBQUJaQUJVLiIsInNjcCI6IkNhbGVuZGFycy5SZWFkIENhbGVuZGFycy5SZWFkV3JpdGUgQ29udGFjdHMuUmVhZCBDb250YWN0cy5SZWFkV3JpdGUgRGlyZWN0b3J5LkFjY2Vzc0FzVXNlci5BbGwgRGlyZWN0b3J5LlJlYWQuQWxsIERpcmVjdG9yeS5SZWFkV3JpdGUuQWxsIEVudGl0bGVtZW50TWFuYWdlbWVudC5SZWFkV3JpdGUuQWxsIEZpbGVzLlJlYWQgRmlsZXMuUmVhZC5BbGwgRmlsZXMuUmVhZFdyaXRlIEZpbGVzLlJlYWRXcml0ZS5BbGwgR3JvdXAuUmVhZC5BbGwgR3JvdXAuUmVhZFdyaXRlLkFsbCBNYWlsLlJlYWQgTWFpbC5SZWFkLlNoYXJlZCBNYWlsLlJlYWRCYXNpYyBNYWlsLlJlYWRXcml0ZSBNYWlsLlJlYWRXcml0ZS5TaGFyZWQgTWFpbC5TZW5kIE1haWxib3hTZXR0aW5ncy5SZWFkV3JpdGUgTm90ZXMuQ3JlYXRlIE5vdGVzLlJlYWQgTm90ZXMuUmVhZC5BbGwgTm90ZXMuUmVhZFdyaXRlIE5vdGVzLlJlYWRXcml0ZS5BbGwgb3BlbmlkIE9yZ0NvbnRhY3QuUmVhZC5BbGwgUGVvcGxlLlJlYWQgUGVvcGxlLlJlYWQuQWxsIFByaW50ZXIuRnVsbENvbnRyb2wuQWxsIFByaW50ZXIuUmVhZC5BbGwgUHJpbnRlci5SZWFkV3JpdGUuQWxsIFByaW50ZXJTaGFyZS5SZWFkLkFsbCBQcmludGVyU2hhcmUuUmVhZFdyaXRlLkFsbCBwcm9maWxlIFJlcG9ydHMuUmVhZC5BbGwgU2l0ZXMuRnVsbENvbnRyb2wuQWxsIFNpdGVzLk1hbmFnZS5BbGwgU2l0ZXMuUmVhZC5BbGwgU2l0ZXMuUmVhZFdyaXRlLkFsbCBUYXNrcy5SZWFkIFRhc2tzLlJlYWQuU2hhcmVkIFRhc2tzLlJlYWRXcml0ZSBUYXNrcy5SZWFkV3JpdGUuU2hhcmVkIFVzZXIuUmVhZCBlbWFpbCIsInNpZ25pbl9zdGF0ZSI6WyJrbXNpIl0sInN1YiI6InRvcGgxMmFFWTJaVzh3b3MzWTYxaVpXMmo5aTU1T2trTFlkQU9PYnRaSHMiLCJ0ZW5hbnRfcmVnaW9uX3Njb3BlIjoiTkEiLCJ0aWQiOiJkNGNjN2E0Mi0zYzQ0LTQ0ZjMtYWFmMy02NjYzMDJhZWFiMDgiLCJ1bmlxdWVfbmFtZSI6Im5jaGV0dGlhQGdyYXBoanNkZW1vLm9ubWljcm9zb2Z0LmNvbSIsInVwbiI6Im5jaGV0dGlhQGdyYXBoanNkZW1vLm9ubWljcm9zb2Z0LmNvbSIsInV0aSI6InVmZ3oyNFVfYmtTbXRWbHA1cnNsQVEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbIjYyZTkwMzk0LTY5ZjUtNDIzNy05MTkwLTAxMjE3NzE0NWUxMCIsImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdLCJ4bXNfc3QiOnsic3ViIjoiTVpCVElBUEFjS1E0T0pMbkRHc0VuRGR6MTZBczZmRS0ydDVlXy02Q3VUSSJ9LCJ4bXNfdGNkdCI6MTU5NTUzNDgzMX0.O7gVqb3YK61T5h5wsVEn0JnrFhqxgYBcJo0bPmEpls7U2CwYMcVfZgRhVW9Z98Bztm7HOLMKTw9nnJHui8aleHJTQgfzNohFGULzWoXSyVPHtJNvqrOzHIm3XXBDxBF7LaZIc2PdF_XpxVMir5a2FrVYDQS0Su6Z2c8PFY-hmFD9LZda7olHAHwKAMu5naZK5yqC3cUTR6XG1BSOBF6xNOElBwh8VJ9OG_DzwEnC2-oK33vOfuiTTWjns6JATNVWY_FvgBw9H5Vmts27Ma_1TTn4i35StdaFZ85x0cZNzs9WJxZHLOEZebusyHh3MHzPQgmLneLolX0_fFXb3w6UJQ";
        return Promise.resolve(token);

    }
}