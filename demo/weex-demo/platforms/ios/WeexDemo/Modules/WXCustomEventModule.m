//
//  WXCustomEventModule.m
//  WeexDemo
//
//  Created by casperchen on 2018/4/20.
//  Copyright © 2018年 taobao. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "WXCustomEventModule.h"
//#import "WXDemoViewController.h"
#import <WeexSDK/WXSDKManager.h>
//#import <WeexSDK/WXUtility.h>

@implementation WXCustomEventModule

//@synthesize weexInstance;

WX_EXPORT_METHOD_SYNC(@selector(showParams:))
WX_EXPORT_METHOD(@selector(getParams:))

-(void)showParams:(NSString *)inputParam
{
    if (!inputParam) {
        NSLog(@"hello");
//        return;
    } else {
        NSLog(@"%@", inputParam);
    }
}

-(void)getParams: (WXModuleKeepAliveCallback)callback
{
//    return @"hello weex";
    callback(@"hello weex", true);
}

//[WXSDKEngine registerModule:@"ddd" withClass:[WXCustomEventModule class]];

@end

