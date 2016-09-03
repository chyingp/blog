#!/usr/bin/python
#coding=utf-8

import sys;

print "参数个数为：", len(sys.argv), '个'
print "参数列表：", str(sys.argv)


# ➜  args git:(master) ✗ ./argv.py a b c
# 参数个数为： 4 个
# 参数列表： ['./argv.py', 'a', 'b', 'c']