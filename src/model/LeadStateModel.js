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
 * The LeadStateModel model module.
 * @module model/LeadStateModel
 * @version 1.0
 */
class LeadStateModel {
    /**
     * Constructs a new <code>LeadStateModel</code>.
     * @alias module:model/LeadStateModel
     */
    constructor() { 
        
        LeadStateModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LeadStateModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LeadStateModel} obj Optional instance to populate.
     * @return {module:model/LeadStateModel} The populated <code>LeadStateModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LeadStateModel();

            if (data.hasOwnProperty('leadId')) {
                obj['leadId'] = ApiClient.convertToType(data['leadId'], 'String');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
            if (data.hasOwnProperty('stateChangeDate')) {
                obj['stateChangeDate'] = ApiClient.convertToType(data['stateChangeDate'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * @member {String} leadId
 */
LeadStateModel.prototype['leadId'] = undefined;

/**
 * @member {String} state
 */
LeadStateModel.prototype['state'] = undefined;

/**
 * @member {Date} stateChangeDate
 */
LeadStateModel.prototype['stateChangeDate'] = undefined;






export default LeadStateModel;
