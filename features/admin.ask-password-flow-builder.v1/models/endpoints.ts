/**
 * Copyright (c) 2023, WSO2 LLC. (https://www.wso2.com).
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

/**
 * Interface for the Password Recovery Flow Builder feature resource endpoints.
 */
export interface AskPasswordFlowBuilderResourceEndpointsInterface {
    /**
     * API to configure the GET/UPDATE password recovery flow.
     * @example `https://{serverUrl}/t/{tenantDomain}/api/server/v1/ask-password-flow`
    */
    askPasswordFlow: string;
    askPasswordFlowAI: string;
}
