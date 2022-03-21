#include <node_api.h>

napi_value HelloMethod (napi_env env, napi_callback_info info) {
    napi_value world;
    napi_create_string_utf8(env, "say hello", 9, &world);
    return world;
}

napi_value Init(napi_env env, napi_value exports) {
  napi_status status;

  napi_value fn;
  status = napi_create_function(env, NULL, 0, HelloMethod, NULL, &fn);
  if (status != napi_ok) return NULL;

  status = napi_set_named_property(env, exports, "hello", fn);
  if (status != napi_ok) return NULL;

  return exports;
}

NAPI_MODULE(NODE_GYP_MODULE_NAME, Init)