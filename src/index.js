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


import ApiClient from './ApiClient';
import AccountDetailsModel from './model/AccountDetailsModel';
import AddressModel from './model/AddressModel';
import CreateThirdPartyAdvanceOnboardingResultModel from './model/CreateThirdPartyAdvanceOnboardingResultModel';
import DateModel from './model/DateModel';
import FreeTextQuestionModel from './model/FreeTextQuestionModel';
import InlineObject from './model/InlineObject';
import InlineObject1 from './model/InlineObject1';
import InlineObject2 from './model/InlineObject2';
import KycQuestionsModel from './model/KycQuestionsModel';
import PaymentGatewayModel from './model/PaymentGatewayModel';
import ProblemDetails from './model/ProblemDetails';
import SaveBankStatementDocumentResultModel from './model/SaveBankStatementDocumentResultModel';
import SavePaymentDataDocumentResultModel from './model/SavePaymentDataDocumentResultModel';
import SaveSignficantPersonKycDocumentResultModel from './model/SaveSignficantPersonKycDocumentResultModel';
import SaveSignificantPersonsResultModel from './model/SaveSignificantPersonsResultModel';
import SignificantPersonModel from './model/SignificantPersonModel';
import SignificantPersonsModel from './model/SignificantPersonsModel';
import ThirdPartyOnboardingModel from './model/ThirdPartyOnboardingModel';
import YesNoQuestionModel from './model/YesNoQuestionModel';
import LeadsApi from './api/LeadsApi';


/**
* Through_this_API_you_can_can_initiate_the_process_of_onboarding_a_borrower_with_YouLend.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var YouLendThirdPartyOnboardingApi = require('index'); // See note below*.
* var xxxSvc = new YouLendThirdPartyOnboardingApi.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new YouLendThirdPartyOnboardingApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new YouLendThirdPartyOnboardingApi.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new YouLendThirdPartyOnboardingApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The AccountDetailsModel model constructor.
     * @property {module:model/AccountDetailsModel}
     */
    AccountDetailsModel,

    /**
     * The AddressModel model constructor.
     * @property {module:model/AddressModel}
     */
    AddressModel,

    /**
     * The CreateThirdPartyAdvanceOnboardingResultModel model constructor.
     * @property {module:model/CreateThirdPartyAdvanceOnboardingResultModel}
     */
    CreateThirdPartyAdvanceOnboardingResultModel,

    /**
     * The DateModel model constructor.
     * @property {module:model/DateModel}
     */
    DateModel,

    /**
     * The FreeTextQuestionModel model constructor.
     * @property {module:model/FreeTextQuestionModel}
     */
    FreeTextQuestionModel,

    /**
     * The InlineObject model constructor.
     * @property {module:model/InlineObject}
     */
    InlineObject,

    /**
     * The InlineObject1 model constructor.
     * @property {module:model/InlineObject1}
     */
    InlineObject1,

    /**
     * The InlineObject2 model constructor.
     * @property {module:model/InlineObject2}
     */
    InlineObject2,

    /**
     * The KycQuestionsModel model constructor.
     * @property {module:model/KycQuestionsModel}
     */
    KycQuestionsModel,

    /**
     * The PaymentGatewayModel model constructor.
     * @property {module:model/PaymentGatewayModel}
     */
    PaymentGatewayModel,

    /**
     * The ProblemDetails model constructor.
     * @property {module:model/ProblemDetails}
     */
    ProblemDetails,

    /**
     * The SaveBankStatementDocumentResultModel model constructor.
     * @property {module:model/SaveBankStatementDocumentResultModel}
     */
    SaveBankStatementDocumentResultModel,

    /**
     * The SavePaymentDataDocumentResultModel model constructor.
     * @property {module:model/SavePaymentDataDocumentResultModel}
     */
    SavePaymentDataDocumentResultModel,

    /**
     * The SaveSignficantPersonKycDocumentResultModel model constructor.
     * @property {module:model/SaveSignficantPersonKycDocumentResultModel}
     */
    SaveSignficantPersonKycDocumentResultModel,

    /**
     * The SaveSignificantPersonsResultModel model constructor.
     * @property {module:model/SaveSignificantPersonsResultModel}
     */
    SaveSignificantPersonsResultModel,

    /**
     * The SignificantPersonModel model constructor.
     * @property {module:model/SignificantPersonModel}
     */
    SignificantPersonModel,

    /**
     * The SignificantPersonsModel model constructor.
     * @property {module:model/SignificantPersonsModel}
     */
    SignificantPersonsModel,

    /**
     * The ThirdPartyOnboardingModel model constructor.
     * @property {module:model/ThirdPartyOnboardingModel}
     */
    ThirdPartyOnboardingModel,

    /**
     * The YesNoQuestionModel model constructor.
     * @property {module:model/YesNoQuestionModel}
     */
    YesNoQuestionModel,

    /**
    * The LeadsApi service constructor.
    * @property {module:api/LeadsApi}
    */
    LeadsApi
};