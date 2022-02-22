export enum RiskDetail {
    None = "none",
    AdminGeneratedTemporaryPassword = "adminGeneratedTemporaryPassword",
    UserPerformedSecuredPasswordChange = "userPerformedSecuredPasswordChange",
    UserPerformedSecuredPasswordReset = "userPerformedSecuredPasswordReset",
    AdminConfirmedSigninSafe = "adminConfirmedSigninSafe",
    AiConfirmedSigninSafe = "aiConfirmedSigninSafe",
    UserPassedMFADrivenByRiskBasedPolicy = "userPassedMFADrivenByRiskBasedPolicy",
    AdminDismissedAllRiskForUser = "adminDismissedAllRiskForUser",
    AdminConfirmedSigninCompromised = "adminConfirmedSigninCompromised",
    Hidden = "hidden",
    AdminConfirmedUserCompromised = "adminConfirmedUserCompromised",
    UnknownFutureValue = "unknownFutureValue",
}
