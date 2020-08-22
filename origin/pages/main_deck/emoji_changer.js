$('.user5').find('.emoji').addClass('last_column_emoji');
new FgEmojiPicker({
    trigger:['.emoji'],
    position: ['top', 'right'],
    emit(obj, triggerElement) {
        let emoji = obj.emoji;
        triggerElement.innerText = emoji;
    }
});
