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
var query_string_utils_1 = require("./query_string_utils");
var MOCK_LOCATION_UNDEFINED = 'undefined';
/**
 * Useful in the context of writing tests.
 */
var MockLocationLike = /** @class */ (function () {
    function MockLocationLike() {
        this.hash = MOCK_LOCATION_UNDEFINED;
        this.host = MOCK_LOCATION_UNDEFINED;
        this.origin = MOCK_LOCATION_UNDEFINED;
        this.hostname = MOCK_LOCATION_UNDEFINED;
        this.pathname = MOCK_LOCATION_UNDEFINED;
        this.port = MOCK_LOCATION_UNDEFINED;
        this.protocol = MOCK_LOCATION_UNDEFINED;
        this.search = MOCK_LOCATION_UNDEFINED;
        this.assign = function () { };
    }
    MockLocationLike.prototype.setHash = function (hash) {
        this.hash = hash;
        return this;
    };
    MockLocationLike.prototype.setHost = function (host) {
        this.host = host;
        return this;
    };
    MockLocationLike.prototype.setOrigin = function (origin) {
        this.origin = origin;
        return this;
    };
    MockLocationLike.prototype.setHostname = function (hostname) {
        this.hostname = hostname;
        return this;
    };
    MockLocationLike.prototype.setPathname = function (pathname) {
        this.pathname = pathname;
        return this;
    };
    MockLocationLike.prototype.setPort = function (port) {
        this.port = port;
        return this;
    };
    MockLocationLike.prototype.setProtocol = function (protocol) {
        this.protocol = protocol;
        return this;
    };
    MockLocationLike.prototype.setSearch = function (search) {
        this.search = search;
        return this;
    };
    MockLocationLike.prototype.setAssign = function (assign) {
        this.assign = assign;
        return this;
    };
    return MockLocationLike;
}());
describe('Query String Parser Tests', function () {
    var locationLike = new MockLocationLike();
    var parser = new query_string_utils_1.BasicQueryStringUtils();
    it('Empty query string should not blow up.', function () {
        locationLike.setSearch('?');
        var result = parser.parse(locationLike);
        var keys = Object.keys(result);
        expect(result).toBeTruthy();
        expect(keys.length).toBe(0, 'No query parameters provided');
    });
    it('Should parse simple query strings.', function () {
        locationLike.setSearch(encodeURI('key1=value1&key2=value 2& key3= value 3'));
        var result = parser.parse(locationLike);
        var keys = Object.keys(result);
        expect(result).toBeTruthy();
        expect(keys.length).toBe(3, '3 Query parameters should be present');
        expect(keys[0]).toBe('key1');
        expect(keys[1]).toBe('key2');
        expect(keys[2]).toBe(' key3');
        expect(result[keys[0]]).toBe('value1', 'Expected value is "value1"');
        expect(result[keys[1]]).toBe('value 2', 'Expected value is "value 2"');
        expect(result[keys[2]]).toBe(' value 3', 'Expected value is " value 3"');
    });
    it('Should handle params with no values', function () {
        locationLike.setSearch(encodeURI('key1=value1&key2='));
        var result = parser.parse(locationLike);
        var keys = Object.keys(result);
        expect(result).toBeTruthy();
        expect(keys.length).toBe(1, '1 Query parameter should be present');
        expect(keys[0]).toBe('key1');
        expect(result[keys[0]]).toBe('value1', 'Expected value is "value1"');
    });
    it('Should handle duplicate parameter values', function () {
        locationLike.setSearch(encodeURI('key1=value1&key1=value2'));
        var result = parser.parse(locationLike);
        var keys = Object.keys(result);
        expect(result).toBeTruthy();
        expect(keys.length).toBe(1, '1 Query parameter should be present');
        expect(keys[0]).toBe('key1');
        expect(result[keys[0]]).toBe('value2', 'Expected value is "value2"');
    });
    it('Should be able to deal with escaped # or ? characters', function () {
        locationLike.setSearch(encodeURI('key1=value1?&key2=value2 #'));
        var result = parser.parse(locationLike);
        var keys = Object.keys(result);
        expect(result).toBeTruthy();
        expect(keys.length).toBe(2, '2 Query parameters should be present');
        expect(keys[0]).toBe('key1');
        expect(keys[1]).toBe('key2');
        expect(result[keys[0]]).toBe('value1?', 'Expected value is "value1?"');
        expect(result[keys[1]]).toBe('value2 #', 'Expected value is "value2 #"');
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnlfc3RyaW5nX3V0aWxzX3Rlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvcXVlcnlfc3RyaW5nX3V0aWxzX3Rlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7R0FZRzs7QUFFSCwyREFBMkQ7QUFHM0QsSUFBTSx1QkFBdUIsR0FBRyxXQUFXLENBQUM7QUFFNUM7O0dBRUc7QUFDSDtJQVdFO1FBQ0UsSUFBSSxDQUFDLElBQUksR0FBRyx1QkFBdUIsQ0FBQztRQUNwQyxJQUFJLENBQUMsSUFBSSxHQUFHLHVCQUF1QixDQUFDO1FBQ3BDLElBQUksQ0FBQyxNQUFNLEdBQUcsdUJBQXVCLENBQUM7UUFDdEMsSUFBSSxDQUFDLFFBQVEsR0FBRyx1QkFBdUIsQ0FBQztRQUN4QyxJQUFJLENBQUMsUUFBUSxHQUFHLHVCQUF1QixDQUFDO1FBQ3hDLElBQUksQ0FBQyxJQUFJLEdBQUcsdUJBQXVCLENBQUM7UUFDcEMsSUFBSSxDQUFDLFFBQVEsR0FBRyx1QkFBdUIsQ0FBQztRQUN4QyxJQUFJLENBQUMsTUFBTSxHQUFHLHVCQUF1QixDQUFDO1FBQ3RDLElBQUksQ0FBQyxNQUFNLEdBQUcsY0FBTyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVELGtDQUFPLEdBQVAsVUFBUSxJQUFZO1FBQ2xCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsa0NBQU8sR0FBUCxVQUFRLElBQVk7UUFDbEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCxvQ0FBUyxHQUFULFVBQVUsTUFBYztRQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELHNDQUFXLEdBQVgsVUFBWSxRQUFn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Q0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBJbmMuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHRcbiAqIGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGVcbiAqIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyXG4gKiBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7QmFzaWNRdWVyeVN0cmluZ1V0aWxzfSBmcm9tICcuL3F1ZXJ5X3N0cmluZ191dGlscyc7XG5pbXBvcnQge0xvY2F0aW9uTGlrZSwgU3RyaW5nTWFwfSBmcm9tICcuL3R5cGVzJztcblxuY29uc3QgTU9DS19MT0NBVElPTl9VTkRFRklORUQgPSAndW5kZWZpbmVkJztcblxuLyoqXG4gKiBVc2VmdWwgaW4gdGhlIGNvbnRleHQgb2Ygd3JpdGluZyB0ZXN0cy5cbiAqL1xuY2xhc3MgTW9ja0xvY2F0aW9uTGlrZSBpbXBsZW1lbnRzIExvY2F0aW9uTGlrZSB7XG4gIHB1YmxpYyBoYXNoOiBzdHJpbmc7XG4gIHB1YmxpYyBob3N0OiBzdHJpbmc7XG4gIHB1YmxpYyBvcmlnaW46IHN0cmluZztcbiAgcHVibGljIGhvc3RuYW1lOiBzdHJpbmc7XG4gIHB1YmxpYyBwYXRobmFtZTogc3RyaW5nO1xuICBwdWJsaWMgcG9ydDogc3RyaW5nO1xuICBwdWJsaWMgcHJvdG9jb2w6IHN0cmluZztcbiAgcHVibGljIHNlYXJjaDogc3RyaW5nO1xuICBwdWJsaWMgYXNzaWduOiAodXJsOiBzdHJpbmcpID0+IHZvaWQ7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5oYXNoID0gTU9DS19MT0NBVElPTl9VTkRFRklORUQ7XG4gICAgdGhpcy5ob3N0ID0gTU9DS19MT0NBVElPTl9VTkRFRklORUQ7XG4gICAgdGhpcy5vcmlnaW4gPSBNT0NLX0xPQ0FUSU9OX1VOREVGSU5FRDtcbiAgICB0aGlzLmhvc3RuYW1lID0gTU9DS19MT0NBVElPTl9VTkRFRklORUQ7XG4gICAgdGhpcy5wYXRobmFtZSA9IE1PQ0tfTE9DQVRJT05fVU5ERUZJTkVEO1xuICAgIHRoaXMucG9ydCA9IE1PQ0tfTE9DQVRJT05fVU5ERUZJTkVEO1xuICAgIHRoaXMucHJvdG9jb2wgPSBNT0NLX0xPQ0FUSU9OX1VOREVGSU5FRDtcbiAgICB0aGlzLnNlYXJjaCA9IE1PQ0tfTE9DQVRJT05fVU5ERUZJTkVEO1xuICAgIHRoaXMuYXNzaWduID0gKCkgPT4ge307XG4gIH1cblxuICBzZXRIYXNoKGhhc2g6IHN0cmluZyk6IE1vY2tMb2NhdGlvbkxpa2Uge1xuICAgIHRoaXMuaGFzaCA9IGhhc2g7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzZXRIb3N0KGhvc3Q6IHN0cmluZyk6IE1vY2tMb2NhdGlvbkxpa2Uge1xuICAgIHRoaXMuaG9zdCA9IGhvc3Q7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzZXRPcmlnaW4ob3JpZ2luOiBzdHJpbmcpOiBNb2NrTG9jYXRpb25MaWtlIHtcbiAgICB0aGlzLm9yaWdpbiA9IG9yaWdpbjtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNldEhvc3RuYW1lKGhvc3RuYW1lOiBzdHJpbmcpOiBNb2NrTG9jYXRpb25MaWtlIHtcbiAgICB0aGlzLmhvc3RuYW1lID0gaG9zdG5hbWU7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzZXRQYXRobmFtZShwYXRobmFtZTogc3RyaW5nKTogTW9ja0xvY2F0aW9uTGlrZSB7XG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2V0UG9ydChwb3J0OiBzdHJpbmcpOiBNb2NrTG9jYXRpb25MaWtlIHtcbiAgICB0aGlzLnBvcnQgPSBwb3J0O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2V0UHJvdG9jb2wocHJvdG9jb2w6IHN0cmluZyk6IE1vY2tMb2NhdGlvbkxpa2Uge1xuICAgIHRoaXMucHJvdG9jb2wgPSBwcm90b2NvbDtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNldFNlYXJjaChzZWFyY2g6IHN0cmluZyk6IE1vY2tMb2NhdGlvbkxpa2Uge1xuICAgIHRoaXMuc2VhcmNoID0gc2VhcmNoO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2V0QXNzaWduKGFzc2lnbjogKCkgPT4gdm9pZCkge1xuICAgIHRoaXMuYXNzaWduID0gYXNzaWduO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5cbmRlc2NyaWJlKCdRdWVyeSBTdHJpbmcgUGFyc2VyIFRlc3RzJywgKCkgPT4ge1xuXG4gIGNvbnN0IGxvY2F0aW9uTGlrZSA9IG5ldyBNb2NrTG9jYXRpb25MaWtlKCk7XG4gIGNvbnN0IHBhcnNlciA9IG5ldyBCYXNpY1F1ZXJ5U3RyaW5nVXRpbHMoKTtcblxuICBpdCgnRW1wdHkgcXVlcnkgc3RyaW5nIHNob3VsZCBub3QgYmxvdyB1cC4nLCAoKSA9PiB7XG4gICAgbG9jYXRpb25MaWtlLnNldFNlYXJjaCgnPycpO1xuICAgIGxldCByZXN1bHQgPSBwYXJzZXIucGFyc2UobG9jYXRpb25MaWtlKTtcbiAgICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKHJlc3VsdCk7XG4gICAgZXhwZWN0KHJlc3VsdCkudG9CZVRydXRoeSgpO1xuICAgIGV4cGVjdChrZXlzLmxlbmd0aCkudG9CZSgwLCAnTm8gcXVlcnkgcGFyYW1ldGVycyBwcm92aWRlZCcpO1xuICB9KTtcblxuICBpdCgnU2hvdWxkIHBhcnNlIHNpbXBsZSBxdWVyeSBzdHJpbmdzLicsICgpID0+IHtcbiAgICBsb2NhdGlvbkxpa2Uuc2V0U2VhcmNoKGVuY29kZVVSSSgna2V5MT12YWx1ZTEma2V5Mj12YWx1ZSAyJiBrZXkzPSB2YWx1ZSAzJykpO1xuICAgIGxldCByZXN1bHQgPSBwYXJzZXIucGFyc2UobG9jYXRpb25MaWtlKTtcbiAgICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKHJlc3VsdCk7XG4gICAgZXhwZWN0KHJlc3VsdCkudG9CZVRydXRoeSgpO1xuICAgIGV4cGVjdChrZXlzLmxlbmd0aCkudG9CZSgzLCAnMyBRdWVyeSBwYXJhbWV0ZXJzIHNob3VsZCBiZSBwcmVzZW50Jyk7XG4gICAgZXhwZWN0KGtleXNbMF0pLnRvQmUoJ2tleTEnKTtcbiAgICBleHBlY3Qoa2V5c1sxXSkudG9CZSgna2V5MicpO1xuICAgIGV4cGVjdChrZXlzWzJdKS50b0JlKCcga2V5MycpO1xuICAgIGV4cGVjdChyZXN1bHRba2V5c1swXV0pLnRvQmUoJ3ZhbHVlMScsICdFeHBlY3RlZCB2YWx1ZSBpcyBcInZhbHVlMVwiJyk7XG4gICAgZXhwZWN0KHJlc3VsdFtrZXlzWzFdXSkudG9CZSgndmFsdWUgMicsICdFeHBlY3RlZCB2YWx1ZSBpcyBcInZhbHVlIDJcIicpO1xuICAgIGV4cGVjdChyZXN1bHRba2V5c1syXV0pLnRvQmUoJyB2YWx1ZSAzJywgJ0V4cGVjdGVkIHZhbHVlIGlzIFwiIHZhbHVlIDNcIicpO1xuICB9KTtcblxuICBpdCgnU2hvdWxkIGhhbmRsZSBwYXJhbXMgd2l0aCBubyB2YWx1ZXMnLCAoKSA9PiB7XG4gICAgbG9jYXRpb25MaWtlLnNldFNlYXJjaChlbmNvZGVVUkkoJ2tleTE9dmFsdWUxJmtleTI9JykpO1xuICAgIGxldCByZXN1bHQgPSBwYXJzZXIucGFyc2UobG9jYXRpb25MaWtlKTtcbiAgICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKHJlc3VsdCk7XG4gICAgZXhwZWN0KHJlc3VsdCkudG9CZVRydXRoeSgpO1xuICAgIGV4cGVjdChrZXlzLmxlbmd0aCkudG9CZSgxLCAnMSBRdWVyeSBwYXJhbWV0ZXIgc2hvdWxkIGJlIHByZXNlbnQnKTtcbiAgICBleHBlY3Qoa2V5c1swXSkudG9CZSgna2V5MScpO1xuICAgIGV4cGVjdChyZXN1bHRba2V5c1swXV0pLnRvQmUoJ3ZhbHVlMScsICdFeHBlY3RlZCB2YWx1ZSBpcyBcInZhbHVlMVwiJyk7XG4gIH0pO1xuXG4gIGl0KCdTaG91bGQgaGFuZGxlIGR1cGxpY2F0ZSBwYXJhbWV0ZXIgdmFsdWVzJywgKCkgPT4ge1xuICAgIGxvY2F0aW9uTGlrZS5zZXRTZWFyY2goZW5jb2RlVVJJKCdrZXkxPXZhbHVlMSZrZXkxPXZhbHVlMicpKTtcbiAgICBsZXQgcmVzdWx0ID0gcGFyc2VyLnBhcnNlKGxvY2F0aW9uTGlrZSk7XG4gICAgbGV0IGtleXMgPSBPYmplY3Qua2V5cyhyZXN1bHQpO1xuICAgIGV4cGVjdChyZXN1bHQpLnRvQmVUcnV0aHkoKTtcbiAgICBleHBlY3Qoa2V5cy5sZW5ndGgpLnRvQmUoMSwgJzEgUXVlcnkgcGFyYW1ldGVyIHNob3VsZCBiZSBwcmVzZW50Jyk7XG4gICAgZXhwZWN0KGtleXNbMF0pLnRvQmUoJ2tleTEnKTtcbiAgICBleHBlY3QocmVzdWx0W2tleXNbMF1dKS50b0JlKCd2YWx1ZTInLCAnRXhwZWN0ZWQgdmFsdWUgaXMgXCJ2YWx1ZTJcIicpO1xuICB9KTtcblxuICBpdCgnU2hvdWxkIGJlIGFibGUgdG8gZGVhbCB3aXRoIGVzY2FwZWQgIyBvciA/IGNoYXJhY3RlcnMnLCAoKSA9PiB7XG4gICAgbG9jYXRpb25MaWtlLnNldFNlYXJjaChlbmNvZGVVUkkoJ2tleTE9dmFsdWUxPyZrZXkyPXZhbHVlMiAjJykpO1xuICAgIGxldCByZXN1bHQgPSBwYXJzZXIucGFyc2UobG9jYXRpb25MaWtlKTtcbiAgICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKHJlc3VsdCk7XG4gICAgZXhwZWN0KHJlc3VsdCkudG9CZVRydXRoeSgpO1xuICAgIGV4cGVjdChrZXlzLmxlbmd0aCkudG9CZSgyLCAnMiBRdWVyeSBwYXJhbWV0ZXJzIHNob3VsZCBiZSBwcmVzZW50Jyk7XG4gICAgZXhwZWN0KGtleXNbMF0pLnRvQmUoJ2tleTEnKTtcbiAgICBleHBlY3Qoa2V5c1sxXSkudG9CZSgna2V5MicpO1xuICAgIGV4cGVjdChyZXN1bHRba2V5c1swXV0pLnRvQmUoJ3ZhbHVlMT8nLCAnRXhwZWN0ZWQgdmFsdWUgaXMgXCJ2YWx1ZTE/XCInKTtcbiAgICBleHBlY3QocmVzdWx0W2tleXNbMV1dKS50b0JlKCd2YWx1ZTIgIycsICdFeHBlY3RlZCB2YWx1ZSBpcyBcInZhbHVlMiAjXCInKTtcbiAgfSk7XG5cbn0pO1xuIl19