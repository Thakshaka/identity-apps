/**
 * Copyright (c) 2024-2025, WSO2 LLC. (https://www.wso2.com).
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

import { OrganizationType } from "@wso2is/admin.organizations.v1/constants";
import {
    OrganizationActionTypes,
    SetOrganizationTypeInterface,
    SetUserOrganizationHandleInterface,
    SetUserOrganizationIdInterface
} from "./types/organization";

/**
 * This action sets the user organization id in the redux store.
 *
 * @param orgId - The user organization id
 *
 * @returns - A set user organization id action
 */
export const setUserOrganizationId = (orgId: string): SetUserOrganizationIdInterface => {
    return {
        payload: orgId,
        type: OrganizationActionTypes.SET_USER_ORGANIZATION_ID
    };
};

/**
 * Sets the organization type.
 *
 * @param orgType - The organization type.
 * @returns Redux action
 */
export const setOrganizationType = (orgType: OrganizationType): SetOrganizationTypeInterface => {
    return {
        payload: orgType,
        type: OrganizationActionTypes.SET_ORGANIZATION_TYPE
    };
};

/**
 * This action sets the user organization handle in the redux store.
 *
 * @param orgHandle - The user organization handle.
 *
 * @returns - A set user organization handle action.
 */
export const setUserOrganizationHandle = (orgHandle: string): SetUserOrganizationHandleInterface => {
    return {
        payload: orgHandle,
        type: OrganizationActionTypes.SET_USER_ORGANIZATION_HANDLE
    };
};
