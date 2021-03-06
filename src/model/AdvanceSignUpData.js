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
 * The AdvanceSignUpData model module.
 * @module model/AdvanceSignUpData
 * @version 1.0
 */
class AdvanceSignUpData {
    /**
     * Constructs a new <code>AdvanceSignUpData</code>.
     * @alias module:model/AdvanceSignUpData
     */
    constructor() { 
        
        AdvanceSignUpData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AdvanceSignUpData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AdvanceSignUpData} obj Optional instance to populate.
     * @return {module:model/AdvanceSignUpData} The populated <code>AdvanceSignUpData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AdvanceSignUpData();

            if (data.hasOwnProperty('currencyISOCode')) {
                obj['currencyISOCode'] = ApiClient.convertToType(data['currencyISOCode'], 'String');
            }
            if (data.hasOwnProperty('monthlyRevenue')) {
                obj['monthlyRevenue'] = ApiClient.convertToType(data['monthlyRevenue'], 'Number');
            }
            if (data.hasOwnProperty('monthlyRevenueSliderIndex')) {
                obj['monthlyRevenueSliderIndex'] = ApiClient.convertToType(data['monthlyRevenueSliderIndex'], 'Number');
            }
            if (data.hasOwnProperty('numberOfPaymentsPerMonth')) {
                obj['numberOfPaymentsPerMonth'] = ApiClient.convertToType(data['numberOfPaymentsPerMonth'], 'Number');
            }
            if (data.hasOwnProperty('numberOfPaymentsPerMonthSliderIndex')) {
                obj['numberOfPaymentsPerMonthSliderIndex'] = ApiClient.convertToType(data['numberOfPaymentsPerMonthSliderIndex'], 'Number');
            }
            if (data.hasOwnProperty('sweepPercentage')) {
                obj['sweepPercentage'] = ApiClient.convertToType(data['sweepPercentage'], 'Number');
            }
            if (data.hasOwnProperty('timeOperating')) {
                obj['timeOperating'] = ApiClient.convertToType(data['timeOperating'], 'Number');
            }
            if (data.hasOwnProperty('timeOperatingSliderIndex')) {
                obj['timeOperatingSliderIndex'] = ApiClient.convertToType(data['timeOperatingSliderIndex'], 'Number');
            }
            if (data.hasOwnProperty('sizeOfAdvance')) {
                obj['sizeOfAdvance'] = ApiClient.convertToType(data['sizeOfAdvance'], 'Number');
            }
            if (data.hasOwnProperty('sizeOfAdvanceSliderIndex')) {
                obj['sizeOfAdvanceSliderIndex'] = ApiClient.convertToType(data['sizeOfAdvanceSliderIndex'], 'Number');
            }
            if (data.hasOwnProperty('howMuchToPayBack')) {
                obj['howMuchToPayBack'] = ApiClient.convertToType(data['howMuchToPayBack'], 'Number');
            }
            if (data.hasOwnProperty('payBackInMonths')) {
                obj['payBackInMonths'] = ApiClient.convertToType(data['payBackInMonths'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} currencyISOCode
 * @default 'DKK'
 */
AdvanceSignUpData.prototype['currencyISOCode'] = 'DKK';

/**
 * @member {Number} monthlyRevenue
 */
AdvanceSignUpData.prototype['monthlyRevenue'] = undefined;

/**
 * @member {Number} monthlyRevenueSliderIndex
 */
AdvanceSignUpData.prototype['monthlyRevenueSliderIndex'] = undefined;

/**
 * @member {Number} numberOfPaymentsPerMonth
 */
AdvanceSignUpData.prototype['numberOfPaymentsPerMonth'] = undefined;

/**
 * @member {Number} numberOfPaymentsPerMonthSliderIndex
 */
AdvanceSignUpData.prototype['numberOfPaymentsPerMonthSliderIndex'] = undefined;

/**
 * @member {Number} sweepPercentage
 */
AdvanceSignUpData.prototype['sweepPercentage'] = undefined;

/**
 * @member {Number} timeOperating
 */
AdvanceSignUpData.prototype['timeOperating'] = undefined;

/**
 * @member {Number} timeOperatingSliderIndex
 */
AdvanceSignUpData.prototype['timeOperatingSliderIndex'] = undefined;

/**
 * @member {Number} sizeOfAdvance
 */
AdvanceSignUpData.prototype['sizeOfAdvance'] = undefined;

/**
 * @member {Number} sizeOfAdvanceSliderIndex
 */
AdvanceSignUpData.prototype['sizeOfAdvanceSliderIndex'] = undefined;

/**
 * @member {Number} howMuchToPayBack
 */
AdvanceSignUpData.prototype['howMuchToPayBack'] = undefined;

/**
 * @member {Number} payBackInMonths
 */
AdvanceSignUpData.prototype['payBackInMonths'] = undefined;






export default AdvanceSignUpData;

