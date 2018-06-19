#include <node_api.h>
#include <stdio.h>

void do_something_asynchronous (napi_env env, napi_deferred deferred) {
  napi_value undefined;
  napi_status status;

  status = napi_get_undefined(env, &undefined);
  napi_resolve_deferred(env, deferred, undefined);
  
  deferred = NULL;
}

napi_value GetPromise(napi_env env, napi_callback_info info) {
  napi_deferred deferred;
  napi_value promise;
  napi_status status;

  // Create the promise.
  status = napi_create_promise(env, &deferred, &promise);
  if (status != napi_ok) return NULL;

  // Pass the deferred to a function that performs an asynchronous action.
  do_something_asynchronous(env, deferred);

  // Return the promise to JS
  return promise;
}

napi_value Init(napi_env env, napi_value exports) {
  napi_status status;
  napi_property_descriptor desc =
    {"getPromise", NULL, GetPromise, NULL, NULL, NULL, napi_default, NULL};
  status = napi_define_properties(env, exports, 1, &desc);
  if (status != napi_ok) return NULL;
  return exports;
}

NAPI_MODULE(world, Init);  // 注册扩展，扩展名叫做hello，Init为扩展的初始化方法