/**
 * Created by wadeforever on 2016/10/18.
 */
/*global angular cyberplayer*/
'use strict';
angular.module('wasteApp').directive('lbPlayer', ['$state', '$timeout', '$rootScope', function ($state, $timeout, $rootScope) {
  return {
    restrict: 'A',
    replace: false,
    transculde: true,
    scope: {
      lbPlayerSet: '=',
      lbVideoResize: '='
    },
    link: function (scope, element, attr) {
      var player;
      $timeout(function () {
        if (scope.lbPlayerSet.resize) {
          scope.lbPlayerSet.option.width = angular.element(element).parent().width();
          scope.lbPlayerSet.option.height = (angular.element(window).height() - scope.lbPlayerSet.resize.height.h)
            * scope.lbPlayerSet.resize.height.row;
        }
        // 创建百度播放器

        createPlayer();

        if (scope.lbPlayerSet.watch) {
          scope.$watch('lbPlayerSet.option.file', function (newValue, oldValue) {
            if (newValue === oldValue)
              return;

            createPlayer();

          });
          scope.$watch('lbPlayerSet.option.playlist', function (newValue, oldValue) {
            if (newValue === oldValue)
              return;
            createPlayer();
          });
        }
      }, 50);

      /**
       * 创建播放器
       */
      function createPlayer () {
        // console.log(scope.lbPlayerSet.option)
        // 创建播放器
        console.log(scope.lbPlayerSet);
        player = cyberplayer(attr.id).setup(scope.lbPlayerSet.option);
        if (scope.lbPlayerSet.option.playlist) {
          player.seek(-scope.lbPlayerSet.option.playlist[0].playedTime);
        }
        scope.lbPlayerSet.BDplayer = player;
        // 创建进度变化的监听事件
        if (scope.lbPlayerSet.onTime) {
          player.onTime(function (event) {
            scope.$emit('ON_TIME', player.getPosition());
          });
        }
        if (scope.lbPlayerSet.resize) {
          angular.element(window).resize(function () {
            var winH = angular.element(window).height() < 580 ? 580 : angular.element(window).height();
            var h;
            if (scope.fullScreen) {
              h = winH - 50;
            } else {
              h = (winH - scope.lbPlayerSet.resize.height.h) * scope.lbPlayerSet.resize.height.row;
            }
            player.resize(null, h);
          });
        }
        $rootScope.$on('LB_FULLSCREEN', function (e, col) {
          scope.fullScreen = true;
          var winH = angular.element(window).height() < 580 ? 580 : angular.element(window).height();
          var h = winH - 50;
          console.log(h);
          player.resize(null, h);
        });
        $rootScope.$on('LB_CANCELFULLSCREEN', function (e, col) {
          scope.fullScreen = false;
          var winH = angular.element(window).height() < 580 ? 580 : angular.element(window).height();
          var h = (winH - col.player.resize.height.h) * col.player.resize.height.row;
          console.log(h);
          player.resize(null, h);
        });
      }
    }
  };
}]);
