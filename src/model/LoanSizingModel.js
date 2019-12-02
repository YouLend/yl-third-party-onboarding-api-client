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
import CreditRatingBandParameters from './CreditRatingBandParameters';
import LoanOptionModel from './LoanOptionModel';

/**
 * The LoanSizingModel model module.
 * @module model/LoanSizingModel
 * @version 1.0
 */
class LoanSizingModel {
    /**
     * Constructs a new <code>LoanSizingModel</code>.
     * Model for data about a loan sizing
     * @alias module:model/LoanSizingModel
     */
    constructor() { 
        
        LoanSizingModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LoanSizingModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoanSizingModel} obj Optional instance to populate.
     * @return {module:model/LoanSizingModel} The populated <code>LoanSizingModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoanSizingModel();

            if (data.hasOwnProperty('loanSizingProcessId')) {
                obj['loanSizingProcessId'] = ApiClient.convertToType(data['loanSizingProcessId'], 'String');
            }
            if (data.hasOwnProperty('companyNumber')) {
                obj['companyNumber'] = ApiClient.convertToType(data['companyNumber'], 'String');
            }
            if (data.hasOwnProperty('companyName')) {
                obj['companyName'] = ApiClient.convertToType(data['companyName'], 'String');
            }
            if (data.hasOwnProperty('averageMonthlyRevenue')) {
                obj['averageMonthlyRevenue'] = ApiClient.convertToType(data['averageMonthlyRevenue'], 'Number');
            }
            if (data.hasOwnProperty('creditRatingBandParameters')) {
                obj['creditRatingBandParameters'] = CreditRatingBandParameters.constructFromObject(data['creditRatingBandParameters']);
            }
            if (data.hasOwnProperty('loanOption1')) {
                obj['loanOption1'] = LoanOptionModel.constructFromObject(data['loanOption1']);
            }
            if (data.hasOwnProperty('loanOption2')) {
                obj['loanOption2'] = LoanOptionModel.constructFromObject(data['loanOption2']);
            }
            if (data.hasOwnProperty('loanOption3')) {
                obj['loanOption3'] = LoanOptionModel.constructFromObject(data['loanOption3']);
            }
        }
        return obj;
    }


}

/**
 * Gets or sets the Guid used to identify the loan sizing process
 * @member {String} loanSizingProcessId
 */
LoanSizingModel.prototype['loanSizingProcessId'] = undefined;

/**
 * Gets or sets the company number
 * @member {String} companyNumber
 */
LoanSizingModel.prototype['companyNumber'] = undefined;

/**
 * Gets or sets the company name
 * @member {String} companyName
 */
LoanSizingModel.prototype['companyName'] = undefined;

/**
 * Gets or sets the average monthly revenue of the company
 * @member {Number} averageMonthlyRevenue
 */
LoanSizingModel.prototype['averageMonthlyRevenue'] = undefined;

/**
 * @member {module:model/CreditRatingBandParameters} creditRatingBandParameters
 */
LoanSizingModel.prototype['creditRatingBandParameters'] = undefined;

/**
 * @member {module:model/LoanOptionModel} loanOption1
 */
LoanSizingModel.prototype['loanOption1'] = undefined;

/**
 * @member {module:model/LoanOptionModel} loanOption2
 */
LoanSizingModel.prototype['loanOption2'] = undefined;

/**
 * @member {module:model/LoanOptionModel} loanOption3
 */
LoanSizingModel.prototype['loanOption3'] = undefined;






export default LoanSizingModel;

