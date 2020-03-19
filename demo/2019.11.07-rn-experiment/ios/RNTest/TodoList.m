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

// 例子：方法导出
RCT_EXPORT_METHOD(add:(NSString *)item)
{
    NSLog(@"add: %@", item);
    [list addObject:@{ @"desc":item, @"done": @0 }];
}

// 例子：方法导出，支持回调
RCT_EXPORT_METHOD(addWithCallback:(NSString *)item callback:(RCTResponseSenderBlock)callback)
{
    NSLog(@"addWithCallback: %@", item);
    
    [list addObject:@{ @"desc":item, @"done": @0 }];
    callback(@[[NSNull null], list]);
}

// 返回的数组为支持的事件名列表
- (NSArray<NSString *> *)supportedEvents
{
    return @[@"ItemAdded"];
}

// 例子：事件抛出
RCT_EXPORT_METHOD(addAndTriggerEvent:(NSString *)item)
{
    NSLog(@"addAndTriggerEvent: %@", item);
    
    [list addObject:@{ @"desc":item, @"done": @0 }];
    [self sendEventWithName:@"ItemAdded" body:list];
}

// 例子：返回Promise实例
RCT_REMAP_METHOD(addAndReturnPromise,
                 item:(NSString *) item
                 ifResolved:(int) ifResolved
                 findEventsWithResolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    NSLog(@"addAndTriggerEvent: %@", item);

    [list addObject:@{ @"desc":item, @"done": @0 }];
    
    if (ifResolved) {
        resolve([NSString stringWithFormat:@"%@ is accepted.", item]);
    } else {
        NSString *domain = @"com.chyingp.www";
        NSDictionary *userInfo = @{ @"desc": @"nonsense" };
        NSInteger code = -1;
        NSError *error =[NSError errorWithDomain:domain code:code userInfo:userInfo];
        NSString *errMsg = [NSString stringWithFormat:@"%@ is not accepted.", item];
        
        reject(@"ErrorFromNativeModule", errMsg, error);
    }
}

@end
