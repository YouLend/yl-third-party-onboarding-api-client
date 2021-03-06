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

import ApiClient from '../ApiClient';

/**
 * The OnboardingV2View model module.
 * @module model/OnboardingV2View
 * @version 1.0
 */
class OnboardingV2View {
    /**
     * Constructs a new <code>OnboardingV2View</code>.
     * A model containing data about an onboarding for a lead
     * @alias module:model/OnboardingV2View
     */
    constructor() { 
        
        OnboardingV2View.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OnboardingV2View</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OnboardingV2View} obj Optional instance to populate.
     * @return {module:model/OnboardingV2View} The populated <code>OnboardingV2View</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OnboardingV2View();

            if (data.hasOwnProperty('leadSourceLendingPartnerId')) {
                obj['leadSourceLendingPartnerId'] = ApiClient.convertToType(data['leadSourceLendingPartnerId'], 'String');
            }
            if (data.hasOwnProperty('onboardingState')) {
                obj['onboardingState'] = ApiClient.convertToType(data['onboardingState'], 'String');
            }
            if (data.hasOwnProperty('onboardingStateReason')) {
                obj['onboardingStateReason'] = ApiClient.convertToType(data['onboardingStateReason'], 'String');
            }
            if (data.hasOwnProperty('organisationDetailsStepComplete')) {
                obj['organisationDetailsStepComplete'] = ApiClient.convertToType(data['organisationDetailsStepComplete'], 'Boolean');
            }
            if (data.hasOwnProperty('paymentDataStepComplete')) {
                obj['paymentDataStepComplete'] = ApiClient.convertToType(data['paymentDataStepComplete'], 'Boolean');
            }
            if (data.hasOwnProperty('offerStepComplete')) {
                obj['offerStepComplete'] = ApiClient.convertToType(data['offerStepComplete'], 'Boolean');
            }
            if (data.hasOwnProperty('kycQuestionsStepComplete')) {
                obj['kycQuestionsStepComplete'] = ApiClient.convertToType(data['kycQuestionsStepComplete'], 'Boolean');
            }
            if (data.hasOwnProperty('kycDocumentsStepComplete')) {
                obj['kycDocumentsStepComplete'] = ApiClient.convertToType(data['kycDocumentsStepComplete'], 'Boolean');
            }
            if (data.hasOwnProperty('accountStepComplete')) {
                obj['accountStepComplete'] = ApiClient.convertToType(data['accountStepComplete'], 'Boolean');
            }
            if (data.hasOwnProperty('companyName')) {
                obj['companyName'] = ApiClient.convertToType(data['companyName'], 'String');
            }
            if (data.hasOwnProperty('leadType')) {
                obj['leadType'] = ApiClient.convertToType(data['leadType'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} leadSourceLendingPartnerId
 */
OnboardingV2View.prototype['leadSourceLendingPartnerId'] = undefined;

/**
 * Gets or sets the current state of an onboarding.  One of \"signuprequirementsnotmet\", \"stage1incomplete\", \"stage1submitted\",  \"stage1rejected\", \"stage2incomplete\", \"stage2submitted\", \"stage2rejected\" or \"onboardingcomplete\".
 * @member {String} onboardingState
 */
OnboardingV2View.prototype['onboardingState'] = undefined;

/**
 * Gets or sets the reason for the current state of an onboarding in case of rejection.
 * @member {String} onboardingStateReason
 */
OnboardingV2View.prototype['onboardingStateReason'] = undefined;

/**
 * Gets or sets a value indicating whether the organisation details step is complete
 * @member {Boolean} organisationDetailsStepComplete
 */
OnboardingV2View.prototype['organisationDetailsStepComplete'] = undefined;

/**
 * Gets or sets a value indicating whether the payment data step is complete
 * @member {Boolean} paymentDataStepComplete
 */
OnboardingV2View.prototype['paymentDataStepComplete'] = undefined;

/**
 * Gets or sets a value indicating whether the offer step is complete.  The offer step requires the documents to be signed.
 * @member {Boolean} offerStepComplete
 */
OnboardingV2View.prototype['offerStepComplete'] = undefined;

/**
 * Gets or sets a value indicating whether the KYC questions step is complete
 * @member {Boolean} kycQuestionsStepComplete
 */
OnboardingV2View.prototype['kycQuestionsStepComplete'] = undefined;

/**
 * Gets or sets a value indicating whether the KYC documents step is complete
 * @member {Boolean} kycDocumentsStepComplete
 */
OnboardingV2View.prototype['kycDocumentsStepComplete'] = undefined;

/**
 * Gets or sets a value indicating whether the accounts step is complete
 * @member {Boolean} accountStepComplete
 */
OnboardingV2View.prototype['accountStepComplete'] = undefined;

/**
 * Gets or sets the name of the company
 * @member {String} companyName
 */
OnboardingV2View.prototype['companyName'] = undefined;

/**
 * Gets or sets the lead type
 * @member {String} leadType
 */
OnboardingV2View.prototype['leadType'] = undefined;






export default OnboardingV2View;

