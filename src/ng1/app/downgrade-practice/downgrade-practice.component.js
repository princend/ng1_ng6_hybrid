angular.module('downgradePractice', []).
    component('downgradePractice', {
        templateUrl: 'ng1/app/downgrade-practice/downgrade-practice.component.html',
        controller: ['$http',
            function HomeController($http) {
                var self = this;
                self.title = '此部分為ng1 元件';
                self.content = "此部分為ng6 元件降級為ng1元件";
                self.inputValue = "";
                // self.chapters = chapters;
                // self.navigate = function (chapter) {
                //     location.href = `${chapter.url}`
                // }
                self.times = 0;
                self.outputEvent =  (event) => {
                    self.times += 1;
                }
            }
        ],
        controllerAs: 'self'
    })
