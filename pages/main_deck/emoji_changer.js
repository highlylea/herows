$('.user5').find('.user_emoji').addClass('last_column_emoji');
new FgEmojiPicker({
    trigger:['.user_emoji','.log_emoji2'],
    position: ['top', 'right'],
    emit(obj, triggerElement) {
        let emoji = obj.emoji;
        triggerElement.innerText = emoji;
    }
});
