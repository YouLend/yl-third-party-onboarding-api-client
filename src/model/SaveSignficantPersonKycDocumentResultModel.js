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
 * The SaveSignficantPersonKycDocumentResultModel model module.
 * @module model/SaveSignficantPersonKycDocumentResultModel
 * @version 1.0
 */
class SaveSignficantPersonKycDocumentResultModel {
    /**
     * Constructs a new <code>SaveSignficantPersonKycDocumentResultModel</code>.
     * The result of adding a document to a significant person
     * @alias module:model/SaveSignficantPersonKycDocumentResultModel
     */
    constructor() { 
        
        SaveSignficantPersonKycDocumentResultModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SaveSignficantPersonKycDocumentResultModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SaveSignficantPersonKycDocumentResultModel} obj Optional instance to populate.
     * @return {module:model/SaveSignficantPersonKycDocumentResultModel} The populated <code>SaveSignficantPersonKycDocumentResultModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SaveSignficantPersonKycDocumentResultModel();

            if (data.hasOwnProperty('leadId')) {
                obj['leadId'] = ApiClient.convertToType(data['leadId'], 'String');
            }
            if (data.hasOwnProperty('significantPersonId')) {
                obj['significantPersonId'] = ApiClient.convertToType(data['significantPersonId'], 'String');
            }
            if (data.hasOwnProperty('documentId')) {
                obj['documentId'] = ApiClient.convertToType(data['documentId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Gets or sets the Lead Id
 * @member {String} leadId
 */
SaveSignficantPersonKycDocumentResultModel.prototype['leadId'] = undefined;

/**
 * Gets or sets the Significant Person Id
 * @member {String} significantPersonId
 */
SaveSignficantPersonKycDocumentResultModel.prototype['significantPersonId'] = undefined;

/**
 * Gets or sets the Document Id
 * @member {String} documentId
 */
SaveSignficantPersonKycDocumentResultModel.prototype['documentId'] = undefined;






export default SaveSignficantPersonKycDocumentResultModel;

