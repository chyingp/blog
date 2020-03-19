//
//  RNTMapManager.m
//  RNTest
//
//  Created by casperchen on 2019/11/9.
//  Copyright © 2019年 casper. All rights reserved.
//

// RNTMapManager.m
#import <MapKit/MapKit.h>
#import <React/RCTViewManager.h>
#import "RCTConvert+Hello.m"

@interface RNTMapManager : RCTViewManager
@end

@implementation RNTMapManager

RCT_EXPORT_MODULE(RNTMap)

- (UIView *)view
{
    return [[MKMapView alloc] init];
}

RCT_EXPORT_VIEW_PROPERTY(zoomEnabled, BOOL)


// RNTMapManager.m
RCT_CUSTOM_VIEW_PROPERTY(region, MKCoordinateRegion, MKMapView)
{
    [view setRegion:json ? [RCTConvert MKCoordinateRegion:json] : defaultView.region animated:YES];
}

@end
