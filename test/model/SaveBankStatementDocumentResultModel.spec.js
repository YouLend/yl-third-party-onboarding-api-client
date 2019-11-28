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
    instance = new YouLendThirdPartyOnboardingApi.SaveBankStatementDocumentResultModel();
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

  describe('SaveBankStatementDocumentResultModel', function() {
    it('should create an instance of SaveBankStatementDocumentResultModel', function() {
      // uncomment below and update the code to test SaveBankStatementDocumentResultModel
      //var instane = new YouLendThirdPartyOnboardingApi.SaveBankStatementDocumentResultModel();
      //expect(instance).to.be.a(YouLendThirdPartyOnboardingApi.SaveBankStatementDocumentResultModel);
    });

    it('should have the property leadId (base name: "leadId")', function() {
      // uncomment below and update the code to test the property leadId
      //var instane = new YouLendThirdPartyOnboardingApi.SaveBankStatementDocumentResultModel();
      //expect(instance).to.be();
    });

    it('should have the property documentId (base name: "documentId")', function() {
      // uncomment below and update the code to test the property documentId
      //var instane = new YouLendThirdPartyOnboardingApi.SaveBankStatementDocumentResultModel();
      //expect(instance).to.be();
    });

  });

}));
