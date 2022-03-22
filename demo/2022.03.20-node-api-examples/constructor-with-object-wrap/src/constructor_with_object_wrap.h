#pragma once

#include <napi.h>

class ConstructorWithObjectWrap : public Napi::ObjectWrap<ConstructorWithObjectWrap>
{
public:
    ConstructorWithObjectWrap(const Napi::CallbackInfo&);
    Napi::Value Greet(const Napi::CallbackInfo&);

    static Napi::Function GetClass(Napi::Env);

private:
    std::string _greeterName;
};
