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

/**
 * The OfferStepModel model module.
 * @module model/OfferStepModel
 * @version 1.0
 */
class OfferStepModel {
    /**
     * Constructs a new <code>OfferStepModel</code>.
     * Model containing details about an offer
     * @alias module:model/OfferStepModel
     */
    constructor() { 
        
        OfferStepModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OfferStepModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OfferStepModel} obj Optional instance to populate.
     * @return {module:model/OfferStepModel} The populated <code>OfferStepModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OfferStepModel();

            if (data.hasOwnProperty('leadId')) {
                obj['leadId'] = ApiClient.convertToType(data['leadId'], 'String');
            }
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
            if (data.hasOwnProperty('unsignedLoanDocument')) {
                obj['unsignedLoanDocument'] = DocumentMetadataModel.constructFromObject(data['unsignedLoanDocument']);
            }
            if (data.hasOwnProperty('unsignedLoanDocumentDownloaded')) {
                obj['unsignedLoanDocumentDownloaded'] = ApiClient.convertToType(data['unsignedLoanDocumentDownloaded'], 'Boolean');
            }
            if (data.hasOwnProperty('unsignedAccountDocument')) {
                obj['unsignedAccountDocument'] = DocumentMetadataModel.constructFromObject(data['unsignedAccountDocument']);
            }
            if (data.hasOwnProperty('unsignedAccountDocumentDownloaded')) {
                obj['unsignedAccountDocumentDownloaded'] = ApiClient.convertToType(data['unsignedAccountDocumentDownloaded'], 'Boolean');
            }
            if (data.hasOwnProperty('documentSigningId')) {
                obj['documentSigningId'] = ApiClient.convertToType(data['documentSigningId'], 'String');
            }
            if (data.hasOwnProperty('sortCode')) {
                obj['sortCode'] = ApiClient.convertToType(data['sortCode'], 'String');
            }
            if (data.hasOwnProperty('accountNumber')) {
                obj['accountNumber'] = ApiClient.convertToType(data['accountNumber'], 'String');
            }
            if (data.hasOwnProperty('swift')) {
                obj['swift'] = ApiClient.convertToType(data['swift'], 'String');
            }
            if (data.hasOwnProperty('iban')) {
                obj['iban'] = ApiClient.convertToType(data['iban'], 'String');
            }
            if (data.hasOwnProperty('bankName')) {
                obj['bankName'] = ApiClient.convertToType(data['bankName'], 'String');
            }
            if (data.hasOwnProperty('confirmedCompanyAccount')) {
                obj['confirmedCompanyAccount'] = ApiClient.convertToType(data['confirmedCompanyAccount'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Gets or sets the lead id
 * @member {String} leadId
 */
OfferStepModel.prototype['leadId'] = undefined;

/**
 * Gets or sets the amount that the lead will receive if offer is accepted
 * @member {Number} youWillGet
 */
OfferStepModel.prototype['youWillGet'] = undefined;

/**
 * Gets or sets the amount that the lead will repay
 * @member {Number} youWillRepay
 */
OfferStepModel.prototype['youWillRepay'] = undefined;

/**
 * Gets or sets the currency ISO code for the offer
 * @member {String} currencyISOCode
 */
OfferStepModel.prototype['currencyISOCode'] = undefined;

/**
 * Gets or sets the sweep, which is the percentage of the settlement which is allocated to repaying the loan
 * @member {Number} sweep
 */
OfferStepModel.prototype['sweep'] = undefined;

/**
 * @member {module:model/DocumentMetadataModel} unsignedLoanDocument
 */
OfferStepModel.prototype['unsignedLoanDocument'] = undefined;

/**
 * Gets or sets a value indicating whether the unsigned loan document has been downloaded
 * @member {Boolean} unsignedLoanDocumentDownloaded
 */
OfferStepModel.prototype['unsignedLoanDocumentDownloaded'] = undefined;

/**
 * @member {module:model/DocumentMetadataModel} unsignedAccountDocument
 */
OfferStepModel.prototype['unsignedAccountDocument'] = undefined;

/**
 * Gets or sets a value indicating whether the unsigned loan document has been downloaded
 * @member {Boolean} unsignedAccountDocumentDownloaded
 */
OfferStepModel.prototype['unsignedAccountDocumentDownloaded'] = undefined;

/**
 * Gets or sets the document signing id
 * @member {String} documentSigningId
 */
OfferStepModel.prototype['documentSigningId'] = undefined;

/**
 * Gets or sets the sort code of the lead's account
 * @member {String} sortCode
 */
OfferStepModel.prototype['sortCode'] = undefined;

/**
 * Gets or sets the account number for the lead
 * @member {String} accountNumber
 */
OfferStepModel.prototype['accountNumber'] = undefined;

/**
 * Gets or sets the swift code for the lead's account
 * @member {String} swift
 */
OfferStepModel.prototype['swift'] = undefined;

/**
 * Gets or sets the IBAN for the lead's account
 * @member {String} iban
 */
OfferStepModel.prototype['iban'] = undefined;

/**
 * Gets or sets the name of the bank associated with the lead's account
 * @member {String} bankName
 */
OfferStepModel.prototype['bankName'] = undefined;

/**
 * Gets or sets a value indicating whether the account is confirmed to be the company account
 * @member {Boolean} confirmedCompanyAccount
 */
OfferStepModel.prototype['confirmedCompanyAccount'] = undefined;






export default OfferStepModel;

