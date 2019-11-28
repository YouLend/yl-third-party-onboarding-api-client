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
 * The FreeTextQuestionModel model module.
 * @module model/FreeTextQuestionModel
 * @version 1.0
 */
class FreeTextQuestionModel {
    /**
     * Constructs a new <code>FreeTextQuestionModel</code>.
     * Free Text Question Model
     * @alias module:model/FreeTextQuestionModel
     * @param answer {String} Gets or sets the answer to the free text question
     */
    constructor(answer) { 
        
        FreeTextQuestionModel.initialize(this, answer);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, answer) { 
        obj['answer'] = answer;
    }

    /**
     * Constructs a <code>FreeTextQuestionModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FreeTextQuestionModel} obj Optional instance to populate.
     * @return {module:model/FreeTextQuestionModel} The populated <code>FreeTextQuestionModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FreeTextQuestionModel();

            if (data.hasOwnProperty('answer')) {
                obj['answer'] = ApiClient.convertToType(data['answer'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Gets or sets the answer to the free text question
 * @member {String} answer
 */
FreeTextQuestionModel.prototype['answer'] = undefined;






export default FreeTextQuestionModel;
