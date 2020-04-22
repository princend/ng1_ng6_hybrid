// angular.module('home', []);

angular.module('home', []).
    component('home', {
        templateUrl: 'ng1/app/home/home.component.html',
        controller: ['$http',
            function HomeController($http) {
                var self = this;
                self.chapters = chapters;
                self.navigate = function (chapter) {
                    console.log('ddd',chapter)
                    location.href = `${chapter.url}`

                }
            }
        ],
        controllerAs: 'self'
    })

const chapters = [
    { lesson: 1, name: '元件', url: '/trend' },
    { lesson: 2, name: '路由', url: '/activities' },
    { lesson: 3, name: '過濾器', url: '/filter' },
    { lesson: 4, name: 'ng6', url: '/new/test' }
]