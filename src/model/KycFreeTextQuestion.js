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
 * The KycFreeTextQuestion model module.
 * @module model/KycFreeTextQuestion
 * @version 1.0
 */
class KycFreeTextQuestion {
    /**
     * Constructs a new <code>KycFreeTextQuestion</code>.
     * @alias module:model/KycFreeTextQuestion
     */
    constructor() { 
        
        KycFreeTextQuestion.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>KycFreeTextQuestion</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/KycFreeTextQuestion} obj Optional instance to populate.
     * @return {module:model/KycFreeTextQuestion} The populated <code>KycFreeTextQuestion</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new KycFreeTextQuestion();

            if (data.hasOwnProperty('answer')) {
                obj['answer'] = ApiClient.convertToType(data['answer'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} answer
 */
KycFreeTextQuestion.prototype['answer'] = undefined;






export default KycFreeTextQuestion;

