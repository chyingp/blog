//
//  TodoList.m
//  RNTest
//
//  Created by casper on 2019/11/8.
//  Copyright © 2019年 casper. All rights reserved.
//

#import "TodoList.h"
#import <React/RCTLog.h>

@implementation TodoList

NSMutableArray *list = nil;

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(create)
{
    list = [[NSMutableArray alloc] init];
}

RCT_EXPORT_METHOD(add:(NSString *)item)
{
    NSLog(@"add: %@", item);
    [list addObject:@{ @"desc":item, @"done": @0 }];
}

RCT_EXPORT_METHOD(addWithCallback:(NSString *)item callback:(RCTResponseSenderBlock)callback)
{
    NSLog(@"addWithCallback: %@", item);
    
    [list addObject:@{ @"desc":item, @"done": @0 }];
    callback(@[[NSNull null], list]);
}


RCT_EXPORT_METHOD(findEvents:(RCTResponseSenderBlock)callback)
{
    callback(@[[NSNull null], @"Event from Native Module."]);
}

// 返回的数组为支持的事件名列表
- (NSArray<NSString *> *)supportedEvents
{
    return @[@"MyEvent"];
}

RCT_EXPORT_METHOD(triggerEvents:(NSString *)msg)
{
    [self sendEventWithName:@"MyEvent" body:msg];
}

RCT_REMAP_METHOD(getPromise,
                 ifResolved:(int) ifResolved
                 findEventsWithResolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    if (ifResolved) {
        resolve(@"success");
    } else {
        NSString *domain = @"com.chyingp.www";
        NSDictionary *userInfo = @{ @"desc": @"nonsense" };
        NSInteger code = -1;
        NSError *error =[NSError errorWithDomain:domain code:code userInfo:userInfo];
        
        reject(@"ErrorFromNativeModule", @"Error occurred.", error);
    }
}

@end
