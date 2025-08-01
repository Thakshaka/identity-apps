/**
 * Copyright (c) 2022-2025, WSO2 LLC. (https://www.wso2.com).
 *
 * WSO2 LLC. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import {
    I18nModuleInitOptions,
    I18nModuleOptionsInterface,
    SupportedLanguagesMeta,
    generateBackendPaths
} from "@wso2is/i18n";
import { I18nConstants } from "../constants";
import { AppConstants } from "../constants/app-constants";
import { UserManagementConstants } from "../constants/user-management-constants";
// Keep statement as this to avoid cyclic dependency. Do not import from config index.
import { SCIMConfigs } from "../extensions/configs/scim";
import { AppUtils } from "../init/app-utils";
import { DeploymentConfigInterface, ServiceResourceEndpointsInterface, UIConfigInterface } from "../models";
import { store } from "../store";

/**
 * Class to handle application config operations.
 */
export class Config {
    /**
     * Private constructor to avoid object instantiation from outside
     * the class.
     */
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    private constructor() {}

    /**
     * Get the deployment config.
     *
     * @returns DeploymentConfigInterface - Deployment config object.
     */
    public static getDeploymentConfig(): DeploymentConfigInterface {
        return {
            __experimental__platformIdP: window[ "AppUtils" ]?.getConfig()?.__experimental__platformIdP,
            appBaseName: window["AppUtils"]?.getConfig()?.appBaseWithTenant,
            appBaseNameWithoutTenant: window["AppUtils"]?.getConfig()?.appBase,
            appHomePath: window["AppUtils"]?.getConfig()?.routes?.home,
            appLoginPath: window["AppUtils"]?.getConfig()?.routes?.login,
            appLogoutPath: window["AppUtils"]?.getConfig()?.routes?.logout,
            clientHost: window["AppUtils"]?.getConfig()?.clientOriginWithTenant,
            clientID: window["AppUtils"]?.getConfig()?.clientID,
            clientOrigin: window["AppUtils"]?.getConfig()?.clientOrigin,
            clientOriginWithTenant: window[ "AppUtils" ]?.getConfig()?.clientOriginWithTenant,
            consoleApp: window["AppUtils"]?.getConfig()?.consoleApp,
            customServerHost: window["AppUtils"]?.getConfig()?.customServerHost,
            idpConfigs: window["AppUtils"]?.getConfig()?.idpConfigs,
            loginCallbackUrl: window["AppUtils"]?.getConfig()?.loginCallbackURL,
            organizationPrefix: window["AppUtils"]?.getConfig()?.organizationPrefix,
            serverHost: window["AppUtils"]?.getConfig()?.serverOriginWithTenant,
            serverOrigin: window["AppUtils"]?.getConfig()?.serverOrigin,
            superTenant: window["AppUtils"]?.getConfig()?.superTenant,
            tenant: window["AppUtils"]?.getConfig()?.tenant,
            tenantContext: window["AppUtils"]?.getConfig()?.tenantContext,
            tenantPath: window["AppUtils"]?.getConfig()?.tenantPath,
            tenantPrefix: window["AppUtils"]?.getConfig()?.tenantPrefix
        };
    }

