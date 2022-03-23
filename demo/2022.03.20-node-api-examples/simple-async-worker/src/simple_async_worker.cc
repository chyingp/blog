#include<napi.h>

#include <chrono>
#include <thread>

using namespace Napi;

class EchoWorker : public AsyncWorker {
    public:
        EchoWorker(Function& callback, std::string& echo)
        : AsyncWorker(callback), echo(echo) {}

        ~EchoWorker() {}
    // This code will be executed on the worker thread
    void Execute() override {
        // Need to simulate cpu heavy task
        // echo << 'hello world.' << endl;
        // printf('hello world. \n');
        std::this_thread::sleep_for(std::chrono::seconds(1));
    }

    void OnOK() override {
        HandleScope scope(Env());
        Callback().Call({Env().Null(), String::New(Env(), echo)});
    }

    private:
        std::string echo;
};

// #include <napi.h>

// using namespace Napi;

// Napi::String Method(const Napi::CallbackInfo& info) {
//   Napi::Env env = info.Env();
//   return Napi::String::New(env, "world");
// }

Napi::Value Echo(const Napi::CallbackInfo& info) {
    // You need to validate the arguments here.
    Napi::Function cb = info[1].As<Function>();
    std::string in = info[0].As<String>();
    EchoWorker* wk = new EchoWorker(cb, in);
    wk->Queue();
    return info.Env().Undefined();
}

Napi::Object Init(Napi::Env env, Napi::Object exports) {
  exports.Set(Napi::String::New(env, "echo"),
              Napi::Function::New(env, Echo));
  return exports;
}

NODE_API_MODULE(addon, Init)
