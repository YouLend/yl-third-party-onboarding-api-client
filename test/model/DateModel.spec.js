/**
 * YouLend Third Party Onboarding API
 * Through this API you can can initiate the process of onboarding a borrower with YouLend
 *
 * The version of the OpenAPI document: 1.0
 * Contact: mark.ufland@youlend.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.YlThirdPartyOnboardingApiClient);
  }
}(this, function(expect, YlThirdPartyOnboardingApiClient) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new YlThirdPartyOnboardingApiClient.DateModel();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('DateModel', function() {
    it('should create an instance of DateModel', function() {
      // uncomment below and update the code to test DateModel
      //var instane = new YlThirdPartyOnboardingApiClient.DateModel();
      //expect(instance).to.be.a(YlThirdPartyOnboardingApiClient.DateModel);
    });

    it('should have the property year (base name: "year")', function() {
      // uncomment below and update the code to test the property year
      //var instane = new YlThirdPartyOnboardingApiClient.DateModel();
      //expect(instance).to.be();
    });

    it('should have the property month (base name: "month")', function() {
      // uncomment below and update the code to test the property month
      //var instane = new YlThirdPartyOnboardingApiClient.DateModel();
      //expect(instance).to.be();
    });

    it('should have the property day (base name: "day")', function() {
      // uncomment below and update the code to test the property day
      //var instane = new YlThirdPartyOnboardingApiClient.DateModel();
      //expect(instance).to.be();
    });

  });

}));
