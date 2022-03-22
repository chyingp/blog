#include <napi.h>

using namespace Napi;

// Napi::String Method(const Napi::CallbackInfo& info) {
//   Napi::Env env = info.Env();
//   return Napi::String::New(env, "world");
// }

Napi::Number Add(const Napi::CallbackInfo& info) {
  uint32_t num1 = info[0].As<Napi::Number>().Uint32Value();
  uint32_t num2 = info[1].As<Napi::Number>().Uint32Value();
  Napi:Number result = Napi::Number::New(info.Env(), num1 + num2);
  
  return result;
}

Napi::Object Init(Napi::Env env, Napi::Object exports) {
  exports.Set(Napi::String::New(env, "add"),
              Napi::Function::New(env, Add));
  return exports;
}

NODE_API_MODULE(addon, Init)
