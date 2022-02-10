#pragma once

#include <napi.h>

class NodeApiObjectWrap : public Napi::ObjectWrap<NodeApiObjectWrap>
{
public:
    NodeApiObjectWrap(const Napi::CallbackInfo&);
    Napi::Value Greet(const Napi::CallbackInfo&);

    static Napi::Function GetClass(Napi::Env);

private:
    std::string _greeterName;
};
