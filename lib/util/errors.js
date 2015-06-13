

module.exports = {

    /**
     * Static Error Code Variables
     */
    DB_CONNECTION_ERROR         : { code : 401, message : 'db_connection_error' },
    DYNAMO_INIT_ERROR           : { code : 401, message : 'dynamo_db_connection_error'},
    DYNAMO_PUT_ITEM_ERROR       : { code : 400, message : 'dynamodb_putItem_error' },
    DYNAMO_GET_ITEM_ERROR       : { code : 400, message : 'dynamodb_getItem_error' },
    GENERIC_QUERY_ERROR         : { code : 500, message : 'generic_db_error' },
    INVALID_INPUT               : { code : 400, message : 'invalid_input' },
    INVALID_VERSION             : { code : 400, message : 'version_info_not_supplied'},
    INVALID_PLATFORM            : { code : 400, message : 'invalid_build_platform'},
    INVALID_REQUEST_DATA        : { code : 400, message : 'invalid_request_data_no_json' },
    INVALID_TOKEN_DATA          : { code : 400, message : 'invalid_token_data' },
    MISSING_CRITERIA_JSON_DATA  : { code : 400, message : 'missing_JSON_data' },
    MISSING_LANGUAGE            : { code : 400, message : 'language_parameter_missing' },
    MISSING_MODEL_NAME          : { code : 400, message : 'device_model_name_missing' },
    MISSING_PRODUCT_INFO        : { code : 400, message : 'product_info_missing' },
    MISSING_ENVIRONMENT_INFO    : { code : 400, message : 'environment_info_missing' },
    MISSING_COUNTRY             : { code : 400, message : 'country_parameter_missing' },
    MISSING_DEVICE_INFO         : { code : 400, message : 'device_info_missing' },
    MISSING_TIMEZONE_OFFSET     : { code : 400, message : 'missing_timezone_ofset' },
    NO_RESULT                   : { code : 204, message : 'no_result' },
    RESOURCE_IS_NOT_UNIQUE      : { code : 409, message : 'resource_not_unique' },
    RESOURCE_NOT_FOUND          : { code : 404, message : 'resource_not_found' },
    UNKNOWN_LANGUAGE            : { code : 400, message : 'unknown_language_parameter' },
    UNKNOWN_COUNTRY             : { code : 400, message : 'unknown_country_parameter' },
    EB_ERROR                    : { code : 400, message : 'eb_error' }
};
