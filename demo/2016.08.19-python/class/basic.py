#!/usr/bin/python
#coding=utf-8

class Person:
	age = 20;
	name = "name"
	__priv = "hello"
	def __init__( self, name, age ):
		self.name = name
		self.age = age

	def printInfo(self):
		print "name: ", self.name, ", age: ", self.age

p = Person("casper", 28);
p.printInfo()
print p.name
# print p.__priv 这句会报错