    /**
     * Get the list of service resource endpoints.
     *
     * @returns ServiceResourceEndpointsInterface - Service resource endpoints as an object.
     */
    public static getServiceResourceEndpoints(): ServiceResourceEndpointsInterface {
        return {
            applications: `${this.getDeploymentConfig()?.serverHost}/api/users/v1/me/applications`,
            associations: `${this.getDeploymentConfig()?.serverHost}/api/users/v1/me/associations`,
            authorize: `${this.getDeploymentConfig()?.serverHost}/oauth2/authorize`,
            backupCode: `${this.getDeploymentConfig()?.serverHost}/api/users/v1/me/backup-codes`,
            brandingPreference: `${AppUtils.getOrganizationName()
                ? window["AppUtils"]?.getConfig()?.serverOriginWithOrganization
                : this.getDeploymentConfig()?.serverHost}/api/server/v1/branding-preference`,
            challengeAnswers: `${this.getDeploymentConfig()?.serverHost}/api/users/v1/me/challenge-answers`,
            challenges: `${this.getDeploymentConfig()?.serverHost}/api/users/v1/me/challenges`,
            consentManagement: {
                consent: {
                    addConsent: `${this.getDeploymentConfig()?.serverHost}/api/identity/consent-mgt/v1.0/consents`,
                    consentReceipt: `${
                        this.getDeploymentConfig()?.serverHost
                    }/api/identity/consent-mgt/v1.0/consents/receipts`,
                    listAllConsents: `${this.getDeploymentConfig()?.serverHost}/api/identity/consent-mgt/v1.0/consents`
                },
                purpose: {
                    getPurpose: `${
                        this.getDeploymentConfig()?.serverHost
                    }/api/identity/consent-mgt/v1.0/consents/purposes`,
                    list: `${this.getDeploymentConfig()?.serverHost}/api/identity/consent-mgt/v1.0/consents/purposes`
                }
            },
            federatedAssociations: `${this.getDeploymentConfig()?.serverHost}/api/users/v1/me/federated-associations`,
            fidoEnd: `${this.getDeploymentConfig()?.serverHost}/api/users/v2/me/webauthn/finish-registration`,
            fidoMetaData: `${this.getDeploymentConfig()?.serverHost}/api/users/v2/me/webauthn`,
            fidoStart: `${this.getDeploymentConfig()?.serverHost}/api/users/v2/me/webauthn/start-registration`,
            fidoStartUsernameless: `${
                this.getDeploymentConfig()?.serverHost
            }/api/users/v2/me/webauthn/start-usernameless-registration`,
            homeRealmIdentifiers: `${
                this.getDeploymentConfig()?.serverHost
            }/api/server/v1/configs/home-realm-identifiers`,
            isReadOnlyUser: `${this.getDeploymentConfig()?.serverHost}/scim2/Me?attributes=${
                SCIMConfigs.scim.systemSchema}:isReadOnlyUser`,
            issuer: `${this.getDeploymentConfig()?.serverHost}/oauth2/token`,
            jwks: `${this.getDeploymentConfig()?.serverHost}/oauth2/jwks`,
            logout: `${this.getDeploymentConfig()?.serverHost}/oidc/logout`,
            me: `${this.getDeploymentConfig()?.serverHost}/scim2/Me`,
            mfaEnabledAuthenticators: `${this.getDeploymentConfig()?.serverHost}/api/users/v1/me/mfa/authenticators`,
            preference: `${this.getDeploymentConfig()?.serverHost}/api/server/v1/identity-governance/preferences`,
            profileSchemas: `${this.getDeploymentConfig()?.serverHost}/scim2/Schemas`,
            push: `${this.getDeploymentConfig()?.serverHost}/api/users/v1/me/push`,
            revoke: `${this.getDeploymentConfig()?.serverHost}/oauth2/revoke`,
            sessions: `${this.getDeploymentConfig()?.serverHost}/api/users/v1/me/sessions`,
            smsOtpValidate: `${this.getDeploymentConfig()?.serverHost}/api/identity/user/v1.0/me/validate-code`,
            token: `${this.getDeploymentConfig()?.serverHost}/oauth2/token`,
            totp: `${this.getDeploymentConfig()?.serverHost}/api/users/v1/me/totp`,
            totpSecret: `${this.getDeploymentConfig()?.serverHost}/api/users/v1/me/totp/secret`,
            typingDNAMe: `${this.getDeploymentConfig()?.serverHost}/api/identity/typingdna/v1.0/me/typingpatterns`,
            typingDNAServer: `${
                this.getDeploymentConfig()?.serverHost
            }/api/identity/typingdna/v1.0/server/typingdnaConfig`,
            user: `${this.getDeploymentConfig()?.serverHost}/api/identity/user/v1.0/me`,
            validationMgt: `${AppUtils.getOrganizationName()
                ? window["AppUtils"]?.getConfig()?.serverOriginWithOrganization
                : this.getDeploymentConfig()?.serverHost}/api/server/v1/validation-rules`,
            verificationResend: `${this.getDeploymentConfig()?.serverHost}/api/identity/user/v1.0/me/resend-code`,
            wellKnown: `${this.getDeploymentConfig()?.serverHost}/oauth2/oidcdiscovery/.well-known/openid-configuration`
        };
    }

