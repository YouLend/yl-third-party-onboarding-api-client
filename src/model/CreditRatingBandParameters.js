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
 * The CreditRatingBandParameters model module.
 * @module model/CreditRatingBandParameters
 * @version 1.0
 */
class CreditRatingBandParameters {
    /**
     * Constructs a new <code>CreditRatingBandParameters</code>.
     * The parameters for the credit rating band of a lead
     * @alias module:model/CreditRatingBandParameters
     */
    constructor() { 
        
        CreditRatingBandParameters.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreditRatingBandParameters</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreditRatingBandParameters} obj Optional instance to populate.
     * @return {module:model/CreditRatingBandParameters} The populated <code>CreditRatingBandParameters</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreditRatingBandParameters();

            if (data.hasOwnProperty('rating')) {
                obj['rating'] = ApiClient.convertToType(data['rating'], 'String');
            }
            if (data.hasOwnProperty('lowerLimit')) {
                obj['lowerLimit'] = ApiClient.convertToType(data['lowerLimit'], 'Number');
            }
            if (data.hasOwnProperty('upperLimit')) {
                obj['upperLimit'] = ApiClient.convertToType(data['upperLimit'], 'Number');
            }
            if (data.hasOwnProperty('targetTerm')) {
                obj['targetTerm'] = ApiClient.convertToType(data['targetTerm'], 'Number');
            }
            if (data.hasOwnProperty('fee')) {
                obj['fee'] = ApiClient.convertToType(data['fee'], 'Number');
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'Number');
            }
            if (data.hasOwnProperty('countryCode')) {
                obj['countryCode'] = ApiClient.convertToType(data['countryCode'], 'String');
            }
            if (data.hasOwnProperty('loanSweep2')) {
                obj['loanSweep2'] = ApiClient.convertToType(data['loanSweep2'], 'Number');
            }
            if (data.hasOwnProperty('loanSweep3')) {
                obj['loanSweep3'] = ApiClient.convertToType(data['loanSweep3'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Gets or sets the credit rating of the lead
 * @member {String} rating
 */
CreditRatingBandParameters.prototype['rating'] = undefined;

/**
 * Gets or sets the lower limit for credit score for the credit rating band
 * @member {Number} lowerLimit
 */
CreditRatingBandParameters.prototype['lowerLimit'] = undefined;

/**
 * Gets or sets the upper limit for credit score for the credit rating band
 * @member {Number} upperLimit
 */
CreditRatingBandParameters.prototype['upperLimit'] = undefined;

/**
 * Gets or sets the target number of months until full repayment of the loan, which is used to determine the sweep of the option 1 loan
 * @member {Number} targetTerm
 */
CreditRatingBandParameters.prototype['targetTerm'] = undefined;

/**
 * Gets or sets the fee (as a factor), which is used to determine the LoanAmount (repayable amount) from the FundingAmount (amount lent to the borrower)
 * @member {Number} fee
 */
CreditRatingBandParameters.prototype['fee'] = undefined;

/**
 * Gets or sets the size for the credit rating band, which is used to determine the FundingAmount of the option 1 loan
 * @member {Number} size
 */
CreditRatingBandParameters.prototype['size'] = undefined;

/**
 * Gets or sets the country code for which this credit rating band applies
 * @member {String} countryCode
 */
CreditRatingBandParameters.prototype['countryCode'] = undefined;

/**
 * Gets or sets the fixed sweep used in loan option 2
 * @member {Number} loanSweep2
 */
CreditRatingBandParameters.prototype['loanSweep2'] = undefined;

/**
 * Gets or sets the fixed sweep used in loan option 3
 * @member {Number} loanSweep3
 */
CreditRatingBandParameters.prototype['loanSweep3'] = undefined;






export default CreditRatingBandParameters;

