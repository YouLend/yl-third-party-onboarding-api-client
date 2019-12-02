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
import Address from './Address';
import Industry from './Industry';
import SignificantPersonV2 from './SignificantPersonV2';

/**
 * The OrganisationDetailsV3 model module.
 * @module model/OrganisationDetailsV3
 * @version 1.0
 */
class OrganisationDetailsV3 {
    /**
     * Constructs a new <code>OrganisationDetailsV3</code>.
     * Model for the organisation details for a loead
     * @alias module:model/OrganisationDetailsV3
     */
    constructor() { 
        
        OrganisationDetailsV3.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrganisationDetailsV3</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrganisationDetailsV3} obj Optional instance to populate.
     * @return {module:model/OrganisationDetailsV3} The populated <code>OrganisationDetailsV3</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrganisationDetailsV3();

            if (data.hasOwnProperty('leadId')) {
                obj['leadId'] = ApiClient.convertToType(data['leadId'], 'String');
            }
            if (data.hasOwnProperty('companyName')) {
                obj['companyName'] = ApiClient.convertToType(data['companyName'], 'String');
            }
            if (data.hasOwnProperty('companyNumber')) {
                obj['companyNumber'] = ApiClient.convertToType(data['companyNumber'], 'String');
            }
            if (data.hasOwnProperty('vatNumber')) {
                obj['vatNumber'] = ApiClient.convertToType(data['vatNumber'], 'String');
            }
            if (data.hasOwnProperty('formationDate')) {
                obj['formationDate'] = ApiClient.convertToType(data['formationDate'], 'Date');
            }
            if (data.hasOwnProperty('companyType')) {
                obj['companyType'] = ApiClient.convertToType(data['companyType'], 'String');
            }
            if (data.hasOwnProperty('address')) {
                obj['address'] = Address.constructFromObject(data['address']);
            }
            if (data.hasOwnProperty('country')) {
                obj['country'] = ApiClient.convertToType(data['country'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('keyContactName')) {
                obj['keyContactName'] = ApiClient.convertToType(data['keyContactName'], 'String');
            }
            if (data.hasOwnProperty('website')) {
                obj['website'] = ApiClient.convertToType(data['website'], 'String');
            }
            if (data.hasOwnProperty('phoneNumber')) {
                obj['phoneNumber'] = ApiClient.convertToType(data['phoneNumber'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('significantPersons')) {
                obj['significantPersons'] = ApiClient.convertToType(data['significantPersons'], [SignificantPersonV2]);
            }
            if (data.hasOwnProperty('industries')) {
                obj['industries'] = ApiClient.convertToType(data['industries'], [Industry]);
            }
            if (data.hasOwnProperty('confirmedCreditSearch')) {
                obj['confirmedCreditSearch'] = ApiClient.convertToType(data['confirmedCreditSearch'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Gets or sets the lead id
 * @member {String} leadId
 */
OrganisationDetailsV3.prototype['leadId'] = undefined;

/**
 * Gets or sets the company name
 * @member {String} companyName
 */
OrganisationDetailsV3.prototype['companyName'] = undefined;

/**
 * Gets or sets the company number
 * @member {String} companyNumber
 */
OrganisationDetailsV3.prototype['companyNumber'] = undefined;

/**
 * Gets or sets the VAT number for the organisation
 * @member {String} vatNumber
 */
OrganisationDetailsV3.prototype['vatNumber'] = undefined;

/**
 * Gets or sets the formation date for the organisation
 * @member {Date} formationDate
 */
OrganisationDetailsV3.prototype['formationDate'] = undefined;

/**
 * Gets or sets the company type
 * @member {String} companyType
 */
OrganisationDetailsV3.prototype['companyType'] = undefined;

/**
 * @member {module:model/Address} address
 */
OrganisationDetailsV3.prototype['address'] = undefined;

/**
 * Gets or sets the country ISO code for the organisation
 * @member {String} country
 */
OrganisationDetailsV3.prototype['country'] = undefined;

/**
 * Gets or sets the description for the company
 * @member {String} description
 */
OrganisationDetailsV3.prototype['description'] = undefined;

/**
 * Gets or sets the key merchant contact who will be setting up the loan
 * @member {String} keyContactName
 */
OrganisationDetailsV3.prototype['keyContactName'] = undefined;

/**
 * Gets or sets the organisation website URL
 * @member {String} website
 */
OrganisationDetailsV3.prototype['website'] = undefined;

/**
 * Gets or sets the organisation phone number
 * @member {String} phoneNumber
 */
OrganisationDetailsV3.prototype['phoneNumber'] = undefined;

/**
 * Gets or sets the organisation email address
 * @member {String} email
 */
OrganisationDetailsV3.prototype['email'] = undefined;

/**
 * Gets or sets the list of significant persons
 * @member {Array.<module:model/SignificantPersonV2>} significantPersons
 */
OrganisationDetailsV3.prototype['significantPersons'] = undefined;

/**
 * Gets or sets the list of industries in which the organisation conducts business
 * @member {Array.<module:model/Industry>} industries
 */
OrganisationDetailsV3.prototype['industries'] = undefined;

/**
 * Gets or sets a value indicating whether the organisation consents to a credit search
 * @member {Boolean} confirmedCreditSearch
 */
OrganisationDetailsV3.prototype['confirmedCreditSearch'] = undefined;






export default OrganisationDetailsV3;

