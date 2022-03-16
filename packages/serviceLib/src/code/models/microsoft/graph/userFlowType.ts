/** Provides operations to manage the identityContainer singleton.  */
export enum UserFlowType {
    SignUp = "signUp",
    SignIn = "signIn",
    SignUpOrSignIn = "signUpOrSignIn",
    PasswordReset = "passwordReset",
    ProfileUpdate = "profileUpdate",
    ResourceOwner = "resourceOwner",
    UnknownFutureValue = "unknownFutureValue",
}
