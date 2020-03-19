// RNTMapView.h

#import <MapKit/MapKit.h>

#import <React/RCTComponent.h>

@interface RNTMapView: MKMapView

@property (nonatomic, copy) RCTBubblingEventBlock onRegionChange;

@end

// RNTMapView.m

#import "RNTMapView.h"

@implementation RNTMapView

@end
