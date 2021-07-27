"use strict";
/*
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the
 * License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorizationServiceConfiguration = void 0;
var xhr_1 = require("./xhr");
/**
 * The standard base path for well-known resources on domains.
 * See https://tools.ietf.org/html/rfc5785 for more information.
 */
var WELL_KNOWN_PATH = '.well-known';
/**
 * The standard resource under the well known path at which an OpenID Connect
 * discovery document can be found under an issuer's base URI.
 */
var OPENID_CONFIGURATION = 'openid-configuration';
/**
 * Configuration details required to interact with an authorization service.
 *
 * More information at https://openid.net/specs/openid-connect-discovery-1_0-17.html
 */
var AuthorizationServiceConfiguration = /** @class */ (function () {
    function AuthorizationServiceConfiguration(request) {
        this.authorizationEndpoint = request.authorization_endpoint;
        this.tokenEndpoint = request.token_endpoint;
        this.revocationEndpoint = request.revocation_endpoint;
        this.userInfoEndpoint = request.userinfo_endpoint;
        this.endSessionEndpoint = request.end_session_endpoint;
    }
    AuthorizationServiceConfiguration.prototype.toJson = function () {
        return {
            authorization_endpoint: this.authorizationEndpoint,
            token_endpoint: this.tokenEndpoint,
            revocation_endpoint: this.revocationEndpoint,
            end_session_endpoint: this.endSessionEndpoint,
            userinfo_endpoint: this.userInfoEndpoint
        };
    };
    AuthorizationServiceConfiguration.fetchFromIssuer = function (openIdIssuerUrl, requestor) {
        var searchForQueryParams = function (url) {
            var result;
            var queryOr = url.split('/');
            var query = queryOr[queryOr.length - 1].split('?');
            if (query.length > 1) {
                queryOr.splice(queryOr.length - 1, 1);
                queryOr = queryOr.join('/');
                result = [queryOr, "?" + query[query.lenght - 1]];
            }
            else {
                result = [url, ''];
            }
            return result;
        };
        var newUrl = searchForQueryParams(openIdIssuerUrl);
        var fullUrl = newUrl[0] + "/" + WELL_KNOWN_PATH + "/" + OPENID_CONFIGURATION + newUrl[1];
        var requestorToUse = requestor || new xhr_1.JQueryRequestor();
        return requestorToUse
            .xhr({ url: fullUrl, dataType: 'json', method: 'GET' })
            .then(function (json) { return new AuthorizationServiceConfiguration(json); });
    };
    return AuthorizationServiceConfiguration;
}());
exports.AuthorizationServiceConfiguration = AuthorizationServiceConfiguration;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aG9yaXphdGlvbl9zZXJ2aWNlX2NvbmZpZ3VyYXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvYXV0aG9yaXphdGlvbl9zZXJ2aWNlX2NvbmZpZ3VyYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7R0FZRzs7O0FBRUgsNkJBQWlEO0FBY2pEOzs7R0FHRztBQUNILElBQU0sZUFBZSxHQUFHLGFBQWEsQ0FBQztBQUV0Qzs7O0dBR0c7QUFDSCxJQUFNLG9CQUFvQixHQUFHLHNCQUFzQixDQUFDO0FBRXBEOzs7O0dBSUc7QUFDSDtJQU9FLDJDQUFZLE9BQThDO1FBQ3hELElBQUksQ0FBQyxxQkFBcUIsR0FBRyxPQUFPLENBQUMsc0JBQXNCLENBQUM7UUFDNUQsSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsY0FBYyxDQUFDO1FBQzVDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxPQUFPLENBQUMsbUJBQW1CLENBQUM7UUFDdEQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQztRQUNsRCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsT0FBTyxDQUFDLG9CQUFvQixDQUFDO0lBQ3pELENBQUM7SUFFRCxrREFBTSxHQUFOO1FBQ0UsT0FBTztZQUNMLHNCQUFzQixFQUFFLElBQUksQ0FBQyxxQkFBcUI7WUFDbEQsY0FBYyxFQUFFLElBQUksQ0FBQyxhQUFhO1lBQ2xDLG1CQUFtQixFQUFFLElBQUksQ0FBQyxrQkFBa0I7WUFDNUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLGtCQUFrQjtZQUM3QyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsZ0JBQWdCO1NBQ3pDLENBQUM7SUFDSixDQUFDO0lBRU0saURBQWUsR0FBdEIsVUFBdUIsZUFBdUIsRUFBRSxTQUFxQjtRQUVuRSxJQUFNLG9CQUFvQixHQUFHLFVBQVMsR0FBVztZQUMvQyxJQUFJLE1BQU0sQ0FBQztZQUNYLElBQUksT0FBTyxHQUFRLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbEMsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ25ELElBQUksS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQ3BCLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RDLE9BQU8sR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUM1QixNQUFNLEdBQUcsQ0FBQyxPQUFPLEVBQUUsTUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUcsQ0FBQyxDQUFDO2FBQ25EO2lCQUFNO2dCQUNMLE1BQU0sR0FBRyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQzthQUNwQjtZQUVELE9BQU8sTUFBTSxDQUFDO1FBQ2hCLENBQUMsQ0FBQztRQUNGLElBQU0sTUFBTSxHQUFHLG9CQUFvQixDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ3JELElBQU0sT0FBTyxHQUFNLE1BQU0sQ0FBQyxDQUFDLENBQUMsU0FBSSxlQUFlLFNBQUksb0JBQW9CLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBRyxDQUFDO1FBRXRGLElBQU0sY0FBYyxHQUFHLFNBQVMsSUFBSSxJQUFJLHFCQUFlLEVBQUUsQ0FBQztRQUUxRCxPQUFPLGNBQWM7YUFDaEIsR0FBRyxDQUF3QyxFQUFDLEdBQUcsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFDLENBQUM7YUFDM0YsSUFBSSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxpQ0FBaUMsQ0FBQyxJQUFJLENBQUMsRUFBM0MsQ0FBMkMsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFDSCx3Q0FBQztBQUFELENBQUMsQUFsREQsSUFrREM7QUFsRFksOEVBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBJbmMuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHRcbiAqIGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGVcbiAqIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyXG4gKiBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7SlF1ZXJ5UmVxdWVzdG9yLCBSZXF1ZXN0b3J9IGZyb20gJy4veGhyJztcblxuXG4vKipcbiAqIFJlcHJlc2VudHMgQXV0aG9yaXphdGlvblNlcnZpY2VDb25maWd1cmF0aW9uIGFzIGEgSlNPTiBvYmplY3QuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQXV0aG9yaXphdGlvblNlcnZpY2VDb25maWd1cmF0aW9uSnNvbiB7XG4gIGF1dGhvcml6YXRpb25fZW5kcG9pbnQ6IHN0cmluZztcbiAgdG9rZW5fZW5kcG9pbnQ6IHN0cmluZztcbiAgcmV2b2NhdGlvbl9lbmRwb2ludDogc3RyaW5nO1xuICBlbmRfc2Vzc2lvbl9lbmRwb2ludD86IHN0cmluZztcbiAgdXNlcmluZm9fZW5kcG9pbnQ/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogVGhlIHN0YW5kYXJkIGJhc2UgcGF0aCBmb3Igd2VsbC1rbm93biByZXNvdXJjZXMgb24gZG9tYWlucy5cbiAqIFNlZSBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNTc4NSBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAqL1xuY29uc3QgV0VMTF9LTk9XTl9QQVRIID0gJy53ZWxsLWtub3duJztcblxuLyoqXG4gKiBUaGUgc3RhbmRhcmQgcmVzb3VyY2UgdW5kZXIgdGhlIHdlbGwga25vd24gcGF0aCBhdCB3aGljaCBhbiBPcGVuSUQgQ29ubmVjdFxuICogZGlzY292ZXJ5IGRvY3VtZW50IGNhbiBiZSBmb3VuZCB1bmRlciBhbiBpc3N1ZXIncyBiYXNlIFVSSS5cbiAqL1xuY29uc3QgT1BFTklEX0NPTkZJR1VSQVRJT04gPSAnb3BlbmlkLWNvbmZpZ3VyYXRpb24nO1xuXG4vKipcbiAqIENvbmZpZ3VyYXRpb24gZGV0YWlscyByZXF1aXJlZCB0byBpbnRlcmFjdCB3aXRoIGFuIGF1dGhvcml6YXRpb24gc2VydmljZS5cbiAqXG4gKiBNb3JlIGluZm9ybWF0aW9uIGF0IGh0dHBzOi8vb3BlbmlkLm5ldC9zcGVjcy9vcGVuaWQtY29ubmVjdC1kaXNjb3ZlcnktMV8wLTE3Lmh0bWxcbiAqL1xuZXhwb3J0IGNsYXNzIEF1dGhvcml6YXRpb25TZXJ2aWNlQ29uZmlndXJhdGlvbiB7XG4gIGF1dGhvcml6YXRpb25FbmRwb2ludDogc3RyaW5nO1xuICB0b2tlbkVuZHBvaW50OiBzdHJpbmc7XG4gIHJldm9jYXRpb25FbmRwb2ludDogc3RyaW5nO1xuICB1c2VySW5mb0VuZHBvaW50Pzogc3RyaW5nO1xuICBlbmRTZXNzaW9uRW5kcG9pbnQ/OiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocmVxdWVzdDogQXV0aG9yaXphdGlvblNlcnZpY2VDb25maWd1cmF0aW9uSnNvbikge1xuICAgIHRoaXMuYXV0aG9yaXphdGlvbkVuZHBvaW50ID0gcmVxdWVzdC5hdXRob3JpemF0aW9uX2VuZHBvaW50O1xuICAgIHRoaXMudG9rZW5FbmRwb2ludCA9IHJlcXVlc3QudG9rZW5fZW5kcG9pbnQ7XG4gICAgdGhpcy5yZXZvY2F0aW9uRW5kcG9pbnQgPSByZXF1ZXN0LnJldm9jYXRpb25fZW5kcG9pbnQ7XG4gICAgdGhpcy51c2VySW5mb0VuZHBvaW50ID0gcmVxdWVzdC51c2VyaW5mb19lbmRwb2ludDtcbiAgICB0aGlzLmVuZFNlc3Npb25FbmRwb2ludCA9IHJlcXVlc3QuZW5kX3Nlc3Npb25fZW5kcG9pbnQ7XG4gIH1cblxuICB0b0pzb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGF1dGhvcml6YXRpb25fZW5kcG9pbnQ6IHRoaXMuYXV0aG9yaXphdGlvbkVuZHBvaW50LFxuICAgICAgdG9rZW5fZW5kcG9pbnQ6IHRoaXMudG9rZW5FbmRwb2ludCxcbiAgICAgIHJldm9jYXRpb25fZW5kcG9pbnQ6IHRoaXMucmV2b2NhdGlvbkVuZHBvaW50LFxuICAgICAgZW5kX3Nlc3Npb25fZW5kcG9pbnQ6IHRoaXMuZW5kU2Vzc2lvbkVuZHBvaW50LFxuICAgICAgdXNlcmluZm9fZW5kcG9pbnQ6IHRoaXMudXNlckluZm9FbmRwb2ludFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZmV0Y2hGcm9tSXNzdWVyKG9wZW5JZElzc3VlclVybDogc3RyaW5nLCByZXF1ZXN0b3I/OiBSZXF1ZXN0b3IpOlxuICAgICAgUHJvbWlzZTxBdXRob3JpemF0aW9uU2VydmljZUNvbmZpZ3VyYXRpb24+IHtcbiAgICBjb25zdCBzZWFyY2hGb3JRdWVyeVBhcmFtcyA9IGZ1bmN0aW9uKHVybDogc3RyaW5nKSB7XG4gICAgICBsZXQgcmVzdWx0O1xuICAgICAgbGV0IHF1ZXJ5T3I6IGFueSA9IHVybC5zcGxpdCgnLycpO1xuICAgICAgbGV0IHF1ZXJ5ID0gcXVlcnlPcltxdWVyeU9yLmxlbmd0aCAtIDFdLnNwbGl0KCc/Jyk7XG4gICAgICBpZiAocXVlcnkubGVuZ3RoID4gMSkge1xuICAgICAgICBxdWVyeU9yLnNwbGljZShxdWVyeU9yLmxlbmd0aCAtIDEsIDEpO1xuICAgICAgICBxdWVyeU9yID0gcXVlcnlPci5qb2luKCcvJyk7XG4gICAgICAgIHJlc3VsdCA9IFtxdWVyeU9yLCBgPyR7cXVlcnlbcXVlcnkubGVuZ2h0IC0gMV19YF07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgPSBbdXJsLCAnJ107XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgICBjb25zdCBuZXdVcmwgPSBzZWFyY2hGb3JRdWVyeVBhcmFtcyhvcGVuSWRJc3N1ZXJVcmwpO1xuICAgIGNvbnN0IGZ1bGxVcmwgPSBgJHtuZXdVcmxbMF19LyR7V0VMTF9LTk9XTl9QQVRIfS8ke09QRU5JRF9DT05GSUdVUkFUSU9OfSR7bmV3VXJsWzFdfWA7XG5cbiAgICBjb25zdCByZXF1ZXN0b3JUb1VzZSA9IHJlcXVlc3RvciB8fCBuZXcgSlF1ZXJ5UmVxdWVzdG9yKCk7XG5cbiAgICByZXR1cm4gcmVxdWVzdG9yVG9Vc2VcbiAgICAgICAgLnhocjxBdXRob3JpemF0aW9uU2VydmljZUNvbmZpZ3VyYXRpb25Kc29uPih7dXJsOiBmdWxsVXJsLCBkYXRhVHlwZTogJ2pzb24nLCBtZXRob2Q6ICdHRVQnfSlcbiAgICAgICAgLnRoZW4oanNvbiA9PiBuZXcgQXV0aG9yaXphdGlvblNlcnZpY2VDb25maWd1cmF0aW9uKGpzb24pKTtcbiAgfVxufVxuIl19