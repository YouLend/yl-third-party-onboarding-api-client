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
 * The MerchantIdsModel model module.
 * @module model/MerchantIdsModel
 * @version 1.0
 */
class MerchantIdsModel {
    /**
     * Constructs a new <code>MerchantIdsModel</code>.
     * @alias module:model/MerchantIdsModel
     */
    constructor() { 
        
        MerchantIdsModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MerchantIdsModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MerchantIdsModel} obj Optional instance to populate.
     * @return {module:model/MerchantIdsModel} The populated <code>MerchantIdsModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MerchantIdsModel();

            if (data.hasOwnProperty('masterMidId')) {
                obj['masterMidId'] = ApiClient.convertToType(data['masterMidId'], 'String');
            }
            if (data.hasOwnProperty('outletMidIds')) {
                obj['outletMidIds'] = ApiClient.convertToType(data['outletMidIds'], ['String']);
            }
            if (data.hasOwnProperty('allMerchantIds')) {
                obj['allMerchantIds'] = ApiClient.convertToType(data['allMerchantIds'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * Gets or sets the master merchant id associated with the outlet ids.
 * @member {String} masterMidId
 */
MerchantIdsModel.prototype['masterMidId'] = undefined;

/**
 * Gets or sets a list of outlet merchant ids associated with a company
 * @member {Array.<String>} outletMidIds
 */
MerchantIdsModel.prototype['outletMidIds'] = undefined;

/**
 * Gets or sets a list of all merchant ids associated with a company
 * @member {Array.<String>} allMerchantIds
 */
MerchantIdsModel.prototype['allMerchantIds'] = undefined;






export default MerchantIdsModel;
