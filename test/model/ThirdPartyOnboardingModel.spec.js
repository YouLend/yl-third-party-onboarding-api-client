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
    instance = new YlThirdPartyOnboardingApiClient.ThirdPartyOnboardingModel();
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

  describe('ThirdPartyOnboardingModel', function() {
    it('should create an instance of ThirdPartyOnboardingModel', function() {
      // uncomment below and update the code to test ThirdPartyOnboardingModel
      //var instane = new YlThirdPartyOnboardingApiClient.ThirdPartyOnboardingModel();
      //expect(instance).to.be.a(YlThirdPartyOnboardingApiClient.ThirdPartyOnboardingModel);
    });

    it('should have the property thirdPartyCustomerId (base name: "thirdPartyCustomerId")', function() {
      // uncomment below and update the code to test the property thirdPartyCustomerId
      //var instane = new YlThirdPartyOnboardingApiClient.ThirdPartyOnboardingModel();
      //expect(instance).to.be();
    });

    it('should have the property thirdPartyLeadId (base name: "thirdPartyLeadId")', function() {
      // uncomment below and update the code to test the property thirdPartyLeadId
      //var instane = new YlThirdPartyOnboardingApiClient.ThirdPartyOnboardingModel();
      //expect(instance).to.be();
    });

    it('should have the property countryISOCode (base name: "countryISOCode")', function() {
      // uncomment below and update the code to test the property countryISOCode
      //var instane = new YlThirdPartyOnboardingApiClient.ThirdPartyOnboardingModel();
      //expect(instance).to.be();
    });

    it('should have the property loanCurrencyISOCode (base name: "loanCurrencyISOCode")', function() {
      // uncomment below and update the code to test the property loanCurrencyISOCode
      //var instane = new YlThirdPartyOnboardingApiClient.ThirdPartyOnboardingModel();
      //expect(instance).to.be();
    });

    it('should have the property monthlyCardRevenue (base name: "monthlyCardRevenue")', function() {
      // uncomment below and update the code to test the property monthlyCardRevenue
      //var instane = new YlThirdPartyOnboardingApiClient.ThirdPartyOnboardingModel();
      //expect(instance).to.be();
    });

    it('should have the property numberOfPaymentsPerMonth (base name: "numberOfPaymentsPerMonth")', function() {
      // uncomment below and update the code to test the property numberOfPaymentsPerMonth
      //var instane = new YlThirdPartyOnboardingApiClient.ThirdPartyOnboardingModel();
      //expect(instance).to.be();
    });

    it('should have the property sweepPercentage (base name: "sweepPercentage")', function() {
      // uncomment below and update the code to test the property sweepPercentage
      //var instane = new YlThirdPartyOnboardingApiClient.ThirdPartyOnboardingModel();
      //expect(instance).to.be();
    });

    it('should have the property monthsTrading (base name: "monthsTrading")', function() {
      // uncomment below and update the code to test the property monthsTrading
      //var instane = new YlThirdPartyOnboardingApiClient.ThirdPartyOnboardingModel();
      //expect(instance).to.be();
    });

    it('should have the property loanAmount (base name: "loanAmount")', function() {
      // uncomment below and update the code to test the property loanAmount
      //var instane = new YlThirdPartyOnboardingApiClient.ThirdPartyOnboardingModel();
      //expect(instance).to.be();
    });

    it('should have the property keyContactName (base name: "keyContactName")', function() {
      // uncomment below and update the code to test the property keyContactName
      //var instane = new YlThirdPartyOnboardingApiClient.ThirdPartyOnboardingModel();
      //expect(instance).to.be();
    });

    it('should have the property companyType (base name: "companyType")', function() {
      // uncomment below and update the code to test the property companyType
      //var instane = new YlThirdPartyOnboardingApiClient.ThirdPartyOnboardingModel();
      //expect(instance).to.be();
    });

    it('should have the property companyName (base name: "companyName")', function() {
      // uncomment below and update the code to test the property companyName
      //var instane = new YlThirdPartyOnboardingApiClient.ThirdPartyOnboardingModel();
      //expect(instance).to.be();
    });

    it('should have the property companyWebsite (base name: "companyWebsite")', function() {
      // uncomment below and update the code to test the property companyWebsite
      //var instane = new YlThirdPartyOnboardingApiClient.ThirdPartyOnboardingModel();
      //expect(instance).to.be();
    });

    it('should have the property companyNumber (base name: "companyNumber")', function() {
      // uncomment below and update the code to test the property companyNumber
      //var instane = new YlThirdPartyOnboardingApiClient.ThirdPartyOnboardingModel();
      //expect(instance).to.be();
    });

    it('should have the property vatNumber (base name: "vatNumber")', function() {
      // uncomment below and update the code to test the property vatNumber
      //var instane = new YlThirdPartyOnboardingApiClient.ThirdPartyOnboardingModel();
      //expect(instance).to.be();
    });

    it('should have the property mid (base name: "mid")', function() {
      // uncomment below and update the code to test the property mid
      //var instane = new YlThirdPartyOnboardingApiClient.ThirdPartyOnboardingModel();
      //expect(instance).to.be();
    });

    it('should have the property registeredAddress (base name: "registeredAddress")', function() {
      // uncomment below and update the code to test the property registeredAddress
      //var instane = new YlThirdPartyOnboardingApiClient.ThirdPartyOnboardingModel();
      //expect(instance).to.be();
    });

    it('should have the property contactPhoneNumber (base name: "contactPhoneNumber")', function() {
      // uncomment below and update the code to test the property contactPhoneNumber
      //var instane = new YlThirdPartyOnboardingApiClient.ThirdPartyOnboardingModel();
      //expect(instance).to.be();
    });

    it('should have the property contactEmailAddress (base name: "contactEmailAddress")', function() {
      // uncomment below and update the code to test the property contactEmailAddress
      //var instane = new YlThirdPartyOnboardingApiClient.ThirdPartyOnboardingModel();
      //expect(instance).to.be();
    });

    it('should have the property notificationURL (base name: "notificationURL")', function() {
      // uncomment below and update the code to test the property notificationURL
      //var instane = new YlThirdPartyOnboardingApiClient.ThirdPartyOnboardingModel();
      //expect(instance).to.be();
    });

    it('should have the property additionalInfo (base name: "additionalInfo")', function() {
      // uncomment below and update the code to test the property additionalInfo
      //var instane = new YlThirdPartyOnboardingApiClient.ThirdPartyOnboardingModel();
      //expect(instance).to.be();
    });

  });

}));
