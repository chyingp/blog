//
//  CalendarManager.m
//  CallintNativeModules
//
//  Created by casperchen on 2018/6/7.
//  Copyright © 2018年 Facebook. All rights reserved.
//
#import "CalendarManager.h"
#import <React/RCTLog.h>

@implementation CalendarManager

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(addEvent:(NSString *)name location:(NSString *)location){
  RCTLogInfo(@"Pretending to create an event %@ at %@", name, location);
}

RCT_EXPORT_METHOD(findFriends:(RCTResponseSenderBlock)callback)
{
  NSArray *friends = @[@"Tom", @"Green"];
  callback(@[[NSNull null], friends]);
}

RCT_REMAP_METHOD(findEvents,
                 findEventsWithResolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
  NSArray *events = @[@"起床", @"上班"];
  if (events) {
    resolve(events);
  } else {
//    NSError *error = ...
//    reject(@"no_events", @"There were no events", error);
  }
}
@end
