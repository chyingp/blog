#!/usr/bin/python
#coding=utf-8

def printInfo( name, *vartuple ):
	print "Name: ", name;
	for var in vartuple:
		print var;
	return;

printInfo( "casper", 1, 2, 3 );