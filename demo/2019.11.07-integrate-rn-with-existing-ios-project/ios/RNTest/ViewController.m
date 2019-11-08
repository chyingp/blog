//
//  ViewController.m
//  RNTest
//
//  Created by casper on 2019/11/7.
//  Copyright © 2019年 casper. All rights reserved.
//

#import "ViewController.h"
#import <React/RCTRootView.h>

@interface ViewController ()

@end

@implementation ViewController

- (IBAction)rnTestButtonPressed:(id)sender {
    NSLog(@"RNTest Button Pressed");
    NSURL *jsCodeLocation = [NSURL URLWithString:@"http://localhost:8081/index.bundle?platform=ios"];
    
    RCTRootView *rootView =
    [[RCTRootView alloc] initWithBundleURL: jsCodeLocation
                                moduleName: @"RNTest"
                         initialProperties:
     @{
       //       @"scores" : @[
       //               @{
       //                   @"name" : @"Alex",
       //                   @"value": @"42"
       //                   },
       //               @{
       //                   @"name" : @"Joel",
       //                   @"value": @"10"
       //                   }
       //               ]
       }
                             launchOptions: nil];
    UIViewController *vc = [[UIViewController alloc] init];
    vc.view = rootView;
    [self presentViewController:vc animated:YES completion:nil];
}


- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view, typically from a nib.
    NSLog(@"viewDidLoad");
}


@end
