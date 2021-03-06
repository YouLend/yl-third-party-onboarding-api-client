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
import OrganisationDetailsV3 from './OrganisationDetailsV3';

/**
 * The OrganisationDetailsV3StepView model module.
 * @module model/OrganisationDetailsV3StepView
 * @version 1.0
 */
class OrganisationDetailsV3StepView {
    /**
     * Constructs a new <code>OrganisationDetailsV3StepView</code>.
     * A model containing data about organisations details step for a lead
     * @alias module:model/OrganisationDetailsV3StepView
     */
    constructor() { 
        
        OrganisationDetailsV3StepView.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrganisationDetailsV3StepView</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrganisationDetailsV3StepView} obj Optional instance to populate.
     * @return {module:model/OrganisationDetailsV3StepView} The populated <code>OrganisationDetailsV3StepView</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrganisationDetailsV3StepView();

            if (data.hasOwnProperty('leadId')) {
                obj['leadId'] = ApiClient.convertToType(data['leadId'], 'String');
            }
            if (data.hasOwnProperty('organisationDetails')) {
                obj['organisationDetails'] = OrganisationDetailsV3.constructFromObject(data['organisationDetails']);
            }
        }
        return obj;
    }


}

/**
 * Gets or sets the lead id
 * @member {String} leadId
 */
OrganisationDetailsV3StepView.prototype['leadId'] = undefined;

/**
 * @member {module:model/OrganisationDetailsV3} organisationDetails
 */
OrganisationDetailsV3StepView.prototype['organisationDetails'] = undefined;






export default OrganisationDetailsV3StepView;

