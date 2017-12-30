#pragma once
class StaticMath {
  public:
    StaticMath(void);
    ~StaticMath(void);
    
    static double add(double a, double b);
    static double sub(double a, double b);
    static double mul(double a, double b);
    static double div(double a, double b);
};