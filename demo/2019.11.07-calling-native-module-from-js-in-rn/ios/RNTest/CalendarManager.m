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

@end
