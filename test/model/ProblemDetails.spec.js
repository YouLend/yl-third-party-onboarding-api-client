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
    factory(root.expect, root.YouLendThirdPartyOnboardingApi);
  }
}(this, function(expect, YouLendThirdPartyOnboardingApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new YouLendThirdPartyOnboardingApi.ProblemDetails();
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

  describe('ProblemDetails', function() {
    it('should create an instance of ProblemDetails', function() {
      // uncomment below and update the code to test ProblemDetails
      //var instane = new YouLendThirdPartyOnboardingApi.ProblemDetails();
      //expect(instance).to.be.a(YouLendThirdPartyOnboardingApi.ProblemDetails);
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new YouLendThirdPartyOnboardingApi.ProblemDetails();
      //expect(instance).to.be();
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instane = new YouLendThirdPartyOnboardingApi.ProblemDetails();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new YouLendThirdPartyOnboardingApi.ProblemDetails();
      //expect(instance).to.be();
    });

    it('should have the property detail (base name: "detail")', function() {
      // uncomment below and update the code to test the property detail
      //var instane = new YouLendThirdPartyOnboardingApi.ProblemDetails();
      //expect(instance).to.be();
    });

    it('should have the property instance (base name: "instance")', function() {
      // uncomment below and update the code to test the property instance
      //var instane = new YouLendThirdPartyOnboardingApi.ProblemDetails();
      //expect(instance).to.be();
    });

  });

}));