    /**
     * Get UI config.
     *
     * @returns UIConfigInterface - UI config object.
     */
    public static getUIConfig(): UIConfigInterface {
        return {
            announcements: window["AppUtils"]?.getConfig()?.ui?.announcements,
            appName: window["AppUtils"]?.getConfig()?.ui?.appName,
            appTitle: window["AppUtils"]?.getConfig()?.ui?.appTitle,
            authenticatorApp: window["AppUtils"]?.getConfig()?.ui?.authenticatorApp,
            cookiePolicyUrl: window[ "AppUtils" ]?.getConfig()?.ui?.cookiePolicyUrl,
            copyrightText: window["AppUtils"]?.getConfig()?.ui?.appCopyright
                .replace("${copyright}", "\u00A9")
                .replace("${year}", new Date().getFullYear()),
            disableMFAForFederatedUsers: window["AppUtils"]?.getConfig()?.ui?.disableMFAForFederatedUsers,
            disableMFAforSuperTenantUser: window["AppUtils"]?.getConfig()?.ui?.disableMFAforSuperTenantUser,
            enableMFAUserWise: window["AppUtils"]?.getConfig()?.ui?.enableMFAUserWise,
            features: window["AppUtils"]?.getConfig()?.ui?.features,
            forceBackupCode: window["AppUtils"]?.getConfig()?.ui?.forceBackupCode,
            i18nConfigs: window["AppUtils"]?.getConfig()?.ui?.i18nConfigs,
            isCookieConsentBannerEnabled: window["AppUtils"]?.getConfig()?.ui?.isCookieConsentBannerEnabled,
            isHeaderAvatarLabelAllowed: window["AppUtils"]?.getConfig()?.ui?.isHeaderAvatarLabelAllowed,
            isMultipleEmailsAndMobileNumbersEnabled:
                window["AppUtils"]?.getConfig()?.ui?.isMultipleEmailsAndMobileNumbersEnabled,
            isPasswordInputValidationEnabled: window["AppUtils"]?.getConfig()?.ui?.isPasswordInputValidationEnabled,
            isProfileUsernameReadonly: window["AppUtils"]?.getConfig()?.ui?.isProfileUsernameReadonly,
            primaryUserStoreDomainName: window[ "AppUtils" ]?.getConfig()?.ui?.primaryUserStoreDomainName?.toUpperCase()
                ?? AppConstants.PRIMARY_USER_STORE_IDENTIFIER,
            privacyPolicyConfigs: window["AppUtils"]?.getConfig()?.ui?.privacyPolicyConfigs,
            productName: window["AppUtils"]?.getConfig()?.ui?.productName,
            productVersionConfig: window["AppUtils"]?.getConfig()?.ui?.productVersionConfig,
            showAppSwitchButton: window["AppUtils"]?.getConfig()?.ui?.showAppSwitchButton,
            theme: window["AppUtils"]?.getConfig()?.ui?.theme,
            userSchemaURI: window[ "AppUtils" ]?.getConfig()?.ui?.customUserSchemaURI
                ?? UserManagementConstants.DEFAULT_SCIM2_CUSTOM_USER_SCHEMA_URI
        };
    }

    /**
     * I18n init options.
     *
     * @remarks
     * Since the portals are not deployed per tenant, looking for static resources in tenant qualified URLs will fail.
     * Using `appBaseNameWithoutTenant` will create a path without the tenant. Therefore, `loadPath()` function will
     * look for resource files in `https://localhost:9443/<PORTAL>/resources/i18n` rather than looking for the
     * files in `https://localhost:9443/t/wso2.com/<PORTAL>/resources/i18n`.
     *
     * @param metaFile - Meta file.
     * @returns I18nModuleInitOptions - I18n init options.
     */
    public static generateModuleInitOptions(metaFile: SupportedLanguagesMeta): I18nModuleInitOptions {
        return {
            backend: {
                loadPath: (language: any, namespace: any) =>
                    generateBackendPaths(
                        language,
                        namespace,
                        window["AppUtils"]?.getConfig()?.appBase,
                        store?.getState()?.config?.i18n ?? {
                            langAutoDetectEnabled: I18nConstants.LANG_AUTO_DETECT_ENABLED,
                            namespaceDirectories: I18nConstants.BUNDLE_NAMESPACE_DIRECTORIES,
                            overrideOptions: I18nConstants.INIT_OPTIONS_OVERRIDE,
                            resourcePath: "/resources/i18n",
                            xhrBackendPluginEnabled: I18nConstants.XHR_BACKEND_PLUGIN_ENABLED
                        },
                        metaFile
                    )
            },
            load: "currentOnly", // lookup only current lang key(en-US). Prevents 404 from `en`.
            ns: [ I18nConstants.COMMON_NAMESPACE, I18nConstants.PORTAL_NAMESPACE ],
            preload: [ "si-LK", "fr-FR" ]
        };
    }

    /**
     * Get i18n module config.
     *
     * @param metaFile - Meta file.
     *
     * @returns I18nModuleOptionsInterface - i18n config object.
     */
    public static getI18nConfig(metaFile?: SupportedLanguagesMeta): I18nModuleOptionsInterface {
        return {
            initOptions: this.generateModuleInitOptions(metaFile),
            langAutoDetectEnabled: window["AppUtils"]?.getConfig()?.ui?.i18nConfigs?.langAutoDetectEnabled
                ?? I18nConstants.LANG_AUTO_DETECT_ENABLED,
            namespaceDirectories: I18nConstants.BUNDLE_NAMESPACE_DIRECTORIES,
            overrideOptions: I18nConstants.INIT_OPTIONS_OVERRIDE,
            resourceExtensionsPath: "/extensions/i18n",
            resourcePath: "/resources/i18n",
            xhrBackendPluginEnabled: I18nConstants.XHR_BACKEND_PLUGIN_ENABLED
        };
    }
}
