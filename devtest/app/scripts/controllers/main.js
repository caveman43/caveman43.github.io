'use strict';

/**
 * Controller of the devtestApp
 */
angular.module('devtestApp')
    .controller('MainCtrl', function ($scope) {

        //Variable declaration

        $scope.saveDisabled = true;
        $scope.backDisabled = true;

        //Tabs
        $scope.tabs = [{
            title: '1. DEFINITION',
            template: 'definition-template.html',
            id: 0
        }, {
            title: '2. IMAGES',
            template: 'images-template.html',
            id: 1
        }, {
            title: '3. USERS',
            template: 'users-template.html',
            id: 2
        }, {
            title: '4. SUMMARY',
            template: 'summary-template.html',
            id:3

        }];

        //Image tab content
        $scope.imageList = [{name:'Creative Team', id:101},
            {name:'Productivity Apps', id:102},
            {name:'RDSH Server win 7', id:103},
            {name:'Windows 7 for R&D', id:104},
            {name:'Windows 7 for Sales', id:105},
            {name:'Windows 8 for Execs', id:106},
            {name:'Windows 8 for R&D', id:107}
        ];

        //Image description
        $scope.imageDesc = {
            103 : {
                name : 'RDSH Server Win7',
                version: '10',
                os: 'Windows 2008 R2 - 64',
                dc: 'San Francisco ( 5 of 6 Used)',
                hwv: 'vmx-08',
                modified:'2014/06/25, 1600hrs',
                lastbkp: '2014/06/25, 1600hrs',
                desc: 'Some desc about the image'
            },
            101 : {
                name : 'Creative Team',
                version: '1.0',
                os: 'MAC Yosemite R2 - 64',
                dc: 'Santa Clara ( 5 of 6 Used)',
                hwv: 'vmx-08',
                modified:'2014/06/25, 1600hrs',
                lastbkp: '2014/06/25, 1600hrs',
                desc: 'Some desc about the image'
            },
            104 :{
                name : 'Windows 7 for R&D',
                version: '10.4',
                os: 'windows 8',
                dc: 'China ( 5 of 6 Used)',
                hwv: 'vmx-08',
                modified:'2015/06/25, 1600hrs',
                lastbkp: '2015/06/25, 1600hrs',
                desc: 'Some desc about the image'
            }
        };

        $scope.tab = $scope.tabs[0];//current tab

        //Selecte image from list
        $scope.chooseImage = function(item){
            $scope.selectedImage = item;
            $scope.imageDetail = $scope.imageDesc[item.id];

        };

        //Select tab
        $scope.selectTab = function (tab) {
            $scope.tab = tab;
        };

        //Set active tab
        $scope.isActiveTab = function(tabid) {
            return (tabid === $scope.tab.id);
        };

        //Navigate tabs
        $scope.nextTab = function(tab){
            var index = tab.id + 1;
            $scope.saveDisabled = false;
            $scope.tab = $scope.tabs[index];
            $scope.backDisabled = false;
        };

        //Navigate tabs
        $scope.prevTab = function(tab){
            var index = tab.id - 1;
            $scope.tab = $scope.tabs[index];
        };

        //Watch current position of the tab - enable or disable tabs
        $scope.$watch("tab",function(tab){
            if(tab.id == 0){
                $scope.backDisabled = true;
            }
            else{
                $scope.backDisabled = false;
            }
            if(tab.id >= $scope.tabs.length-1){
                $scope.nextDisabled = true;
            }
            else {
                $scope.nextDisabled = false;
            }
        },true);

    });