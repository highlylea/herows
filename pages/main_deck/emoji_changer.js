$('.user_emoji').click(function(){
    new FgEmojiPicker({
        // trigger: ['button', 'textarea'],
        trigger:['.user_emoji'],
        position: ['top', 'right'],
        emit(obj, triggerElement) {
            console.log(triggerElement);
            let emoji = obj.emoji;
            triggerElement.innerText = emoji;
        }
    });

});
