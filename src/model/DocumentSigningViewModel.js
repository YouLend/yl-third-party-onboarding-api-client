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
import DocumentMetadataModel from './DocumentMetadataModel';
import SignatorySigningViewModel from './SignatorySigningViewModel';

/**
 * The DocumentSigningViewModel model module.
 * @module model/DocumentSigningViewModel
 * @version 1.0
 */
class DocumentSigningViewModel {
    /**
     * Constructs a new <code>DocumentSigningViewModel</code>.
     * The view model for a document signing
     * @alias module:model/DocumentSigningViewModel
     */
    constructor() { 
        
        DocumentSigningViewModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DocumentSigningViewModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DocumentSigningViewModel} obj Optional instance to populate.
     * @return {module:model/DocumentSigningViewModel} The populated <code>DocumentSigningViewModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DocumentSigningViewModel();

            if (data.hasOwnProperty('documentSigningId')) {
                obj['documentSigningId'] = ApiClient.convertToType(data['documentSigningId'], 'String');
            }
            if (data.hasOwnProperty('documents')) {
                obj['documents'] = ApiClient.convertToType(data['documents'], [DocumentMetadataModel]);
            }
            if (data.hasOwnProperty('signatorySigningViews')) {
                obj['signatorySigningViews'] = ApiClient.convertToType(data['signatorySigningViews'], [SignatorySigningViewModel]);
            }
            if (data.hasOwnProperty('signedDocuments')) {
                obj['signedDocuments'] = ApiClient.convertToType(data['signedDocuments'], [DocumentMetadataModel]);
            }
        }
        return obj;
    }


}

/**
 * Gets or sets the document signing id (a GUID)
 * @member {String} documentSigningId
 */
DocumentSigningViewModel.prototype['documentSigningId'] = undefined;

/**
 * Gets or sets a list of DocumentMetadataModels representing the unsigned documents
 * @member {Array.<module:model/DocumentMetadataModel>} documents
 */
DocumentSigningViewModel.prototype['documents'] = undefined;

/**
 * Gets or sets a list of SignatorySigningViewModels
 * @member {Array.<module:model/SignatorySigningViewModel>} signatorySigningViews
 */
DocumentSigningViewModel.prototype['signatorySigningViews'] = undefined;

/**
 * Gets or sets a list of DocumentMetadataModels representing the signed documents
 * @member {Array.<module:model/DocumentMetadataModel>} signedDocuments
 */
DocumentSigningViewModel.prototype['signedDocuments'] = undefined;






export default DocumentSigningViewModel;

