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
import AddressModel from './AddressModel';
import DateModel from './DateModel';

/**
 * The SignificantPersonModel model module.
 * @module model/SignificantPersonModel
 * @version 1.0
 */
class SignificantPersonModel {
    /**
     * Constructs a new <code>SignificantPersonModel</code>.
     * Significant Person Data Model
     * @alias module:model/SignificantPersonModel
     * @param firstName {String} Gets or sets significant person's first name
     * @param surname {String} Gets or sets significant person's surname
     * @param address {module:model/AddressModel} 
     * @param dateOfBirth {module:model/DateModel} 
     */
    constructor(firstName, surname, address, dateOfBirth) { 
        
        SignificantPersonModel.initialize(this, firstName, surname, address, dateOfBirth);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, firstName, surname, address, dateOfBirth) { 
        obj['firstName'] = firstName;
        obj['surname'] = surname;
        obj['address'] = address;
        obj['dateOfBirth'] = dateOfBirth;
    }

    /**
     * Constructs a <code>SignificantPersonModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SignificantPersonModel} obj Optional instance to populate.
     * @return {module:model/SignificantPersonModel} The populated <code>SignificantPersonModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SignificantPersonModel();

            if (data.hasOwnProperty('firstName')) {
                obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
            }
            if (data.hasOwnProperty('surname')) {
                obj['surname'] = ApiClient.convertToType(data['surname'], 'String');
            }
            if (data.hasOwnProperty('typeOfPerson')) {
                obj['typeOfPerson'] = ApiClient.convertToType(data['typeOfPerson'], 'String');
            }
            if (data.hasOwnProperty('address')) {
                obj['address'] = AddressModel.constructFromObject(data['address']);
            }
            if (data.hasOwnProperty('dateOfBirth')) {
                obj['dateOfBirth'] = DateModel.constructFromObject(data['dateOfBirth']);
            }
            if (data.hasOwnProperty('percentageOwned')) {
                obj['percentageOwned'] = ApiClient.convertToType(data['percentageOwned'], 'Number');
            }
            if (data.hasOwnProperty('emailAddress')) {
                obj['emailAddress'] = ApiClient.convertToType(data['emailAddress'], 'String');
            }
            if (data.hasOwnProperty('mobilePhoneNumber')) {
                obj['mobilePhoneNumber'] = ApiClient.convertToType(data['mobilePhoneNumber'], 'String');
            }
            if (data.hasOwnProperty('nationality')) {
                obj['nationality'] = ApiClient.convertToType(data['nationality'], 'String');
            }
            if (data.hasOwnProperty('niNumber')) {
                obj['niNumber'] = ApiClient.convertToType(data['niNumber'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Gets or sets significant person's first name
 * @member {String} firstName
 */
SignificantPersonModel.prototype['firstName'] = undefined;

/**
 * Gets or sets significant person's surname
 * @member {String} surname
 */
SignificantPersonModel.prototype['surname'] = undefined;

/**
 * Gets or sets significant person's type. Can be director or beneficial owner
 * @member {String} typeOfPerson
 */
SignificantPersonModel.prototype['typeOfPerson'] = undefined;

/**
 * @member {module:model/AddressModel} address
 */
SignificantPersonModel.prototype['address'] = undefined;

/**
 * @member {module:model/DateModel} dateOfBirth
 */
SignificantPersonModel.prototype['dateOfBirth'] = undefined;

/**
 * Gets or sets the percentage of ownership the significant person has
 * @member {Number} percentageOwned
 */
SignificantPersonModel.prototype['percentageOwned'] = undefined;

/**
 * Gets or sets significant person's email address
 * @member {String} emailAddress
 */
SignificantPersonModel.prototype['emailAddress'] = undefined;

/**
 * Gets or sets significant person's mobile phone number
 * @member {String} mobilePhoneNumber
 */
SignificantPersonModel.prototype['mobilePhoneNumber'] = undefined;

/**
 * Gets or sets significant person's nationality
 * @member {String} nationality
 */
SignificantPersonModel.prototype['nationality'] = undefined;

/**
 * Gets or sets significant person's NI number
 * @member {String} niNumber
 */
SignificantPersonModel.prototype['niNumber'] = undefined;






export default SignificantPersonModel;

