//
//  RCTBridgeModule.h>  @interface CalendarManager : NSObject <RCTBridgeModule> CalendarManager.m
//  RNTest
//
//  Created by casper on 2019/11/8.
//  Copyright © 2019年 casper. All rights reserved.
//

#import "CalendarManager.h"
#import <React/RCTLog.h>

@implementation CalendarManager

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(addEvent:(NSString *)name location:(NSString *)location)
{
    RCTLogInfo(@"Pretending to create an event %@ at %@", name, location);
    
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
//    NSString *eventName = notification.userInfo[@"name"];
//    [self sendEventWithName:@"EventReminder" body:@{@"name": eventName}];
    [self sendEventWithName:@"MyEvent" body:msg];
}

@end
