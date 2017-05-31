/**
 * Created by NaxFast on 31.05.2017.
 */
(function () {
    'use strict';
    angular.module('app').directive('chatRoom', chatRoom);
    angular.module('app').controller('ChatRoomCtrl', ChatRoomCtrl);

    function chatRoom() {
        return {
            scope: true,
            restrict: 'E',
            controller: 'ChatRoomCtrl',
            templateUrl: '../scr/chatRoom/chatRoom.html'
        };
    }

    function ChatRoomCtrl($scope) {

        if ('BroadcastChannel' in window) {
            const channel = new BroadcastChannel('sample_channel');
            let send = document.querySelector(".send");
            let enter = document.querySelector(".enter");
            let messageText = document.querySelector(".message-text");
            let messageContent = document.querySelector(".message-content");
            let nickname = document.querySelector(".nick");

            enter.addEventListener("click", () => {
                channel.postMessage("<span>" + "Coming user with nickname" + "</span>" + " - " + "<b>" + nickname.value + "</b>");
            },false);

            $scope.show = function () {
                $scope.login = true;
            };

            send.addEventListener("click", () => {
                channel.postMessage(nickname.value + ": " + "<span>" + messageText.value + "</span>");
            createMessage("You: " + messageText.value);
            messageText.value = "";},
            false);


            channel.addEventListener("message", (e) => {createMessage(e.data);},false);

            function createMessage(message) {
                let messageShow = document.createElement("p");
                messageShow.innerHTML = message;
                messageContent.appendChild(messageShow);
            }
        }
    }
})();