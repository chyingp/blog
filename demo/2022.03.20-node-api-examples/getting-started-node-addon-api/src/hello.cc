#include <napi.h>

using namespace Napi;

Napi::String HelloMethod(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();
  return Napi::String::New(env, "say hello");
}

Napi::Object Init(Napi::Env env, Napi::Object exports) {
  exports.Set(Napi::String::New(env, "hello"),
              Napi::Function::New(env, HelloMethod));
  return exports;
}

NODE_API_MODULE(addon, Init)
