#!/usr/bin/python
#coding=utf-8

def printInfo( name, age = 20 ):
	print "Name: ", name;
	print "Age: ", age;
	return;

printInfo( name = "casper", age = 28 );
printInfo( name = "casper" ); # 缺省参数