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
 * The OnboardingOfferModel model module.
 * @module model/OnboardingOfferModel
 * @version 1.0
 */
class OnboardingOfferModel {
    /**
     * Constructs a new <code>OnboardingOfferModel</code>.
     * A model representing the loan offer made to the lead
     * @alias module:model/OnboardingOfferModel
     */
    constructor() { 
        
        OnboardingOfferModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OnboardingOfferModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OnboardingOfferModel} obj Optional instance to populate.
     * @return {module:model/OnboardingOfferModel} The populated <code>OnboardingOfferModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OnboardingOfferModel();

            if (data.hasOwnProperty('youWillGet')) {
                obj['youWillGet'] = ApiClient.convertToType(data['youWillGet'], 'Number');
            }
            if (data.hasOwnProperty('youWillRepay')) {
                obj['youWillRepay'] = ApiClient.convertToType(data['youWillRepay'], 'Number');
            }
            if (data.hasOwnProperty('currencyISOCode')) {
                obj['currencyISOCode'] = ApiClient.convertToType(data['currencyISOCode'], 'String');
            }
            if (data.hasOwnProperty('sweep')) {
                obj['sweep'] = ApiClient.convertToType(data['sweep'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Gets or sets the funding amount for the loan
 * @member {Number} youWillGet
 */
OnboardingOfferModel.prototype['youWillGet'] = undefined;

/**
 * Gets or sets the repayable amount (loan amount) for the loan
 * @member {Number} youWillRepay
 */
OnboardingOfferModel.prototype['youWillRepay'] = undefined;

/**
 * Gets or sets the currency ISO code for the loan
 * @member {String} currencyISOCode
 */
OnboardingOfferModel.prototype['currencyISOCode'] = undefined;

/**
 * Gets or sets the sweep for the loan, which is the percentage of the settlement allocated towards repaying the loan
 * @member {Number} sweep
 */
OnboardingOfferModel.prototype['sweep'] = undefined;






export default OnboardingOfferModel;

