#include <node_api.h>

napi_value Add(napi_env env, napi_callback_info info) {
	size_t argc = 2;
	napi_value argv[argc];
	napi_value thisArg;
	napi_get_cb_info(env, info, &argc, argv, &thisArg, nullptr);

	int32_t lnum = 0, rnum = 0, sum = 0;
	napi_value napiSum;

	napi_get_value_int32(env, argv[0], &lnum);
  napi_get_value_int32(env, argv[1], &rnum);

	sum = lnum + rnum;
	
	napi_create_int32(env, sum, &napiSum);
	
	return napiSum;
}

napi_value Init(napi_env env, napi_value exports) {
  napi_status status;

  napi_property_descriptor desc = {"add", NULL, Add, NULL, NULL, NULL, napi_default, NULL};
  status = napi_define_properties(env, exports, 1, &desc);  

  if (status != napi_ok) return NULL;

	return exports;
}

NAPI_MODULE(math, Init);  // 注册扩展，扩展名叫做hello，Init为扩展的初始化方法