
var activitiesMudule = angular.module('activities', ['ngRoute', 'oc.lazyLoad']);



var activities =
    [{
        id: 1,
        Title: '紅包派送',
        SubTitle: '限時領取紅包活動',
        Icon: 'fa fa-envelope-open',
        Url: '/activities/RedEnvelopeManagement',
        Display: this.viewRedEnvelopeManagementAuthority
    },
    {
        id: 2,
        Title: '限時優惠',
        SubTitle: '限時指定平台派送',
        Icon: 'fa fa-clock-o',
        Url: '/activities/DiscountWallet',
        Display: this.viewTimeLimitEventAuthority
    },
    {
        id: 3,
        Title: '幸運轉盤',
        SubTitle: '機率轉盤活動',
        Icon: 'fa fa-circle',
        Url: '/activities/LuckyWheelManagement',
        Display: this.viewLuckyWheelManagementAuthority
    },
    {
        id: 4,
        Title: '簽到獎勵',
        SubTitle: '簽到獎勵送彩金',
        Icon: 'fa fa-calendar-check-o',
        Url: '/activities/CheckinEvent',
        Display: this.viewCheckInOfferAuthority
    },
    {
        id: 5,
        Title: '任務挑戰',
        SubTitle: '完成任務目標送彩金',
        Icon: 'fa fa-th',
        Url: '/activities/MissionReward',
        Display: this.viewMissionRewardAuthority
    },
    {
        id: 6,
        Title: '時來運轉',
        SubTitle: '機率轉盤活動',
        Icon: 'fa fa-empire',
        Url: '/activities/NewLuckyWheel',
        Display: this.viewNewLuckyWheelAuthority
    }];

var ActivitiesController = function () {
    var self = this;
    self.activities = activities;
    self.url = location.href;
}



// var ActivitiesController = require('./activities.component').ActivitiesController;


/**元件 */
const components = [
    {
        name: 'activities', config: {
            templateUrl: 'ng1/app/activities/activities.component.html',
            controller: ActivitiesController,
            controllerAs: 'self'
        }
    }
]

components.forEach(component => {
    activitiesMudule.component(component.name, component.config);
})



/** router設定 使用套件 */

activitiesMudule.config(["$ocLazyLoadProvider", function ($ocLazyLoadProvider) {
    $ocLazyLoadProvider.config({
        'debug': false,
        'events': true,
        'modules': [
            {
                name: 'redEnvelopeManagement',
                files: ['ng1/app/activities/red-envelope-management/red-envelope-management.component.js']
            },
            {
                name: 'checkinEvent',
                files: ['ng1/app/activities/checkin-event/checkin-event.component.js']
            },
            {
                name: 'discountWallet',
                files: ['ng1/app/activities/discount-wallet/discount-wallet.component.js']
            },
            {
                name: 'luckyWheelManagement',
                files: ['ng1/app/activities/lucky-wheel-management/lucky-wheel-management.component.js']
            },
            {
                name: 'missionReward',
                files: ['ng1/app/activities/mission-reward/mission-reward.component.js']
            },
            {
                name: 'newLuckyWheel',
                files: ['ng1/app/activities/new-lucky-wheel/new-lucky-wheel.component.js']
            }
        ]
    });
}]);


