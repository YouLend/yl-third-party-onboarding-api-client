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


import ApiClient from "../ApiClient";
import DocumentSigningViewModel from '../model/DocumentSigningViewModel';
import ProblemDetails from '../model/ProblemDetails';

/**
* DocumentSigning service.
* @module api/DocumentSigningApi
* @version 1.0
*/
export default class DocumentSigningApi {

    /**
    * Constructs a new DocumentSigningApi. 
    * @alias module:api/DocumentSigningApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Gets the document signing for specified document
     * @param {String} documentSigningId GUID used to identify the document signing
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiVersion 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DocumentSigningViewModel} and HTTP response
     */
    documentSigningDocumentSigningIdGetWithHttpInfo(documentSigningId, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'documentSigningId' is set
      if (documentSigningId === undefined || documentSigningId === null) {
        throw new Error("Missing the required parameter 'documentSigningId' when calling documentSigningDocumentSigningIdGet");
      }

      let pathParams = {
        'documentSigningId': documentSigningId
      };
      let queryParams = {
      };
      let headerParams = {
        'api-version': opts['apiVersion']
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = [];
      let accepts = ['application/json', 'application/xml'];
      let returnType = DocumentSigningViewModel;
      return this.apiClient.callApi(
        '/DocumentSigning/{documentSigningId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Gets the document signing for specified document
     * @param {String} documentSigningId GUID used to identify the document signing
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiVersion 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DocumentSigningViewModel}
     */
    documentSigningDocumentSigningIdGet(documentSigningId, opts) {
      return this.documentSigningDocumentSigningIdGetWithHttpInfo(documentSigningId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
