

angular.module('filter', []).
    component('filter', {
        templateUrl: 'ng1/app/filter/filter.component.html',
        controller: [
            function FilterController() {
                var self = this;
                self.dateArr = [];
                self.dateArr.push(new Date());
                self.addDate = () => {
                    self.dateArr.unshift(self.date);
                }
            }
        ],
        controllerAs: 'self'
    })