activitiesMudule.config(function ($routeProvider) {
    $routeProvider
        .when('/activities/RedEnvelopeManagement', {
            templateUrl: 'ng1/app/activities/red-envelope-management/red-envelope-management.component.html',
            controller: 'RedEnvelopeManagementController',
            resolve: {
                LazyLoadCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load('redEnvelopeManagement'); // Resolve promise and load before view 
                }]
            }
        })

        .when('/activities/CheckinEvent', {
            templateUrl: 'ng1/app/activities/checkin-event/checkin-event.component.html',
            controller: 'CheckinEventController',
            resolve: {
                LazyLoadCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load('checkinEvent'); // Resolve promise and load before view 
                }]
            }
        })
        .when('/activities/DiscountWallet', {
            templateUrl: 'ng1/app/activities/discount-wallet/discount-wallet.component.html',
            controller: 'DiscountWalletController',
            resolve: {
                LazyLoadCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load('discountWallet'); // Resolve promise and load before view 
                }]
            }
        })
        .when('/activities/LuckyWheelManagement', {
            templateUrl: 'ng1/app/activities/lucky-wheel-management/lucky-wheel-management.component.html',
            controller: 'LuckyWheelManagementController',
            resolve: {
                LazyLoadCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load('luckyWheelManagement'); // Resolve promise and load before view 
                }]
            }
        })
        .when('/activities/MissionReward', {
            templateUrl: 'ng1/app/activities/mission-reward/mission-reward.component.html',
            controller: 'MissionRewardController',
            resolve: {
                LazyLoadCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load('missionReward'); // Resolve promise and load before view 
                }]
            }
        })
        .when('/activities/NewLuckyWheel', {
            templateUrl: 'ng1/app/activities/new-lucky-wheel/new-lucky-wheel.component.html',
            controller: 'NewLuckyWheelController',
            resolve: {
                LazyLoadCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load('newLuckyWheel'); // Resolve promise and load before view 
                }]
            }
        })
    $routeProvider.otherwise('/activities');
});


/** router 設定  不使用套件*/
// activitiesMudule.
//     config(['$routeProvider', '$controllerProvider',
//         function config($routeProvider, $controllerProvider) {
//             activitiesMudule.registerCtrl = $controllerProvider.register;

//             function loadScript(path) {
//                 var result = $.Deferred(),
//                     script = document.createElement("script");
//                 script.async = "async";
//                 script.type = "text/javascript";
//                 script.src = path;
//                 script.onload = script.onreadystatechange = function (_, isAbort) {
//                     if (!script.readyState || /loaded|complete/.test(script.readyState)) {
//                         if (isAbort)
//                             result.reject();
//                         else
//                             result.resolve();
//                     }
//                 };
//                 script.onerror = function () { result.reject(); };
//                 document.querySelector("head").appendChild(script);
//                 return result.promise();
//             }


//             function loader(arrayName) {
//                 return {
//                     load: function ($q) {
//                         var deferred = $q.defer(),
//                             map = arrayName.map(function (name) {
//                                 return loadScript('/activities/' + name + ".js");
//                             });

//                         $q.all(map).then(function (r) {
//                             deferred.resolve();
//                         });

//                         return deferred.promise;
//                     }
//                 };
//             }

//             $routeProvider
//                 .when('/activities/CheckinEvent', {
//                     templateUrl: '/activities/checkin-event/checkin-event.component.html',
//                     controller: 'CheckinEventController',
//                     resolve: loader(['checkin-event/checkin-event.component'])
//                 })
//                 .when('/activities/DiscountWallet', {
//                     templateUrl: '/activities/discount-wallet/discount-wallet.component.html',
//                     controller: 'DiscountWalletController',
//                     resolve: loader(['discount-wallet/discount-wallet.component'])
//                 })
//                 .when('/activities/LuckyWheelManagement', {
//                     templateUrl: '/activities/lucky-wheel-management/lucky-wheel-management.component.html',
//                     controller: 'LuckyWheelManagementController',
//                     resolve: loader(['lucky-wheel-management/lucky-wheel-management.component'])
//                 })
//                 .when('/activities/MissionReward', {
//                     templateUrl: '/activities/mission-reward/mission-reward.component.html',
//                     controller: 'MissionRewardController',
//                     resolve: loader(['mission-reward/mission-reward.component'])
//                 })
//                 .when('/activities/NewLuckyWheel', {
//                     templateUrl: '/activities/new-lucky-wheel/new-lucky-wheel.component.html',
//                     controller: 'NewLuckyWheelController',
//                     resolve: loader(['new-lucky-wheel/new-lucky-wheel.component'])
//                 })
//                 .when('/activities/RedEnvelopeManagement', {
//                     templateUrl: '/activities/red-envelope-management/red-envelope-management.component.html',
//                     controller: 'RedEnvelopeManagementController',
//                     resolve: loader(['red-envelope-management/red-envelope-management.component'])
//                 })
//                 .otherwise('/activities');
//         }
//     ]);


