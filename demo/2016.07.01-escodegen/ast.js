module.exports = {
    "type": "Program",
    "body": [
        {
            "type": "ForStatement",
            "init": {
                "type": "VariableDeclaration",
                "declarations": [
                    {
                        "type": "VariableDeclarator",
                        "id": {
                            "type": "Identifier",
                            "name": "i"
                        },
                        "init": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1"
                        }
                    }
                ],
                "kind": "var"
            },
            "test": {
                "type": "BinaryExpression",
                "operator": "<=",
                "left": {
                    "type": "Identifier",
                    "name": "i"
                },
                "right": {
                    "type": "Literal",
                    "value": 100,
                    "raw": "100"
                }
            },
            "update": {
                "type": "UpdateExpression",
                "operator": "++",
                "argument": {
                    "type": "Identifier",
                    "name": "i"
                },
                "prefix": true
            },
            "body": {
                "type": "BlockStatement",
                "body": [
                    {
                        "type": "IfStatement",
                        "test": {
                            "type": "BinaryExpression",
                            "operator": "===",
                            "left": {
                                "type": "BinaryExpression",
                                "operator": "%",
                                "left": {
                                    "type": "Identifier",
                                    "name": "i"
                                },
                                "right": {
                                    "type": "Literal",
                                    "value": 15,
                                    "raw": "15"
                                }
                            },
                            "right": {
                                "type": "Literal",
                                "value": 0,
                                "raw": "0"
                            }
                        },
                        "consequent": {
                            "type": "BlockStatement",
                            "body": [
                                {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                        "type": "CallExpression",
                                        "callee": {
                                            "type": "MemberExpression",
                                            "computed": false,
                                            "object": {
                                                "type": "Identifier",
                                                "name": "console"
                                            },
                                            "property": {
                                                "type": "Identifier",
                                                "name": "log"
                                            }
                                        },
                                        "arguments": [
                                            {
                                                "type": "Literal",
                                                "value": "FizzBuzz",
                                                "raw": "'FizzBuzz'"
                                            }
                                        ]
                                    }
                                }
                            ]
                        },
                        "alternate": {
                            "type": "IfStatement",
                            "test": {
                                "type": "BinaryExpression",
                                "operator": "===",
                                "left": {
                                    "type": "BinaryExpression",
                                    "operator": "%",
                                    "left": {
                                        "type": "Identifier",
                                        "name": "i"
                                    },
                                    "right": {
                                        "type": "Literal",
                                        "value": 3,
                                        "raw": "3"
                                    }
                                },
                                "right": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0"
                                }
                            },
                            "consequent": {
                                "type": "BlockStatement",
                                "body": [
                                    {
                                        "type": "ExpressionStatement",
                                        "expression": {
                                            "type": "CallExpression",
                                            "callee": {
                                                "type": "MemberExpression",
                                                "computed": false,
                                                "object": {
                                                    "type": "Identifier",
                                                    "name": "console"
                                                },
                                                "property": {
                                                    "type": "Identifier",
                                                    "name": "log"
                                                }
                                            },
                                            "arguments": [
                                                {
                                                    "type": "Literal",
                                                    "value": "Fizz",
                                                    "raw": "'Fizz'"
                                                }
                                            ]
                                        }
                                    }
                                ]
                            },
                            "alternate": {
                                "type": "IfStatement",
                                "test": {
                                    "type": "BinaryExpression",
                                    "operator": "===",
                                    "left": {
                                        "type": "BinaryExpression",
                                        "operator": "%",
                                        "left": {
                                            "type": "Identifier",
                                            "name": "i"
                                        },
                                        "right": {
                                            "type": "Literal",
                                            "value": 5,
                                            "raw": "5"
                                        }
                                    },
                                    "right": {
                                        "type": "Literal",
                                        "value": 0,
                                        "raw": "0"
                                    }
                                },
                                "consequent": {
                                    "type": "BlockStatement",
                                    "body": [
                                        {
                                            "type": "ExpressionStatement",
                                            "expression": {
                                                "type": "CallExpression",
                                                "callee": {
                                                    "type": "MemberExpression",
                                                    "computed": false,
                                                    "object": {
                                                        "type": "Identifier",
                                                        "name": "console"
                                                    },
                                                    "property": {
                                                        "type": "Identifier",
                                                        "name": "log"
                                                    }
                                                },
                                                "arguments": [
                                                    {
                                                        "type": "Literal",
                                                        "value": "Buzz",
                                                        "raw": "'Buzz'"
                                                    }
                                                ]
                                            }
                                        }
                                    ]
                                },
                                "alternate": {
                                    "type": "BlockStatement",
                                    "body": [
                                        {
                                            "type": "ExpressionStatement",
                                            "expression": {
                                                "type": "CallExpression",
                                                "callee": {
                                                    "type": "MemberExpression",
                                                    "computed": false,
                                                    "object": {
                                                        "type": "Identifier",
                                                        "name": "console"
                                                    },
                                                    "property": {
                                                        "type": "Identifier",
                                                        "name": "log"
                                                    }
                                                },
                                                "arguments": [
                                                    {
                                                        "type": "Identifier",
                                                        "name": "i"
                                                    }
                                                ]
                                            }
                                        }
                                    ]
                                }
                            }
                        }
                    }
                ]
            }
        }
    ],
    "sourceType": "script"
};