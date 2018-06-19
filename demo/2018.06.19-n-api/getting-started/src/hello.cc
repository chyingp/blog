#include <node_api.h>
#include <stdio.h>

napi_value SayHello(napi_env env, napi_callback_info info) {
  printf("Hello\n");
  return NULL;
}

napi_value Init(napi_env env, napi_value exports) {
  napi_status status;
  napi_property_descriptor desc =
    {"hello", NULL, SayHello, NULL, NULL, NULL, napi_default, NULL};
  status = napi_define_properties(env, exports, 1, &desc);
  if (status != napi_ok) return NULL;
  return exports;
}

NAPI_MODULE(hello, Init);  // 注册扩展，扩展名叫做hello，Init为扩展的初始化方法